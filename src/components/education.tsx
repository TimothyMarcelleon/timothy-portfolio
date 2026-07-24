"use client";

import { profile } from "@/data/profile";
import { RevealOnScroll } from "./reveal";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-sm tracking-[0.2em] text-accent uppercase">
            Education
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Foundations in AI and algorithms.
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {profile.education.map((item, index) => (
            <RevealOnScroll key={item.degree} delay={index * 0.08}>
              <article className="border-t border-border pt-8">
                <p className="text-sm text-accent">{item.period}</p>
                <h3 className="font-display mt-2 text-xl font-semibold text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-1 text-muted">{item.school}</p>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted">
                  {item.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
