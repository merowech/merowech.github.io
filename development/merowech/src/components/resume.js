import React, { useMemo, useState } from 'react';

const WORK_EXPERIENCE = [
  {
    id: 'lmu',
    order: 6,
    company: 'Ludwig-Maximilians-Universität München & Munich Center for Machine Learning',
    location: 'Munich, Germany',
    title: 'PostDoc (Senior Researcher & Lecturer) for Data Science and Machine Learning',
    years: 'Mar. 2025 – Present',
    chapterTitle: 'Broadening the Horizon & Mentoring the Next Generation',
    story: [
      <>
        After shipping production ML in medical technology, I received the offer to return to
        academia as a PostDoc at LMU Munich and MCML. What drew me back was the chance to combine{' '}
        <em>open-ended fundamental research with direct industry transfer</em>, expanding my focus
        from time-series explainability into vision-language models, foundation-model robustness,
        and concept-level explanations.
      </>,
      <>
        Today I mentor a team of five PhD researchers, supervise Bachelor and Master theses, and
        teach four graduate-level courses, while taking new ideas, such as{' '}
        <a
          href="https://github.com/lmu-dbs/cross-modal-pseudo-labeling-pipeline"
          target="_blank"
          rel="noopener noreferrer"
        >
          VLM-guided segmentation for waste sorting
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/merowech/exploring-clip-robustness-against-paraphrases"
          target="_blank"
          rel="noopener noreferrer"
        >
          paraphrase robustness for CLIP
        </a>
        , from initial formulation to working prototypes.
      </>
    ],
    milestone: 'Mentoring 5 PhD researchers · 13 co-authored papers & 4 graduate courses since 2025',
    bullets: [
      'Lead applied ML research on vision-language models, foundation-model robustness, and explainable AI; manage and mentor a team of 5 PhD researchers and supervise B.Sc. / M.Sc. theses',
      <>
        Take new methods from idea to evaluated prototype, e.g.,{' '}
        <a
          href="https://github.com/lmu-dbs/cross-modal-pseudo-labeling-pipeline"
          target="_blank"
          rel="noopener noreferrer"
        >
          VLM-guided pseudo-labeling for semantic segmentation in waste sorting
        </a>{' '}
        (ECML PKDD) and{' '}
        <a
          href="https://github.com/merowech/exploring-clip-robustness-against-paraphrases"
          target="_blank"
          rel="noopener noreferrer"
        >
          PRSM, a robustness measure for CLIP
        </a>{' '}
        (MMM)
      </>,
      'Transfer research into industry collaborations (e.g., Corpuls); co-authored 13 papers and teach 4 graduate-level courses'
    ]
  },
  {
    id: 'corpuls',
    order: 5,
    company: 'Corpuls – GS Elektromedizinische Geräte G. Stemple GmbH',
    location: 'Kaufering, Germany',
    title: 'Data Scientist',
    years: 'Nov. 2024 – Feb. 2025',
    chapterTitle: 'Taking Time-Series ML into Emergency Medicine',
    story: [
      'Right after defending my PhD on visual explainable AI for time series, I wanted to see how these methods hold up where noisy real-world sensor streams matter most: emergency medical services and patient monitoring.',
      'At Corpuls, I explored multi-million-sample physiological time-series datasets using density-based and deep clustering to uncover hidden signal groupings, and built and shipped an automated classifier into a live production pipeline to label incoming device telemetry.'
    ],
    milestone: 'Shipped an 85%+ accuracy production classifier on live medical-device data',
    bullets: [
      'Built and shipped a classifier (85%+ accuracy) that automatically labels incoming device data in a live production pipeline, improving downstream data quality',
      'Explored a multi-million-sample time-series dataset with DBSCAN, k-means, and deep clustering (IDEC) to surface patterns and groupings'
    ]
  },
  {
    id: 'konstanz-phd',
    order: 3,
    company: 'University of Konstanz',
    location: 'Konstanz, Germany',
    title: 'Ph.D. Candidate, Lecturer & Research Associate for Data Science',
    years: 'Oct. 2018 – Sep. 2024',
    chapterTitle: 'Choosing Research & Coordinating Trustworthy AI at Scale',
    story: [
      <>
        Finishing my Master’s left me at a crossroads with an offer not many graduates get: start a
        classic industry career as a data scientist or software engineer, or stay at the university
        in Prof. Dr. Daniel Keim’s group doing what fascinated me most: machine learning, visual
        data analysis, and figuring out <em>what deep neural networks actually learn</em>.
      </>,
      <>
        Staying turned out to be transformative. Alongside writing my dissertation on attributions
        and counterfactuals for time series, open-sourcing{' '}
        <a
          href="https://github.com/visual-xai-for-time-series"
          target="_blank"
          rel="noopener noreferrer"
        >
          interactive visual demonstrators
        </a>
        , and teaching ten courses, I proposed, wrote, and coordinated{' '}
        <a
          href="https://www.din.de/en/innovation-and-research/research-projects/research-projects-digitalization-and-ai/viking"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIKING
        </a>
        , a €3M+ applied-AI consortium uniting ten partners (including BSI, BKA, LKA NRW, and
        Fraunhofer IDMT;{' '}
        <a
          href="https://www.sifo.de/sifo/shareddocs/Downloads/files/projektumriss_viking.pdf?__blob=publicationFile&v=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          project brief
        </a>
        ,{' '}
        <a
          href="https://www.sifo.de/sifo/shareddocs/Downloads/ppts-EuropKongr-2023/Hr._Schlegel_VIKING.pdf?__blob=publicationFile&v=2"
          target="_blank"
          rel="noopener noreferrer"
        >
          talk slides
        </a>
        ) around trustworthy, human-centered AI, culminating in{' '}
        <a
          href="https://www.dinmedia.de/de/technische-regel/din-spec-91517/390603276"
          target="_blank"
          rel="noopener noreferrer"
        >
          DIN SPEC 91517
        </a>
        .
      </>
    ],
    milestone: (
      <>
        40+ publications · Coordinator of €3M+{' '}
        <a
          href="https://www.din.de/en/innovation-and-research/research-projects/research-projects-digitalization-and-ai/viking"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIKING consortium
        </a>{' '}
        · Co-author of{' '}
        <a
          href="https://www.dinmedia.de/de/technische-regel/din-spec-91517/390603276"
          target="_blank"
          rel="noopener noreferrer"
        >
          DIN SPEC 91517
        </a>
      </>
    ),
    bullets: [
      <>
        Proposed, wrote, and led the{' '}
        <a
          href="https://www.din.de/en/innovation-and-research/research-projects/research-projects-digitalization-and-ai/viking"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIKING R&amp;D project
        </a>{' '}
        (€3M+;{' '}
        <a
          href="https://www.sifo.de/sifo/shareddocs/Downloads/files/projektumriss_viking.pdf?__blob=publicationFile&v=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          project brief
        </a>
        ,{' '}
        <a
          href="https://www.sifo.de/sifo/shareddocs/Downloads/ppts-EuropKongr-2023/Hr._Schlegel_VIKING.pdf?__blob=publicationFile&v=2"
          target="_blank"
          rel="noopener noreferrer"
        >
          talk slides
        </a>
        ) as scientific &amp; technical coordinator across 10 partners (incl. LKA NRW, BKA, BSI,
        Fraunhofer IDMT), co-authoring{' '}
        <a
          href="https://www.dinmedia.de/de/technische-regel/din-spec-91517/390603276"
          target="_blank"
          rel="noopener noreferrer"
        >
          DIN SPEC 91517
        </a>{' '}
        on requirements for trustworthy AI methods
      </>,
      <>
        Developed explainable-AI and visual-analytics methods for time-series and deep learning
        models; published <em>40+ papers</em> and open-sourced{' '}
        <a
          href="https://github.com/visual-xai-for-time-series"
          target="_blank"
          rel="noopener noreferrer"
        >
          research demonstrators on GitHub
        </a>
      </>,
      'Taught 10 courses, presented at 12 conferences, and served as a panelist at 3 venues'
    ]
  },
  {
    id: 'freelance',
    order: 2,
    company: 'Freelancer',
    companyUrl: 'https://merowech-solutions.de/',
    location: 'Konstanz & Munich, Germany',
    title: 'Machine Learning & Data Science Consultant',
    years: 'Aug. 2018 – Present',
    chapterTitle: 'A Continuous Bridge to Industry Problems',
    story: [
      'During the short summer transition before starting my PhD in 2018, I took on my first freelance engagement with Steinbeis and Siemens Corporate Technology to build an explainable time-series classification prototype. Enjoying the fast feedback loop of industrial engineering so much, I continued freelancing alongside my research.',
      'Over the years, this independent freelance work served as a pragmatic counterweight to academia, including a 100-events/sec Kafka anomaly-detection pipeline for Körber Parcel Logistics, multimodal inquiry pricing for EBZ Group, and hands-on AI workshops for teams like Vetter Pharma.'
    ],
    milestone: 'Independent ML & Data Science consulting across logistics, manufacturing & pharma',
    bullets: [
      <>
        Built a Kafka data-streaming pipeline for anomaly detection for Körber Parcel Logistics,
        handling <em>100 events per second</em>
      </>,
      'Built a proof-of-concept multimodal database for EBZ Group that automated cost calculation on new inquiries through fast comparison of historical and new prices',
      'Built a proof-of-concept explaining time-series classification models on Siemens Corporate Technology’s data; ran an AI workshop for Vetter Pharma’s controlling team'
    ]
  },
  {
    id: 'huawei',
    order: 4,
    company: 'Huawei Research Center Germany',
    location: 'Munich, Germany',
    title: 'Ph.D. Internship for AI (Machine Learning Engineer)',
    years: 'Nov. 2021 – Apr. 2022',
    chapterTitle: 'Graph Neural Networks & Hardware-Scale AI',
    story: [
      'Halfway through my doctorate, I stepped into industrial AI systems research in Munich to experience how frontier architectures are adapted for dedicated AI accelerators.',
      'I ported a state-of-the-art relational Graph Neural Network architecture to Huawei’s Ascend platform in MindSpore and TensorFlow, contributing it upstream to the open-source Ascend ModelZoo, while investigating how attribution and evaluation techniques behave on relational graphs.'
    ],
    milestone: 'Open-source Ascend ModelZoo contribution & internal GNN explainability paper',
    bullets: [
      'Ported a recently published Graph Neural Network architecture for relational graphs to Huawei’s Ascend AI accelerator using MindSpore and TensorFlow, contributed as a pull request to Huawei’s open-source Ascend ModelZoo',
      'Developed and evaluated explainability techniques for GNNs, resulting in an internal Huawei research paper'
    ]
  },
  {
    id: 'konstanz-steinbeis',
    order: 1,
    company: 'University of Konstanz & Steinbeis Research Center',
    location: 'Konstanz & Düsseldorf, Germany',
    title: 'Research Assistant & Full-Stack Developer (incl. Ph.D. Internship)',
    years: 'Mar. 2015 – Sep. 2019',
    chapterTitle: 'Where It Started: From Department Web Pages to Deep Learning',
    story: [
      'My path into research began modestly in 2015, maintaining websites for Prof. Dr. Daniel Keim’s chair at the University of Konstanz. Curious about what happened behind the scenes of the group’s projects, I kept asking to help with data analysis and visualization, soon writing full-stack web and Unity VR tools for 3D point clouds (VICTORIA, FLORIDA) and analyzing energy networks.',
      'Working through Steinbeis with LKA NRW on spatiotemporal predictive policing (SKALA) hooked me on deep learning and directly inspired my Master’s thesis on crime forecasting. Shortly after, leading an industrial time-series XAI project with Siemens CT resulted in both a paper and an invention disclosure, setting the theme for my PhD.'
    ],
    milestone: 'Published time-series XAI paper & Siemens invention disclosure (Erfindungsmeldung)',
    bullets: [
      <>
        Led an explainable-AI project for time series with Siemens Corporate Technology and its
        clients (2019), resulting in a paper and an invention disclosure (<em>Erfindungsmeldung</em>
        )
      </>,
      'Built crime-forecasting clustering models in Python on spatio-temporal data for SKALA, a predictive-policing project with LKA NRW, and proposed an end-to-end deep learning approach to improve prediction quality',
      'Built full-stack web and Unity (VR) applications for the VICTORIA (EU Horizon 2020) and FLORIDA (BMBF) point-cloud visualization projects'
    ]
  }
];

