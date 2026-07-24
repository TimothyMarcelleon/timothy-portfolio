"use client";

import { profile } from "@/data/profile";
import { RevealOnScroll } from "./reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <RevealOnScroll>
          <p className="text-sm tracking-[0.2em] text-accent uppercase">About</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Interfaces that hold under pressure.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
            <p>{profile.summary}</p>
            <p>
              From banking flows in Jakarta to semiconductor platforms in Taipei,
              and now based in Adelaide — I care about the quiet craft of front-end
              systems: clarity in the UI, honesty in the architecture, and calm when
              traffic spikes.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
