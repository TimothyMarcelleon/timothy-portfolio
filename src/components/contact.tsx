"use client";

import { Mail, Phone, Link2 } from "lucide-react";
import { profile } from "@/data/profile";
import { RevealOnScroll } from "./reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll>
          <p className="text-sm tracking-[0.2em] text-accent uppercase">Contact</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Let&apos;s build something steady and sharp.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Based in {profile.location}. Open to conversations about front-end
            architecture, product UI, and teams that care about craft.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="group flex h-full flex-col gap-3 border border-border bg-surface/30 p-5 transition-colors hover:border-accent/45"
              >
                <Mail className="size-4 text-accent" strokeWidth={1.75} />
                <span className="text-sm text-muted">Email</span>
                <span className="break-all text-sm text-foreground group-hover:text-accent">
                  {profile.email}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/-/g, "")}`}
                className="group flex h-full flex-col gap-3 border border-border bg-surface/30 p-5 transition-colors hover:border-accent/45"
              >
                <Phone className="size-4 text-accent" strokeWidth={1.75} />
                <span className="text-sm text-muted">Phone</span>
                <span className="text-sm text-foreground group-hover:text-accent">
                  {profile.phone}
                </span>
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-3 border border-border bg-surface/30 p-5 transition-colors hover:border-accent/45"
              >
                <Link2 className="size-4 text-accent" strokeWidth={1.75} />
                <span className="text-sm text-muted">LinkedIn</span>
                <span className="break-all text-sm text-foreground group-hover:text-accent">
                  View profile
                </span>
              </a>
            </li>
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
