import React from "react";
import srmImg from "../assets/srm.jpeg";   //  ➜ put a campus photo here

const education = [
  {
    institute: "SRM University, Amaravati",
    period: "2022 – 2026",
    degree: "B.Tech in Computer Science",
    gpa: "7.71 / 10.0",
    img: srmImg,                          // only SRM has a picture
  },
  {
    institute: "AP Board of Intermediate Education (Class 12)",
    period: "2022",
    degree: "Percentage: 72.2%",
  },
  {
    institute: "BSEAP (Class 10)",
    period: "2020",
    degree: "Percentage: 96%",
  },
];

const Education = () => (
  <section id="education" className="py-5">
    <div className="container">
      <h2 className="fw-bold mb-4">Education</h2>

      {education.map((edu) => (
        <div className="edu-item mb-4" key={edu.institute}>
          {/* headline */}
          <h5 className="fw-semibold mb-1">{edu.institute}</h5>
          <small className="text-muted d-block">{edu.period}</small>
          <p className="mb-0">
            {edu.degree}
            {edu.gpa ? ` — GPA: ${edu.gpa}` : ""}
          </p>

          {/* hover photo (if provided) */}
          {edu.img && (
            <img
              src={edu.img}
              alt={edu.institute}
              className="edu-img shadow"
              loading="lazy"
            />
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Education;
