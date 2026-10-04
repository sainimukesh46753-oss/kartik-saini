// @ts-nocheck
"use client";

import { ArrowUpRight, Code2, Database, Globe2, Layers3, Mail, Menu, Monitor, Smartphone, Sparkles, X } from "lucide-react";
import { useEffect, useState, FormEvent } from "react";


useEffect(() => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }, { once: true });
  }
}, []);

const services = [
  { icon: Globe2, title: "Web Development", text: "Modern, responsive websites engineered for speed, accessibility and real-world business goals." },
  { icon: Layers3, title: "Full-Stack Apps", text: "End-to-end products with polished interfaces, reliable APIs and production-ready architecture." },
  { icon: Smartphone, title: "Responsive Design", text: "Interfaces that feel natural on phones, tablets and desktops without compromising detail." },
  { icon: Database, title: "Backend & Data", text: "Secure databases, authentication and scalable data flows built around your product." },
];

const projectVisuals: Record<string, string> = {
  "E-COMMERCE":"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  "SAAS":"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
  "BUSINESS":"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  "FINTECH":"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  "HEALTH":"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
  "EDUCATION":"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
  "PROPERTY":"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  "REAL ESTATE":"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  "RESTAURANT":"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
  "RESTAURANT":"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
  "CREATIVE":"https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=85",
  "STARTUP":"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85",
  "MARKETING":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  "DASHBOARD":"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
};

const projectDetails = (title: string, type: string) => ({
  intro: `A polished ${type.toLowerCase()} concept focused on conversion, clarity and a premium responsive experience.`,
  deliverables: ["Responsive UI / UX", "Component system", "Mobile-first experience", "Performance & polish"],
  stack: ["Next.js", "TypeScript", "Supabase"],
  image: projectVisuals[type] || projectVisuals.BUSINESS
});

const graphicDetails: Record<string, {intro:string; items:string[]}> = {
  "Brand Identity": {intro:"A complete visual direction built to make a brand recognizable and consistent.",items:["Logo direction","Color system","Typography","Brand applications"]},
  "Logo Systems": {intro:"Flexible logo systems designed to work across websites, social profiles and print.",items:["Primary mark","Monogram / icon","Light & dark versions","Usage direction"]},
  "Social Media Creatives": {intro:"Scroll-stopping social visuals built around a consistent brand language.",items:["Post templates","Campaign creatives","Story formats","Content direction"]},
  "Posters & Campaigns": {intro:"High-impact campaign artwork with strong hierarchy and clear messaging.",items:["Campaign concept","Key visual","Print-ready layouts","Digital adaptations"]},
  "Presentation Design": {intro:"Professional presentation systems that make complex ideas easier to understand.",items:["Master slides","Data layouts","Pitch deck direction","Reusable templates"]},
  "Ad Creatives": {intro:"Performance-minded creative variations designed for digital campaigns.",items:["Multiple concepts","Responsive formats","CTA hierarchy","A/B-ready variations"]},
  "Thumbnails": {intro:"Bold thumbnail systems designed to improve recognition and click appeal.",items:["Visual hooks","Typography system","Template library","Platform variations"]},
  "Packaging Concepts": {intro:"Premium packaging concepts that translate a brand identity into physical touchpoints.",items:["Front-of-pack direction","Color & type","Mockup presentation","Retail-ready visual system"]}
};

function ProjectPreview({ title, index, type }: { title: string; index: number; type?: string }) {
  const image = projectVisuals[type || "BUSINESS"] || projectVisuals.BUSINESS;
  return (
    <div className="image-project-preview">
      <img src={image} alt={title} loading="lazy" />
      <div className="image-project-overlay"/>
      <div className="image-project-copy"><span>{type || "SELECTED WORK"} · 2026</span><strong>{title}</strong><small>{index === 0 ? "DISCOVER · DESIGN · BUILD" : "STRATEGY · UI · DEVELOPMENT"}</small></div>
      <div className="image-project-chip">KS / {String(index+1).padStart(2,"0")}</div>
    </div>
  );
}

