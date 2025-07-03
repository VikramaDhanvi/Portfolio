/* src/components/Contact.jsx  – inline-styled gradient-border form */
import React, { useState } from "react";

const MAIL_TO = "vikramadhanvi_paduchuri@srmap.edu.in";
const enc = encodeURIComponent;

export default function Contact() {
  const [email, setEmail] = useState("");
  const [msg,   setMsg]   = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Recruiter message from ${email || "Unknown company"}`;
    const href = `https://mail.google.com/mail/?view=cm&fs=1&to=${
      MAIL_TO
    }&su=${enc(subject)}&body=${enc(msg)}`;

    window.open(href, "_blank", "noopener");
  };

  /* ----------- inline style maps ------------------------------------ */
  const wrap  = { display: "flex", justifyContent: "flex-start" };
  const box   = {
    width: 400,
    background:
      "linear-gradient(#212121,#212121) padding-box,linear-gradient(145deg,transparent 35%,#e81cff,#40c9ff) border-box",
    border: "2px solid transparent",
    borderRadius: 16,
    padding: "32px 24px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    fontSize: 14,
    fontFamily: "inherit",
    boxSizing: "border-box",
  };
  const group = { display: "flex", flexDirection: "column", gap: 2 };
  const label = {
    marginBottom: 5,
    color: "#717171",
    fontWeight: 600,
    fontSize: 12,
  };
  const input = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 8,
    color: "#fff",
    background: "transparent",
    border: "1px solid #414141",
    fontFamily: "inherit",
  };
  const inputFocus = { outline: "none", borderColor: "#e81cff" };
  const btn = {
    alignSelf: "flex-start",
    width: "40%",
    padding: "12px 16px",
    borderRadius: 6,
    border: "1px solid #414141",
    background: "#313131",
    color: "#717171",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all .25s",
  };

  /* ------------------------------------------------------------------ */
  return (
    <section id="contact" className="py-5">
      <div className="container" style={wrap}>
        <form style={box} onSubmit={handleSubmit}>
          {/* company email */}
          <div style={group}>
            <label htmlFor="c-email" style={label}>
              Company&nbsp;Name
            </label>
            <input
              id="c-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={input}
              onFocus={(e) => Object.assign(e.target.style, inputFocus)}
              onBlur={(e) =>
                (e.target.style.borderColor = "#414141")
              }
            />
          </div>

          {/* message */}
          <div style={group}>
            <label htmlFor="c-msg" style={label}>
              How&nbsp;Can&nbsp;We&nbsp;Help&nbsp;You?
            </label>
            <textarea
              id="c-msg"
              rows="10"
              required
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              style={{ ...input, resize: "none", height: 96 }}
              onFocus={(e) => Object.assign(e.target.style, inputFocus)}
              onBlur={(e) =>
                (e.target.style.borderColor = "#414141")
              }
            />
          </div>

          {/* submit */}
          <button
            type="submit"
            style={btn}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#000";
              e.currentTarget.style.borderColor = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#313131";
              e.currentTarget.style.color = "#717171";
              e.currentTarget.style.borderColor = "#414141";
            }}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(.95)")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
