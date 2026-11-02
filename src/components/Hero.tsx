import Image from "next/image";

const skills = [
  "Networking",
  "Network Security",
  "Ethical Hacking",
  "Mobile Development",
  "Web Development",
];

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

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 4.5L8 8.5l5.5-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
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

export default function Hero() {
  return (
    <section
      id="top"
      data-nav-label="Home"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink"
    >
      {/* Faint dot grid: a nod to network topology */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      {/* Thick ribbon swoosh, after beetogreen's hero stroke */}
      <svg
        aria-hidden
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 -z-10 size-full"
      >
        <path
          d="M -160 980 C 60 560 220 120 420 230 C 620 340 360 760 640 790 C 920 820 900 250 1160 250 C 1360 250 1420 560 1620 520"
          fill="none"
          stroke="var(--blue-deep)"
          strokeWidth="130"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          className="animate-draw"
        />
      </svg>

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-6 px-6 pt-28 lg:grid-cols-[1.15fr_1fr] lg:pt-20">
        <div className="relative z-10 text-center lg:text-left">
          {/* Logomint-style badge */}
          <p className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-line bg-paper/5 py-1.5 pr-4 pl-1.5 text-xs text-paper/80 backdrop-blur sm:text-sm">
            <span className="grid size-6 place-items-center rounded-full bg-blue font-display text-sm font-bold text-paper">
              *
            </span>
            Hi, I&apos;m <strong className="font-semibold text-paper">Tangunu Hilary</strong>
          </p>
          <h1 className="mt-6 animate-rise font-display text-5xl leading-[0.95] font-extrabold tracking-tight [animation-delay:120ms] sm:text-7xl xl:text-8xl">
            Secure networks.
            <br />
            <span className="text-blue-soft">Sharp apps.</span>
            <span className="text-blue">*</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md animate-rise text-base leading-relaxed text-paper/80 [animation-delay:240ms] sm:text-lg lg:mx-0">
            <span className="text-blue">*</span>Network security &amp; ethical
            hacking by day, mobile &amp; web development by night.
          </p>
          <div className="mt-8 flex animate-rise flex-wrap items-center justify-center gap-3 [animation-delay:360ms] lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-blue py-3 pr-5 pl-6 text-sm font-semibold text-paper shadow-[0_10px_30px_-10px_var(--blue)] transition-colors hover:bg-blue-soft hover:text-ink"
            >
              View my work
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-paper/10 py-3 pr-5 pl-6 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Get in touch
              <MailIcon />
            </a>
          </div>
          <p className="mt-6 animate-rise text-xs text-paper/50 [animation-delay:480ms] sm:text-sm">
            Internships · Freelance · Collaborations ·{" "}
            <a
              href="#contact"
              className="text-paper/80 underline decoration-paper/30 underline-offset-4 hover:text-paper hover:decoration-blue"
            >
              Let&apos;s talk
            </a>
          </p>
        </div>

        {/* Portrait rests its arms on the skills band below */}
        <div className="relative mx-auto w-full max-w-sm self-end sm:max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-x-[10%] top-[15%] bottom-0 -z-10 rounded-full bg-blue/40 blur-3xl"
          />
          <Image
            src="/images/hilary.png"
            alt="Tangunu Hilary smiling, wearing a flat cap and a cream sweater"
            width={1213}
            height={1296}
            preload
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 24rem"
            className="relative block h-auto w-full animate-rise [animation-delay:200ms]"
          />

          {/* Floating chips, after logomint's overlay pills */}
          <div className="absolute top-[48%] right-0 animate-rise lg:top-[18%] [animation-delay:700ms] sm:-right-4">
            <div className="flex animate-float items-center gap-2 rounded-full border border-line bg-ink/70 py-2 pr-4 pl-2.5 text-xs font-medium text-paper backdrop-blur-md">
              <span className="grid size-7 place-items-center rounded-full bg-blue/20 text-blue-soft">
                <ShieldIcon />
              </span>
              Network secured
            </div>
          </div>
          <div className="absolute bottom-[26%] left-0 animate-rise [animation-delay:850ms] sm:-left-6">
            <div className="animate-float rounded-xl border border-line bg-ink/80 px-3.5 py-2.5 font-mono text-[11px] leading-relaxed text-paper/80 backdrop-blur-md [animation-delay:-2.5s]">
              <span className="text-blue-soft">$</span> whoami
              <br />
              <span className="text-paper">hilary</span>
              <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-blue" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden bg-blue py-5 text-paper">
        <ul className="flex shrink-0 animate-marquee items-center">
          {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
            <li
              key={i}
              aria-hidden={i >= skills.length}
              className="flex items-center gap-8 pr-8 font-display text-xl font-bold whitespace-nowrap sm:text-2xl"
            >
              {skill}
              <span className="text-ink">*</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
