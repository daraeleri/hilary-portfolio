import Reveal from "./Reveal";
import SectionRule from "./SectionRule";
import styles from "./Projects.module.css";

type Project = {
  title: string;
  kind: string;
  blurb: string;
  tools: string[];
  /** Optional link (repo, case study). Rows without one aren't clickable. */
  href?: string;
};

// TODO: placeholder entries that mirror the five skills. Replace each with one
// of Hilary's real projects (title, one line, tools, link) before launch.
const projects: Project[] = [
  {
    title: "Segmented office network",
    kind: "Networking",
    blurb: "Subnetted, documented and tested end to end.",
    tools: ["VLANs", "Cisco IOS", "Packet Tracer"],
  },
  {
    title: "Firewall & VPN hardening",
    kind: "Network security",
    blurb: "Threats stopped at the edge, with a clear change log.",
    tools: ["pfSense", "IPsec", "Snort"],
  },
  {
    title: "Authorised pentest report",
    kind: "Ethical hacking",
    blurb: "Weaknesses found first, explained in plain language.",
    tools: ["Kali", "Nmap", "Burp Suite"],
  },
  {
    title: "Cross-platform mobile app",
    kind: "Mobile development",
    blurb: "One codebase, native feel on Android and iOS.",
    tools: ["Flutter", "Firebase"],
  },
  {
    title: "Secure web dashboard",
    kind: "Web development",
    blurb: "Fast, accessible and secure by default.",
    tools: ["Next.js", "TypeScript"],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

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

/**
 * Selected work as an index list: big numbered titles that fill with blue on
 * hover. Pure CSS, no client JavaScript beyond the shared Reveal.
 */
export default function Projects() {
  return (
    <Reveal className={styles.band}>
      <section
        id="projects"
        data-nav-label="Projects"
        aria-labelledby="projects-heading"
      >
        <SectionRule index="04" path="projects" label="Selected work" />

        <div className={styles.head}>
          <h2 className={styles.title} id="projects-heading">
            <span>Built, tested</span>
            <span className={styles.accent}>and broken on purpose</span>
          </h2>
          <p className={styles.lead}>
            <strong>A few things I&apos;ve shipped,</strong> from networks to
            apps. Each one built properly, then attacked before it went live.
          </p>
        </div>

        <ol className={styles.list}>
          {projects.map((project, i) => (
            <li key={project.title} className={styles.row}>
              <span aria-hidden className={styles.no}>
                {pad(i + 1)}
              </span>
              <div className={styles.main}>
                <h3 className={styles.name}>{project.title}</h3>
                <p className={styles.blurb}>{project.blurb}</p>
              </div>
              <p className={styles.kind}>{project.kind}</p>
              <ul className={styles.tools}>
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              {project.href ? (
                <a
                  className={styles.go}
                  href={project.href}
                  aria-label={`Open ${project.title}`}
                >
                  <Arrow />
                </a>
              ) : (
                <span aria-hidden className={styles.go} data-idle />
              )}
            </li>
          ))}
        </ol>

        <div className={styles.cta}>
          <p>Have a network to secure or an app to build?</p>
          <a href="#contact" className={styles.btn}>
            Let&apos;s talk
            <Arrow />
          </a>
        </div>
      </section>
    </Reveal>
  );
}
