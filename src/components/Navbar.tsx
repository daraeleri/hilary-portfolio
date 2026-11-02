"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

/**
 * Two-part nav after fluid.glass: a light top bar that scrolls away with the
 * page, and a compact pill fixed to the bottom centre that names the section
 * in view and expands upward into the full menu.
 *
 * Sections opt in to the pill label with a `data-nav-label` attribute.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("Home");
  const close = () => setOpen(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-nav-label]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSection(entry.target.getAttribute("data-nav-label") ?? "Home");
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 grid grid-cols-[1fr_auto_1fr] items-center px-5 py-5 text-paper sm:px-8">
        <span className="hidden items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-paper/70 uppercase sm:flex">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-blue opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-blue" />
          </span>
          Open to work
        </span>
        <a
          href="#top"
          className="col-start-2 font-display text-xl font-bold tracking-tight"
        >
          Hilary<span className="text-blue">*</span>
        </a>
        <a
          href="#contact"
          className="justify-self-end font-mono text-[11px] tracking-[0.2em] uppercase transition-colors hover:text-blue-soft"
        >
          <span className="text-blue">↳</span> Hire me
        </a>
      </header>

      <div
        aria-hidden
        onClick={close}
        className={`fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        aria-label="Main"
        className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 text-paper"
      >
        <div
          id="site-menu"
          inert={!open}
          className={`absolute bottom-full left-1/2 mb-2 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-line bg-[#0b0b0f]/95 p-6 shadow-[0_30px_80px_-20px_rgba(31,75,255,0.45)] backdrop-blur-xl transition-[clip-path,opacity] duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] ${
            open
              ? "opacity-100 [clip-path:inset(0_0_0_0_round_16px)]"
              : "opacity-0 [clip-path:inset(100%_20%_0_20%_round_16px)]"
          }`}
        >
          <p className="font-mono text-[11px] tracking-[0.25em] text-paper/50 uppercase">
            Menu
          </p>
          <ul className="mt-5 flex flex-col gap-1">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="group flex items-baseline gap-3 font-display text-3xl font-semibold tracking-tight transition-colors hover:text-blue-soft"
                >
                  <span className="font-mono text-[11px] font-normal text-paper/40 group-hover:text-blue">
                    0{i + 1}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-line pt-5 text-sm text-paper/60">
            Networking · Security · Ethical hacking · Mobile &amp; web
          </div>
          <a
            href="#contact"
            onClick={close}
            className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-paper py-3 font-mono text-[11px] font-semibold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-blue hover:text-paper"
          >
            <span>↳</span> Hire me
          </a>
        </div>

        <div
          className={`relative mx-auto flex h-12 items-center overflow-hidden rounded-xl border border-line bg-ink/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-[width] duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] ${
            open ? "w-12" : "w-64 sm:w-72"
          }`}
        >
          <div
            inert={open}
            className={`flex w-64 shrink-0 items-center transition-opacity duration-300 sm:w-72 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          >
            <a
              href="#top"
              aria-label="Back to top"
              className="grid size-12 shrink-0 place-items-center font-display text-2xl font-bold text-blue transition-colors hover:text-blue-soft"
            >
              *
            </a>
            <div className="relative h-5 flex-1 overflow-hidden text-center font-mono text-[11px] leading-5 tracking-[0.25em] uppercase">
              <span key={section} className="block animate-label" aria-live="polite">
                {section}
              </span>
            </div>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen(true)}
              className="flex size-12 shrink-0 flex-col items-center justify-center gap-1 text-paper/70 transition-colors hover:text-paper"
            >
              <span className="h-px w-4 bg-current" />
              <span className="h-px w-4 bg-current" />
              <span className="h-px w-4 bg-current" />
            </button>
          </div>

          <button
            type="button"
            aria-label="Close menu"
            inert={!open}
            onClick={close}
            className={`absolute inset-0 grid place-items-center transition-opacity duration-300 ${
              open ? "opacity-100 delay-200" : "pointer-events-none opacity-0"
            }`}
          >
            <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
