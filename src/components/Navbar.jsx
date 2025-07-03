import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

/* smooth scroll helper (same easing as Hero button) */
function smoothScroll(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const NAV = 72;
  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + start - NAV;
  const t0 = performance.now();
  const ease = t => (t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const step = now => {
    const p = Math.min((now - t0) / 800, 1);   // 0.8-sec glide
    window.scrollTo(0, start + (end - start) * ease(p));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
    <div className="container">
      <a className="navbar-brand fw-bold" href="#hero" onClick={e => {
          e.preventDefault(); smoothScroll("hero");
        }}>
        Paduchuri Vikrama Dhanvi
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        {/* smooth-scroll links */}
        <ul className="navbar-nav ms-auto text-center">
          {[
            ["Summary", "summary"],
            ["Experience", "experience"],
            ["Projects", "projects"],
            ["Education", "education"],
            ["Publications", "publications"],
            ["Certifications", "certifications"],
            ["Skills", "skills"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <li className="nav-item" key={id}>
              <a
                className="nav-link"
                href={`#${id}`}
                onClick={e => {
                  e.preventDefault();
                  smoothScroll(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* desktop social mini-card */}
        <div className="d-none d-lg-flex ms-lg-4">
          <div className="card-social">
            <a
              href="https://www.linkedin.com/in/vikrama-dhanvi-paduchuri-291077356/"
              className="socialContainer linkedinBox"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="socialIcon" />
            </a>
            <a
              href="https://github.com/VikramaDhanvi"
              className="socialContainer githubBox"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="socialIcon" />
            </a>
            <a
              href="https://www.instagram.com/vikrama_dhanvi/"
              className="socialContainer instaBox"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="socialIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
