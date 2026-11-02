"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/** Lenis smooth scrolling for the whole page, off for reduced-motion users. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      // Smooth-scroll in-page links such as the navbar's #about
      anchors: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
