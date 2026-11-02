"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Sets `data-inview="true"` on itself the first time it scrolls into view,
 * so CSS can play one-shot entrance transitions.
 */
export default function Reveal({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} data-inview={inView}>
      {children}
    </div>
  );
}
