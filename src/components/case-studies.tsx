"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  CreditCard,
  GitBranch,
  type LucideIcon,
  Landmark,
  Layers,
  Lock,
  MessagesSquare,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { profile } from "@/data/profile";
import { RevealOnScroll } from "./reveal";

const ease = [0.22, 1, 0.36, 1] as const;

type CaseStudyId = (typeof profile.caseStudies)[number]["id"];

const tabIcons: Record<CaseStudyId, LucideIcon> = {
  "payment-risk-engine": CreditCard,
  "realtime-ops-platform": MessagesSquare,
  "digital-banking-onboarding": Landmark,
};

const decisionIcons: Record<CaseStudyId, readonly LucideIcon[]> = {
  "payment-risk-engine": [Lock, Layers, Activity],
  "realtime-ops-platform": [MessagesSquare, GitBranch, ShieldCheck, Workflow],
  "digital-banking-onboarding": [Lock, CreditCard],
};

export function CaseStudies() {
  const [activeId, setActiveId] = useState<CaseStudyId>(
    profile.caseStudies[0].id,
  );
  const active =
    profile.caseStudies.find((study) => study.id === activeId) ??
    profile.caseStudies[0];
  const icons = decisionIcons[active.id];

  return (
    <section
      id="case-studies"
      className="scroll-mt-24 border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-sm tracking-[0.2em] text-accent uppercase">
            Case Studies
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Architecture deep-dives from production systems.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            The codebases behind these systems live in private enterprise
            repositories at Tokopedia and Xinchuan — these are first-hand
            breakdowns of the problems, scale, and engineering decisions
            behind three flagship systems I designed and shipped.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08} className="mt-10">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Featured case studies"
          >
            {profile.caseStudies.map((study) => {
              const Icon = tabIcons[study.id];
              const isActive = study.id === activeId;
              return (
                <button
                  key={study.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(study.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-accent/60 bg-accent/10 text-accent"
                      : "border-border bg-surface/40 text-muted hover:border-accent/35 hover:text-foreground"
                  }`}
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                  {study.company}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease }}
            >
              <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                <div>
                  <p className="text-sm text-accent">
                    {active.role} · {active.period}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                    {active.title}
                  </h3>
                  <p className="mt-3 text-muted">{active.tagline}</p>

                  <div className="mt-8">
                    <h4 className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      Problem &amp; scale
                    </h4>
                    <p className="mt-3 leading-relaxed text-foreground/90">
                      {active.problem}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {active.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-surface/40 px-3 py-1.5 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 content-start sm:grid-cols-3 lg:grid-cols-2">
                  {active.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg border border-border bg-surface/30 p-4"
                    >
                      <p className="font-display text-xl font-semibold text-accent sm:text-2xl">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Architecture &amp; engineering decisions
                </h4>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {active.decisions.map((decision, index) => {
                    const Icon = icons[index] ?? Layers;
                    return (
                      <div
                        key={decision.heading}
                        className="flex flex-col gap-3 rounded-lg border border-border bg-surface/30 p-5 transition-colors hover:border-accent/35"
                      >
                        <Icon
                          className="size-5 text-accent"
                          strokeWidth={1.75}
                        />
                        <h5 className="font-display text-base font-medium text-foreground">
                          {decision.heading}
                        </h5>
                        <p className="text-sm leading-relaxed text-muted">
                          {decision.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
