import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/profile";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.liveUrl),
  title: "Timothy Marcelleon — Front-End Engineer",
  description:
    "Front-End Engineer with 5+ years building high-performance React and TypeScript applications across e-commerce and banking. Based in Adelaide, South Australia, with full Australian working rights — open to Adelaide, Sydney, Melbourne, or remote roles.",
  keywords: [
    "Timothy Marcelleon",
    "Front-End Engineer",
    "React Developer Adelaide",
    "Full-Stack Engineer Australia",
    "Full Australian Working Rights",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: "Timothy Marcelleon — Front-End Engineer",
    description:
      "Interfaces that hold under pressure — React, TypeScript, and systems built for scale. Full Australian working rights.",
    type: "website",
    url: profile.liveUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${figtree.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
