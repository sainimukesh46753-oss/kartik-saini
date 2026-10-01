import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartik Saini — Web Developer & Software Engineer",
  description: "Professional portfolio of Kartik Saini — building fast, modern and scalable web experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}