import { ArrowRight, MailIcon } from '../../components/Icons';
import EMEAMap from '../../components/EMEAMap';

export const metadata = {
  title: 'Contact | Crisp Agriculture',
  description: 'Contact Crisp Agriculture for EMEA market access, registration support, and commission-based sales representation.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1>Let’s discuss your route into EMEA markets.</h1>
          <p className="lead" style={{ maxWidth: '60ch' }}>
            Whether you are assessing new territories, preparing registrations, or looking for commercial representation, Crisp Agriculture can support the next step.
          </p>
        </div>
      </section>

      <section className="section-lg">
        <div className="container contact-grid">
          <div className="contact-card">
            <div className="icon-chip"><MailIcon /></div>
            <h3>Contact Crisp Agriculture</h3>
            <p>
              For new business discussions, partnership enquiries, or questions about market access support, please reach out directly.
            </p>
            <ul className="check-list">
              <li><span className="check">@</span><span><strong>Email</strong>josh@crispag.org</span></li>
              <li><span className="check">M</span><span><strong>Location</strong>Malta</span></li>
              <li><span className="check">W</span><span><strong>Website</strong>crispag.org</span></li>
            </ul>
            <div className="action-row">
              <a className="button" href="mailto:josh@crispag.org?subject=Enquiry%20via%20Crisp%20Agriculture%20website">Email Josh <ArrowRight /></a>
            </div>
          </div>

          <div className="contact-card">
            <div className="eyebrow">Regional focus</div>
            <h3>Coverage across EMEA</h3>
            <p className="small">Crisp Agriculture supports producers targeting Europe, the Middle East, and Africa.</p>
            <EMEAMap />
          </div>
        </div>
      </section>
    </main>
  );
}
