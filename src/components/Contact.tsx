import Reveal from "./Reveal";
import SectionRule from "./SectionRule";
import styles from "./Contact.module.css";

// TODO: placeholders. Replace with Hilary's real email and profile links
// before launch. The social hrefs are site roots, not real profiles.
const email = "hello@example.com";

const socials = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

const services = [
  "Networking",
  "Network security",
  "Ethical hacking",
  "Mobile development",
  "Web development",
];

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
 * Closing section: a huge email link as the main action, a short list of what
 * Hilary can help with, profile links, and the footer line. Pure CSS motion.
 */
export default function Contact() {
  return (
    <Reveal className={styles.band}>
      <section
        id="contact"
        data-nav-label="Contact"
        aria-labelledby="contact-heading"
      >
        <SectionRule index="05" path="contact" label="Get in touch" />

        <div className={styles.head}>
          <p className={styles.status}>
            <span aria-hidden className={styles.dot} />
            Open to internships, freelance &amp; collaborations
          </p>
          <h2 className={styles.title} id="contact-heading">
            <span>Let&apos;s build</span>
            <span className={styles.accent}>something secure</span>
          </h2>
        </div>

        <a href={`mailto:${email}`} className={styles.mail}>
          <span>{email}</span>
          <span aria-hidden className={styles.mailArrow}>
            <Arrow />
          </span>
        </a>

        <div className={styles.cols}>
          <div>
            <h3 className={styles.colTitle}>How I can help</h3>
            <ul className={styles.plain}>
              {services.map((service) => (
                <li key={service}>
                  <a href="#skills" className={styles.link}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.colTitle}>Elsewhere</h3>
            <ul className={styles.plain}>
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
            </ul>
          </div>
        </div>

        <footer className={styles.foot}>
          <p>© {new Date().getFullYear()} Tangunu Hilary</p>
          <a href="#top" className={styles.link}>
            Back to top <span aria-hidden>↑</span>
          </a>
        </footer>
      </section>
    </Reveal>
  );
}
