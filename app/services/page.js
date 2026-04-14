import { CTA, Footer, Header } from '../components';

export const metadata = {
  title: 'Services | Crisp Agriculture',
  description:
    'Registration support, market access consulting, and commission-based sales representation across EMEA.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="subhero">
          <div className="container narrow">
            <p className="pill">Services</p>
            <h1>Practical support from registration pathway to commercial execution.</h1>
            <p className="lead">
              Crisp Agriculture helps producers move into EMEA markets with a blend of
              regulatory guidance, market access strategy, and direct commercial support.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container stack-lg">
            <article className="service-detail card">
              <h2>Regulatory & Registration Support</h2>
              <p>
                Practical guidance for product registrations, documentation, regulatory
                pathways, and local market entry requirements across selected EMEA territories.
              </p>
              <p>
                We help producers prepare for market entry by clarifying what is needed,
                where the main hurdles are, and how to move forward more efficiently.
              </p>
            </article>

            <article className="service-detail card">
              <h2>Market Access Consulting</h2>
              <p>
                Commercial support to help producers identify attractive markets, define
                channel strategy, and approach distributors, importers, and customers with a clear plan.
              </p>
              <p>
                The goal is not only to identify opportunity, but to build a practical
                route to entry that fits the product and the market reality.
              </p>
            </article>

            <article className="service-detail card">
              <h2>Commission-Based Sales Representation</h2>
              <p>
                Hands-on commercial representation for producers seeking growth in the EMEA
                region through a flexible, performance-linked model.
              </p>
              <p>
                This creates an aligned way to build presence, develop leads, support
                channel discussions, and drive commercial traction in new markets.
              </p>
            </article>
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
