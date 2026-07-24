"use client";

import { profile } from "@/data/profile";
import { RevealOnScroll } from "./reveal";

export function Skills() {
  const groups = Object.entries(profile.skills);

  return (
    <section id="skills" className="scroll-mt-24 border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-sm tracking-[0.2em] text-accent uppercase">Skills</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            The toolkit I reach for daily.
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {groups.map(([category, items], index) => (
            <RevealOnScroll key={category} delay={index * 0.06}>
              <h3 className="font-display text-lg font-medium text-foreground">
                {category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-surface/40 px-3 py-1.5 text-sm text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
