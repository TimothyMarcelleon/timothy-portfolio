"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { GithubIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-[0.18em] uppercase text-foreground"
        >
          TM
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Timothy Marcelleon on GitHub"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface/70 text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            <GithubIcon className="size-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
