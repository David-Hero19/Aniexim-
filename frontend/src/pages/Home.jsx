import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OctagonMark from "../components/OctagonMark.jsx";
import Reveal from "../components/Reveal.jsx";
import PropertyCard from "../components/PropertyCard.jsx";

const services = [
  "Real Estate Development",
  "Property Sales",
  "Land & Property Acquisition",
  "Estate Management",
  "Property Leasing",
  "Building Projects (Start to Finish)"
];

const trust = [
  { title: "Verified & Genuine Lands", detail: "Every plot comes with checked title documents." },
  { title: "Flexible Payment Plans", detail: "Spread payments to fit how you earn." },
  { title: "Instant Allocation", detail: "Walk your plot as soon as payment clears." },
  { title: "Secure Documentation", detail: "Deed of Assignment prepared for every sale." }
];

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/api/properties")
      .then((r) => r.json())
      .then((data) => setProperties(data.slice(0, 3)))
      .catch(() => setProperties([]));
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero__field" aria-hidden="true">
          <OctagonMark size={520} spin className="hero__giant-mark" />
        </div>
        <div className="hero__inner">
          <p className="eyebrow">Akwa Ibom · Lagos · Port Harcourt · Abuja</p>
          <h1 className="hero__headline">
            Handing you the
            <br />
            <em>keys to your future.</em>
          </h1>
          <p className="hero__sub">
            The Aniexim Limited develops, sells, and manages land and property across four
            states — with genuine title, instant allocation, and payment plans built around
            how our clients actually earn.
          </p>
          <div className="hero__actions">
            <Link to="/properties" className="btn btn--gold">
              View available land
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="section-inner">
          <div className="trust__grid">
            {trust.map((t, i) => (
              <Reveal key={t.title} delay={i * 80} className="trust__item">
                <span className="trust__index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{t.title}</h3>
                <p>{t.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="section-inner">
          <Reveal className="section-head">
            <p className="eyebrow">Featured listings</p>
            <h2>Land that's actually worth walking</h2>
          </Reveal>
          <div className="properties-grid">
            {properties.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="section-cta">
            <Link to="/properties" className="link-arrow">
              See every plot we're offering →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="services-strip">
        <div className="section-inner">
          <Reveal className="section-head section-head--light">
            <p className="eyebrow">What we do</p>
            <h2>Six ways we move property forward</h2>
          </Reveal>
          <div className="services-strip__list">
            {services.map((s, i) => (
              <Reveal key={s} delay={i * 60} className="services-strip__item">
                <OctagonMark size={28} />
                <span>{s}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="section-inner cta-banner__inner">
          <Reveal>
            <p className="eyebrow eyebrow--dark">Limited plots remaining</p>
            <h2>Secure your land before prices move again.</h2>
            <p className="cta-banner__sub">
              Plots at Timaror Smart Estate are going fast at pre-launch pricing. Once they're
              gone, the next release comes in at full price.
            </p>
            <a
              className="btn btn--dark"
              href="https://wa.me/2347049058719"
              target="_blank"
              rel="noreferrer"
            >
              Chat with us on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
