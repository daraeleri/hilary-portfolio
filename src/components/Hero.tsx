import Image from "next/image";

const skills = [
  "Networking",
  "Network Security",
  "Ethical Hacking",
  "Mobile Development",
  "Web Development",
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-soft";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
      <path
        d="M8 1.5l5 2v4c0 3.2-2.1 5.6-5 7-2.9-1.4-5-3.8-5-7v-4l5-2z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M8 1.5l5 2v4c0 3.2-2.1 5.6-5 7-2.9-1.4-5-3.8-5-7v-4l5-2zM5.5 8l1.8 1.8L10.8 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Hero after logomint's: a centred pill, big heading, subtitle, two buttons and
 * a proof line, then the portrait standing directly on the "what I work with"
 * marquee line. CSS-only motion, so the portrait (the LCP image) is never held
 * back by JS.
 */
export default function Hero() {
  return (
    <section
      id="top"
      data-nav-label="Home"
      className="relative isolate overflow-hidden bg-ink"
    >
      {/* Faint grid and glow behind the heading */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[38rem] opacity-60 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute top-24 left-1/2 -z-10 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-blue/25 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-6 pt-32 sm:pt-36">
        {/* Intro */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-line bg-paper/5 py-1.5 pr-4 pl-1.5 text-xs text-paper/80 backdrop-blur sm:text-sm">
            <span className="grid size-6 place-items-center rounded-full bg-blue/25 text-blue-soft">
              <ShieldIcon />
            </span>
            Network security &amp; full-stack developer
          </p>

          <h1 className="mt-6 animate-rise font-display text-[2.6rem] leading-[1.02] font-extrabold tracking-tight text-balance [animation-delay:120ms] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Secure networks.{" "}
            <span className="relative inline-block text-blue-soft">
              Sharp apps.
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-2.5 w-full text-blue"
              >
                <path
                  d="M2 9 C 80 3 200 2 298 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1"
                  className="animate-draw [animation-delay:600ms]"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl animate-rise text-base leading-relaxed text-paper/70 [animation-delay:240ms] sm:text-lg">
            Hi, I&apos;m{" "}
            <strong className="font-semibold text-paper">Tangunu Hilary</strong>
            . Network security &amp; ethical hacking by day, mobile &amp; web
            development by night.
          </p>

          <div className="mt-8 flex animate-rise flex-wrap items-center justify-center gap-3 [animation-delay:360ms]">
            <a
              href="#projects"
              className={`group inline-flex min-h-11 items-center gap-2 rounded-full bg-blue py-3 pr-5 pl-6 text-sm font-semibold text-paper shadow-[0_10px_30px_-10px_var(--blue)] transition-colors hover:bg-blue-soft hover:text-ink ${focusRing}`}
            >
              View my work
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
            <a
              href="#contact"
              className={`inline-flex min-h-11 items-center rounded-full border border-line bg-paper/10 py-3 px-6 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink ${focusRing}`}
            >
              Get in touch
            </a>
          </div>

          <p className="mt-5 animate-rise text-xs text-paper/50 [animation-delay:480ms] sm:text-sm">
            Internships · Freelance · Collaborations ·{" "}
            <a
              href="#contact"
              className={`rounded-sm text-paper/80 underline decoration-paper/30 underline-offset-4 hover:text-paper hover:decoration-blue ${focusRing}`}
            >
              Let&apos;s talk
            </a>
          </p>
        </div>

        {/* Portrait stands directly on the marquee line, nothing else around it */}
        <div className="mx-auto mt-12 w-[17rem] animate-rise [animation-delay:250ms] sm:mt-14 sm:w-[24rem] lg:w-[28rem]">
          <Image
            src="/images/hilary.png"
            alt="Tangunu Hilary smiling, wearing a flat cap and a cream sweater"
            width={1213}
            height={1296}
            preload
            sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 272px"
            className="block h-auto w-full"
          />
        </div>
      </div>

      {/* Quiet strip after logomint's client logos; its top line is the portrait's floor */}
      <div className="border-y border-line py-6">
        <p className="text-center font-mono text-[11px] tracking-[0.2em] text-paper/40 uppercase">
          What I work with
        </p>
        <div className="mt-4 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <ul className="flex shrink-0 animate-marquee items-center">
            {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
              <li
                key={i}
                aria-hidden={i >= skills.length}
                className="flex items-center gap-8 pr-8 font-display text-xl font-bold whitespace-nowrap text-paper/45 sm:text-2xl"
              >
                {skill}
                <span className="text-blue">*</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
