import { Footer, Header } from '../components';

export const metadata = {
  title: 'Contact | Crisp Agriculture',
  description: 'Contact Crisp Agriculture for EMEA market access and registration support.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="subhero">
          <div className="container narrow">
            <p className="pill">Contact</p>
            <h1>Talk to Crisp Agriculture about access and growth in EMEA.</h1>
            <p className="lead">
              Whether you need advice on registrations, help navigating market entry, or
              commercial support on a commission basis, Crisp Agriculture is ready to help.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container two-col-equal">
            <div className="card contact-block">
              <p className="eyebrow">Direct contact</p>
              <h2>Get in touch</h2>
              <p>
                The easiest way to start is by email. Share a short overview of your
                product, target markets, and what kind of support you are looking for.
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:josh@crispag.org">josh@crispag.org</a>
                <br />
                <strong>Location:</strong> Malta
                <br />
                <strong>Website:</strong> <a href="https://www.crispag.org">crispag.org</a>
              </p>
              <a className="button button-primary" href="mailto:josh@crispag.org">
                Email Josh
              </a>
            </div>

            <div className="card contact-block">
              <p className="eyebrow">What to include</p>
              <h2>Helpful information for a first discussion</h2>
              <ul>
                <li>The product or product category</li>
                <li>The EMEA markets you want to prioritise</li>
                <li>Your current registration status</li>
                <li>Whether you need consulting, representation, or both</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
