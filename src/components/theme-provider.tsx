"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      {/* Keep motion on so portfolio animations are visible even if OS reduce-motion is enabled */}
      <MotionConfig reducedMotion="never">{children}</MotionConfig>
    </NextThemesProvider>
  );
}
