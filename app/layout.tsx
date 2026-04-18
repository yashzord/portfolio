import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Yashwant Bitra — AI/ML Engineer",
  description:
    "Portfolio of Yashwant Bitra — AI/ML Engineer, Full Stack Developer, and Data Engineer based in Lawrence Township, NJ.",
  openGraph: {
    title: "Yashwant Bitra — AI/ML Engineer",
    description: "Building production AI systems — from agentic pipelines to security infrastructure.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
