import React from "react";
import { motion } from "framer-motion";

/* ---- skill data with % ----------------------------------------- */
const skills = {
  Languages: [
    { name: "C",          pct: 90 },
    { name: "C++",        pct: 85 },
    { name: "Python",     pct: 75 },
    { name: "JavaScript", pct: 60 },
    { name: "SQL",        pct: 70 },
  ],
  Frontend: [
    { name: "HTML",      pct: 100 },
    { name: "CSS",       pct: 80 },
    { name: "JavaScript",pct: 65 },
    { name: "React.js",  pct: 60 },
  ],
  Backend: [
    { name: "Node.js",   pct: 80 },
    { name: "Express.js",pct: 70 },
    { name: "PHP",       pct: 80 },
  ],
  Tools: [
    { name: "Git",    pct: 90 },
    { name: "GitHub", pct: 90 },
    { name: "VS Code",pct: 95 },
    { name: "Postman",pct: 80 },
  ],
  Databases: [
    { name: "MySQL",   pct: 80 },
    { name: "MongoDB", pct: 70 },
  ],
  Concepts: [
    { name: "DSA",                  pct: 55 },
    { name: "OOP",                  pct: 70 },
    { name: "REST APIs",            pct: 60 },
    { name: "Full-stack Integration", pct: 80 },
  ],
};

/* animation variants for each bar */
const barVars = {
  hidden: { width: 0 },
  show: (pct) => ({
    width: `${pct}%`,
    transition: { duration: 1.2, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-5">Skills</h2>

        <div className="row">
          {Object.entries(skills).map(([category, list]) => (
            <div className="col-md-6 mb-4" key={category}>
              <h6 className="fw-semibold mb-3">{category}</h6>

              {list.map(({ name, pct }) => (
                <div className="mb-3" key={name}>
                  <div className="d-flex justify-content-between small mb-1">
                    <span>{name}</span>
                    <span>{pct}%</span>
                  </div>

                  {/* animated bar */}
                  <div className="progress" style={{ height: "6px" }}>
                    <motion.div
                      className="progress-bar bg-info"
                      role="progressbar"
                      /* custom = pct so each bar knows its target width */
                      variants={barVars}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.4 }}
                      custom={pct}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
