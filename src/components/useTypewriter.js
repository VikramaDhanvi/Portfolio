import { useEffect, useState } from "react";

/**
 * Typewriter hook with pause both after typing AND after deleting.
 *
 * @param {string[]} words  phrases to loop through
 * @param {number} type     ms between typing keystrokes
 * @param {number} back     ms between deleting keystrokes
 * @param {number} pause    ms to pause after a word is typed or deleted
 */
export default function useTypewriter(
  words = [],
  type = 80,
  back = 50,
  pause = 1500
) {
  const [index, setIndex] = useState(0);   // which word
  const [sub, setSub]     = useState(""); // current substring
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    if (!words.length) return;
    const full = words[index % words.length];

    let timeout;

    switch (phase) {
      /* 1 ───────────────────────────────── typing */
      case "typing": {
        if (sub.length < full.length) {
          timeout = setTimeout(
            () => setSub(full.slice(0, sub.length + 1)),
            type
          );
        } else {
          timeout = setTimeout(() => setPhase("deleting"), pause);
        }
        break;
      }

      /* 2 ───────────────────────────────── deleting */
      case "deleting": {
        if (sub.length > 0) {
          timeout = setTimeout(
            () => setSub(full.slice(0, sub.length - 1)),
            back
          );
        } else {
          // finished deleting – wait, then move to next word
          timeout = setTimeout(() => {
            setIndex(i => i + 1);
            setPhase("typing");
          }, pause);
        }
        break;
      }

      default:
        break;
    }

    return () => clearTimeout(timeout);
  }, [words, type, back, pause, sub, phase, index]);

  return sub;
}
