// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const accent = "#c084fc"; // lavender highlight

const experience = [
  {
    company: "EDUNET Foundation",
    role: "Frontend Intern",
    period: "Jan – Mar 2025",
    duration: "2 mos",
    description:
      "Created a student-portfolio site with HTML, CSS, JavaScript and sharpened responsive-UI skills.",
  },
  {
    company: "Kodeblue Technologies",
    role: "ML Intern",
    period: "Apr 2025 – Present",
    duration: "ongoing",
    description:
      "Building a hospital-recommendation system using machine-learning on healthcare data.",
  },
  
];

const item = {
  hidden: { opacity: 0, y: 40 },
  show:   (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-5">Work&nbsp;Experience</h2>

        <div className="timeline">
          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              variants={item}
              initial="hidden"
              whileInView="show"
              /* ▶ only when 30 % of the card is inside viewport; run once */
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="timeline-item pb-5"
            >
              <h5 className="fw-semibold mb-1">
                <span style={{ color: accent }}>{e.company}</span>{" "}
                <span className="text-white-50">— {e.role}</span>
              </h5>

              <small className="badge bg-secondary fw-normal mb-2">
                {e.period} &nbsp;•&nbsp; {e.duration}
              </small>

              <p className="mb-0">{e.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
