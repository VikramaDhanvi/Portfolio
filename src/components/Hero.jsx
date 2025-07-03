import React from "react";
import { motion } from "framer-motion";
import useTypewriter from "../hooks/useTypewriter";

const accent = "#c084fc"; // highlight color

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const NAV = 72;
  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + start - NAV;
  const t0 = performance.now();
  const ease = (t) =>
    t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (now) => {
    const p = Math.min((now - t0) / 1400, 1);
    window.scrollTo(0, start + (end - start) * ease(p));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const Hero = () => {
  const typed = useTypewriter(
    [
      "Full-Stack Developer",
      "Machine-Learning Enthusiast",
      "Open-Source Contributor",
    ],
    80,
    50,
    1500
  );

  return (
    <header id="hero" className="hero-section position-relative" style={{ paddingTop: "100px" }}>
      <div className="container d-flex flex-column flex-lg-row align-items-center pt-5">
        <motion.div
          className="flex-grow-1 text-center text-lg-start"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white fw-normal mb-2">
            Hi&nbsp;there! <span role="img" aria-label="wave">👋</span>
          </h2>

          <h1 className="display-4 fw-bold lh-sm mb-3">
            I’m&nbsp;
            <span style={{ color: accent }}>
              Paduchuri&nbsp;Vikrama&nbsp;Dhanvi
            </span>
          </h1>

          <h3 className="text-white mb-4 d-inline-flex align-items-center">
            <span>{typed}</span>
            <span className="typing-caret">|</span>
          </h3>
          <br></br>
          <a href="/resume.pdf" download className="btn btn-outline-light btn-lg">
  Download Résumé
</a>

        </motion.div>

        <motion.div
          className="mt-5 mt-lg-0 ms-lg-5"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button
            className="fancy-btn"
            onClick={() => smoothScrollTo("contact")}
          >
            <span></span><span></span><span></span><span></span>
            <span>Let&apos;s&nbsp;Talk</span>
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
