import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:"32px",background:"#0B0D12",color:"#F4F7FB",fontFamily:"Arial, sans-serif"}}>
      <section style={{maxWidth:720,textAlign:"center"}}>
        <p style={{letterSpacing:".16em",fontSize:12,color:"#BFB7FF"}}>404 · PAGE NOT FOUND</p>
        <h1 style={{fontSize:"clamp(48px,9vw,96px)",lineHeight:.95,margin:"18px 0"}}>Let&apos;s get you back.</h1>
        <p style={{color:"#98A2B3",lineHeight:1.7}}>This page doesn&apos;t exist, but the next project could.</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginTop:28}}>
          <Link href="/" style={{padding:"13px 18px",background:"#7657FF",color:"#fff",textDecoration:"none"}}>Back home ↗</Link>
          <Link href="/#contact" style={{padding:"13px 18px",border:"1px solid #7657FF",color:"#fff",textDecoration:"none"}}>Start a project ↗</Link>
        </div>
      </section>
    </main>
  );
}