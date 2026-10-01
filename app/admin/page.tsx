"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, LogOut, RefreshCw } from "lucide-react";
import { supabase } from "../../lib/supabase";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function AdminMessagesPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [signingIn, setSigningIn] = useState(false);
  const [error, setError] = useState("");

  const loadMessages = async () => {
    setLoading(true);
    setError("");

    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      setUserEmail(null);
      setLoading(false);
      return;
    }

    setUserEmail(userData.user.email ?? null);

    const { data, error: fetchError } = await supabase
      .from("contact_messages")
      .select("id, name, email, message, created_at")
      .order("created_at", { ascending: false });

    if (fetchError) {
      setError("You are signed in, but you do not have admin access.");
      setMessages([]);
    } else {
      setMessages(data ?? []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadMessages();
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      loadMessages();
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSigningIn(true);
    setError("");

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (loginError) {
      setError("Invalid email or password.");
    } else {
      setEmail("");
      setPassword("");
      await loadMessages();
    }

    setSigningIn(false);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setMessages([]);
    setUserEmail(null);
  };

  if (!userEmail) {
    return (
      <main className="admin-shell">
        <div className="admin-login">
          <a className="admin-back" href="/"><ArrowLeft size={16}/> Back to portfolio</a>
          <span className="kicker">KARTIK.DEV — PRIVATE AREA</span>
          <h1>Admin <em>Messages</em></h1>
          <p>Sign in to view enquiries submitted through the portfolio contact form.</p>
          <form className="admin-form" onSubmit={handleLogin}>
            <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Admin email" /></label>
            <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" /></label>
            {error && <div className="admin-error">{error}</div>}
            <button className="admin-button" disabled={signingIn}>{signingIn ? "Signing in..." : "Sign in"}</button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <div className="admin-page">
        <header className="admin-header">
          <div>
            <span className="kicker">06 — PRIVATE INBOX</span>
            <h1>Project <em>Messages</em></h1>
            <p>Messages submitted through your portfolio.</p>
          </div>
          <div className="admin-actions">
            <button onClick={loadMessages} className="admin-icon-button" title="Refresh"><RefreshCw size={17}/></button>
            <button onClick={signOut} className="admin-icon-button" title="Sign out"><LogOut size={17}/></button>
          </div>
        </header>

        <div className="admin-meta">
          <span>{messages.length} {messages.length === 1 ? "message" : "messages"}</span>
          <span>Signed in as {userEmail}</span>
        </div>

        {error && <div className="admin-error">{error}</div>}

        {loading ? (
          <div className="admin-empty">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="admin-empty">No messages yet. New contact enquiries will appear here.</div>
        ) : (
          <div className="message-list">
            {messages.map((item) => (
              <article className="message-card" key={item.id}>
                <div className="message-top">
                  <div>
                    <h2>{item.name}</h2>
                    <a href={"mailto:" + item.email}>{item.email}</a>
                  </div>
                  <time>{new Date(item.created_at).toLocaleString("en-IN")}</time>
                </div>
                <p>{item.message}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
