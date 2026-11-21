import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import styles from "./Cta.module.css";

const words = ["Let's work together", "Available for work", "Say hello"];

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

function MarqueeUnit({ hidden }: { hidden?: boolean }) {
  return (
    <ul className={styles.unit} aria-hidden={hidden || undefined}>
      {words.map((word) => (
        <li key={word}>
          {word}
          <span className={styles.star}>*</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Full-bleed blue call to action between Projects and Contact: an outlined
 * scrolling line, a big headline with two buttons, and a rotating text badge.
 * Pure CSS motion.
 */
export default function Cta() {
  return (
    <Reveal className={styles.band}>
      <section aria-labelledby="cta-heading">
        <div aria-hidden className={styles.grid} />

        <div className={styles.marquee}>
          <div className={styles.track}>
            <MarqueeUnit />
            <MarqueeUnit hidden />
            <MarqueeUnit hidden />
            <MarqueeUnit hidden />
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.copy}>
            <p className={styles.kicker}>Ready when you are</p>
            <h2 className={styles.title} id="cta-heading">
              Got an idea?
              <br />
              Let&apos;s ship it <span className={styles.ink}>safely.</span>
            </h2>
            <div className={styles.actions}>
              <ArrowButton href="#contact" variant="light">
                Start a project
              </ArrowButton>
              <ArrowButton href="#projects" variant="outline" arrow={false}>
                See my work
              </ArrowButton>
            </div>
          </div>

          <a href="#contact" className={styles.badge} aria-label="Get in touch">
            <svg viewBox="0 0 100 100" aria-hidden className={styles.ring}>
              <defs>
                <path
                  id="cta-ring-path"
                  d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                />
              </defs>
              <text className={styles.ringText}>
                <textPath
                  href="#cta-ring-path"
                  textLength="236"
                  lengthAdjust="spacing"
                >
                  AVAILABLE FOR WORK · LET&apos;S TALK ·&nbsp;
                </textPath>
              </text>
            </svg>
            <span aria-hidden className={styles.core}>
              <Arrow />
            </span>
          </a>
        </div>
      </section>
    </Reveal>
  );
}