const SKILL_GROUPS = [
  {
    category: 'Programming',
    items: 'Python, C/C++, JavaScript, TypeScript, Java, SQL, C#'
  },
  {
    category: 'ML & Deep Learning',
    items:
      'PyTorch, TensorFlow, Scikit-Learn, XGBoost, CatBoost, Transformers, VLMs (CLIP), GNNs, Clustering (DBSCAN, IDEC)'
  },
  {
    category: 'Data & Engineering',
    items: 'NumPy, Pandas, Docker, Kubernetes, Kafka, FastAPI, MLflow, AWS'
  },
  {
    category: 'Visualization & Web',
    items: 'D3, React, Angular, Visual Analytics, Claude Code'
  },
  {
    category: 'Research Areas',
    items:
      'Vision-Language Models, Explainable AI (LIME, SHAP, counterfactuals), Time Series, Robustness & Evaluation'
  },
  {
    category: 'Languages',
    items: 'German: native, English: fluent'
  }
];

const EDUCATION = [
  {
    school: 'University of Konstanz',
    location: 'Konstanz, Germany',
    degree: 'Ph.D. in Computer Science',
    graduated: 'Oct. 2018 – Nov. 2024',
    emphasis: 'Emphasis in Machine Learning and Data Science',
    thesis: 'Visual Explainable AI for Time Series: The potential of attributions and counterfactuals',
    link: 'https://time-series-xai.dbvis.de/'
  },
  {
    school: 'University of Konstanz',
    location: 'Konstanz, Germany',
    degree: 'M.Sc. in Computer and Information Science',
    graduated: 'Oct. 2016 – Jul. 2018',
    emphasis: 'Emphasis in Machine Learning',
    thesis: 'Towards Crime Forecasting Using Deep Learning'
  },
  {
    school: 'University of Konstanz',
    location: 'Konstanz, Germany',
    degree: 'B.Sc. in Information Engineering',
    graduated: 'Oct. 2012 – Apr. 2016',
    emphasis: 'Emphasis in Data Analysis and Visualization',
    thesis: 'Interactive Support for Malware Classification'
  }
];

