import type { CSSProperties } from "react";
import styles from "./Skills.module.css";

/* Grayscale-and-blue illustrations, one per skill card. Purely decorative. */

const nodes = [
  { x: 60, y: 60, label: "PC-01" },
  { x: 60, y: 240, label: "PC-02" },
  { x: 340, y: 60, label: "SRV" },
  { x: 340, y: 240, label: "AP" },
  { x: 200, y: 290, label: "SW-02" },
];

export function NetworkVisual() {
  return (
    <svg viewBox="0 0 400 320" className={styles.topology} aria-hidden>
      {nodes.map((n) => (
        <g key={n.label}>
          <line x1="200" y1="150" x2={n.x} y2={n.y} className={styles.link} />
          <line
            x1="200"
            y1="150"
            x2={n.x}
            y2={n.y}
            className={styles.packet}
            style={{ animationDelay: `${(n.x + n.y) % 7 * -0.3}s` }}
          />
        </g>
      ))}
      {nodes.map((n) => (
        <g key={`${n.label}-node`}>
          <rect x={n.x - 22} y={n.y - 14} width="44" height="28" rx="6" className={styles.node} />
          <text x={n.x} y={n.y + 30} textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}
      <circle cx="200" cy="150" r="30" className={styles.core} />
      <text x="200" y="154" textAnchor="middle" style={{ fill: "#fff" }}>
        CORE
      </text>
    </svg>
  );
}

const logLines = [
  ["ALLOW", "10.0.0.12 → 443/tcp"],
  ["DENY", "185.220.101.4 → 22/tcp"],
  ["ALLOW", "10.0.0.31 → 53/udp"],
  ["ALLOW", "10.0.0.12 → 80/tcp"],
  ["DENY", "45.155.205.9 → 3389/tcp"],
  ["ALLOW", "10.0.2.8 → 1194/udp vpn"],
  ["DENY", "92.63.197.61 → 23/tcp"],
  ["ALLOW", "10.0.0.44 → 443/tcp"],
] as const;

export function SecurityVisual() {
  const lines = [...logLines, ...logLines];
  return (
    <>
      <div className={styles.log} aria-hidden>
        <div className={styles.logTrack}>
          {lines.map(([action, rule], i) => (
            <p key={i} className={action === "DENY" ? styles.deny : undefined}>
              <b>{action}</b>
              {rule}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.shield} aria-hidden>
        <i />
        Firewall active
      </div>
    </>
  );
}

const scan = [
  { text: "nmap -sV 10.0.0.0/24", kind: "prompt" },
  { text: "Starting Nmap scan…" },
  { text: "PORT     STATE  SERVICE" },
  { text: "22/tcp   open   ssh", kind: "open" },
  { text: "80/tcp   open   http", kind: "open" },
  { text: "443/tcp  open   https", kind: "open" },
  { text: "3306/tcp closed mysql" },
  { text: "Report saved → findings.md", kind: "prompt" },
];

export function HackingVisual() {
  return (
    <div className={styles.window} aria-hidden>
      <div className={styles.windowBar}>
        <i />
        <i />
        <i />
        <em>kali@lab: ~</em>
      </div>
      <div className={styles.terminal}>
        {scan.map((line, i) => (
          <p
            key={i}
            className={line.kind ? styles[line.kind] : undefined}
            style={{ "--d": i } as CSSProperties}
          >
            {line.text}
            {i === scan.length - 1 && <span className={styles.cursor} />}
          </p>
        ))}
      </div>
    </div>
  );
}

export function MobileVisual() {
  return (
    <div className={styles.phone} aria-hidden>
      <div className={styles.phoneScreen}>
        <i className={styles.hero} />
        <i className={styles.line} />
        <i className={`${styles.line} ${styles.short}`} />
        <div className={styles.row}>
          <i />
          <i />
        </div>
        <i className={styles.cta} />
      </div>
      <span className={styles.phoneTag}>iOS · Android</span>
    </div>
  );
}

export function WebVisual() {
  return (
    <div className={styles.window} aria-hidden>
      <div className={styles.windowBar}>
        <i />
        <i />
        <i />
        <em>page.tsx</em>
      </div>
      <div className={styles.code}>
        <span className={styles.k}>export default</span> function{" "}
        <span className={styles.s}>Home</span>() {"{\n"}
        {"  "}
        <span className={styles.k}>return</span> (
        {"\n    <"}
        <span className={styles.s}>main</span>
        {">\n      <"}
        <span className={styles.s}>Hero</span>
        {" />\n      <"}
        <span className={styles.s}>Projects</span>
        {" />\n    </"}
        <span className={styles.s}>main</span>
        {">\n  );\n}\n"}
        <span className={styles.c}>{"// fast, accessible, secure"}</span>
      </div>
    </div>
  );
}
