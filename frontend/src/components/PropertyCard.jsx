function formatNaira(amount) {
  if (amount == null) return "";
  return "₦" + amount.toLocaleString("en-NG");
}

export default function PropertyCard({ property }) {
  const discount =
    property.actualPrice && property.actualPrice > property.price
      ? Math.round(100 - (property.price / property.actualPrice) * 100)
      : null;

  return (
    <article className="property-card">
      <div className="property-card__frame">
        <span className="corner corner--tl" />
        <span className="corner corner--br" />
        {discount && <span className="property-card__badge">Save {discount}%</span>}
        <p className="property-card__type">{property.type}</p>
        <h3 className="property-card__name">{property.name}</h3>
        <p className="property-card__location">{property.location}</p>

        <div className="property-card__meta">
          <div>
            <span className="meta-label">Size</span>
            <span className="meta-value">{property.size}</span>
          </div>
          <div>
            <span className="meta-label">{property.priceLabel}</span>
            <span className="meta-value meta-value--gold">{formatNaira(property.price)}</span>
          </div>
        </div>

        {property.actualPrice && (
          <p className="property-card__actual">
            Actual price <s>{formatNaira(property.actualPrice)}</s>
          </p>
        )}

        <ul className="property-card__features">
          {property.features.slice(0, 3).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <p className="property-card__status">{property.status}</p>

        <a
          className="property-card__cta"
          href={`https://wa.me/2347049058719?text=${encodeURIComponent(
            `Hello Aniexim Limited, I'm interested in ${property.name} (${property.location}).`
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          Enquire on WhatsApp →
        </a>
      </div>
    </article>
  );
}
