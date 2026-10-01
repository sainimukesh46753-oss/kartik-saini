"use client";

import { ArrowUpRight, Code2, Database, Globe2, Layers3, Mail, Menu, Monitor, Smartphone, Sparkles, X } from "lucide-react";
import { useState, FormEvent } from "react";

const services = [
  { icon: Globe2, title: "Web Development", text: "Modern, responsive websites engineered for speed, accessibility and real-world business goals." },
  { icon: Layers3, title: "Full-Stack Apps", text: "End-to-end products with polished interfaces, reliable APIs and production-ready architecture." },
  { icon: Smartphone, title: "Responsive Design", text: "Interfaces that feel natural on phones, tablets and desktops without compromising detail." },
  { icon: Database, title: "Backend & Data", text: "Secure databases, authentication and scalable data flows built around your product." },
];

const projects = [
  { num:"01", type:"E-COMMERCE", title:"Commerce Experience", text:"A conversion-focused storefront with product discovery, cart flows and a clean premium UI.", tags:["Next.js","TypeScript","Supabase"] },
  { num:"02", type:"SAAS PLATFORM", title:"Workflow Dashboard", text:"A focused SaaS dashboard designed around clear information hierarchy and fast daily workflows.", tags:["React","API","PostgreSQL"] },
  { num:"03", type:"BUSINESS WEBSITE", title:"Digital Studio", text:"A high-impact brand presence combining editorial typography, subtle motion and strong storytelling.", tags:["Next.js","UI/UX","Vercel"] },
];

export default function Home() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    window.location.href = `mailto:hello@kartik.dev?subject=${encodeURIComponent(`Project enquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\\nEmail: ${email}\\n\\n${message}`)}`;
  };
  const [open, setOpen] = useState(false);
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home"><span className="brand-mark">&lt;/&gt;</span><span>KARTIK<span className="muted">.DEV</span></span></a>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {["Home","Services","Work","About","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={16}/></a>
        <button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
      </header>

      <section id="home" className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot"/> AVAILABLE FOR SELECT PROJECTS</div>
          <h1>I build <em>digital products</em> people enjoy using.</h1>
          <p className="lead">Kartik Saini is a web developer focused on crafting fast, thoughtful and scalable experiences for ambitious businesses and modern brands.</p>
          <div className="actions"><a className="button primary" href="#work">View my work <ArrowUpRight size={17}/></a><a className="button secondary" href="#contact">Start a project</a></div>
          <div className="trusted"><span>STACK I WORK WITH</span><b>Next.js</b><b>TypeScript</b><b>Supabase</b><b>Vercel</b></div>
        </div>
        <div className="hero-card">
          <div className="grid-bg"/>
          <div className="code-window">
            <div className="window-top"><span/><span/><span/><label>developer.tsx</label></div>
            <pre>{`const developer = {
  name: "Kartik Saini",
  role: "Web Developer",
  focus: [
    "Clean interfaces",
    "Scalable systems",
    "Great UX"
  ],
  status: "building"
};`}</pre>
            <div className="status"><i/> currently building <strong>something useful</strong></div>
          </div>
          <div className="float-badge"><Code2 size={17}/><span>Clean code.<br/><b>Better products.</b></span></div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="section-head"><div><span className="kicker">01 — SERVICES</span><h2>From idea to <em>interface.</em></h2></div><p>Everything needed to turn a digital idea into a product that looks sharp and works beautifully.</p></div>
        <div className="service-grid">{services.map(({icon:Icon,title,text},i)=><article className="service" key={title}><span className="service-num">0{i+1}</span><Icon size={28}/><h3>{title}</h3><p>{text}</p><a href="#contact">Explore service <ArrowUpRight size={15}/></a></article>)}</div>
      </section>

      <section id="skills" className="section skills"><div className="section-head"><div><span className="kicker">02 — TECHNOLOGY</span><h2>Tools that turn ideas into <em>products.</em></h2></div><p>Modern technologies chosen for performance, maintainability and a smooth developer experience.</p></div><div className="skill-grid">{["Next.js","React","TypeScript","JavaScript","Node.js","Supabase","PostgreSQL","Vercel","Git & GitHub","Responsive UI","REST APIs","UI/UX"].map((skill,i)=><div className="skill" key={skill}><span>0{(i%9)+1}</span><strong>{skill}</strong><ArrowUpRight size={16}/></div>)}</div></section>\n\n      <section id="work" className="section work">
        <div className="section-head"><div><span className="kicker">02 — SELECTED WORK</span><h2>Built with purpose, <em>not noise.</em></h2></div><a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16}/></a></div>
        <div className="project-list">{projects.map(p=><article className="project" key={p.num}><div className="project-number">{p.num}</div><div className="project-info"><span className="kicker">{p.type}</span><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><div className="project-visual"><div className="visual-lines"/><span>VIEW PROJECT <ArrowUpRight size={18}/></span></div></article>)}</div>
      </section>

      <section id="about" className="section about">
        <div className="about-mark">KS<span>.</span></div>
        <div><span className="kicker">03 — ABOUT KARTIK</span><h2>Technical thinking.<br/><em>Human results.</em></h2><p className="about-text">I believe good software sits at the intersection of engineering, design and empathy. My approach is simple: understand the problem, remove unnecessary complexity and build something people can confidently use.</p><div className="stats"><div><strong>01</strong><span>Curious by default</span></div><div><strong>02</strong><span>Detail obsessed</span></div><div><strong>03</strong><span>Always learning</span></div></div></div>
      </section>

      <section className="process section"><div className="section-head"><div><span className="kicker">04 — PROCESS</span><h2>Simple process.<br/><em>Serious results.</em></h2></div></div><div className="process-grid">{[["01","DISCOVER","Goals, users, constraints and the real problem."],["02","DESIGN","Structure, interactions and a visual direction."],["03","BUILD","Clean code, integrations and responsive polish."],["04","LAUNCH","Testing, deployment and a product ready to grow."]].map(x=><div className="step" key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>

      <section id="contact" className="contact section"><div className="contact-inner"><span className="kicker">05 — GET IN TOUCH</span><h2>Have an idea?<br/><em>Let&apos;s make it real.</em></h2><p>Tell me a little about what you&apos;re building. Send a message and your email app will open with the enquiry ready to send.</p><div className="contact-grid"><form className="contact-form" onSubmit={handleSubmit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Project details<textarea name="message" required rows={5} placeholder="Tell me what you want to build..." /></label><button className="button contact-submit" type="submit">Send enquiry <ArrowUpRight size={17}/></button></form><div className="contact-side"><span className="contact-label">DIRECT EMAIL</span><a className="contact-mail" href="mailto:hello@kartik.dev">hello@kartik.dev <ArrowUpRight/></a><span className="contact-label">SOCIAL</span><div className="social-links"><a href="https://github.com/sainimukesh46753-oss/kartik-saini" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a><a href="#home">LinkedIn <ArrowUpRight size={14}/></a></div><div className="contact-note">WhatsApp can be connected as soon as the business number is provided.</div></div></div><div className="contact-bottom"><span>WEB DEVELOPMENT · UI/UX · SOFTWARE</span><span>BASED IN INDIA · WORKING WORLDWIDE</span></div></div></section>

      <footer><div className="brand"><span className="brand-mark">&lt;/&gt;</span><span>KARTIK<span className="muted">.DEV</span></span></div><span>© {new Date().getFullYear()} Kartik Saini. Built with care.</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}