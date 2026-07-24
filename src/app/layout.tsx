import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "Timothy Marcelleon — Front-End Engineer",
  description:
    "Front-End Engineer with 5+ years building high-performance React and TypeScript applications across e-commerce and banking. Based in Adelaide, South Australia.",
  openGraph: {
    title: "Timothy Marcelleon — Front-End Engineer",
    description:
      "Interfaces that hold under pressure — React, TypeScript, and systems built for scale.",
    type: "website",
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
