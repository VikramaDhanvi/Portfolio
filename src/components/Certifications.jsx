import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* vite-asset helper */
const url = (p) => new URL(`../assets/certs/${p}`, import.meta.url).href;

/* list of certificates */
const certs = [
  { title: "AWS Cloud Technical Essentials",       file: url("Coursera FJ622LGTMA0S.pdf") },
  { title: "Migrating to the AWS Cloud",           file: url("Coursera HF5P4OW0MYYZ.pdf") },
  { title: "Architecting Solutions on AWS",        file: url("Coursera PLFVJBPCOQ82.pdf") },
  { title: "AWS Fundamentals (Specialization)",    file: url("Coursera JBXTSA5F8NL6.pdf") },
  
];

export default function Certifications() {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [sel, setSel] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSel(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
  }, [embla]);

  const prev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const next = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <section id="certifications" className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-4 text-white">Certifications</h2>

        <div className="cert-shell position-relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {certs.map(({ title, file }, i) => (
                <div
                  key={title}
                  className={`embla__slide ${i === sel ? "is-selected" : ""}`}
                >
                  <a href={file} target="_blank" rel="noopener noreferrer">
                    <embed
src={`${file}#page=1&zoom=page-fit`}
                      type="application/pdf"
                      className="cert-embed rounded shadow-sm"
                    />
                  </a>
                  <p className="small text-center text-white-50 mt-2">{title}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="cert-arrow left"  onClick={prev}><FaChevronLeft /></button>
          <button className="cert-arrow right" onClick={next}><FaChevronRight /></button>
        </div>
      </div>
    </section>
  );
}
