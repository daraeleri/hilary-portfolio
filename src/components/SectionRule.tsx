import type { CSSProperties } from "react";
import styles from "./SectionRule.module.css";

/** `//02 ——— + ——— / about` header line shared by the numbered sections. */
export default function SectionRule({
  index,
  path,
  label,
  position = "73.3%",
}: {
  index: string;
  path: string;
  label: string;
  /** Where the + marker and label sit along the line on desktop. */
  position?: string;
}) {
  return (
    <div
      className={styles.rule}
      style={{ "--rule-position": position } as CSSProperties}
      aria-hidden
    >
      <span className={styles.index}>{`//${index}`}</span>
      <svg viewBox="0 0 7 7" className={styles.plus}>
        <path d="M2.93 7V0h1.14v7H2.93ZM0 4.07V2.93h7v1.14H0Z" fill="currentColor" />
      </svg>
      <span className={styles.path}>{`/ ${path}`}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
