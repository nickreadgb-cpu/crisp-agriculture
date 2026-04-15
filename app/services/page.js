import { DocumentIcon, GlobeIcon, HandshakeIcon } from '../../components/Icons';

const serviceBlocks = [
  {
    title: 'Regulatory & Registration Support',
    icon: <DocumentIcon />,
    text: 'Practical support for producers navigating registration pathways, dossier preparation, local requirements, and market-entry readiness across selected EMEA territories.',
    bullets: [
      'Territory-specific registration planning',
      'Documentation readiness and submission support',
      'Regulatory pathway guidance',
      'Support for prioritising markets based on regulatory feasibility',
    ],
  },
  {
    title: 'Market Access Consulting',
    icon: <GlobeIcon />,
    text: 'Commercial planning support to help producers choose the right markets, define their channel strategy, and enter with a stronger route-to-market plan.',
    bullets: [
      'Market prioritisation and opportunity screening',
      'Distributor and importer strategy',
      'Go-to-market planning and territory selection',
      'Commercial positioning for new market entry',
    ],
  },
  {
    title: 'Commission-Based Sales Representation',
    icon: <HandshakeIcon />,
    text: 'A flexible model for producers who want active commercial representation in-region without building out a large local sales structure too early.',
    bullets: [
      'Performance-linked representation',
      'Partner introductions and relationship development',
      'Commercial follow-through and deal progression',
      'A pragmatic extension of your market-entry effort',
    ],
  },
];

export const metadata = {
  title: 'Services | Crisp Agriculture',
  description: 'Registration support, market access consulting, and commission-based sales representation across EMEA.',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Services</div>
          <h1>Focused support built around access, credibility, and execution.</h1>
          <p className="lead" style={{ maxWidth: '64ch' }}>
            Crisp Agriculture supports producers through a blend of regulatory guidance, market-entry planning, and direct commercial representation where it adds the most value.
          </p>
        </div>
      </section>

      <section className="section-lg">
        <div className="container grid-3">
          {serviceBlocks.map((service) => (
            <div className="card" key={service.title}>
              <div className="icon-chip">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul className="check-list">
                {service.bullets.map((bullet) => (
                  <li key={bullet}><span className="check">✓</span><span>{bullet}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-lg">
        <div className="container banner">
          <div className="grid-2">
            <div>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.74)' }}>Engagement model</div>
              <h2 style={{ color: 'white' }}>Structured for producers that want progress without unnecessary complexity.</h2>
            </div>
            <div>
              <p className="lead" style={{ color: 'rgba(255,255,255,0.82)' }}>
                Some clients need strategic guidance. Others need partner development or sales execution. Crisp Agriculture can support through targeted consulting work or through commission-based representation tied to commercial activity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
