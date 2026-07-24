"use client";

import { profile } from "@/data/profile";
import { RevealOnScroll, RevealOnScrollItem } from "./reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-sm tracking-[0.2em] text-accent uppercase">
            Experience
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Roles that shaped the craft.
          </h2>
        </RevealOnScroll>

        <ol className="mt-14 space-y-0">
          {profile.experience.map((job, index) => (
            <RevealOnScrollItem
              key={`${job.company}-${job.period}`}
              delay={index * 0.05}
              className="grid gap-6 border-t border-border py-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12"
            >
              <div>
                <p className="text-sm text-accent">{job.period}</p>
                <h3 className="font-display mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                  {job.role}
                </h3>
                <p className="mt-2 text-base text-foreground/90">{job.company}</p>
                <p className="mt-1 text-sm text-muted">
                  {job.place} — {job.sector}
                </p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScrollItem>
          ))}
        </ol>
      </div>
    </section>
  );
}
