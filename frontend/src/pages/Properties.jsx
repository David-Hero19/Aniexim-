import { useEffect, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import PropertyCard from "../components/PropertyCard.jsx";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState("All");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/api/properties")
      .then((r) => r.json())
      .then((data) => {
        setProperties(data);
        setStatus("loaded");
      })
      .catch(() => setStatus("error"));
  }, []);

  const types = ["All", ...new Set(properties.map((p) => p.type))];
  const shown = filter === "All" ? properties : properties.filter((p) => p.type === filter);

  return (
    <>
      <section className="page-header">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow">Available now</p>
            <h1>Every plot currently on offer.</h1>
            <p className="page-header__lead">
              Prices and allocations update as plots sell — message us directly to confirm
              availability before making a trip out to site.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="properties-page">
        <div className="section-inner">
          {status === "loaded" && (
            <div className="filter-row" role="tablist" aria-label="Filter properties by type">
              {types.map((t) => (
                <button
                  key={t}
                  className={`filter-pill ${filter === t ? "filter-pill--active" : ""}`}
                  onClick={() => setFilter(t)}
                  role="tab"
                  aria-selected={filter === t}
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          {status === "loading" && <p className="state-note">Loading current listings…</p>}
          {status === "error" && (
            <p className="state-note">
              Couldn't reach the listings service. Make sure the backend server is running on
              port 4000, or call us directly on 0808 525 9019.
            </p>
          )}

          {status === "loaded" && shown.length === 0 && (
            <p className="state-note">No plots match that filter right now — check back soon.</p>
          )}

          <div className="properties-grid">
            {shown.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