const projectCategories = ["ALL","E-COMMERCE","SAAS","BUSINESS","FINTECH","HEALTH","EDUCATION","REAL ESTATE","RESTAURANT","CREATIVE"];

const projects = [
  {
    "num": "01",
    "type": "E-COMMERCE",
    "title": "Commerce Platform",
    "text": "A responsive website with polished interactions and clear conversion paths as a commerce concept build.",
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
    "text": "A modern product interface with reusable components and responsive layouts as a commerce concept build.",
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
    "text": "A high-performance experience focused on speed, clarity and mobile usability as a commerce concept build.",
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
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX as a commerce concept build.",
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
    "text": "A production-ready interface designed around real user journeys and business goals as a commerce concept build.",
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
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system as a commerce concept build.",
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
    "text": "A modern product interface with reusable components and responsive layouts as a SaaS concept build.",
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
    "text": "A high-performance experience focused on speed, clarity and mobile usability as a SaaS concept build.",
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
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX as a SaaS concept build.",
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
    "text": "A production-ready interface designed around real user journeys and business goals as a SaaS concept build.",
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
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system as a SaaS concept build.",
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
    "text": "A responsive website with polished interactions and clear conversion paths as a SaaS concept build.",
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
    "text": "A high-performance experience focused on speed, clarity and mobile usability as a business concept build.",
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
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX as a business concept build.",
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
    "text": "A production-ready interface designed around real user journeys and business goals as a business concept build.",
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
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system as a business concept build.",
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
    "text": "A responsive website with polished interactions and clear conversion paths as a business concept build.",
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
    "text": "A modern product interface with reusable components and responsive layouts as a business concept build.",
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
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX as a fintech concept build.",
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
    "text": "A production-ready interface designed around real user journeys and business goals as a fintech concept build.",
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
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system as a fintech concept build.",
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
    "text": "A responsive website with polished interactions and clear conversion paths as a fintech concept build.",
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
    "text": "A modern product interface with reusable components and responsive layouts as a fintech concept build.",
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
    "text": "A high-performance experience focused on speed, clarity and mobile usability as a fintech concept build.",
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
    "text": "A production-ready interface designed around real user journeys and business goals as a health concept build.",
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
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system as a health concept build.",
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
    "text": "A responsive website with polished interactions and clear conversion paths as a health concept build.",
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
    "text": "A modern product interface with reusable components and responsive layouts as a health concept build.",
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
    "text": "A high-performance experience focused on speed, clarity and mobile usability as a health concept build.",
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
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX as a health concept build.",
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
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system as an education concept build.",
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
    "text": "A responsive website with polished interactions and clear conversion paths as an education concept build.",
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
    "text": "A modern product interface with reusable components and responsive layouts as an education concept build.",
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
    "text": "A high-performance experience focused on speed, clarity and mobile usability as an education concept build.",
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
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX as an education concept build.",
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
    "text": "A production-ready interface designed around real user journeys and business goals as an education concept build.",
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
    "text": "A responsive website with polished interactions and clear conversion paths as a property concept build.",
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
    "text": "A modern product interface with reusable components and responsive layouts as a property concept build.",
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
    "text": "A high-performance experience focused on speed, clarity and mobile usability as a property concept build.",
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
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX as a property concept build.",
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
    "text": "A production-ready interface designed around real user journeys and business goals as a property concept build.",
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
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system as a property concept build.",
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
    "text": "A modern product interface with reusable components and responsive layouts as a hospitality concept build.",
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
    "text": "A high-performance experience focused on speed, clarity and mobile usability as a hospitality concept build.",
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
    "text": "A brand-led digital experience combining strong visual hierarchy with practical UX as a hospitality concept build.",
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
    "text": "A production-ready interface designed around real user journeys and business goals as a hospitality concept build.",
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
    "text": "A clean, scalable frontend with thoughtful details and a premium visual system as a hospitality concept build.",
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
    "text": "A responsive website with polished interactions and clear conversion paths as a hospitality concept build.",
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
  const [projectFilter, setProjectFilter] = useState("ALL");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(null);
  const [formError, setFormError] = useState("");
  const [selected, setSelected] = useState<{type: "service" | "project" | "technology" | "graphic" | "process"; title: string} | null>(null);

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
  const activeProject = selected?.type === "project" ? projects.find((p) => p.title === selected.title) : null;
  const visibleProjects = projectFilter === "ALL" ? projects : projects.filter((p) => p.type === projectFilter);
  const activeGraphic = selected?.type === "graphic" ? (graphicDetails[selected.title] ?? graphicDetails["Brand Identity"]) : null;

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home" aria-label="Kartik Saini home"><img src="/kartik-saini-logo.svg" alt="Kartik Saini — Web Developer & Graphic Designer" /></a>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {["Home","Services","Skills","Work","About","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}
        </nav>
        <a className="nav-cta" href="#contact" aria-label="Start a project with Kartik Saini">Start a project <ArrowUpRight size={16}/></a>
        <button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
      </header>

      <section id="home" className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot"/> AVAILABLE FOR SELECT PROJECTS</div>
          <h1>I build <em>digital products</em> people enjoy using.</h1>
          <p className="lead">Kartik Saini is a web developer focused on crafting fast, thoughtful and scalable experiences for ambitious businesses and modern brands.</p>
          <div className="actions"><a className="button primary" href="#contact">Start a project <ArrowUpRight size={17}/></a><a className="button secondary" href="#work">View my work</a></div>
          <div className="trusted"><span>STACK I WORK WITH</span><b>Next.js</b><b>TypeScript</b><b>Supabase</b><b>Vercel</b><b>UI/UX</b><b>GRAPHICS</b></div>
          <a className="offer-strip" href="#contact" aria-label="Claim 10 percent off and start a project"><strong>10% OFF</strong><span>First-time clients get 10% off their first project</span><ArrowUpRight size={16}/></a>
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

      <section className="section graphics"><div className="section-head"><div><span className="kicker">03 — GRAPHIC DESIGN</span><h2>Design that makes the <em>brand stick.</em></h2></div><p>Alongside development, Kartik creates visual identities, social creatives, marketing graphics and brand systems that make digital products feel complete.</p></div><div className="graphic-grid">{Object.keys(graphicDetails).map((title,i)=><button type="button" className="graphic-card" key={title} onClick={()=>setSelected({type:"graphic",title})}><span>{String(i+1).padStart(2,"0")}</span><strong>{title}</strong><small>STRATEGY · VISUAL · DELIVERY</small><ArrowUpRight size={16}/></button>)}</div></section>

      <section id="work" className="section work">
        <div className="section-head"><div><span className="kicker">04 — SELECTED WORK</span><h2>Built with purpose, <em>not noise.</em></h2></div><a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16}/></a></div>
        <div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter projects">{projectCategories.map(category => <button key={category} type="button" className={projectFilter === category ? "project-filter active" : "project-filter"} onClick={() => setProjectFilter(category)}>{category}</button>)}</div></div><div className="project-count"><strong>{visibleProjects.length}</strong><span>PROJECT CONCEPTS & BUILDS</span><p>These are concept builds used to demonstrate different industries, interfaces and technical approaches. Client work is only presented as real case studies when it can be shown accurately.</p></div><div className="project-list">{visibleProjects.map((p, projectIndex)=><article className="project" key={p.num}><div className="project-number">{p.num}</div><div className="project-info"><span className="kicker">{p.type}</span><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><a className="project-visual project-button" href={`/projects/${p.num}`} aria-label={"Open " + p.title}><ProjectPreview title={p.title} type={p.type} index={projectIndex % 2} /><span className="project-view-label">VIEW PROJECT <ArrowUpRight size={18}/></span></a></article>)}</div>
      </section>

      <section id="about" className="section about">
        <div className="about-mark">KS<span>.</span></div>
        <div><span className="kicker">05 — ABOUT KARTIK</span><h2>Technical thinking.<br/><em>Human results.</em></h2><p className="about-text">I believe good software sits at the intersection of engineering, design and empathy. My approach is simple: understand the problem, remove unnecessary complexity and build something people can confidently use.</p><div className="stats"><div><strong>01</strong><span>Curious by default</span></div><div><strong>02</strong><span>Detail obsessed</span></div><div><strong>03</strong><span>Always learning</span></div></div></div>
      </section>

      <section id="process" className="process section"><div className="section-head"><div><span className="kicker">06 — PROCESS</span><h2>Simple process.<br/><em>Serious results.</em></h2></div></div><div className="process-grid">{[["01","DISCOVER","Goals, users, constraints and the real problem."],["02","DESIGN","Structure, interactions and a visual direction."],["03","BUILD","Clean code, integrations and responsive polish."],["04","LAUNCH","Testing, deployment and a product ready to grow."]].map(x=><button type="button" className="step" key={x[0]} onClick={() => setSelected({ type: "process", title: x[1] })}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p><span className="step-action">VIEW DETAILS <ArrowUpRight size={14}/></span></button>)}</div></section>

      <section id="final-cta" className="section final-cta"><div><span className="kicker">07 — READY WHEN YOU ARE</span><h2>Build something people<br/><em>remember.</em></h2><p>Web development, UI/UX and graphic design — brought together under one roof.</p></div><a className="button primary" href="#contact">Start with 10% off <ArrowUpRight size={17}/></a></section>



      <section className="section proof-section">
        <div className="section-head"><div><span className="kicker">08 — WHY KARTIK</span><h2>Good work is more than <em>good code.</em></h2></div><p>A focused approach that connects strategy, interface design and reliable engineering from the first conversation to launch.</p></div>
        <div className="proof-grid">
          {[
            ["01","CLEAR COMMUNICATION","Simple updates, honest scope and no unnecessary technical jargon."],
            ["02","DESIGN + DEVELOPMENT","One workflow for the interface and the implementation, so details do not get lost."],
            ["03","BUILT TO SCALE","Reusable components, sensible architecture and responsive foundations."],
            ["04","LAUNCH-READY","Testing, polish and deployment are part of the process—not an afterthought."]
          ].map(([n,t,d])=><article className="proof-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section className="section availability-section">
        <div className="availability-card">
          <div><span className="kicker">09 — START A PROJECT</span><h2>Have a brief?<br/><em>Let&apos;s build it.</em></h2><p>Share your idea, website requirement or design brief. I&apos;ll help turn it into a clear next step.</p></div>
          <div className="availability-actions"><a className="button primary" href="#contact">Send project brief <ArrowUpRight size={17}/></a><a className="button secondary" href="mailto:sainimukesh46753@gmail.com">Email directly</a></div>
        </div>
      </section>

      <section id="contact" className="contact section"><div className="contact-inner contact-compact"><div className="contact-cta-banner"><span>READY TO BUILD?</span><strong>Have an idea? Let&apos;s turn it into something people remember.</strong><a href="#contact-form">Start your project <ArrowUpRight size={16}/></a></div><div className="contact-heading"><span className="kicker">10 — GET IN TOUCH</span><h2>Have an idea?<br/><em>Let&apos;s make it real.</em></h2><p>Tell me what you&apos;re building. I&apos;ll get back to you personally.</p><div className="contact-direct"><span>DIRECT EMAIL</span><a href="mailto:sainimukesh46753@gmail.com">sainimukesh46753@gmail.com <ArrowUpRight size={16}/></a></div></div><div className="contact-card"><form id="contact-form" className="contact-form" onSubmit={handleSubmit}><div className="contact-fields"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label></div><label>Project details<textarea name="message" required rows={3} placeholder="What would you like to build?" /></label><button className="button contact-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send enquiry"} {!isSubmitting && <ArrowUpRight size={17}/>}</button>{formStatus === "success" && <div className="form-status success">Message sent successfully. I&apos;ll get back to you soon.</div>}{formStatus === "error" && <div className="form-status error">Something went wrong: {formError || "Please try again."}</div>}</form><div className="contact-card-foot"><div><span>SOCIAL</span><div className="social-links"><a href="https://github.com/sainimukesh46753-oss/kartik-saini" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href="https://wa.me/917048934876" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13}/></a></div></div><div><span>AVAILABLE WORLDWIDE</span><strong>India · +91 70489 34876</strong></div></div></div><div className="contact-bottom"><span>WEB DEVELOPMENT · UI/UX · SOFTWARE</span><span>BASED IN INDIA · WORKING WORLDWIDE</span></div></div></section>

      {selected && (
        <div className="details-overlay" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
          <div className="details-modal premium-modal" onClick={(e) => e.stopPropagation()}>
            <button className="details-close" type="button" onClick={() => setSelected(null)} aria-label="Close"><X size={20}/></button>
            <div className="modal-topline"><span className="kicker">{selected.type === "service" ? "SERVICE DETAILS" : selected.type === "technology" ? "TECHNOLOGY DETAILS" : selected.type === "process" ? "PROCESS DETAILS" : selected.type === "graphic" ? "GRAPHIC DESIGN" : "CASE STUDY"}</span><span>KS / 2026</span></div>
            <h2>{selected.title}</h2>
            {selected.type === "project" && <><div className="modal-cover"><img src={projectDetails(selected.title, activeProject?.type || "BUSINESS").image} alt={selected.title}/><div><span>SELECTED PROJECT</span><strong>{projects.find(p=>p.title===selected.title)?.type || "BUSINESS"}</strong></div></div><p className="modal-intro">{projectDetails(selected.title, projects.find(p=>p.title===selected.title)?.type || "BUSINESS").intro}</p><div className="modal-detail-grid">{projectDetails(selected.title, projects.find(p=>p.title===selected.title)?.type || "BUSINESS").deliverables.map(x=><div key={x}><b>✓</b>{x}</div>)}</div><div className="modal-stack">{projectDetails(selected.title, projects.find(p=>p.title===selected.title)?.type || "BUSINESS").stack.map(x=><span key={x}>{x}</span>)}</div></>}
            {selected.type === "graphic" && <><p className="modal-intro">{activeGraphic?.intro}</p><div className="modal-detail-grid">{(activeGraphic?.items || []).map(x=><div key={x}><b>✓</b>{x}</div>)}</div></>}
            {selected.type === "service" && <><p className="modal-intro">{serviceDetails[selected.title]?.intro}</p><div className="modal-detail-grid">{(serviceDetails[selected.title]?.items || []).map(x=><div key={x}><b>✓</b>{x}</div>)}</div></>}
            {selected.type === "technology" && <><p className="modal-intro">Kartik uses {selected.title} as part of a modern workflow focused on performance, maintainability, responsive UX and production-ready delivery.</p><div className="modal-detail-grid">{(technologyDetails[selected.title]?.items || ["Modern production workflow","Responsive implementation","Maintainable code","Performance-focused delivery"]).map(x=><div key={x}><b>✓</b>{x}</div>)}</div></>}
            {selected.type === "process" && <><p className="modal-intro">{processDetails[selected.title]?.intro}</p><div className="modal-detail-grid">{(processDetails[selected.title]?.items || []).map(x=><div key={x}><b>✓</b>{x}</div>)}</div></>}
            <a className="button primary modal-cta" href="#contact" onClick={()=>setSelected(null)}>Discuss a similar project <ArrowUpRight size={17}/></a>
          </div>
        </div>
      )}

      </main>
  );
}

