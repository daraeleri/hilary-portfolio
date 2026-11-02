"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
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
  /** Title split so the second line renders in outline type */
  title: [string, string];
  description: string;
  // TODO: confirm each tool list with Hilary before launch.
  tools: string[];
  deliver: string;
  visual: ReactNode;
};

const skills: Skill[] = [
  {
    name: "Networking",
    title: ["Network", "engineering"],
    description:
      "Designing, configuring and troubleshooting networks that stay fast and reliable, from small office LANs to routed, segmented infrastructure.",
    tools: ["Cisco IOS", "Packet Tracer", "Wireshark", "VLANs & subnetting", "TCP/IP"],
    deliver: "A documented, tested network that scales with you.",
    visual: <NetworkVisual />,
  },
  {
    name: "Network security",
    title: ["Network", "security"],
    description:
      "Hardening networks with firewalls, segmentation, VPNs and monitoring, so threats get stopped at the edge instead of discovered later.",
    tools: ["pfSense", "Firewall rules", "VPN / IPsec", "Snort IDS", "SIEM basics"],
    deliver: "A hardened setup and a clear report of what changed and why.",
    visual: <SecurityVisual />,
  },
  {
    name: "Ethical hacking",
    title: ["Ethical", "hacking"],
    description:
      "Thinking like an attacker in authorised tests: recon, scanning and exploitation to find weaknesses before someone else does.",
    tools: ["Kali Linux", "Nmap", "Burp Suite", "Metasploit", "OWASP Top 10"],
    deliver: "A prioritised findings report with practical fixes.",
    visual: <HackingVisual />,
  },
  {
    name: "Mobile dev",
    title: ["Mobile", "development"],
    description:
      "Cross-platform mobile apps with clean interfaces, offline support and secure handling of user data.",
    tools: ["Flutter", "Dart", "Kotlin", "Firebase", "REST APIs"],
    deliver: "A polished app ready for the Play Store and App Store.",
    visual: <MobileVisual />,
  },
  {
    name: "Web dev",
    title: ["Web", "development"],
    description:
      "Fast, accessible websites and web apps, from landing pages to full-stack dashboards, secure by default.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    deliver: "A responsive site that loads fast and holds up under attack.",
    visual: <WebVisual />,
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

/** 01 / 05 where each digit rolls up when it changes. */
function Counter({ value }: { value: number }) {
  return (
    <span className={styles.counter} aria-label={`${value} of ${skills.length}`}>
      {pad(value)
        .split("")
        .map((digit, i) => (
          <span key={i} className={styles.digit}>
            <span key={digit}>{digit}</span>
          </span>
        ))}
      <small>/ {pad(skills.length)}</small>
    </span>
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

export default function Skills() {
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // Stack effect: a card shrinks and dims as the next one slides over it,
  // and the index follows whichever card is on top.
  useEffect(() => {
    let frame = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      frame = 0;
      const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
      let current = 0;
      cards.forEach((card, i) => {
        const stickTop = parseFloat(getComputedStyle(card).top) || 0;
        if (card.getBoundingClientRect().top <= stickTop + card.offsetHeight / 2) current = i;
        const next = cards[i + 1];
        if (!next || reduce) return;
        const covered = Math.min(
          Math.max(1 - (next.getBoundingClientRect().top - stickTop) / card.offsetHeight, 0),
          1,
        );
        card.style.transform = `scale(${1 - covered * 0.06})`;
        card.style.filter = `brightness(${1 - covered * 0.55})`;
      });
      setActive(current);
    };

    // A card taller than the screen (phones) sticks only once its bottom
    // edge is visible, so it is fully readable before the next one covers it.
    const measure = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        card.style.top = "";
        const baseTop = parseFloat(getComputedStyle(card).top) || 0;
        // Leave room for the fixed nav pill at the bottom
        const fitTop = window.innerHeight - card.offsetHeight - 88;
        if (fitTop < baseTop) card.style.top = `${fitTop}px`;
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    // Card heights shift once the display fonts finish loading
    document.fonts?.ready.then(onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

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

        <div className={styles.intro}>
          <p className={styles.count}>
            ( <strong>{pad(skills.length)}</strong> disciplines )
          </p>
          <p className={styles.lead} id="skills-heading">
            Five disciplines, one mindset.{" "}
            <span>Build it properly, then try to break it before anyone else does.</span>
          </p>
        </div>

        <div className={styles.deck}>
          <aside className={styles.index} aria-hidden>
            <ol className={styles.indexList}>
              {skills.map((skill, i) => (
                <li key={skill.name} className={styles.indexItem} data-active={i === active}>
                  <span>{pad(i + 1)}</span>
                  {skill.name}
                </li>
              ))}
            </ol>
            <div className={styles.progress}>
              <div className={styles.bar}>
                <span style={{ transform: `scaleX(${(active + 1) / skills.length})` }} />
              </div>
              <Counter value={active + 1} />
            </div>
          </aside>

          <div className={styles.cards}>
            {skills.map((skill, i) => (
              <article
                key={skill.name}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className={styles.card}
                style={{ "--i": i } as CSSProperties}
              >
                <div className={styles.cardText}>
                  <div className={styles.cardMeta} aria-hidden>
                    <div className={styles.bar}>
                      <span style={{ transform: `scaleX(${(i + 1) / skills.length})` }} />
                    </div>
                    <Counter value={i + 1} />
                  </div>
                  <p className={styles.pill}>Skill {pad(i + 1)}</p>
                  <h3 className={styles.title}>
                    {skill.title[0]}
                    <br />
                    <span>{skill.title[1]}</span>
                  </h3>
                  <p className={styles.description}>{skill.description}</p>
                  <p className={styles.toolsLabel}>Tools</p>
                  <ul className={styles.tools}>
                    {skill.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                  <div className={styles.deliver}>
                    <h4>What you get</h4>
                    <p>{skill.deliver}</p>
                  </div>
                </div>
                <div className={styles.visual}>
                  <div className={styles.visualInner}>{skill.visual}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
