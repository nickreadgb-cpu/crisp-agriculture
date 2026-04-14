import Link from 'next/link';
import EMEAMap from '../components/EMEAMap';
import { ArrowRight, DocumentIcon, GlobeIcon, HandshakeIcon } from '../components/Icons';

const services = [
  {
    title: 'Registration Support',
    body: 'Guidance on product registration pathways, documentation preparation, and territory-specific requirements across selected EMEA markets.',
    icon: <DocumentIcon />,
  },
  {
    title: 'Market Access Consulting',
    body: 'Commercial planning to identify priority territories, route-to-market options, and the right partner structure for market entry.',
    icon: <GlobeIcon />,
  },
  {
    title: 'Commission-Based Sales',
    body: 'Flexible commercial representation for producers looking to build sales momentum through a performance-linked model.',
    icon: <HandshakeIcon />,
  },
];

const reasons = [
  ['EMEA understanding', 'A practical view of regional market realities, distribution structures, and entry barriers.'],
  ['Commercial focus', 'Built around access, traction, and execution rather than theory alone.'],
  ['Flexible model', 'Support through consulting assignments or commission-based sales representation.'],
  ['Producer-first approach', 'Structured to help producers expand without building a large local infrastructure too early.'],
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="kicker"><span className="kicker-dot" />Incorporated in Malta · Serving Europe, the Middle East, and Africa</div>
            <h1>Premium market access support for ambitious producers across EMEA.</h1>
            <p>
              Crisp Agriculture helps producers move from market interest to commercial execution with a sharper route into EMEA — through registration guidance, market access consulting, and commission-based sales representation.
            </p>
            <div className="action-row">
              <a className="button" href="mailto:josh@crispag.org">Speak with Josh <ArrowRight /></a>
              <Link className="button-secondary" href="/services">Explore services</Link>
            </div>

            <div className="metrics">
              <div className="metric"><strong>EMEA</strong><span>Regional focus spanning Europe, the Middle East, and Africa</span></div>
              <div className="metric"><strong>Flexible</strong><span>Consulting, project support, or commission-based representation</span></div>
              <div className="metric"><strong>Practical</strong><span>Designed around execution, partner access, and commercial traction</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card image-panel">
              <div className="overlay-badge">
                Combining regulatory readiness, route-to-market planning, and sales execution in one focused EMEA partner.
              </div>
              <div className="field-lines" />
            </div>
            <div className="visual-card map-wrap">
              <div className="map-heading">
                <div>
                  <div className="eyebrow" style={{ marginBottom: 6 }}>Coverage</div>
                  <h3 style={{ margin: 0, fontSize: '1.35rem' }}>EMEA footprint</h3>
                </div>
                <span className="small">Target markets, channel access, and partner development</span>
              </div>
              <p className="map-caption">A stylised visual showing the regional focus of Crisp Agriculture.</p>
              <EMEAMap />
              <div className="map-legend">
                <span className="legend-item"><span className="legend-swatch" style={{ background: '#0f6b3d' }} />Primary coverage focus</span>
                <span className="legend-item"><span className="legend-swatch" style={{ background: '#d6b76a' }} />Commercial opportunity hubs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">About Crisp Agriculture</div>
            <h2>A stronger first impression for producers looking to enter or expand in EMEA.</h2>
            <p className="lead">
              Crisp Agriculture is a Malta-incorporated company focused on helping producers access markets across the EMEA region. We work where regulatory readiness, market strategy, and commercial execution meet.
            </p>
          </div>

          <div className="grid-2">
            <div className="panel">
              <h3>What we do</h3>
              <p>
                We help producers define where to play, how to enter, and how to build momentum. That includes support on registrations, partner strategy, channel access, and direct commercial representation where appropriate.
              </p>
            </div>
            <div className="quote">
              <div className="quote-mark">“</div>
              <p>
                Crisp Agriculture is built for businesses that want a premium, credible route into EMEA markets without losing speed or commercial focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Services</div>
            <h2>Three focused ways we help producers grow.</h2>
          </div>
          <div className="grid-3">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <div className="icon-chip">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container banner">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.78)' }}>How we work</div>
              <h2 style={{ color: 'white' }}>A practical route from product review to commercial execution.</h2>
              <p className="lead" style={{ color: 'rgba(255,255,255,0.78)' }}>
                Every engagement starts with clarity: the product, the target markets, the likely barriers, and the fastest route to traction.
              </p>
            </div>
            <div className="timeline">
              {[
                'Understand the product, positioning, and target territories.',
                'Assess regulatory and market-entry requirements.',
                'Build a realistic market access roadmap.',
                'Support distributor and partner outreach.',
                'Execute through consulting support or sales representation.'
              ].map((item, index) => (
                <div className="timeline-step" key={item}>
                  <div className="step-number">{index + 1}</div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Why Crisp Agriculture</div>
            <h2>Designed to feel credible, focused, and ready for serious commercial conversations.</h2>
          </div>
          <div className="grid-4">
            {reasons.map(([title, body]) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container contact-grid">
          <div className="contact-card">
            <div className="eyebrow">Get in touch</div>
            <h2 style={{ maxWidth: '14ch' }}>Looking for a sharper route into EMEA?</h2>
            <p className="lead">
              Crisp Agriculture works with producers seeking stronger market access, clearer registration pathways, and commercially grounded support.
            </p>
            <div className="action-row">
              <a className="button" href="mailto:josh@crispag.org">Email Josh <ArrowRight /></a>
              <Link className="button-secondary" href="/contact">View contact page</Link>
            </div>
          </div>
          <div className="contact-card" style={{ background: 'linear-gradient(160deg, rgba(15,107,61,0.98), rgba(11,77,44,0.98))', color: 'white' }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.72)' }}>Contact details</div>
            <h3 style={{ color: 'white' }}>Crisp Agriculture</h3>
            <p style={{ color: 'rgba(255,255,255,0.82)' }}>Malta</p>
            <p style={{ color: 'rgba(255,255,255,0.82)' }}>josh@crispag.org</p>
            <p style={{ color: 'rgba(255,255,255,0.82)' }}>crispag.org</p>
          </div>
        </div>
      </section>
    </main>
  );
}
