import { useState } from "react";
import Reveal from "../components/Reveal.jsx";

const initialForm = { name: "", phone: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  return (
    <>
      <section className="page-header">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h1>Let's talk about your land or property.</h1>
            <p className="page-header__lead">
              Call, WhatsApp, or send a message below — a real person on our team replies to
              every enquiry.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="contact">
        <div className="section-inner contact__grid">
          <Reveal className="contact__details">
            <h2>Reach us directly</h2>
            <ul className="contact__list">
              <li>
                <span className="contact__label">Phone</span>
                <a href="tel:+2348085259019">0808 525 9019</a>
              </li>
              <li>
                <span className="contact__label">WhatsApp</span>
                <a href="https://wa.me/2347049058719" target="_blank" rel="noreferrer">
                  0704 905 8719
                </a>
              </li>
              <li>
                <span className="contact__label">Email</span>
                <a href="mailto:Eddybrown2415@gmail.com">Eddybrown2415@gmail.com</a>
              </li>
              <li>
                <span className="contact__label">Office</span>
                <span>No. 2 Akpa Akpan, off Wellington Bassey, Uyo, Akwa Ibom State</span>
              </li>
              <li>
                <span className="contact__label">Facebook</span>
                <span>The Aniexim Limited</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100} className="contact__form-wrap">
            <form className="contact__form" onSubmit={handleSubmit}>
              <label>
                Full name
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </label>
              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="080..."
                />
              </label>
              <label>
                Email (optional)
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                What are you looking for?
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about the land or property you're interested in"
                />
              </label>

              <button className="btn btn--gold" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              {status === "sent" && (
                <p className="form-note form-note--success">
                  Thank you — we'll get back to you shortly.
                </p>
              )}
              {status === "error" && <p className="form-note form-note--error">{error}</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
