import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Crisp Agriculture home">
          <Image src="/logo.png" alt="Crisp Agriculture" width={180} height={60} priority />
        </Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="button button-primary" href="mailto:josh@crispag.org">
          Speak with Josh
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <div>
          <strong>Crisp Agriculture</strong>
          <p>Malta-based support for producers across EMEA.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:josh@crispag.org">josh@crispag.org</a>
          <a href="https://www.crispag.org" target="_blank" rel="noreferrer">
            crispag.org
          </a>
        </div>
      </div>
    </footer>
  );
}

export function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-box">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Looking for support to enter or expand in EMEA?</h2>
          <p>
            Crisp Agriculture works with producers seeking stronger market access,
            clearer registration pathways, and practical commercial execution.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button button-primary" href="mailto:josh@crispag.org">
            Contact Crisp Agriculture
          </a>
          <p className="contact-card">
            <strong>Crisp Agriculture</strong>
            <br />
            Malta
            <br />
            josh@crispag.org
          </p>
        </div>
      </div>
    </section>
  );
}
