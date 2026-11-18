import React, { useEffect, useRef, useState } from 'react';
import { Icon } from './icons';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#publications', label: 'Publications' },
  { href: '#education', label: 'Education' }
];

const PROFILE_LINK_ROWS = [
  [
    {
      label: 'udo@merowech-solutions.de',
      url: 'mailto:udo@merowech-solutions.de',
      icon: 'mail',
      external: false
    },
    {
      label: 'udo-schlegel',
      url: 'https://www.linkedin.com/in/udo-schlegel/',
      icon: 'linkedin',
      external: true
    },
    {
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=OmfaIuYAAAAJ',
      icon: 'scholar',
      external: true
    }
  ],
  [
    {
      label: 'merowech',
      url: 'https://github.com/merowech',
      icon: 'github',
      external: true
    },
    {
      label: 'visual-xai-for-time-series',
      url: 'https://github.com/visual-xai-for-time-series',
      icon: 'code',
      external: true
    },
    {
      label: 'merowech-solutions.de',
      url: 'https://merowech-solutions.de/',
      icon: 'briefcase',
      external: true
    }
  ]
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    const supportsScrollTargetGroup =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('scroll-target-group: auto');

    if (supportsScrollTargetGroup) {
      const syncAriaCurrent = () => {
        const currentLink = navEl.querySelector('a:target-current');
        navEl.querySelectorAll('a.nav-link').forEach((link) => {
          link.setAttribute('aria-current', link === currentLink ? 'true' : 'false');
        });
      };
      syncAriaCurrent();
      document.addEventListener('scrollend', syncAriaCurrent);
      return () => document.removeEventListener('scrollend', syncAriaCurrent);
    }

    const navLinks = Array.from(navEl.querySelectorAll('a.nav-link'));
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(Boolean);

    if (navLinks[0]) {
      navLinks[0].classList.add('target-current');
      navLinks[0].setAttribute('aria-current', 'true');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const isActive = link.getAttribute('href') === `#${id}`;
              link.classList.toggle('target-current', isActive);
              link.setAttribute('aria-current', isActive ? 'true' : 'false');
            });
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-topbar no-print">
        <div className="page-wrap topbar-inner">
          <a href="#front" className="brand-link">
            <span className="brand-thin">Udo</span> <strong className="brand-bold">Schlegel</strong>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={mobileOpen}
            aria-controls="primary-nav-links"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} size={18} />
            <span>Menu</span>
          </button>

          <nav
            ref={navRef}
            id="primary-nav-links"
            aria-label="Primary"
            className={`primary-nav ${mobileOpen ? 'is-open' : ''}`}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div id="front" className="masthead page-wrap">
        <div className="masthead-top">
          <img
            src="images/udo-schlegel-k.jpg"
            alt="Dr. Udo Schlegel"
            className="masthead-avatar"
            fetchPriority="high"
          />
          <div className="masthead-identity">
            <h1 className="masthead-name">
              <span className="name-light">Udo</span>{' '}
              <strong className="name-bold">Schlegel</strong>
            </h1>
            <p className="masthead-subtitle">
              Senior Applied Scientist · Machine Learning &amp; Data Science
            </p>
            <p className="masthead-location">
              Munich, Germany · Dr. rer. nat. · PostDoc at LMU Munich &amp; MCML
            </p>
          </div>
        </div>

        <div className="masthead-link-groups" aria-label="Contact and profiles">
          {PROFILE_LINK_ROWS.map((row, rowIdx) => (
            <ul key={rowIdx} className="masthead-links">
              {row.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    <Icon name={item.icon} size={14} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
