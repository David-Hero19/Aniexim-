import Reveal from "../components/Reveal.jsx";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Real Estate Development",
    body: "From land banking to fully planned estates with road networks, drainage, and street lighting — we manage the full development lifecycle."
  },
  {
    title: "Property Sales",
    body: "Residential and commercial plots and buildings, sold with verified title and a straightforward paper trail from day one."
  },
  {
    title: "Land & Property Acquisition",
    body: "We help clients identify, negotiate, and secure land — including due diligence on title history before any money changes hands."
  },
  {
    title: "Estate Management",
    body: "Day-to-day oversight of estates: security, maintenance, levies, and dispute resolution between residents and developers."
  },
  {
    title: "Property Leasing",
    body: "Lease and rentage arrangements for landlords and tenants, with clear terms and a management team that answers the phone."
  },
  {
    title: "Building Projects (Start to Finish)",
    body: "Design, construction, and handover — we coordinate architects, builders, and materials so a client isn't juggling five contractors alone."
  }
];

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow">Our services</p>
            <h1>Six services, one point of contact.</h1>
            <p className="page-header__lead">
              Whether it's a single plot or a full estate, everything below runs through the
              same team — so nothing gets lost between a survey and a signature.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="services-list">
        <div className="section-inner">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70} className="service-row">
              <span className="service-row__index">{String(i + 1).padStart(2, "0")}</span>
              <div className="service-row__body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta-banner cta-banner--simple">
        <div className="section-inner cta-banner__inner">
          <Reveal>
            <h2>Not sure which service fits your situation?</h2>
            <p className="cta-banner__sub">
              Tell us what you're trying to do with your land or property, and we'll point you
              to the right service — no obligation.
            </p>
            <Link to="/contact" className="btn btn--dark">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
