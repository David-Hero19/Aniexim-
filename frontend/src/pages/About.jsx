import Reveal from "../components/Reveal.jsx";
import OctagonMark from "../components/OctagonMark.jsx";

const values = [
  {
    title: "Genuine title, always",
    body: "Every plot we sell is surveyed, beaconed, and backed by documentation we'd trust with our own money."
  },
  {
    title: "Clarity over pressure",
    body: "We'd rather explain a plan slowly than rush a client into a sale they haven't fully understood."
  },
  {
    title: "Built for how Nigerians earn",
    body: "Flexible payment structures that match real income patterns, not a rigid one-size instalment plan."
  }
];

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow">About the company</p>
            <h1>A name behind Uyo's quieter street corners.</h1>
            <p className="page-header__lead">
              The Aniexim Limited started with a simple frustration: too many families in Akwa
              Ibom were being sold land that turned out to carry disputed titles, or estates
              that never got the promised road network. We set out to be the option that
              doesn't require a lawyer on speed-dial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-story">
        <div className="section-inner about-story__grid">
          <Reveal className="about-story__mark">
            <OctagonMark size={220} spin />
          </Reveal>
          <Reveal delay={100} className="about-story__text">
            <h2>Handing out home keys, one verified plot at a time.</h2>
            <p>
              We work across real estate development, property sales, land and property
              acquisition, estate management, leasing, and full building projects — from the
              first survey pin to the final handover. Our current developments span Ekpene
              Ikpan and Ikot Akpan Odung in Uyo, with a growing list of residential plots
              across the wider Akwa Ibom area.
            </p>
            <p>
              We deliver trusted real estate solutions across Akwa Ibom, Lagos, Port Harcourt
              and Abuja — because a family relocating from Lagos deserves the same certainty
              as a client buying five minutes from our office.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="values">
        <div className="section-inner">
          <Reveal className="section-head">
            <p className="eyebrow">What guides us</p>
            <h2>Three things we won't compromise on</h2>
          </Reveal>
          <div className="values__grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="value-card">
                <span className="value-card__index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="coverage">
        <div className="section-inner coverage__inner">
          <Reveal>
            <p className="eyebrow eyebrow--dark">Where we operate</p>
            <h2>Akwa Ibom · Lagos · Port Harcourt · Abuja</h2>
            <p className="coverage__sub">
              Our office sits at No. 2 Akpa Akpan, off Wellington Bassey, Uyo — but our
              developments and land acquisitions reach clients well beyond Akwa Ibom State.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
