import React from 'react';

const PROJECTS = [
  {
    title: 'Merowech Solutions',
    role: 'Applied AI & Data Science Consulting · Founded 2026',
    description:
      'Created in 2026 to formalize my independent AI and data science consulting—partnering with teams from initial feasibility and AI workshops to production ML pipelines.',
    links: [
      { label: 'merowech-solutions.de', url: 'https://merowech-solutions.de/' },
      {
        label: 'github.com/merowech-solutions',
        url: 'https://github.com/merowech-solutions/merowech-solutions.github.io'
      }
    ]
  },
  {
    title: 'Visual Explainable AI for Time Series',
    role: 'Open-Source Research Organization & Interactive Demos',
    description:
      'Libraries, evaluation metrics, and web demonstrators for time-series attributions, counterfactuals (ICFTS), and dense-pixel visualizations (DAVOTS).',
    links: [
      { label: 'github.com/visual-xai-for-time-series', url: 'https://github.com/visual-xai-for-time-series' },
      { label: 'time-series-xai.dbvis.de', url: 'https://time-series-xai.dbvis.de/' }
    ]
  },
  {
    title: 'Open-Source Research & Code (@merowech)',
    role: 'Personal GitHub Repositories',
    description:
      'Implementations across Vision-Language Model robustness (PRSM / CLIP), Concept Bottleneck Models, TS-MULE, and visual analytics.',
    links: [{ label: 'github.com/merowech', url: 'https://github.com/merowech' }]
  }
];

export function Projects() {
  return (
    <section id="projects" className="cv-section" tabIndex={-1}>
      <h2 className="cv-heading">
        <span>Projects &amp; Consulting</span>
      </h2>

      <div className="entry-list">
        {PROJECTS.map((proj) => (
          <article key={proj.title} className="cv-entry cv-entry-compact">
            <div className="entry-row-top">
              <h3 className="entry-org">{proj.title}</h3>
              <span className="entry-inline-links">
                {proj.links.map((lnk, idx) => (
                  <React.Fragment key={lnk.url}>
                    {idx > 0 && <span aria-hidden="true"> · </span>}
                    <a href={lnk.url} target="_blank" rel="noopener noreferrer">
                      {lnk.label}
                    </a>
                  </React.Fragment>
                ))}
              </span>
            </div>
            <div className="entry-row-sub">
              <span className="entry-role">{proj.role}</span>
            </div>
            <p className="entry-compact-desc">{proj.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
