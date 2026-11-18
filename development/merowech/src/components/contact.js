import React, { useState } from 'react';
import { CopyButton } from './copyButton';
import { ModalDialog } from './modalDialog';

const CONTACT_INFO = {
  displayName: 'Udo Schlegel',
  email: 'udo@merowech-solutions.de',
  address: {
    street: 'Oettingenstraße 67',
    city: 'München',
    zip: '80538',
    country: 'Deutschland'
  },
  links: [
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=OmfaIuYAAAAJ' },
    { name: 'GitHub', url: 'https://github.com/merowech' },
    { name: 'Visual XAI', url: 'https://github.com/visual-xai-for-time-series' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/udo-schlegel/' },
    { name: 'Merowech Solutions', url: 'https://merowech-solutions.de/' }
  ]
};

export function Contact() {
  const [impressumOpen, setImpressumOpen] = useState(false);

  return (
    <footer id="contact" className="minimal-footer page-wrap" tabIndex={-1}>
      <div className="minimal-footer-row">
        <div className="minimal-footer-left">
          <span>{CONTACT_INFO.displayName}</span>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
          <CopyButton
            text={CONTACT_INFO.email}
            ariaLabel="Copy email address"
            className="no-print"
          />
        </div>

        <ul className="minimal-footer-links no-print">
          {CONTACT_INFO.links.map((item) => (
            <li key={item.name}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="footer-link-btn"
              onClick={() => setImpressumOpen(true)}
            >
              Impressum
            </button>
          </li>
        </ul>
      </div>

      <ModalDialog
        isOpen={impressumOpen}
        onClose={() => setImpressumOpen(false)}
        title="Impressum"
      >
        <div className="impressum-content">
          <h3>Angaben gemäß § 5 DDG</h3>
          <p>
            Dr. Udo Schlegel
            <br />
            {CONTACT_INFO.address.street}
            <br />
            {CONTACT_INFO.address.zip} {CONTACT_INFO.address.city}, {CONTACT_INFO.address.country}
          </p>

          <h3>Kontakt</h3>
          <p>
            E-Mail: <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
          </p>

          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>

          <h3>Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur für den privaten,
            nicht kommerziellen Gebrauch gestattet.
          </p>
        </div>
      </ModalDialog>
    </footer>
  );
}
