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
        Today I mentor a team of multiple PhD researchers, supervise Bachelor and Master theses, and
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
    milestone: 'Mentoring multiple PhD researchers · 10+ co-authored papers & 4 graduate courses since 2025',
    bullets: [
      'Lead applied ML research on vision-language models, foundation-model robustness, and explainable AI; manage and mentor a team of multiple PhD researchers and supervise B.Sc. / M.Sc. theses',
      <>
        Take new methods from idea to evaluated prototype, e.g.,{' '}
        <a
          href="https://github.com/lmu-dbs/cross-modal-pseudo-labeling-pipeline"
          target="_blank"
          rel="noopener noreferrer"
        >
          VLM-guided pseudo-labeling for semantic segmentation in waste sorting
        </a>{' '}
        (ECML-PKDD) and{' '}
        <a
          href="https://github.com/merowech/exploring-clip-robustness-against-paraphrases"
          target="_blank"
          rel="noopener noreferrer"
        >
          PRSM, a robustness measure for CLIP
        </a>{' '}
        (MMM)
      </>,
      'Transfer research into industry collaborations (e.g., Fraunhofer); co-authored 10+ papers and teach 4 graduate-level courses'
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
        , a €3M+ applied-AI consortium uniting 10+ partners (including BSI, BKA, LKA NRW, and
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
        ) as scientific &amp; technical coordinator across 10+ partners (incl. LKA NRW, BKA, BSI,
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
    chapterTitle: 'Second Ph.D. Internship: Graph Neural Networks & Hardware-Scale AI',
    story: [
      'Halfway through my doctorate, I took on a second Ph.D. internship in industrial AI systems research in Munich to see how frontier architectures are adapted for dedicated AI accelerators.',
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
    storyTitle: 'Student Research Assistant & Full-Stack Developer',
    years: 'Mar. 2015 – Sep. 2019',
    storyYears: 'Mar. 2015 – Jul. 2018',
    chapterTitle: 'Where It Started: From Department Web Pages to Deep Learning',
    story: [
      'My path into research began modestly in 2015, maintaining websites for Prof. Dr. Daniel Keim’s chair at the University of Konstanz. Curious about what happened behind the scenes of the group’s projects, I kept asking to help with data analysis and visualization, soon writing full-stack web and Unity VR tools for 3D point clouds (VICTORIA, FLORIDA) and analyzing energy networks.',
      'Working through Steinbeis with LKA NRW on spatiotemporal predictive policing (SKALA) hooked me on deep learning and directly inspired my Master’s thesis on crime forecasting.'
    ],
    milestone: 'Full-stack & VR tools for VICTORIA / FLORIDA · SKALA predictive policing & Master’s thesis',
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

const PERSONAL_STORY_EXTRAS = [
  {
    id: 'steinbeis-phd-internship',
    order: 3.5,
    company: 'Steinbeis Research Center',
    location: 'Konstanz & Munich, Germany',
    title: 'Ph.D. Internship (Full-Stack Software Engineer)',
    years: 'Apr. 2019 – Sep. 2019',
    chapterTitle: 'First Ph.D. Internship: Explainable Time-Series AI with Siemens CT',
    story: [
      'Early in my doctorate, I completed my first Ph.D. internship as a full-stack software engineer at the Steinbeis Research Center across Konstanz and Munich, leading and implementing a project on explainable AI for time series in close cooperation with Siemens Corporate Technology and their industrial clients.',
      <>
        Building the end-to-end research demonstrator connected theoretical XAI methods directly to
        real-world engineering workflows and resulted in both a peer-reviewed publication and an
        invention disclosure (<em>Erfindungsmeldung</em>) for Siemens Corporate Technology, shaping
        the core direction of my PhD.
      </>
    ],
    milestone: (
      <>
        Published paper &amp; Siemens Corporate Technology invention disclosure (
        <em>Erfindungsmeldung</em>)
      </>
    )
  },
  {
    id: 'kantine-2017',
    order: 1.5,
    sideChapter: true,
    company: 'Kantine KN (Club)',
    location: 'Konstanz, Germany',
    title: 'Barkeeper',
    years: 'Nov. 2017 – Nov. 2019',
    chapterTitle: 'Behind the Bar: Nights at Kantine KN',
    story: [
      'Alongside my Master’s thesis and early research projects in Konstanz, I worked nights behind the bar at Kantine KN. Switching from deep learning models to busy club shifts was a great way to stay calm under pressure, connect with people outside the university, and balance screen-heavy weeks with hands-on teamwork.'
    ]
  },
  {
    id: 'klimperkasten-kantine',
    order: 4.5,
    sideChapter: true,
    company: 'Klimperkasten Bar & Kantine KN Club',
    location: 'Konstanz, Germany',
    title: 'Barkeeper',
    years: 'Oct. 2022 – Nov. 2024',
    chapterTitle: 'Back Behind the Counter: From Serving to Cocktail Craft',
    story: [
      'During the final two years of my doctorate and VIKING coordination, I returned to bartending, splitting shifts between Klimperkasten Bar and Kantine KN. At Klimperkasten, my focus shifted from just serving drinks to learning how to craft cocktails and better drinks, developing a strong focus on high-quality ingredients, balance, and consistency while offering a grounded, social counterweight to long stretches of writing papers and finishing my dissertation.'
    ]
  },
  {
    id: 'nage-und-sauge',
    order: 7,
    sideChapter: true,
    company: 'Nage und Sauge (Bar & Restaurant)',
    location: 'Munich, Germany',
    title: 'Barkeeper',
    years: 'Jul. 2025 – Jun. 2026',
    chapterTitle: 'Settling into Munich at Nage und Sauge',
    story: [
      'After moving to Munich for my PostDoc at LMU, I kept the tradition alive behind the bar at Nage und Sauge. Working in a lively neighborhood bar and restaurant was one of the fastest ways to feel at home in a new city and stay connected beyond academia.'
    ]
  },
  {
    id: 'lieberscholli',
    order: 8,
    sideChapter: true,
    company: 'Lieberscholli',
    location: 'Munich, Germany',
    title: 'Barkeeper',
    years: 'Jun. 2026 – Present',
    chapterTitle: 'Evenings at Lieberscholli',
    story: [
      'Since June 2026, I have been working as a barkeeper at Lieberscholli in Munich, keeping a fast-paced, people-centered balance alongside research, mentoring, and AI consulting.'
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
    id: 'phd',
    school: 'University of Konstanz',
    location: 'Konstanz, Germany',
    degree: 'Ph.D. in Computer Science',
    shortLabel: 'Ph.D. Dissertation · 2024',
    graduated: 'Oct. 2018 – Nov. 2024',
    emphasis: 'Emphasis in Machine Learning and Data Science',
    thesis: 'Visual Explainable AI for Time Series: The potential of attributions and counterfactuals',
    thesisUrl: 'https://kops.uni-konstanz.de/entities/publication/4e108aaf-2cf9-4cfb-bc98-2730b512880b',
    link: 'https://time-series-xai.dbvis.de/',
    thesisSummary:
      'Investigates how visual analytics and explainable AI can make deep time-series models transparent and actionable, bridging raw temporal signals and human-understandable explanations through attributions and counterfactuals.',
    thesisHighlights: [
      <>
        Developed{' '}
        <a
          href="https://github.com/dbvis-ukon/ts-mule/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TS-MULE
        </a>{' '}
        as a time-series attribution technique, evaluated attribution methods via perturbation
        analysis, and introduced the Attribution Stability Indicator
      </>,
      <>
        Designed visual explanation interfaces beyond standard heatmaps, including dense-pixel
        attribution views (
        <a
          href="https://github.com/visual-xai-for-time-series/dense-time-series-attributions"
          target="_blank"
          rel="noopener noreferrer"
        >
          DAVOTS
        </a>
        ) and interactive counterfactual generation (
        <a
          href="https://github.com/visual-xai-for-time-series/interactive-counterfactuals-for-time-series"
          target="_blank"
          rel="noopener noreferrer"
        >
          ICFTS
        </a>
        )
      </>,
      'Published open-source code, evaluation benchmarks, and interactive web demonstrators across the visual-xai-for-time-series ecosystem'
    ],
    thesisLinks: [
      {
        label: 'Full Text (KOPS)',
        url: 'https://kops.uni-konstanz.de/entities/publication/4e108aaf-2cf9-4cfb-bc98-2730b512880b'
      },
      { label: 'time-series-xai.dbvis.de', url: 'https://time-series-xai.dbvis.de/' },
      { label: 'GitHub Org', url: 'https://github.com/visual-xai-for-time-series' },
      { label: 'TS-MULE (GitHub)', url: 'https://github.com/dbvis-ukon/ts-mule/' },
      {
        label: 'DAVOTS (GitHub)',
        url: 'https://github.com/visual-xai-for-time-series/dense-time-series-attributions'
      },
      { label: 'DAVOTS Demo', url: 'https://davots.time-series-xai.dbvis.de/' },
      {
        label: 'ICFTS (GitHub)',
        url: 'https://github.com/visual-xai-for-time-series/interactive-counterfactuals-for-time-series'
      },
      { label: 'ICFTS Demo', url: 'https://icfts.time-series-xai.dbvis.de/' }
    ]
  },
  {
    id: 'msc',
    school: 'University of Konstanz',
    location: 'Konstanz, Germany',
    degree: 'M.Sc. in Computer and Information Science',
    shortLabel: 'Master’s Thesis · 2018',
    graduated: 'Oct. 2016 – Jul. 2018',
    emphasis: 'Emphasis in Machine Learning',
    thesis: 'Towards Crime Forecasting Using Deep Learning',
    thesisUrl: 'https://kops.uni-konstanz.de/entities/publication/dffabcfe-c719-454c-9b9b-a9190e91be92',
    thesisSummary:
      'Explores end-to-end deep learning architectures for spatiotemporal crime forecasting on urban incident datasets (including Chicago, San Francisco, and Los Angeles), building on earlier predictive-policing work in the SKALA project.',
    thesisHighlights: [
      'Combined autoencoders (AE) with recurrent neural networks (RNNs) to model latent spatial representations over time',
      'Investigated Generative Adversarial Networks (GANs) for predicting spatiotemporal crime heatmaps',
      'Benchmarked deep forecasting architectures against classical clustering and spatiotemporal baselines'
    ],
    thesisLinks: [
      {
        label: 'Full Text (KOPS)',
        url: 'https://kops.uni-konstanz.de/entities/publication/dffabcfe-c719-454c-9b9b-a9190e91be92'
      }
    ]
  },
  {
    id: 'bsc',
    school: 'University of Konstanz',
    location: 'Konstanz, Germany',
    degree: 'B.Sc. in Information Engineering',
    shortLabel: 'Bachelor’s Thesis · 2016',
    graduated: 'Oct. 2012 – Apr. 2016',
    emphasis: 'Emphasis in Data Analysis and Visualization',
    thesis: 'Interactive Support for Malware Classification',
    originalTitle: 'Interaktive Unterstützung für Malware: Klassifikation',
    thesisUrl: 'https://kops.uni-konstanz.de/entities/publication/bca844a0-22b3-4193-b725-f9366c215225',
    thesisSummary:
      'Examines how interactive visual analytics and machine learning can support analysts in classifying, inspecting, and validating malware samples in a human-in-the-loop workflow.',
    thesisHighlights: [
      'Combined supervised machine learning models with interactive visualizations for exploring malware features and predictions',
      'Established early foundations at the intersection of cybersecurity, machine learning, and visual analytics'
    ],
    thesisLinks: [
      {
        label: 'Full Text (KOPS)',
        url: 'https://kops.uni-konstanz.de/entities/publication/bca844a0-22b3-4193-b725-f9366c215225'
      }
    ]
  }
];

export function ExperienceSection() {
  const [narrativeMode, setNarrativeMode] = useState(false);
  const [chronological, setChronological] = useState(true);

  const storyItems = useMemo(() => {
    const copy = [...WORK_EXPERIENCE, ...PERSONAL_STORY_EXTRAS];
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

      <div className={`entry-list ${narrativeMode ? 'print-only' : ''}`}>
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

      {narrativeMode && (
        <div className="story-container no-print">
          <div className="story-intro-bar no-print">
            <p className="story-intro-note">
              How a student web-maintenance job in Konstanz grew into a decade of building
              explainable AI across academia and industry, alongside years behind the bar in
              Konstanz and Munich.
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
              <article
                key={job.id}
                className={`story-chapter ${job.sideChapter ? 'story-chapter-side' : ''}`}
              >
                <span
                  className={`story-node ${job.sideChapter ? 'story-node-side' : ''}`}
                  aria-hidden="true"
                />

                <div className="story-meta-line">
                  <span className="story-years">{job.storyYears || job.years}</span>
                  <span aria-hidden="true">·</span>
                  <span className="story-place">{job.location}</span>
                  {job.sideChapter && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="story-tag">Beyond Tech</span>
                    </>
                  )}
                </div>

                <h3 className="story-chapter-title">{job.chapterTitle}</h3>

                <p className="story-role-line">
                  {job.storyTitle || job.title} ·{' '}
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

                {job.milestone && (
                  <p className="story-milestone">
                    <span className="story-milestone-label">Key takeaway:</span> {job.milestone}
                  </p>
                )}
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
  const [thesisView, setThesisView] = useState(false);

  return (
    <section id="education" className="cv-section" tabIndex={-1}>
      <div className="cv-heading-row">
        <h2 className="cv-heading cv-heading-grow">
          <span>Education</span>
        </h2>

        <div className="view-segmented no-print" role="group" aria-label="Education display mode">
          <button
            type="button"
            className={`view-seg-btn ${!thesisView ? 'is-active' : ''}`}
            aria-pressed={!thesisView}
            onClick={() => setThesisView(false)}
          >
            CV Overview
          </button>
          <button
            type="button"
            className={`view-seg-btn ${thesisView ? 'is-active' : ''}`}
            aria-pressed={thesisView}
            onClick={() => setThesisView(true)}
          >
            Thesis Details
          </button>
        </div>
      </div>

      <div className={`entry-list ${thesisView ? 'print-only' : ''}`}>
        {EDUCATION.map((edu) => (
          <article key={edu.id} className="cv-entry">
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
                Thesis:{' '}
                {edu.thesisUrl ? (
                  <a href={edu.thesisUrl} target="_blank" rel="noopener noreferrer">
                    <strong>{edu.thesis}</strong>
                  </a>
                ) : (
                  <strong>{edu.thesis}</strong>
                )}
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

      {thesisView && (
        <div className="thesis-list no-print">
          {EDUCATION.map((edu) => (
            <article key={edu.id} className="thesis-entry">
              <div className="entry-row-top">
                <span className="thesis-kind">{edu.shortLabel}</span>
                <span className="entry-date">
                  {edu.school} · {edu.graduated}
                </span>
              </div>

              <h3 className="thesis-detail-title">
                <a href={edu.thesisUrl} target="_blank" rel="noopener noreferrer">
                  {edu.thesis}
                </a>
              </h3>

              {edu.originalTitle && (
                <p className="thesis-original-title">
                  Original title: <em>{edu.originalTitle}</em>
                </p>
              )}

              <p className="thesis-summary">{edu.thesisSummary}</p>

              <ul className="entry-bullets">
                {edu.thesisHighlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="thesis-links no-print">
                {edu.thesisLinks.map((lnk, idx) => (
                  <React.Fragment key={lnk.url}>
                    {idx > 0 && <span aria-hidden="true"> · </span>}
                    <a href={lnk.url} target="_blank" rel="noopener noreferrer">
                      {lnk.label}
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
