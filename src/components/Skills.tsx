import type { CSSProperties, ReactNode } from "react";
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
  /** Folder colour, from the brand palette */
  file: string;
  /** Text colour that reads on that folder */
  on: string;
  visual: ReactNode;
};

const skills: Skill[] = [
  {
    name: "Networking",
    body: "**Designing, configuring and troubleshooting networks** that stay fast and reliable. From small office LANs to **routed, segmented infrastructure** with VLANs, subnetting and clean documentation, so the network is easy to run and easy to grow.",
    deliver: "A documented, tested network that scales with you.",
    tools: ["Cisco IOS", "Packet Tracer", "Wireshark", "TCP/IP"],
    file: "var(--blue)",
    on: "var(--paper)",
    visual: <NetworkVisual />,
  },
  {
    name: "Network security",
    body: "**Hardening networks so threats get stopped at the edge.** Firewall rules, segmentation, VPNs and monitoring, plus **a clear read on what is exposed** and what to close first.",
    deliver: "A hardened setup and a report of what changed and why.",
    tools: ["pfSense", "VPN / IPsec", "Snort IDS", "SIEM"],
    file: "var(--paper)",
    on: "var(--ink)",
    visual: <SecurityVisual />,
  },
  {
    name: "Ethical hacking",
    body: "**Thinking like an attacker, with permission.** Recon, scanning and exploitation in authorised tests to **find weaknesses before someone else does**, then explaining them in plain language.",
    deliver: "A prioritised findings report with practical fixes.",
    tools: ["Kali Linux", "Nmap", "Burp Suite", "Metasploit"],
    file: "var(--blue-soft)",
    on: "var(--ink)",
    visual: <HackingVisual />,
  },
  {
    name: "Mobile development",
    body: "**Cross-platform apps that feel native.** Clean interfaces, offline support and **secure handling of user data**, built once and shipped to both Android and iOS.",
    deliver: "A polished app ready for the Play Store and App Store.",
    tools: ["Flutter", "Dart", "Kotlin", "Firebase"],
    file: "var(--blue-deep)",
    on: "var(--paper)",
    visual: <MobileVisual />,
  },
  {
    name: "Web development",
    body: "**Fast, accessible websites and web apps,** from landing pages to full-stack dashboards. Every build is **secure by default** and tuned to load quickly on any device.",
    deliver: "A responsive site that loads fast and holds up under attack.",
    tools: ["React", "Next.js", "TypeScript", "Node.js"],
    file: "var(--blue)",
    on: "var(--paper)",
    visual: <WebVisual />,
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

function rich(text: string) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
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

function FolderIcon() {
  return (
    <svg viewBox="0 0 20 16" className={styles.folderIcon} aria-hidden>
      <path
        d="M0 3.2A3.2 3.2 0 0 1 3.2 0h3.1c.9 0 1.7.4 2.3 1l1.1 1.4h7.1A3.2 3.2 0 0 1 20 5.6v7.2a3.2 3.2 0 0 1-3.2 3.2H3.2A3.2 3.2 0 0 1 0 12.8V3.2Z"
        fill="currentColor"
      />
    </svg>
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

/**
 * Skills as a stack of folders after the reference folder-card design: every
 * file pins at the same spot, its tab sitting in the strip above the sheet, so
 * the earlier tabs stay visible in a staggered row while the newest sheet
 * covers everything below them. Pure CSS (position: sticky), no JavaScript.
 */
export default function Skills() {
  return (
    <Reveal className={styles.band}>
      <section
        id="skills"
        data-nav-label="Skills"
        aria-labelledby="skills-heading"
      >
        <SectionRule
          index="03"
          path="skills"
          label="What I do"
          position="26.7%"
        />

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
            <strong>Five disciplines, one mindset:</strong> build it properly,
            then try to break it before anyone else does.
          </p>
        </div>

        <ol className={styles.files}>
          {skills.map((skill, i) => (
            <li
              key={skill.name}
              className={styles.file}
              style={
                {
                  "--i": i,
                  "--file": skill.file,
                  "--on": skill.on,
                } as CSSProperties
              }
            >
              <div className={styles.folder}>
                <span aria-hidden className={styles.tab}>
                  <FolderIcon />
                  <b>{pad(i + 1)}</b>
                  <span className={styles.tabSep}>·</span>
                  <span className={styles.tabName}>{skill.name}</span>
                </span>
                <article className={styles.sheet}>
                  <div className={styles.copy}>
                    <p aria-hidden className={styles.meta}>
                      <span className={styles.metaName}>
                        <i className={styles.dot} />
                        {skill.name}
                      </span>
                      <span>
                        {pad(i + 1)} / {pad(skills.length)}
                      </span>
                    </p>
                    <h3 className={styles.cardTitle}>{skill.name}</h3>
                    <p className={styles.body}>{rich(skill.body)}</p>
                    <div className={styles.cardFoot}>
                      <div>
                        <p className={styles.footLabel}>What you get</p>
                        <p className={styles.deliver}>{skill.deliver}</p>
                      </div>
                      <div>
                        <p className={styles.footLabel}>Tools</p>
                        <ul className={styles.tools}>
                          {skill.tools.map((tool) => (
                            <li key={tool}>{tool}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden className={styles.shot}>
                    <div className={styles.frame}>
                      <div className={styles.screen}>{skill.visual}</div>
                    </div>
                  </div>
                </article>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Reveal>
  );
}
