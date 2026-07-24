"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-16"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -16, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="hero-grain absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <motion.div
          className="order-2 lg:order-1"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="mb-5 flex items-center gap-2 text-sm text-muted"
          >
            <MapPin className="size-3.5 text-accent" strokeWidth={1.75} />
            {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.5rem,7vw,5.25rem)] leading-[0.94] font-semibold tracking-[-0.03em] text-foreground"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg text-muted sm:text-xl"
          >
            {profile.title} — shipping calm, resilient interfaces for products
            that move money, people, and parts at scale.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-fg"
            >
              Get in touch
              <ArrowDownRight className="size-4" strokeWidth={1.75} />
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center rounded-md border border-border bg-surface/70 px-5 py-3 text-sm font-medium text-foreground"
            >
              See the work
            </motion.a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm tracking-wide text-muted"
            aria-label="Career path"
          >
            {profile.journey.map((city, index) => (
              <li key={city} className="flex items-center gap-3">
                {index > 0 && (
                  <motion.span
                    className="h-px w-8 origin-left bg-border"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.12, ease }}
                    aria-hidden
                  />
                )}
                <span
                  className={
                    index === profile.journey.length - 1 ? "text-accent" : ""
                  }
                >
                  {city}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, y: 48, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
        >
          <motion.div
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-surface lg:max-w-none"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease }}
          >
            <Image
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover object-[center_22%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