export function ExperienceSection() {
  const [narrativeMode, setNarrativeMode] = useState(false);
  const [chronological, setChronological] = useState(true);

  const storyItems = useMemo(() => {
    const copy = [...WORK_EXPERIENCE];
    copy.sort((a, b) => (chronological ? a.order - b.order : b.order - a.order));
    return copy;
  }, [chronological]);

  return (
    <section id="experience" className="cv-section" tabIndex={-1}>
      <div className="cv-heading-row">
        <h2 className="cv-heading cv-heading-grow">
          <span>Work Experience</span>
        </h2>

        <div className="view-segmented no-print" role="group" aria-label="Experience display mode">
          <button
            type="button"
            className={`view-seg-btn ${!narrativeMode ? 'is-active' : ''}`}
            aria-pressed={!narrativeMode}
            onClick={() => setNarrativeMode(false)}
          >
            CV Bullets
          </button>
          <button
            type="button"
            className={`view-seg-btn ${narrativeMode ? 'is-active' : ''}`}
            aria-pressed={narrativeMode}
            onClick={() => setNarrativeMode(true)}
          >
            Personal Story
          </button>
        </div>
      </div>

      {!narrativeMode ? (
        <div className="entry-list">
          {WORK_EXPERIENCE.map((job) => (
            <article key={job.id} className="cv-entry">
              <div className="entry-row-top">
                <h3 className="entry-org">
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <span className="entry-location">{job.location}</span>
              </div>

              <div className="entry-row-sub">
                <span className="entry-role">{job.title}</span>
                <span className="entry-date">{job.years}</span>
              </div>

              <ul className="entry-bullets">
                {job.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <div className="story-container">
          <div className="story-intro-bar no-print">
            <p className="story-intro-note">
              How a student web-maintenance job in Konstanz grew into a decade of building
              explainable AI across academia and industry.
            </p>
            <button
              type="button"
              className="minimal-toggle-btn story-order-btn"
              onClick={() => setChronological((prev) => !prev)}
            >
              {chronological ? 'Order: 2015 → Present' : 'Order: Present → 2015'}
            </button>
          </div>

          <div className="story-timeline">
            {storyItems.map((job) => (
              <article key={job.id} className="story-chapter">
                <span className="story-node" aria-hidden="true" />

                <div className="story-meta-line">
                  <span className="story-years">{job.years}</span>
                  <span aria-hidden="true">·</span>
                  <span className="story-place">{job.location}</span>
                </div>

                <h3 className="story-chapter-title">{job.chapterTitle}</h3>

                <p className="story-role-line">
                  {job.title} ·{' '}
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    <span>{job.company}</span>
                  )}
                </p>

                <div className="story-paragraphs">
                  {job.story.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <p className="story-milestone">
                  <span className="story-milestone-label">Key takeaway:</span> {job.milestone}
                </p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="cv-section" tabIndex={-1}>
      <h2 className="cv-heading">
        <span>Skills &amp; Languages</span>
      </h2>

      <dl className="skills-table">
        {SKILL_GROUPS.map((g) => (
          <div key={g.category} className="skills-row">
            <dt className="skills-label">{g.category}</dt>
            <dd className="skills-value">{g.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="cv-section" tabIndex={-1}>
      <h2 className="cv-heading">
        <span>Education</span>
      </h2>

      <div className="entry-list">
        {EDUCATION.map((edu) => (
          <article key={edu.degree} className="cv-entry">
            <div className="entry-row-top">
              <h3 className="entry-org">{edu.school}</h3>
              <span className="entry-location">{edu.location}</span>
            </div>

            <div className="entry-row-sub">
              <span className="entry-role">{edu.degree}</span>
              <span className="entry-date">{edu.graduated}</span>
            </div>

            <ul className="entry-bullets">
              <li>
                {edu.emphasis}
                <br />
                Thesis: <strong>{edu.thesis}</strong>
                {edu.link && (
                  <>
                    <br />
                    More information at:{' '}
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-link"
                    >
                      {edu.link}
                    </a>
                  </>
                )}
              </li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
