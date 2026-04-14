import Link from 'next/link';
import { CTA, Footer, Header } from './components';

const services = [
  {
    title: 'Regulatory & Registration Support',
    text: 'Practical guidance for product registrations, documentation, regulatory pathways, and local market entry requirements across selected EMEA territories.',
  },
  {
    title: 'Market Access Consulting',
    text: 'Commercial support to help producers identify attractive markets, define channel strategy, and approach distributors, importers, and customers with a clear plan.',
  },
  {
    title: 'Commission-Based Sales Representation',
    text: 'Hands-on commercial representation for producers seeking growth in the EMEA region through a flexible, performance-linked model.',
  },
];

const steps = [
  'Understand your product, positioning, and target markets',
  'Assess regulatory and commercial entry requirements',
  'Build a practical market access roadmap',
  'Support partner outreach and business development',
  'Drive execution through consulting or commission-based sales',
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="pill">Incorporated in Malta • Serving producers across EMEA</p>
              <h1>Helping producers access and grow in EMEA markets.</h1>
              <p className="lead">
                Crisp Agriculture supports producers with market access, registration
                consulting, and commission-based sales representation across Europe,
                the Middle East, and Africa.
              </p>
              <div className="button-row">
                <a className="button button-primary" href="mailto:josh@crispag.org">
                  Speak with Josh
                </a>
                <Link className="button button-secondary" href="/services">
                  Explore services
                </Link>
              </div>
            </div>
            <div className="hero-cards">
              <div className="card stat-card">
                <p className="card-label">Core Focus</p>
                <h3>Market Access</h3>
                <p>Supporting producers entering and expanding across complex EMEA markets.</p>
              </div>
              <div className="card stat-card">
                <p className="card-label">Commercial Model</p>
                <h3>Commission-Based Sales</h3>
                <p>Flexible sales support aligned with commercial performance and long-term growth.</p>
              </div>
              <div className="card coverage-card">
                <p className="card-label">Coverage</p>
                <div className="badge-row">
                  <span>Europe</span>
                  <span>Middle East</span>
                  <span>Africa</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <p className="eyebrow">About Crisp Agriculture</p>
              <h2>A practical partner for producers entering new markets.</h2>
            </div>
            <div>
              <p>
                Crisp Agriculture is a Malta-incorporated company focused on helping
                producers access markets across the EMEA region. We work at the
                intersection of regulatory readiness, commercial strategy, and market
                execution.
              </p>
              <p>
                Whether the need is support with registrations, advice on market access,
                or direct sales representation on a commission basis, Crisp Agriculture
                helps producers move from opportunity assessment to commercial traction.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h2>Built for producers who want a clearer route into EMEA.</h2>
            <div className="grid-3 mt-lg">
              {services.map((service) => (
                <article key={service.title} className="card">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col-equal">
            <div className="card list-card">
              <p className="eyebrow">What we help with</p>
              <ul>
                <li>Market prioritisation and go-to-market planning</li>
                <li>Registration pathway guidance and supporting documentation</li>
                <li>Distributor and channel partner identification</li>
                <li>Commercial representation and lead development</li>
                <li>Regional market navigation across Europe, the Middle East, and Africa</li>
              </ul>
            </div>
            <div className="card dark-card">
              <p className="eyebrow light">How we work</p>
              <ol>
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="value-panel">
              <div>
                <p className="eyebrow">Why Crisp Agriculture</p>
                <h2>Commercially focused, regionally relevant, and execution-minded.</h2>
              </div>
              <div className="grid-2 mt-lg">
                <div className="mini-card">
                  <h3>EMEA understanding</h3>
                  <p>A practical approach to regional market differences and entry barriers.</p>
                </div>
                <div className="mini-card">
                  <h3>Flexible engagement</h3>
                  <p>Support through consulting assignments or commission-based commercial activity.</p>
                </div>
                <div className="mini-card">
                  <h3>Producer-focused</h3>
                  <p>Built to help producers turn market opportunity into real access and sales momentum.</p>
                </div>
                <div className="mini-card">
                  <h3>Execution support</h3>
                  <p>From strategy and registrations to partner outreach and commercial development.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
