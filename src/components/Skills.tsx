"use client";

import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import Reveal from "./Reveal";
import SectionRule from "./SectionRule";
import {
  HackingVisual,
  MobileVisual,
  NetworkVisual,
  SecurityVisual,
  WebVisual,
} from "./SkillVisuals";
import styles from "./Skills.module.css";

type Skill = {
  name: string;
  /** **bold** marks phrases to emphasise, like learn3d's module copy */
  body: string;
  deliver: string;
  // TODO: confirm each tool list with Hilary before launch.
  tools: string[];
  /** Stage circle colour behind the visual, after buckssauce's per-product circles */
  circle: string;
  visual: ReactNode;
};

const skills: Skill[] = [
  {
    name: "Networking",
    body: "**Designing, configuring and troubleshooting networks** that stay fast and reliable. From small office LANs to **routed, segmented infrastructure** with VLANs, subnetting and clean documentation, so the network is easy to run and easy to grow.",
    deliver: "A documented, tested network that scales with you.",
    tools: ["Cisco IOS", "Packet Tracer", "Wireshark", "TCP/IP"],
    circle: "var(--blue)",
    visual: <NetworkVisual />,
  },
  {
    name: "Network security",
    body: "**Hardening networks so threats get stopped at the edge.** Firewall rules, segmentation, VPNs and monitoring, plus **a clear read on what is exposed** and what to close first.",
    deliver: "A hardened setup and a report of what changed and why.",
    tools: ["pfSense", "VPN / IPsec", "Snort IDS", "SIEM"],
    circle: "var(--paper)",
    visual: <SecurityVisual />,
  },
  {
    name: "Ethical hacking",
    body: "**Thinking like an attacker, with permission.** Recon, scanning and exploitation in authorised tests to **find weaknesses before someone else does**, then explaining them in plain language.",
    deliver: "A prioritised findings report with practical fixes.",
    tools: ["Kali Linux", "Nmap", "Burp Suite", "Metasploit"],
    circle: "var(--blue-soft)",
    visual: <HackingVisual />,
  },
  {
    name: "Mobile development",
    body: "**Cross-platform apps that feel native.** Clean interfaces, offline support and **secure handling of user data**, built once and shipped to both Android and iOS.",
    deliver: "A polished app ready for the Play Store and App Store.",
    tools: ["Flutter", "Dart", "Kotlin", "Firebase"],
    circle: "var(--blue-deep)",
    visual: <MobileVisual />,
  },
  {
    name: "Web development",
    body: "**Fast, accessible websites and web apps,** from landing pages to full-stack dashboards. Every build is **secure by default** and tuned to load quickly on any device.",
    deliver: "A responsive site that loads fast and holds up under attack.",
    tools: ["React", "Next.js", "TypeScript", "Node.js"],
    circle: "var(--blue)",
    visual: <WebVisual />,
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

function rich(text: string) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

function Arrow({ flip }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden style={flip ? { transform: "scaleX(-1)" } : undefined}>
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

function Spark() {
  return (
    <svg viewBox="0 0 40 40" className={styles.spark} aria-hidden>
      <path
        d="M20 3v13M20 24v13M3 20h13M24 20h13M8 8l8 8M24 24l8 8M32 8l-8 8M16 24l-8 8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 01 / 05 where each digit rolls up when it changes, after buckssauce's split numbers. */
function Counter({ value }: { value: number }) {
  return (
    <div aria-live="polite">
      <span className="sr-only">
        Skill {value} of {skills.length}
      </span>
      <span aria-hidden className={styles.counter}>
        {pad(value)
          .split("")
          .map((digit, i) => (
            <span key={i} className={styles.digit}>
              <span key={digit}>{digit}</span>
            </span>
          ))}
        <small>/ {pad(skills.length)}</small>
      </span>
    </div>
  );
}

function MarqueeUnit({ hidden }: { hidden?: boolean }) {
  return (
    <div className={styles.unit} aria-hidden={hidden}>
      <span>Skills</span>
      <span className={styles.script}>toolkit</span>
      <span className={styles.caption}>
        From cables
        <br />
        to code
        <br />
        and back
      </span>
      <span className={styles.outline}>Skills</span>
    </div>
  );
}

/** Pile offset for cards already passed, queue offset for cards still to come. */
function slideStyle(i: number, active: number, drag: number): CSSProperties {
  const d = i - active;
  if (d < 0) {
    const depth = Math.min(-d, 3);
    return {
      "--x": `${-depth * 10}px`,
      "--y": `${depth * 10}px`,
      "--s": 1 - depth * 0.03,
      "--z": i,
      opacity: -d > 3 ? 0 : 1,
    } as CSSProperties;
  }
  return {
    "--x": `calc(${d} * (100% + var(--gap)) + ${drag}px)`,
    "--y": "0px",
    "--s": 1,
    "--z": i,
  } as CSSProperties;
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  const last = skills.length - 1;

  const go = useCallback(
    (index: number) => setActive(Math.max(0, Math.min(last, index))),
    [last],
  );

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    start.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const s = start.current;
    if (!s || s.id !== e.pointerId) return;
    const dx = e.clientX - s.x;
    if (!dragging) {
      // Only take over horizontal gestures; vertical ones keep scrolling the page
      if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(e.clientY - s.y)) return;
      setDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    // Resist at the ends
    const atEdge = (dx > 0 && active === 0) || (dx < 0 && active === last);
    setDrag(atEdge ? dx * 0.25 : dx);
  };

  const onPointerUp = () => {
    if (dragging) {
      if (drag < -60) go(active + 1);
      else if (drag > 60) go(active - 1);
    }
    start.current = null;
    setDragging(false);
    setDrag(0);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    }
  };

  const onBarClick = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    go(Math.floor(((e.clientX - r.left) / r.width) * skills.length));
  };

  const bar = (
    <div className={styles.bar} onClick={onBarClick} aria-hidden>
      <span style={{ transform: `scaleX(${(active + 1) / skills.length})` }} />
    </div>
  );

  const current = skills[active];

  return (
    <Reveal className={styles.band}>
      <section id="skills" data-nav-label="Skills" aria-labelledby="skills-heading">
        <SectionRule index="03" path="skills" label="What I do" position="26.7%" />

        <div className={styles.marquee}>
          <div className={styles.track}>
            <MarqueeUnit />
            <MarqueeUnit hidden />
            <MarqueeUnit hidden />
            <MarqueeUnit hidden />
          </div>
        </div>

        <div className={styles.head}>
          <h2 className={styles.title} id="skills-heading">
            <span>From cables to code</span>
            <span className={styles.accent}>
              skill by skill
              <Spark />
            </span>
          </h2>
          <p className={styles.lead}>
            <strong>Five disciplines, one mindset:</strong> build it properly, then
            try to break it before anyone else does.
          </p>
        </div>

        <div className={styles.program}>
          <div
            className={styles.stage}
            data-step={active % 2 ? "odd" : "even"}
            style={{ "--circle": current.circle } as CSSProperties}
            aria-hidden
          >
            <span className={styles.stageLabel}>
              Now showing <b>{current.name}</b>
            </span>
            <div className={styles.ring} />
            <div className={styles.circle} />
            {skills.map((skill, i) => (
              <div key={skill.name} className={styles.scene} data-active={i === active}>
                <div className={styles.screen}>{skill.visual}</div>
              </div>
            ))}
            <span key={`a-${active}`} className={`${styles.sticker} ${styles.stickerA}`}>
              {current.tools[0]}
            </span>
            <span key={`b-${active}`} className={`${styles.sticker} ${styles.stickerB}`}>
              {current.tools[1]}
            </span>
          </div>

          <div>
            <div className={styles.deckWrap}>
              <div
                className={styles.deck}
                role="region"
                aria-roledescription="carousel"
                aria-label="Skills"
                tabIndex={0}
                data-dragging={dragging}
                onKeyDown={onKeyDown}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
              >
                {skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className={styles.slide}
                    style={slideStyle(i, active, drag)}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${skills.length}: ${skill.name}`}
                    aria-hidden={i !== active}
                    inert={i !== active}
                  >
                    <article className={styles.card} data-tone={i % 2 ? "dark" : "light"}>
                      <p className={styles.kicker}>Skill {i + 1}</p>
                      <h3 className={styles.cardTitle}>{skill.name}</h3>
                      <p className={styles.body}>{rich(skill.body)}</p>
                      <div className={styles.cardFoot}>
                        <div>
                          <p className={styles.footLabel}>What you get:</p>
                          <p className={styles.deliver}>{skill.deliver}</p>
                        </div>
                        <div>
                          <p className={styles.footLabel}>Tools:</p>
                          <ul className={styles.tools}>
                            {skill.tools.map((tool) => (
                              <li key={tool}>{tool}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className={`${styles.arrow} ${styles.prev}`}
                onClick={() => go(active - 1)}
                disabled={active === 0}
                aria-label="Previous skill"
              >
                <Arrow flip />
              </button>
              <button
                type="button"
                className={`${styles.arrow} ${styles.next}`}
                onClick={() => go(active + 1)}
                disabled={active === last}
                aria-label="Next skill"
              >
                <Arrow />
              </button>
            </div>

            <div className={styles.nav}>
              {bar}
              <div className={styles.navButtons}>
                <button
                  type="button"
                  onClick={() => go(active - 1)}
                  disabled={active === 0}
                  aria-label="Previous skill"
                >
                  <Arrow flip />
                </button>
                {bar}
                <button
                  type="button"
                  onClick={() => go(active + 1)}
                  disabled={active === last}
                  aria-label="Next skill"
                >
                  <Arrow />
                </button>
              </div>
              <Counter value={active + 1} />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
