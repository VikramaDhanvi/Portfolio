import React from "react";
import livenessImg from "../assets/face-liveness.jpeg";        // save the image here

const Publications = () => (
  <section id="publications" className="py-5">
    <div className="container">
      <h2 className="fw-bold mb-4">Publications</h2>

      {/* fancy card */}
      <div className="card pub-card text-white shadow-sm">
        <div className="row g-0 align-items-center">
          {/* image */}
          <div className="col-md-4">
            <img
              src={livenessImg}
              alt="Face liveness detection illustration"
              className="img-fluid rounded-start pub-img"
            />
          </div>

          {/* description */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title mb-3">
                Ongoing Resaerch on Face Liveness Detection Using Image Processing
              </h5>
              <p className="card-text mb-0">
                Applied computer-vision techniques—head tilting, blinking, and
                facial-landmark analysis—to differentiate real users from spoof
                attacks in biometric systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Publications;
