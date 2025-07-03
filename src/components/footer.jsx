/* src/components/Footer.jsx – fully inline-styled */
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const accent  = "#c084fc";
const fg      = "#c9d1d9";
const bg      = "#0d0d14";
const border  = "#30363d";

const linkBase = {
  color: fg,
  fontSize: ".9rem",
  textDecoration: "none",
  transition: "color .25s",
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  /* helper to merge hover color */
  const hover = (clr) => ({
    onMouseEnter: (e) => (e.currentTarget.style.color = clr),
    onMouseLeave: (e) => (e.currentTarget.style.color = fg),
  });

  return (
    <footer
      style={{
        background: bg,
        borderTop: `1px solid ${border}`,
        color: fg,
        paddingTop: "3rem",
        paddingBottom: "2rem",
        marginTop: "5rem",
      }}
    >
      <div className="container">
        {/* links + back-to-top */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: ".9rem",
            }}
          >
            {[
              ["Home", "hero"],
              ["Summary", "summary"],
              ["Experience", "experience"],
              ["Projects", "projects"],
              ["Education", "education"],
              ["Publications", "publications"],
              ["Certifications", "certifications"],
              ["Skills", "skills"],
              ["Contact", "contact"],
            ].map(([txt, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  style={linkBase}
                  {...hover("#58a6ff")}
                >
                  {txt}
                </a>
              </li>
            ))}
          </ul>

          {/* back-to-top */}
          <button
            onClick={scrollTop}
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".3rem",
              background: "transparent",
              border: `1px solid ${fg}`,
              color: fg,
              borderRadius: "4px",
              padding: ".25rem .6rem",
              cursor: "pointer",
              transition: "all .3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = fg;
              e.currentTarget.style.color = bg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = fg;
            }}
          >
            <FaArrowUp /> Top
          </button>
        </div>

        {/* socials */}
        <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
          <a
            href="https://www.linkedin.com/in/vikrama-dhanvi-paduchuri-291077356/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "1.5rem", color: fg, transition: "color .3s" }}
            {...hover("#0072b1")}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/VikramaDhanvi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "1.5rem", color: fg, transition: "color .3s" }}
            {...hover("#ffffff")}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:vikramadhanvi_paduchuri@srmap.edu.in"
            style={{ fontSize: "1.5rem", color: fg, transition: "color .3s" }}
            {...hover(accent)}
          >
            <FaEnvelope />
          </a>
        </div>

        {/* copyright */}
        <small style={{ color: "#8b949e" }}>
          © {year} Paduchuri&nbsp;Vikrama&nbsp;Dhanvi. Built with React &amp;
          Vite. <span style={{ color: accent }}>★</span>
        </small>
      </div>
    </footer>
  );
}
