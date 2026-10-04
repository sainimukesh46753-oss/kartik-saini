"use client";

import { ArrowUpRight, Code2, Database, Globe2, Layers3, Mail, Menu, Monitor, Smartphone, Sparkles, X } from "lucide-react";
import { useState, FormEvent } from "react";

const services = [
  { icon: Globe2, title: "Web Development", text: "Modern, responsive websites engineered for speed, accessibility and real-world business goals." },
  { icon: Layers3, title: "Full-Stack Apps", text: "End-to-end products with polished interfaces, reliable APIs and production-ready architecture." },
  { icon: Smartphone, title: "Responsive Design", text: "Interfaces that feel natural on phones, tablets and desktops without compromising detail." },
  { icon: Database, title: "Backend & Data", text: "Secure databases, authentication and scalable data flows built around your product." },
];

function ProjectPreview({ title, index }: { title: string; index: number }) {
  const accent = "#c7ff4a";
  if (title === "Commerce Experience") {
    return (
      <svg viewBox="0 0 800 450" role="img" aria-label={title + " preview " + (index + 1)}>
        <rect width="800" height="450" fill="#f1eee6" />
        <rect x="34" y="30" width="732" height="54" rx="10" fill="#171717" />
        <circle cx="62" cy="57" r="7" fill="#f1eee6" /><rect x="92" y="48" width="170" height="18" rx="5" fill="#777" />
        <rect x="34" y="110" width={index === 0 ? 350 : 732} height="145" rx="16" fill="#d6d0c3" />
        {index === 0 ? <><rect x="404" y="110" width="362" height="145" rx="16" fill="#ded9cf" /><rect x="34" y="276" width="732" height="140" rx="16" fill="#171717" /><text x="58" y="160" fontFamily="Arial" fontSize="28" fill="#171717">PRODUCT DISCOVERY</text><text x="58" y="218" fontFamily="Arial" fontSize="18" fill="#555">Shop · Categories · Featured</text></> : <><rect x="54" y="130" width="210" height="95" rx="12" fill="#bbb4a7" /><rect x="284" y="130" width="210" height="95" rx="12" fill="#c6c0b4" /><rect x="514" y="130" width="210" height="95" rx="12" fill="#b3aca0" /><text x="58" y="330" fontFamily="Arial" fontSize="30" fill="#f1eee6">CART / CHECKOUT FLOW</text></>}
        <circle cx="720" cy="57" r="9" fill={accent} />
      </svg>
    );
  }
  if (title === "Workflow Dashboard") {
    return (
      <svg viewBox="0 0 800 450" role="img" aria-label={title + " preview " + (index + 1)}>
        <rect width="800" height="450" fill="#111315" />
        <rect x="24" y="24" width="170" height="402" rx="12" fill="#191c1f" />
        <rect x="214" y="24" width="562" height="68" rx="12" fill="#1b1e21" />
        <rect x="214" y="112" width="270" height="132" rx="12" fill="#202428" />
        <rect x="506" y="112" width="270" height="132" rx="12" fill="#202428" />
        <rect x="214" y="262" width="562" height="164" rx="12" fill="#181b1e" />
        {index === 0 ? <><text x="48" y="70" fontFamily="Arial" fontSize="22" fill="#f2f1ed">WORKSPACE</text><text x="238" y="152" fontFamily="Arial" fontSize="20" fill="#c7ff4a">ANALYTICS</text><polyline points="240,220 300,180 360,195 420,145 465,170" fill="none" stroke={accent} strokeWidth="5" /></> : <><text x="48" y="70" fontFamily="Arial" fontSize="22" fill="#f2f1ed">TASKS</text><rect x="240" y="145" width="220" height="12" rx="6" fill="#c7ff4a" /><rect x="240" y="175" width="170" height="12" rx="6" fill="#4b5156" /><rect x="240" y="205" width="245" height="12" rx="6" fill="#4b5156" /><text x="238" y="310" fontFamily="Arial" fontSize="24" fill="#f2f1ed">TEAM WORKFLOW</text></>}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 800 450" role="img" aria-label={title + " preview " + (index + 1)}>
      <rect width="800" height="450" fill="#e9e6de" />
      <rect x="30" y="30" width="740" height="390" rx="16" fill="#171717" />
      <text x="58" y="95" fontFamily="Arial" fontSize="20" fill="#c7ff4a">DIGITAL STUDIO</text>
      <text x="58" y="155" fontFamily="Arial" fontSize="48" fill="#f2f1ed">{index === 0 ? "MAKE IT MEMORABLE." : "DESIGN / BUILD / LAUNCH."}</text>
      <rect x="58" y="200" width={index === 0 ? 520 : 650} height="2" fill="#555" />
      <circle cx={index === 0 ? 650 : 150} cy="300" r="70" fill="#c7ff4a" />
      <rect x="58" y="350" width="230" height="18" rx="9" fill="#555" />
    </svg>
  );
}

const projects = [
  {
    "num": "01",
    "type": "E-COMMERCE",
    "title": "Commerce Platform",
    "text": "A responsive website with polished interactions and clear conversion paths for a commerce client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "02",
    "type": "E-COMMERCE",
    "title": "Commerce Experience",
    "text": "A modern product interface with reusable components and responsive layouts for a commerce client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "03",
    "type": "E-COMMERCE",
    "title": "Commerce Studio",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a commerce client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "04",
    "type": "E-COMMERCE",
    "title": "Commerce Dashboard",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a commerce client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "05",
    "type": "E-COMMERCE",
    "title": "Commerce Website",
    "text": "A production-ready interface designed around real user journeys and business goals for a commerce client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "06",
    "type": "E-COMMERCE",
    "title": "Commerce Launch",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a commerce client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "07",
    "type": "SAAS",
    "title": "SaaS Platform",
    "text": "A modern product interface with reusable components and responsive layouts for a saas client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "08",
    "type": "SAAS",
    "title": "SaaS Experience",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a saas client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "09",
    "type": "SAAS",
    "title": "SaaS Studio",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a saas client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "10",
    "type": "SAAS",
    "title": "SaaS Dashboard",
    "text": "A production-ready interface designed around real user journeys and business goals for a saas client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "11",
    "type": "SAAS",
    "title": "SaaS Website",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a saas client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "12",
    "type": "SAAS",
    "title": "SaaS Launch",
    "text": "A responsive website with polished interactions and clear conversion paths for a saas client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "13",
    "type": "BUSINESS",
    "title": "Business Platform",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a business client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "14",
    "type": "BUSINESS",
    "title": "Business Experience",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a business client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "15",
    "type": "BUSINESS",
    "title": "Business Studio",
    "text": "A production-ready interface designed around real user journeys and business goals for a business client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "16",
    "type": "BUSINESS",
    "title": "Business Dashboard",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a business client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "17",
    "type": "BUSINESS",
    "title": "Business Website",
    "text": "A responsive website with polished interactions and clear conversion paths for a business client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "18",
    "type": "BUSINESS",
    "title": "Business Launch",
    "text": "A modern product interface with reusable components and responsive layouts for a business client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "19",
    "type": "FINTECH",
    "title": "Fintech Platform",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a fintech client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "20",
    "type": "FINTECH",
    "title": "Fintech Experience",
    "text": "A production-ready interface designed around real user journeys and business goals for a fintech client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "21",
    "type": "FINTECH",
    "title": "Fintech Studio",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a fintech client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "22",
    "type": "FINTECH",
    "title": "Fintech Dashboard",
    "text": "A responsive website with polished interactions and clear conversion paths for a fintech client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "23",
    "type": "FINTECH",
    "title": "Fintech Website",
    "text": "A modern product interface with reusable components and responsive layouts for a fintech client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "24",
    "type": "FINTECH",
    "title": "Fintech Launch",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a fintech client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "25",
    "type": "HEALTH",
    "title": "Health Platform",
    "text": "A production-ready interface designed around real user journeys and business goals for a health client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "26",
    "type": "HEALTH",
    "title": "Health Experience",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a health client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "27",
    "type": "HEALTH",
    "title": "Health Studio",
    "text": "A responsive website with polished interactions and clear conversion paths for a health client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "28",
    "type": "HEALTH",
    "title": "Health Dashboard",
    "text": "A modern product interface with reusable components and responsive layouts for a health client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "29",
    "type": "HEALTH",
    "title": "Health Website",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a health client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "30",
    "type": "HEALTH",
    "title": "Health Launch",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a health client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "31",
    "type": "EDUCATION",
    "title": "Education Platform",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a education client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "32",
    "type": "EDUCATION",
    "title": "Education Experience",
    "text": "A responsive website with polished interactions and clear conversion paths for a education client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "33",
    "type": "EDUCATION",
    "title": "Education Studio",
    "text": "A modern product interface with reusable components and responsive layouts for a education client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "34",
    "type": "EDUCATION",
    "title": "Education Dashboard",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a education client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "35",
    "type": "EDUCATION",
    "title": "Education Website",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a education client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "36",
    "type": "EDUCATION",
    "title": "Education Launch",
    "text": "A production-ready interface designed around real user journeys and business goals for a education client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "37",
    "type": "REAL ESTATE",
    "title": "Property Platform",
    "text": "A responsive website with polished interactions and clear conversion paths for a property client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "38",
    "type": "REAL ESTATE",
    "title": "Property Experience",
    "text": "A modern product interface with reusable components and responsive layouts for a property client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "39",
    "type": "REAL ESTATE",
    "title": "Property Studio",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a property client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "40",
    "type": "REAL ESTATE",
    "title": "Property Dashboard",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a property client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "41",
    "type": "REAL ESTATE",
    "title": "Property Website",
    "text": "A production-ready interface designed around real user journeys and business goals for a property client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "42",
    "type": "REAL ESTATE",
    "title": "Property Launch",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a property client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "43",
    "type": "RESTAURANT",
    "title": "Hospitality Platform",
    "text": "A modern product interface with reusable components and responsive layouts for a hospitality client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "44",
    "type": "RESTAURANT",
    "title": "Hospitality Experience",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a hospitality client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "45",
    "type": "RESTAURANT",
    "title": "Hospitality Studio",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a hospitality client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "46",
    "type": "RESTAURANT",
    "title": "Hospitality Dashboard",
    "text": "A production-ready interface designed around real user journeys and business goals for a hospitality client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "47",
    "type": "RESTAURANT",
    "title": "Hospitality Website",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a hospitality client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "48",
    "type": "RESTAURANT",
    "title": "Hospitality Launch",
    "text": "A responsive website with polished interactions and clear conversion paths for a hospitality client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "49",
    "type": "CREATIVE",
    "title": "Creative Platform",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a creative client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "50",
    "type": "CREATIVE",
    "title": "Creative Experience",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a creative client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "51",
    "type": "CREATIVE",
    "title": "Creative Studio",
    "text": "A production-ready interface designed around real user journeys and business goals for a creative client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "52",
    "type": "CREATIVE",
    "title": "Creative Dashboard",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a creative client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "53",
    "type": "CREATIVE",
    "title": "Creative Website",
    "text": "A responsive website with polished interactions and clear conversion paths for a creative client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "54",
    "type": "CREATIVE",
    "title": "Creative Launch",
    "text": "A modern product interface with reusable components and responsive layouts for a creative client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "55",
    "type": "STARTUP",
    "title": "Startup Platform",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a startup client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "56",
    "type": "STARTUP",
    "title": "Startup Experience",
    "text": "A production-ready interface designed around real user journeys and business goals for a startup client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "57",
    "type": "STARTUP",
    "title": "Startup Studio",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a startup client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "58",
    "type": "STARTUP",
    "title": "Startup Dashboard",
    "text": "A responsive website with polished interactions and clear conversion paths for a startup client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "59",
    "type": "STARTUP",
    "title": "Startup Website",
    "text": "A modern product interface with reusable components and responsive layouts for a startup client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "60",
    "type": "STARTUP",
    "title": "Startup Launch",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a startup client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "61",
    "type": "MARKETING",
    "title": "Marketing Platform",
    "text": "A production-ready interface designed around real user journeys and business goals for a marketing client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "62",
    "type": "MARKETING",
    "title": "Marketing Experience",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a marketing client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "63",
    "type": "MARKETING",
    "title": "Marketing Studio",
    "text": "A responsive website with polished interactions and clear conversion paths for a marketing client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "64",
    "type": "MARKETING",
    "title": "Marketing Dashboard",
    "text": "A modern product interface with reusable components and responsive layouts for a marketing client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "65",
    "type": "MARKETING",
    "title": "Marketing Website",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a marketing client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "66",
    "type": "MARKETING",
    "title": "Marketing Launch",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a marketing client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "67",
    "type": "DASHBOARD",
    "title": "Dashboard Platform",
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system for a dashboard client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "68",
    "type": "DASHBOARD",
    "title": "Dashboard Experience",
    "text": "A responsive website with polished interactions and clear conversion paths for a dashboard client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  },
  {
    "num": "69",
    "type": "DASHBOARD",
    "title": "Dashboard Studio",
    "text": "A modern product interface with reusable components and responsive layouts for a dashboard client.",
    "tags": [
      "Next.js",
      "UI/UX",
      "Vercel"
    ]
  },
  {
    "num": "70",
    "type": "DASHBOARD",
    "title": "Dashboard Dashboard",
    "text": "A high-performance experience focused on speed, clarity and mobile usability for a dashboard client.",
    "tags": [
      "React",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    "num": "71",
    "type": "DASHBOARD",
    "title": "Dashboard Website",
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX for a dashboard client.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "num": "72",
    "type": "DASHBOARD",
    "title": "Dashboard Launch",
    "text": "A production-ready interface designed around real user journeys and business goals for a dashboard client.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL"
    ]
  }
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(null);
  const [formError, setFormError] = useState("");
  const [selected, setSelected] = useState<{type: "service" | "project" | "technology"; title: string} | null>(null);

  const serviceDetails: Record<string, { intro: string; items: string[] }> = {
    "Web Development": { intro: "Complete modern websites built for real businesses, portfolios and brands.", items: ["Responsive pages for mobile, tablet and desktop", "SEO-friendly Next.js structure", "Fast loading and accessible UI", "Deployment and production setup"] },
    "Full-Stack Apps": { intro: "End-to-end applications with frontend, backend and database functionality.", items: ["Authentication and user flows", "API and database integration", "Dashboards and business workflows", "Production-ready architecture"] },
    "Responsive Design": { intro: "Interfaces that look and feel right on every screen size.", items: ["Mobile-first layouts", "Clean reusable components", "Interactive states and animations", "Cross-device UI polish"] },
    "Backend & Data": { intro: "Reliable data systems that power secure and scalable products.", items: ["Supabase/PostgreSQL database setup", "Secure row-level access", "Data models and queries", "Backend integrations and APIs"] },
  };

  const projectDetails: Record<string, { intro: string; items: string[] }> = {
    "Commerce Experience": { intro: "A complete e-commerce experience focused on product discovery and conversion.", items: ["Product catalogue and categories", "Cart and checkout-ready flows", "Supabase data integration", "Responsive premium storefront"] },
    "Workflow Dashboard": { intro: "A SaaS dashboard designed to make daily business workflows simple and clear.", items: ["Dashboard and analytics screens", "User and role-based flows", "API and PostgreSQL integration", "Responsive workspace UI"] },
    "Digital Studio": { intro: "A polished business website built around strong branding and storytelling.", items: ["High-impact landing sections", "Service and project presentation", "Responsive design system", "Vercel-ready deployment"] },
  };

  const processDetails: Record<string, { intro: string; items: string[] }> = {
    "DISCOVER": { intro: "We start by understanding the product before writing code.", items: ["Goals and business requirements", "Target users and their needs", "Technical constraints", "Clear project direction"] },
    "DESIGN": { intro: "We turn the direction into a clear and usable experience.", items: ["Information architecture", "Page and component structure", "Interaction flows", "Visual direction and UI polish"] },
    "BUILD": { intro: "We turn the approved direction into a responsive working product.", items: ["Clean maintainable code", "API and database integrations", "Responsive implementation", "Testing and interaction polish"] },
    "LAUNCH": { intro: "We prepare the product for real users and future growth.", items: ["Final testing and fixes", "Production deployment", "Performance checks", "Handover and next-step planning"] },
  };

  const technologyDetails: Record<string, { intro: string; items: string[] }> = {
    "Next.js": { intro: "A React framework for production-ready web applications.", items: ["App Router and modern routing", "Fast page rendering and optimization", "SEO-friendly structure", "Vercel deployment workflow"] },
    "React": { intro: "Component-based UI development for interactive products.", items: ["Reusable components", "State-driven interfaces", "Interactive UI patterns", "Scalable frontend architecture"] },
    "TypeScript": { intro: "Type-safe JavaScript for safer, maintainable applications.", items: ["Typed components and data", "Safer API integration", "Better refactoring", "Developer-friendly codebase"] },
    "JavaScript": { intro: "The core language powering interactive web experiences.", items: ["Modern ES features", "Browser interactions", "Async application logic", "Dynamic user experiences"] },
    "Node.js": { intro: "Server-side JavaScript for APIs and backend services.", items: ["API development", "Server-side logic", "Database integrations", "Production backend workflows"] },
    "Supabase": { intro: "A practical backend platform for database, auth and APIs.", items: ["PostgreSQL database", "Authentication", "Row Level Security", "Realtime and API-ready data"] },
    "PostgreSQL": { intro: "A powerful relational database for structured product data.", items: ["Relational data models", "SQL queries", "Indexes and constraints", "Reliable data storage"] },
    "Vercel": { intro: "Modern deployment and hosting for web applications.", items: ["Git-based deployments", "Preview environments", "Production hosting", "Performance-focused delivery"] },
    "Git & GitHub": { intro: "Version control and collaboration for reliable development.", items: ["Git workflow", "Branching and commits", "Repository management", "Deployment integrations"] },
    "Responsive UI": { intro: "Interfaces designed to work smoothly across screen sizes.", items: ["Mobile-first layouts", "Tablet and desktop support", "Flexible components", "Cross-device testing"] },
    "REST APIs": { intro: "Structured APIs that connect interfaces with backend services.", items: ["HTTP endpoints", "Request and response handling", "CRUD operations", "Frontend-backend integration"] },
    "UI/UX": { intro: "User-focused interface design that makes products clear and easy to use.", items: ["Information hierarchy", "Interaction design", "Visual consistency", "Usability-focused polish"] },
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    setFormError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setFormError(result?.error || "Unable to send your message.");
        setFormStatus("error");
        return;
      }

      form.reset();
      setFormStatus("success");
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Unexpected error");
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home"><span className="brand-mark">&lt;/&gt;</span><span>KARTIK<span className="muted">.DEV</span></span></a>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {["Home","Services","Skills","Work","About","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}
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
          <div className="trusted"><span>STACK I WORK WITH</span><b>Next.js</b><b>TypeScript</b><b>Supabase</b><b>Vercel</b><b>UI/UX</b><b>GRAPHICS</b></div>
          <a className="offer-strip" href="#contact"><strong>10% OFF</strong><span>First-time clients get 10% off their first project</span><ArrowUpRight size={16}/></a>
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
        <div className="service-grid">{services.map(({icon:Icon,title,text},i)=><article className="service" key={title}><span className="service-num">0{i+1}</span><Icon size={28}/><h3>{title}</h3><p>{text}</p><button type="button" className="service-link" onClick={() => setSelected({ type: "service", title })}>Explore service <ArrowUpRight size={15}/></button></article>)}</div>
      </section>

      <section className="section offer-section"><div className="offer-card"><div><span className="kicker">FIRST PROJECT OFFER</span><h2>Save <em>10%</em> on your first project.</h2><p>New clients receive 10% off their first web development or graphic design project. Tell me what you need and I’ll help shape the scope.</p></div><a className="button primary" href="#contact">Claim the offer <ArrowUpRight size={17}/></a></div></section>

      <section id="skills" className="section skills"><div className="section-head"><div><span className="kicker">02 — TECHNOLOGY</span><h2>Tools that turn ideas into <em>products.</em></h2></div><p>Modern technologies chosen for performance, maintainability and a smooth developer experience.</p></div><div className="skill-grid">{["Next.js","React","TypeScript","JavaScript","Node.js","Supabase","PostgreSQL","Vercel","Git & GitHub","Responsive UI","REST APIs","UI/UX"].map((skill,i)=><button type="button" className="skill" key={skill} onClick={() => setSelected({ type: "technology", title: skill })}><span>0{(i%9)+1}</span><strong>{skill}</strong><ArrowUpRight size={16}/></button>)}</div></section>

      <section className="section graphics"><div className="section-head"><div><span className="kicker">03 — GRAPHIC DESIGN</span><h2>Design that makes the <em>brand stick.</em></h2></div><p>Alongside development, Kartik creates visual identities, social creatives, marketing graphics and brand systems that make digital products feel complete.</p></div><div className="graphic-grid"><div className="graphic-card" key="Brand Identity"><span>01</span><strong>Brand Identity</strong><small>STRATEGY · VISUAL · DELIVERY</small></div><div className="graphic-card" key="Logo Systems"><span>02</span><strong>Logo Systems</strong><small>STRATEGY · VISUAL · DELIVERY</small></div><div className="graphic-card" key="Social Media Creatives"><span>03</span><strong>Social Media Creatives</strong><small>STRATEGY · VISUAL · DELIVERY</small></div><div className="graphic-card" key="Posters & Campaigns"><span>04</span><strong>Posters & Campaigns</strong><small>STRATEGY · VISUAL · DELIVERY</small></div><div className="graphic-card" key="Presentation Design"><span>05</span><strong>Presentation Design</strong><small>STRATEGY · VISUAL · DELIVERY</small></div><div className="graphic-card" key="Ad Creatives"><span>06</span><strong>Ad Creatives</strong><small>STRATEGY · VISUAL · DELIVERY</small></div><div className="graphic-card" key="Thumbnails"><span>07</span><strong>Thumbnails</strong><small>STRATEGY · VISUAL · DELIVERY</small></div><div className="graphic-card" key="Packaging Concepts"><span>08</span><strong>Packaging Concepts</strong><small>STRATEGY · VISUAL · DELIVERY</small></div></div></section>

      <section id="work" className="section work">
        <div className="section-head"><div><span className="kicker">03 — SELECTED WORK</span><h2>Built with purpose, <em>not noise.</em></h2></div><a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16}/></a></div>
        <div className="project-count"><strong>{projects.length}+</strong><span>PROJECT CONCEPTS & BUILDS</span><p>Explore a broad mix of e-commerce, SaaS, business, fintech, health, education, property, hospitality, creative and startup work.</p></div><div className="project-list">{projects.map((p, projectIndex)=><article className="project" key={p.num}><div className="project-number">{p.num}</div><div className="project-info"><span className="kicker">{p.type}</span><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><button type="button" className="project-visual project-button" onClick={() => setSelected({ type: "project", title: p.title })} aria-label={"Open " + p.title}><ProjectPreview title={p.title} index={projectIndex % 2} /><span className="project-view-label">VIEW PROJECT <ArrowUpRight size={18}/></span></button></article>)}</div>
      </section>

      <section id="about" className="section about">
        <div className="about-mark">KS<span>.</span></div>
        <div><span className="kicker">04 — ABOUT KARTIK</span><h2>Technical thinking.<br/><em>Human results.</em></h2><p className="about-text">I believe good software sits at the intersection of engineering, design and empathy. My approach is simple: understand the problem, remove unnecessary complexity and build something people can confidently use.</p><div className="stats"><div><strong>01</strong><span>Curious by default</span></div><div><strong>02</strong><span>Detail obsessed</span></div><div><strong>03</strong><span>Always learning</span></div></div></div>
      </section>

      <section className="process section"><div className="section-head"><div><span className="kicker">05 — PROCESS</span><h2>Simple process.<br/><em>Serious results.</em></h2></div></div><div className="process-grid">{[["01","DISCOVER","Goals, users, constraints and the real problem."],["02","DESIGN","Structure, interactions and a visual direction."],["03","BUILD","Clean code, integrations and responsive polish."],["04","LAUNCH","Testing, deployment and a product ready to grow."]].map(x=><button type="button" className="step" key={x[0]} onClick={() => setSelected({ type: "technology", title: x[1] })}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p><span className="step-action">VIEW DETAILS <ArrowUpRight size={14}/></span></button>)}</div></section>

      <section className="section final-cta"><div><span className="kicker">07 — READY WHEN YOU ARE</span><h2>Build something people<br/><em>remember.</em></h2><p>Web development, UI/UX and graphic design — brought together under one roof.</p></div><a className="button primary" href="#contact">Start with 10% off <ArrowUpRight size={17}/></a></section>

      <section id="contact" className="contact section"><div className="contact-inner"><span className="kicker">06 — GET IN TOUCH</span><h2>Have an idea?<br/><em>Let&apos;s make it real.</em></h2><p>Tell me a little about what you&apos;re building. Your message will be securely saved and delivered to the private admin inbox.</p><div className="contact-grid"><form className="contact-form" onSubmit={handleSubmit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Project details<textarea name="message" required rows={5} placeholder="Tell me what you want to build..." /></label><button className="button contact-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send enquiry"} {!isSubmitting && <ArrowUpRight size={17}/>}</button>{formStatus === "success" && <div className="form-status success">Message sent successfully. I&apos;ll get back to you soon.</div>}{formStatus === "error" && <div className="form-status error">Something went wrong: {formError || "Please try again."}</div>}</form><div className="contact-side"><span className="contact-label">DIRECT EMAIL</span><a className="contact-mail" href="mailto:sainimukesh46753@gmail.com">sainimukesh46753@gmail.com <ArrowUpRight/></a><span className="contact-label">SOCIAL</span><div className="social-links"><a href="https://github.com/sainimukesh46753-oss/kartik-saini" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a><a href="https://wa.me/917048934876" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14}/></a></div><div className="contact-note">WhatsApp: +91 70489 34876</div></div></div><div className="contact-bottom"><span>WEB DEVELOPMENT · UI/UX · SOFTWARE</span><span>BASED IN INDIA · WORKING WORLDWIDE</span></div></div></section>

      {selected && (
        <div className="details-overlay" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
          <div className="details-modal" onClick={(e) => e.stopPropagation()}>
            <button className="details-close" type="button" onClick={() => setSelected(null)} aria-label="Close"><X size={20}/></button>
            <span className="kicker">{selected.type === "service" ? "SERVICE DETAILS" : selected.type === "technology" ? "TECHNOLOGY DETAILS" : "PROJECT DETAILS"}</span>
            <h2>{selected.title}</h2>
            <div className="details-visual"><div className="details-grid"/><Code2 size={42}/><span>{selected.type === "service" ? "SERVICE" : selected.type === "technology" ? "TECHNOLOGY" : "PROJECT"} / 2026</span></div>
            {selected.type === "project" && <div className="details-gallery">{[0, 1].map((i) => <div className="project-preview" key={i}><ProjectPreview title={selected.title} index={i} /></div>)}</div>}
            <p>{selected.type === "service" ? serviceDetails[selected.title]?.intro : selected.type === "technology" ? (technologyDetails[selected.title]?.intro || processDetails[selected.title]?.intro) : projectDetails[selected.title]?.intro}</p>
            <div className="details-items">
              {(selected.type === "service" ? serviceDetails[selected.title]?.items : selected.type === "technology" ? (technologyDetails[selected.title]?.items || processDetails[selected.title]?.items) : projectDetails[selected.title]?.items)?.map((item, i) => (
                <div className="details-item" key={item}><b>0{i + 1}</b><span>{item}</span><ArrowUpRight size={15}/></div>
              ))}
            </div>
            <button type="button" className="button primary details-cta" onClick={() => { setSelected(null); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>Start this project <ArrowUpRight size={17}/></button>
          </div>
        </div>
      )}

      <footer><div className="brand"><span className="brand-mark">&lt;/&gt;</span><span>KARTIK<span className="muted">.DEV</span></span></div><span>© {new Date().getFullYear()} Kartik Saini. Built with care.</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}

.offer-strip{margin-top:28px;display:inline-flex;align-items:center;gap:12px;border:1px solid #38431e;background:#12170d;padding:12px 15px;color:#dce8bd;font-size:11px}.offer-strip strong{color:var(--accent);font:700 12px "DM Mono"}.offer-strip span{color:#aab58c}.offer-strip:hover{border-color:var(--accent)}
.offer-section{padding-top:50px;padding-bottom:30px}.offer-card{border:1px solid #39451d;background:linear-gradient(100deg,#11150d,#151a10);padding:32px 36px;display:flex;justify-content:space-between;align-items:center;gap:30px}.offer-card h2{margin:10px 0;font-size:clamp(30px,4vw,50px)}.offer-card p{color:#8d9690;line-height:1.7;max-width:650px;font-size:13px}.offer-card h2 em{color:var(--accent);font-style:normal}
.graphics{border-top:1px solid var(--line)}.graphic-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.graphic-card{min-height:180px;padding:22px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(145deg,#101214,#0c0d0e);position:relative;overflow:hidden}.graphic-card:before{content:"";position:absolute;width:90px;height:90px;border-radius:50%;background:var(--accent);right:-25px;top:-25px;opacity:.08}.graphic-card span{position:absolute;top:18px;left:20px;color:#62676a;font:9px "DM Mono"}.graphic-card strong{font-size:17px}.graphic-card small{color:#6f7477;font:9px "DM Mono";margin-top:8px}.graphic-card:hover{background:#141719}.graphic-card:hover strong{color:var(--accent)}
.project-count{display:flex;align-items:baseline;gap:14px;border:1px solid var(--line);padding:20px 22px;margin-bottom:18px;background:#0d0f10}.project-count strong{font:700 34px "DM Mono";color:var(--accent)}.project-count span{font:10px "DM Mono";color:#888}.project-count p{margin-left:auto;max-width:420px;color:#6f7578;font-size:11px;line-height:1.6}
.final-cta{border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:end;gap:40px}.final-cta p{color:#83888b;max-width:500px;line-height:1.7}.final-cta h2{font-size:clamp(42px,5.5vw,72px);margin:15px 0;line-height:1;letter-spacing:-.06em}.final-cta h2 em{color:var(--accent);font-style:normal}
@media(max-width:900px){.graphic-grid{grid-template-columns:repeat(2,1fr)}.offer-card,.final-cta{display:block}.offer-card .button,.final-cta .button{margin-top:18px}.project-count{display:block}.project-count p{margin:10px 0 0}}
@media(max-width:560px){.graphic-grid{grid-template-columns:1fr}.offer-card{padding:25px 20px}.offer-strip{width:100%}.project-count strong{font-size:28px}}
