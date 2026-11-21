import { cacheLife } from "next/cache";
import { email, navLinks, socials } from "@/data/site";
import Reveal from "./Reveal";
import styles from "./Footer.module.css";

/**
 * The current year. With Cache Components on, reading the date during
 * prerender is an error, so it is cached (and refreshed daily) instead.
 */
async function Year() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

/**
 * Site footer: a short sign-off, nav, profile links and email, then a giant
 * stretched wordmark and the legal line. The wordmark animation is CSS driven
 * by the shared Reveal wrapper.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <p className={styles.tagline}>
          Secure networks.
          <br />
          <span>Sharp apps.</span>
        </p>

        <nav aria-label="Footer" className={styles.col}>
          <h2 className={styles.colTitle}>Navigate</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Elsewhere</h2>
          <ul>
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {social.label}
                  <span aria-hidden> ↗</span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${email}`} className={styles.link}>
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/*
        Stretched to the full width with textLength, so it fits at any size.
        Once it scrolls into view the letters rise from the bottom edge while
        fading up to full white, then the asterisk fades in.
      */}
      <Reveal className={styles.markWrap}>
        <svg
          viewBox="0 0 1000 250"
          className={styles.mark}
          role="img"
          aria-label="Hilary"
        >
          <g className={styles.markGroup}>
            <text
              x="0"
              y="240"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              className={styles.markText}
            >
              HILARY<tspan className={styles.markStar}>*</tspan>
            </text>
          </g>
        </svg>
      </Reveal>

      <div className={styles.bottom}>
        <p>
          © <Year /> Tangunu Hilary
        </p>
        <a href="#top" className={styles.link}>
          Back to top <span aria-hidden>↑</span>
        </a>
      </div>
    </footer>
  );
}
