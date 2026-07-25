import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/logo.jpg" alt="The Aniexim Limited" className="footer__logo" />
          <div>
            <p className="footer__name">The Aniexim Limited</p>
            <p className="footer__tag">Handing Out Home Keys</p>
          </div>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <Link to="/about">About us</Link>
          <Link to="/services">Our services</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Reach us</h4>
          <a href="tel:+2348085259019">0808 525 9019</a>
          <a href="https://wa.me/2347049058719" target="_blank" rel="noreferrer">
            WhatsApp: 0704 905 8719
          </a>
          <a href="mailto:Eddybrown2415@gmail.com">Eddybrown2415@gmail.com</a>
          <p className="footer__address">No. 2 Akpa Akpan off Wellington Bassey, Uyo, Akwa Ibom State</p>
        </div>

        <div className="footer__col">
          <h4>We serve</h4>
          <p>Akwa Ibom</p>
          <p>Lagos</p>
          <p>Port Harcourt</p>
          <p>Abuja</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} The Aniexim Limited. Your dream property is our priority.</p>
      </div>
    </footer>
  );
}
