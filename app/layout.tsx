import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kartik-saini.vercel.app"),
  title: {
    default: "Kartik Saini — Web Developer & Graphic Designer",
    template: "%s | Kartik Saini",
  },
  description: "Kartik Saini builds fast, modern websites, full-stack products, responsive interfaces and brand-focused digital experiences.",
  keywords: ["Kartik Saini", "web developer", "full-stack developer", "Next.js developer", "graphic designer", "UI UX", "India"],
  authors: [{ name: "Kartik Saini" }],
  creator: "Kartik Saini",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://kartik-saini.vercel.app",
    title: "Kartik Saini — Web Developer & Graphic Designer",
    description: "Web development, UI/UX and graphic design for modern brands and digital products.",
    siteName: "Kartik Saini",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Saini — Web Developer & Graphic Designer",
    description: "Web development, UI/UX and graphic design for modern brands and digital products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}