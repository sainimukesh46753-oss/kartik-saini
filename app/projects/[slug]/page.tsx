import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projectInfo: Record<string, { title: string; type: string; description: string }> = {
  "01": { title: "Commerce Platform", type: "E-COMMERCE", description: "A responsive commerce concept focused on clear product discovery, conversion and a polished mobile experience." },
  "02": { title: "Commerce Experience", type: "E-COMMERCE", description: "A modern commerce interface with reusable components, responsive layouts and a strong visual system." },
  "03": { title: "Commerce Studio", type: "E-COMMERCE", description: "A high-performance storefront concept designed around speed, clarity and usability." },
  "04": { title: "Commerce Dashboard", type: "E-COMMERCE", description: "A practical commerce dashboard concept combining strong visual hierarchy with useful workflows." },
  "05": { title: "Commerce Website", type: "E-COMMERCE", description: "A production-ready website concept built around real user journeys and business goals." },
  "06": { title: "Commerce Launch", type: "E-COMMERCE", description: "A clean, scalable commerce launch concept with a premium visual direction." },
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectInfo[slug] ?? {
    title: `Project ${slug}`,
    type: "SELECTED WORK",
    description: "A selected Kartik Saini project concept focused on responsive UI, thoughtful UX and production-ready development."
  };

  return (
    <main style={{ minHeight: "100vh", padding: "80px 6vw", background: "#0B0D12", color: "#F4F7FB" }}>
      <a href="/#work" style={{ display: "inline-flex", gap: 8, alignItems: "center", color: "#98A2B3", textDecoration: "none" }}>
        <ArrowLeft size={16} /> Back to work
      </a>
      <div style={{ maxWidth: 900, marginTop: 80 }}>
        <span style={{ color: "#7657FF", letterSpacing: ".12em", fontSize: 12 }}>{project.type} · 2026</span>
        <h1 style={{ fontSize: "clamp(44px, 8vw, 88px)", lineHeight: .95, margin: "18px 0 28px" }}>{project.title}</h1>
        <p style={{ maxWidth: 680, color: "#98A2B3", fontSize: 20, lineHeight: 1.6 }}>{project.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 36 }}>
          {["Next.js", "TypeScript", "Supabase", "Responsive UI"].map((x) => (
            <span key={x} style={{ border: "1px solid #252A35", borderRadius: 999, padding: "10px 14px", color: "#F4F7FB" }}>{x}</span>
          ))}
        </div>
        <a href="/#contact" style={{ display: "inline-flex", gap: 8, alignItems: "center", marginTop: 48, padding: "14px 20px", borderRadius: 999, background: "#7657FF", color: "#fff", textDecoration: "none", fontWeight: 700 }}>
          Discuss a similar project <ArrowUpRight size={17} />
        </a>
      </div>
    </main>
  );
}
