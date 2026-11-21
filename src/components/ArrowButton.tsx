"use client";

import type { CSSProperties, PointerEvent } from "react";
import styles from "./ArrowButton.module.css";

type Variant = "blue" | "ghost" | "light" | "outline";

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden>
      <path
        d="M4 10h12M11 5l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** How far (in px) the button follows the cursor, as a fraction of the offset. */
const PULL = 0.28;
const MAX_PULL = 14;

const clamp = (n: number) => Math.max(-MAX_PULL, Math.min(MAX_PULL, n));

const canAnimate = (e: PointerEvent) =>
  e.pointerType === "mouse" &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Arrow button with a deliberately over-the-top hover:
 * - a fill circle blooms from the exact spot where the cursor entered
 * - the label rolls up letter by letter, staggered
 * - the arrow shoots off top-right while a fresh one slides in from bottom-left
 * - the button is magnetic: it leans towards the cursor, the label a bit more
 * - it squishes on press
 * Colours come from the variant. Hover effects only run on devices that hover.
 */
export default function ArrowButton({
  href,
  children,
  variant = "blue",
  arrow = true,
}: {
  href: string;
  children: string;
  variant?: Variant;
  arrow?: boolean;
}) {
  const chars = Array.from(children);

  function enter(e: PointerEvent<HTMLAnchorElement>) {
    if (!canAnimate(e)) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  function move(e: PointerEvent<HTMLAnchorElement>) {
    if (!canAnimate(e)) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.setProperty("--tx", `${clamp(dx * PULL)}px`);
    el.style.setProperty("--ty", `${clamp(dy * PULL)}px`);
  }

  function leave(e: PointerEvent<HTMLAnchorElement>) {
    const el = e.currentTarget;
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
  }

  return (
    <a
      href={href}
      aria-label={children}
      className={`${styles.btn} ${styles[variant]}`}
      onPointerEnter={enter}
      onPointerMove={move}
      onPointerLeave={leave}
    >
      <span aria-hidden className={styles.fill} />
      <span aria-hidden className={styles.label}>
        {chars.map((char, i) => (
          <span
            key={i}
            className={styles.ch}
            style={{ "--i": i } as CSSProperties}
          >
            <span>{char === " " ? " " : char}</span>
            <span>{char === " " ? " " : char}</span>
          </span>
        ))}
      </span>
      {arrow && (
        <span aria-hidden className={styles.icon}>
          <span className={styles.out}>
            <Arrow />
          </span>
          <span className={styles.in}>
            <Arrow />
          </span>
        </span>
      )}
    </a>
  );
}
