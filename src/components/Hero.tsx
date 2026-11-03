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

/** Handwritten note with a drawn arrow curling towards the portrait. */
function Note({
  text,
  arrow,
  className,
}: {
  text: string;
  arrow: "left" | "right";
  className?: string;
}) {
  const left = arrow === "left";
  return (
    <div aria-hidden className={className}>
      <p className="animate-rise font-hand text-2xl leading-none font-semibold whitespace-nowrap text-paper/80 [animation-delay:900ms] lg:text-[1.7rem]">
        {text}
      </p>
      <svg
        viewBox="0 0 90 60"
        className={
          left ? "mt-1 ml-auto h-14 w-20" : "mt-1 h-14 w-20 -scale-x-100"
        }
      >
        <path
          d="M8 6 C 30 4 58 14 62 34 C 64 44 56 50 48 44 C 40 38 52 26 70 34 C 78 38 82 46 84 54"
          fill="none"
          stroke="var(--paper)"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          className="animate-draw [animation-delay:1100ms]"
        />
        <path
          d="M76 50 L84 55 L86 46"
          fill="none"
          stroke="var(--paper)"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-rise [animation-delay:1900ms]"
        />
      </svg>
    </div>
  );
}

/**
 * Hero after logomint's: a centred pill, big heading, subtitle, two buttons and
 * a proof line, above a rounded stage the portrait rises out of, with a quiet
 * "what I work with" strip underneath. Creative layer on top: handwritten
 * notes with drawn arrows, a hand-drawn underline, and glass chips on the stage.
 * CSS-only motion, so the portrait (the LCP image) is never held back by JS.
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

        {/* Stage: the portrait rises out of a rounded blue card */}
        <div className="relative mx-auto mt-28 h-[12rem] max-w-5xl animate-rise [animation-delay:250ms] sm:mt-32 sm:h-[17rem] lg:mt-36 lg:h-[20rem]">
          {/* Background layer, clipped on its own so the portrait can rise out of the top */}
          <div
            aria-hidden
            className="absolute inset-0 overflow-hidden rounded-[2rem] bg-blue sm:rounded-[2.5rem]"
          >
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
            <div className="absolute top-1/2 left-1/2 aspect-square w-[70%] -translate-x-1/2 -translate-y-[40%] rounded-full border border-paper/15" />
            <div className="absolute top-1/2 left-1/2 aspect-square w-[105%] -translate-x-1/2 -translate-y-[38%] rounded-full border border-paper/10" />
            <div className="absolute -bottom-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-paper/20 blur-3xl" />
          </div>

          {/* Portrait */}
          <div className="absolute bottom-0 left-1/2 z-10 w-[14rem] -translate-x-1/2 sm:w-[20rem] lg:w-[25rem]">
            <Image
              src="/images/hilary.png"
              alt="Tangunu Hilary smiling, wearing a flat cap and a cream sweater"
              width={1213}
              height={1296}
              preload
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 320px, 224px"
              className="block h-auto w-full animate-rise drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)] [animation-delay:350ms]"
            />
          </div>

          {/* Handwritten notes (desktop) */}
          <Note
            text="I break things (legally)"
            className="absolute -top-20 right-[calc(50%+11rem)] hidden text-right md:block lg:right-[calc(50%+13.5rem)]"
            arrow="left"
          />
          <Note
            text="then build them back stronger"
            className="absolute -top-14 left-[calc(50%+12rem)] hidden md:block lg:left-[calc(50%+14.5rem)]"
            arrow="right"
          />

          {/* Glass chips on the stage */}
          <div className="absolute bottom-5 left-5 z-20 hidden animate-rise rounded-xl bg-ink/50 px-3.5 py-2.5 font-mono text-[11px] leading-relaxed text-paper/80 ring-1 ring-paper/20 backdrop-blur-md [animation-delay:850ms] sm:block lg:bottom-8 lg:left-8">
            <span className="text-blue-soft">$</span> whoami
            <br />
            <span className="text-paper">hilary</span>
            <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-paper" />
          </div>

          <div className="absolute top-5 right-5 z-20 hidden animate-rise [animation-delay:700ms] sm:block lg:top-8 lg:right-8">
            <div className="flex animate-float items-center gap-2 rounded-full bg-paper/12 py-2 pr-4 pl-2.5 text-xs font-medium text-paper ring-1 ring-paper/25 backdrop-blur-md">
              <span className="grid size-7 place-items-center rounded-full bg-paper/15 text-paper">
                <ShieldIcon />
              </span>
              Network secured
            </div>
          </div>

          <dl className="absolute right-5 bottom-5 z-20 hidden animate-rise rounded-2xl bg-paper/12 px-4 py-3 text-paper ring-1 ring-paper/25 backdrop-blur-md [animation-delay:950ms] sm:block lg:right-8 lg:bottom-8">
            <dt className="sr-only">Core disciplines</dt>
            <dd className="font-display text-3xl leading-none font-bold">
              {skills.length}
            </dd>
            <dd aria-hidden className="mt-1 text-xs text-paper/80">
              Core disciplines
            </dd>
          </dl>
        </div>
      </div>

      {/* Quiet strip after logomint's client logos: what I work with */}
      <div className="mt-16 border-y border-line py-6 sm:mt-20">
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
