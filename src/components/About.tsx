import Image from "next/image";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import styles from "./About.module.css";

const roles = [
  "Network engineer,",
  "Security analyst,",
  "Ethical hacker,",
  "Mobile & web dev",
];

// TODO: confirm these numbers with Hilary before launch.
const stats = [
  { value: 5, label: "Core tech disciplines" },
  { value: 20, label: "Projects built", href: "#projects" },
  { value: 3, label: "Years of hands-on practice" },
];

function Bullet() {
  return (
    <svg viewBox="0 0 16 16" className={styles.bullet} aria-hidden>
      <path
        d="M8 1v14M2 4.5l12 7M14 4.5l-12 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Layout after section 08 ("About Stefan") of learn3d.ai/en/ai-x-3d-environments. */
export default function About() {
  return (
    <Reveal className={styles.band}>
      <section id="about" data-nav-label="About" className={styles.about}>
        <div className={styles.rule} aria-hidden>
          <span className={styles.ruleIndex}>{"//02"}</span>
          <svg viewBox="0 0 7 7" className={styles.rulePlus}>
            <path d="M2.93 7V0h1.14v7H2.93ZM0 4.07V2.93h7v1.14H0Z" fill="currentColor" />
          </svg>
          <span className={styles.rulePath}>/ about</span>
          <span className={styles.ruleLabel}>About Hilary</span>
        </div>

        <h2 className={styles.name}>
          <span className={styles.mask}>
            <span>Tangunu</span>
          </span>
          <span className={styles.mask}>
            <span>Hilary</span>
          </span>
        </h2>

        <div className={styles.pipeline}>
          <p>Secure networks and sharp apps, built and broken on purpose.</p>
          <p>Every system gets tested the way a real attacker would approach it.</p>
        </div>

        <span className={styles.signature} aria-hidden>
          Hilary
        </span>

        <div className={styles.photo}>
          <Image
            src="/images/hilary.png"
            alt="Black-and-white portrait of Tangunu Hilary"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>

        <div className={styles.roles}>
          <span aria-hidden>(</span>
          <p>
            {roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </p>
          <span aria-hidden>)</span>
        </div>

        <div className={styles.intro}>
          <p>
            I work where networks, security and software meet.
          </p>
          <p>
            From hardening networks to pentesting and shipping mobile and web
            apps, I own systems from the cables to the code.
          </p>
        </div>

        <dl className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={stat.href ? styles.linkedStat : undefined}>
              <dt>
                {stat.href ? (
                  <a href={stat.href} className={styles.link}>
                    {stat.label}
                  </a>
                ) : (
                  stat.label
                )}
              </dt>
              <dd>
                <CountUp value={stat.value} />
                <span className={styles.plus}>+</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className={styles.notes}>
          <div>
            <Bullet />
            <p>
              <strong>
                <a href="#skills" className={styles.link}>
                  / Security first
                </a>
              </strong>{" "}
              — every app I build is tested like an attacker would.
            </p>
          </div>
          <div>
            <Bullet />
            <p>
              <strong>/ Always learning</strong> — new labs, tools and
              projects every week.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
