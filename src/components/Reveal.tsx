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
      // A ratio threshold never fires on blocks taller than ~5 viewports,
      // so trigger on the top edge passing 85% of the screen instead.
      { rootMargin: "0px 0px -15% 0px" },
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
