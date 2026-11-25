import React, { useMemo, useState } from 'react';
import { Icon } from './icons';
import { CopyButton } from './copyButton';
import { ModalDialog } from './modalDialog';

const BIB_FILE = './udo-schlegel.bib';

const PUBLICATIONS = [
  {
    "id": "knab2026s",
    "citeKey": "knab2026s",
    "type": "article",
    "title": "What’s in the Bottle? A Survey and Roadmap of Concept Bottleneck Models",
    "authors": [
      "Patrick Knab",
      "David Steinmann",
      "Christian Bartelt",
      "Kristian Kersting",
      "Bernt Schiele",
      "Thomas Seidl",
      "Udo Schlegel",
      "Wolfgang Stammer"
    ],
    "venue": "Transactions on Machine Learning Research (TMLR)",
    "venueBadge": "TMLR",
    "year": 2026,
    "pages": "",
    "selected": true,
    "featured": true,
    "categories": [
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@article{knab2026s,\n  title={What’s in the Bottle? A Survey and Roadmap of Concept Bottleneck Models},\n  author={Knab, Patrick and Steinmann, David and Bartelt, Christian and Kersting, Kristian and Schiele, Bernt and Seidl, Thomas and Schlegel, Udo and Stammer, Wolfgang},\n  journal={Transactions on Machine Learning Research (TMLR)},\n  year={2026}\n}"
  },
  {
    "id": "schlegel2026vision",
    "citeKey": "schlegel2026vision",
    "type": "inproceedings",
    "title": "Vision–Language-Guided Pseudo-Labels for Unsupervised Domain Adaptation in Semantic Segmentation for Waste Sorting",
    "authors": [
      "Udo Schlegel",
      "Shubhangi",
      "Gabriel Dax",
      "Sai Rahul Kaminwar",
      "Florian Karl",
      "Thomas Seidl"
    ],
    "venue": "Joint European Conference on Machine Learning and Knowledge Discovery in Databases",
    "venueBadge": "ECML-PKDD",
    "year": 2026,
    "pages": "143–161",
    "selected": true,
    "featured": true,
    "categories": [
      "Vision & Multimodal"
    ],
    "arxiv": null,
    "links": {
      "code": "https://github.com/lmu-dbs/cross-modal-pseudo-labeling-pipeline"
    },
    "bibtex": "@inproceedings{schlegel2026vision,\n  title={Vision--Language-Guided Pseudo-Labels for Unsupervised Domain Adaptation in Semantic Segmentation for Waste Sorting},\n  author={Schlegel, Udo and Shubhangi and Dax, Gabriel and Kaminwar, Sai Rahul and Karl, Florian and Seidl, Thomas},\n  booktitle={Joint European Conference on Machine Learning and Knowledge Discovery in Databases},\n  pages={143--161},\n  year={2026},\n  organization={Springer Nature Switzerland, Cham}\n}"
  },
  {
    "id": "schlegel2026if",
    "citeKey": "schlegel2026if",
    "type": "inproceedings",
    "title": "What-If Explanations Over Time: Counterfactuals for Time Series Classification",
    "authors": [
      "Udo Schlegel",
      "Thomas Seidl"
    ],
    "venue": "World Conference on Explainable Artificial Intelligence (XAI)",
    "venueBadge": "xAI",
    "year": 2026,
    "pages": "",
    "selected": true,
    "featured": true,
    "categories": [
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{schlegel2026if,\n  title={What-If Explanations Over Time: Counterfactuals for Time Series Classification},\n  author={Schlegel, Udo and Seidl, Thomas},\n  booktitle={World Conference on Explainable Artificial Intelligence (XAI)},\n  year={2026}\n}"
  },
  {
    "id": "schlegel2026prsm",
    "citeKey": "schlegel2026prsm",
    "type": "inproceedings",
    "title": "PRSM: A Measure to Evaluate CLIP’s Robustness Against Paraphrases",
    "authors": [
      "Udo Schlegel",
      "Franziska Weeber",
      "Jian Lan",
      "Thomas Seidl"
    ],
    "venue": "International Conference on Multimedia Modeling (MMM)",
    "venueBadge": "MMM",
    "year": 2026,
    "pages": "",
    "selected": true,
    "featured": true,
    "categories": [
      "Vision & Multimodal"
    ],
    "arxiv": null,
    "links": {
      "code": "https://github.com/merowech/exploring-clip-robustness-against-paraphrases"
    },
    "bibtex": "@inproceedings{schlegel2026prsm,\n  title={PRSM: A Measure to Evaluate CLIP’s Robustness Against Paraphrases},\n  author={Schlegel, Udo and Weeber, Franziska and Lan, Jian and Seidl, Thomas},\n  booktitle={International Conference on Multimedia Modeling (MMM)},\n  year={2026},\n  organization={Springer Nature Singapore}\n}"
  },
  {
    "id": "jahn2026pitfalls",
    "citeKey": "jahn2026pitfalls",
    "type": "inproceedings",
    "title": "Pitfalls with Downsampled Data in AutoML for Clustering",
    "authors": [
      "Philipp Jahn",
      "Gabriel Marques Tavares",
      "Anna Beer",
      "Udo Schlegel",
      "Thomas Seidl"
    ],
    "venue": "ACM International Conference on Information and Knowledge Management (CIKM)",
    "venueBadge": "ACM CIKM",
    "year": 2026,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Machine Learning"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{jahn2026pitfalls,\n  title={Pitfalls with Downsampled Data in AutoML for Clustering},\n  author={Jahn, Philipp and Marques Tavares, Gabriel and Beer, Anna and Schlegel, Udo and Seidl, Thomas},\n  booktitle={ACM International Conference on Information and Knowledge Management (CIKM)},\n  year={2026}\n}"
  },
  {
    "id": "jackl2026drove",
    "citeKey": "jackl2026drove",
    "type": "inproceedings",
    "title": "What Drove Success at the 15th Video Browser Showdown? A Comprehensive Interaction-Logging Analysis",
    "authors": [
      "Bastian Jäckl",
      "Omar S. Khan",
      "Benjamin V. Verner",
      "Zuzana Vopalkova",
      "Udo Schlegel",
      "Daniel A. Keim",
      "Jakub Lokoc"
    ],
    "venue": "International Conference on Multimedia Retrieval (ICMR)",
    "venueBadge": "ACM ICMR",
    "year": 2026,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Vision & Multimodal"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{jackl2026drove,\n  title={What Drove Success at the 15th Video Browser Showdown? A Comprehensive Interaction-Logging Analysis},\n  author={J{\\\"a}ckl, Bastian and Khan, Omar S and Verner, Benjamin V and Vopalkova, Zuzana and Schlegel, Udo and Keim, Daniel A and Lokoc, Jakub},\n  booktitle={International Conference on Multimedia Retrieval (ICMR)},\n  year={2026}\n}"
  },
  {
    "id": "schlegel2026black",
    "citeKey": "schlegel2026black",
    "type": "inproceedings",
    "title": "From Black-Box to Collaborative: Position Paper on Human-Guided Trace Clustering",
    "authors": [
      "U. Schlegel",
      "G. M. Tavares",
      "D. Schuster",
      "T. Seidl"
    ],
    "venue": "EuroVis Visual Process Analytics Workshop (VIPRA)",
    "venueBadge": "EuroVis VIPRA",
    "year": 2026,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Machine Learning"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{schlegel2026black,\n  title={From Black-Box to Collaborative: Position Paper on Human-Guided Trace Clustering},\n  author={Schlegel, U and Tavares, GM and Schuster, D and Seidl, T},\n  booktitle={EuroVis Visual Process Analytics Workshop (VIPRA)},\n  year={2026}\n}"
  },
  {
    "id": "schlegel2026imfact",
    "citeKey": "schlegel2026imfact",
    "type": "article",
    "title": "IMFACT: Counterfactual Explanations for Time Series via Intrinsic Mode Function Substitution",
    "authors": [
      "Udo Schlegel",
      "Julian Rakuschek",
      "Thomas Seidl",
      "Andreas Holzinger",
      "Tobias Schreck",
      "Javier Del Ser"
    ],
    "venue": "arXiv preprint arXiv:2608.04777",
    "venueBadge": "arXiv Preprint",
    "year": 2026,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": "https://arxiv.org/abs/2608.04777",
    "links": {},
    "bibtex": "@article{schlegel2026imfact,\n  title={IMFACT: Counterfactual Explanations for Time Series via Intrinsic Mode Function Substitution},\n  author={Schlegel, Udo and Rakuschek, Julian and Seidl, Thomas and Holzinger, Andreas and Schreck, Tobias and Del Ser, Javier},\n  journal={arXiv preprint arXiv:2608.04777},\n  year={2026}\n}"
  },
  {
    "id": "rauscher2026integrating",
    "citeKey": "rauscher2026integrating",
    "type": "inproceedings",
    "title": "Integrating Gridded Glyph Maps and Self-Organizing Maps for Spatiotemporal Analysis",
    "authors": [
      "Julius Rauscher",
      "Frederik L. Dennig",
      "Udo Schlegel",
      "Daniel A. Keim",
      "Tobias Schreck"
    ],
    "venue": "EuroVis Workshop on Machine Learning Methods in Visualisation for Big Data (MLVis)",
    "venueBadge": "EuroVis MLVis",
    "year": 2026,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{rauscher2026integrating,\n  title={Integrating Gridded Glyph Maps and Self-Organizing Maps for Spatiotemporal Analysis},\n  author={Rauscher, Julius and Dennig, Frederik L and Schlegel, Udo and Keim, Daniel A and Schreck, Tobias},\n  booktitle={EuroVis Workshop on Machine Learning Methods in Visualisation for Big Data (MLVis)},\n  year={2026}\n}"
  },
  {
    "id": "knab2026intervenable",
    "citeKey": "knab2026intervenable",
    "type": "article",
    "title": "Intervenable Concept Dynamics for Video Activity Forecasting",
    "authors": [
      "Patrick Knab",
      "David Steinmann",
      "Giovanni De Felice",
      "Felix Divo",
      "Udo Schlegel",
      "Wolfgang Stammer",
      "Sascha Marton",
      "Christian Bartelt"
    ],
    "venue": "arXiv preprint arXiv:2611.00020",
    "venueBadge": "arXiv Preprint",
    "year": 2026,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Explainable AI",
      "Vision & Multimodal"
    ],
    "arxiv": "https://arxiv.org/abs/2611.00020",
    "links": {},
    "bibtex": "@article{knab2026intervenable,\n  title={Intervenable Concept Dynamics for Video Activity Forecasting},\n  author={Knab, Patrick and Steinmann, David and De Felice, Giovanni and Divo, Felix and Schlegel, Udo and Stammer, Wolfgang and Marton, Sascha and Bartelt, Christian},\n  journal={arXiv preprint arXiv:2611.00020},\n  year={2026}\n}"
  },
  {
    "id": "rauscher2026visual",
    "citeKey": "rauscher2026visual",
    "type": "inproceedings",
    "title": "Visual Boosting Techniques for Spatiotemporal Dense Pixel Visualizations",
    "authors": [
      "Julius Rauscher",
      "Frederik L. Dennig",
      "Udo Schlegel",
      "Daniel A. Keim",
      "Tobias Schreck"
    ],
    "venue": "EuroVis Workshop on Visual Analytics (EuroVA)",
    "venueBadge": "EuroVis EuroVA",
    "year": 2026,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{rauscher2026visual,\n  title={Visual Boosting Techniques for Spatiotemporal Dense Pixel Visualizations},\n  author={Rauscher, Julius and Dennig, Frederik L and Schlegel, Udo and Keim, Daniel A and Schreck, Tobias},\n  booktitle={EuroVis Workshop on Visual Analytics (EuroVA)},\n  year={2026}\n}"
  },
  {
    "id": "lan2025human",
    "citeKey": "lan2025human",
    "type": "inproceedings",
    "title": "Human Uncertainty-Aware Data Selection and Automatic Labeling in Visual Question Answering",
    "authors": [
      "Jian Lan",
      "Zhicheng Liu",
      "Udo Schlegel",
      "Raoyuan Zhao",
      "Yihong Liu",
      "Hinrich Schütze",
      "Michael A. Hedderich",
      "Thomas Seidl"
    ],
    "venue": "International Conference on Learning Representations (ICLR)",
    "venueBadge": "ICLR",
    "year": 2025,
    "pages": "",
    "selected": true,
    "featured": true,
    "categories": [
      "Vision & Multimodal"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{lan2025human,\n  title={Human Uncertainty-Aware Data Selection and Automatic Labeling in Visual Question Answering},\n  author={Lan, Jian and Liu, Zhicheng and Schlegel, Udo and Zhao, Raoyuan and Liu, Yihong and Sch{\\\"u}tze, Hinrich and Hedderich, Michael A and Seidl, Thomas},\n  booktitle={International Conference on Learning Representations (ICLR)},\n  year={2025}\n}"
  },
  {
    "id": "fischer2025dinspec91517",
    "citeKey": "fischer2025dinspec91517",
    "type": "techreport",
    "title": "Anforderungen an vertrauenswürdige KI-Methoden in polizeilichen Anwendungen (Requirements for trustworthy AI methods in police applications)",
    "authors": [
      "Maximilian T. Fischer",
      "Udo Schlegel",
      "Daniel A. Keim",
      "S. Altmann",
      "C. Grote",
      "P. Reuter",
      "G. Coleman",
      "Michaela Geierhos",
      "F. Maoro",
      "M. Kluin",
      "M. Weinbuch",
      "Hartmut Aden",
      "S. Kleemann",
      "M. Tahraoui",
      "A. Louban",
      "M. Arndt",
      "Sabrina Schönrock",
      "L. T. Brandner",
      "Simon David Hirsbrunner",
      "Wulf Loh",
      "Y. Yilmaz"
    ],
    "displayAuthors": [
      "Maximilian T. Fischer",
      "Udo Schlegel",
      "Daniel A. Keim",
      "et al."
    ],
    "venue": "DIN SPEC 91517:2025-05, DIN Media GmbH (DOI: 10.31030/3612025)",
    "venueBadge": "DIN SPEC 91517",
    "year": 2025,
    "pages": "",
    "selected": true,
    "featured": true,
    "categories": [
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {
      "din": "https://www.dinmedia.de/de/technische-regel/din-spec-91517/390603276"
    },
    "bibtex": "@techreport{fischer2025dinspec91517,\n  title={DIN SPEC 91517:2025-05 -- Anforderungen an vertrauensw{\\\"u}rdige KI-Methoden in polizeilichen Anwendungen (Requirements for trustworthy AI methods in police applications)},\n  author={Fischer, Maximilian T and Schlegel, Udo and Keim, Daniel A and Altmann, S and Grote, C and Reuter, P and Coleman, G and Geierhos, Michaela and Maoro, F and Kluin, M and Weinbuch, M and Aden, Hartmut and Kleemann, S and Tahraoui, M and Louban, A and Arndt, M and Sch{\\\"o}nrock, Sabrina and Brandner, L T and Hirsbrunner, Simon David and Loh, Wulf and Yilmaz, Y},\n  institution={DIN Deutsches Institut f{\\\"u}r Normung e. V. / DIN Media GmbH},\n  number={DIN SPEC 91517:2025-05},\n  doi={10.31030/3612025},\n  url={https://www.dinmedia.de/de/technische-regel/din-spec-91517/390603276},\n  year={2025}\n}"
  },
  {
    "id": "knab2025lime",
    "citeKey": "knab2025lime",
    "type": "inproceedings",
    "title": "Which LIME Should I Trust? concepts, challenges, and solutions",
    "authors": [
      "Patrick Knab",
      "Sascha Marton",
      "Udo Schlegel",
      "Christian Bartelt"
    ],
    "venue": "World Conference on Explainable Artificial Intelligence (XAI)",
    "venueBadge": "xAI",
    "year": 2025,
    "pages": "",
    "selected": true,
    "featured": true,
    "categories": [
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{knab2025lime,\n  title={Which lime should i trust? concepts, challenges, and solutions},\n  author={Knab, Patrick and Marton, Sascha and Schlegel, Udo and Bartelt, Christian},\n  booktitle={World Conference on Explainable Artificial Intelligence (XAI)},\n  year={2025},\n  organization={Springer Nature Switzerland}\n}"
  },
  {
    "id": "rauscher2025visually",
    "citeKey": "rauscher2025visually",
    "type": "inproceedings",
    "title": "Visually Assessing 1-D Orderings of Contiguous Spatial Polygons",
    "authors": [
      "Julius Rauscher",
      "Frederik L. Dennig",
      "Udo Schlegel",
      "Daniel A. Keim",
      "Johannes Fuchs"
    ],
    "venue": "Computer Graphics Forum",
    "venueBadge": "CGF",
    "year": 2025,
    "pages": "e70100",
    "selected": false,
    "featured": false,
    "categories": [
      "Machine Learning"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{rauscher2025visually,\n  title={Visually Assessing 1-D Orderings of Contiguous Spatial Polygons},\n  author={Rauscher, Julius and Dennig, Frederik L and Schlegel, Udo and Keim, Daniel A and Fuchs, Johannes},\n  booktitle={Computer Graphics Forum},\n  volume={44},\n  number={3},\n  pages={e70100},\n  year={2025}\n}"
  },
  {
    "id": "rauscher2025motivator",
    "citeKey": "rauscher2025motivator",
    "type": "inproceedings",
    "title": "MotiVAtor: Analyzing Physical Activity Study Data in Lab and Life through Visual Analytics",
    "authors": [
      "Julius Rauscher",
      "Manuel Schmidt",
      "Udo Schlegel",
      "Maik Bieleke",
      "Julia Schüler",
      "Daniel A. Keim"
    ],
    "venue": "IEEE VIS Workshop on Visual Analytics in Healthcare (VAHC)",
    "venueBadge": "IEEE VIS VAHC",
    "year": 2025,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{rauscher2025motivator,\n  title={MotiVAtor: Analyzing Physical Activity Study Data in Lab and Life through Visual Analytics},\n  author={Rauscher, Julius and Schmidt, Manuel and Schlegel, Udo and Bieleke, Maik and Sch{\\\"u}ler, Julia and Keim, Daniel A},\n  booktitle={IEEE VIS Workshop on Visual Analytics in Healthcare (VAHC)},\n  year={2025}\n}"
  },
  {
    "id": "lan2025my",
    "citeKey": "lan2025my",
    "type": "article",
    "title": "My Answer Is NOT 'Fair': Mitigating Social Bias in Vision-Language Models via Fair and Biased Residuals",
    "authors": [
      "Jian Lan",
      "Yifei Fu",
      "Udo Schlegel",
      "Gengyuan Zhang",
      "Tanveer Hannan",
      "Haokun Chen",
      "Thomas Seidl"
    ],
    "venue": "arXiv e-prints",
    "venueBadge": "arXiv Preprint",
    "year": 2025,
    "pages": "arXiv–2505",
    "selected": false,
    "featured": false,
    "categories": [
      "Vision & Multimodal"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@article{lan2025my,\n  title={My Answer Is NOT'Fair': Mitigating Social Bias in Vision-Language Models via Fair and Biased Residuals},\n  author={Lan, Jian and Fu, Yifei and Schlegel, Udo and Zhang, Gengyuan and Hannan, Tanveer and Chen, Haokun and Seidl, Thomas},\n  journal={arXiv e-prints},\n  pages={arXiv--2505},\n  year={2025}\n}"
  },
  {
    "id": "schlegel2025towards",
    "citeKey": "schlegel2025towards",
    "type": "inproceedings",
    "title": "Towards Explainable Deep Clustering for Time Series Data",
    "authors": [
      "Udo Schlegel",
      "Gabriel Marques Tavares",
      "Thomas Seidl"
    ],
    "venue": "ECML-PKDD Workshop for Explainable AI in Time Series and Data Streams (TempXAI)",
    "venueBadge": "ECML-PKDD TempXAI",
    "year": 2025,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{schlegel2025towards,\n  title={Towards Explainable Deep Clustering for Time Series Data},\n  author={Schlegel, Udo and Tavares, Gabriel Marques and Seidl, Thomas},\n  booktitle={ECML-PKDD Workshop for Explainable AI in Time Series and Data Streams (TempXAI)},\n  year={2025}\n}"
  },
  {
    "id": "lan2025unveiling",
    "citeKey": "lan2025unveiling",
    "type": "article",
    "title": "Unveiling the \"Fairness Seesaw\": Discovering and Mitigating Gender and Race Bias in Vision-Language Models",
    "authors": [
      "Jian Lan",
      "Udo Schlegel",
      "Tanveer Hannan",
      "Gengyuan Zhang",
      "Haokun Chen",
      "Thomas Seidl"
    ],
    "venue": "arXiv preprint arXiv:2505.23798",
    "venueBadge": "arXiv Preprint",
    "year": 2025,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Vision & Multimodal"
    ],
    "arxiv": "https://arxiv.org/abs/2505.23798",
    "links": {},
    "bibtex": "@article{lan2025unveiling,\n  title={Unveiling the\" Fairness Seesaw\": Discovering and Mitigating Gender and Race Bias in Vision-Language Models},\n  author={Lan, Jian and Schlegel, Udo and Hannan, Tanveer and Zhang, Gengyuan and Chen, Haokun and Seidl, Thomas},\n  journal={arXiv preprint arXiv:2505.23798},\n  year={2025}\n}"
  },
  {
    "id": "klein2024navigating",
    "citeKey": "klein2024navigating",
    "type": "article",
    "title": "Navigating the maze of Explainable AI: A systematic approach to evaluating methods and metrics",
    "authors": [
      "Lukas Klein",
      "Carsten Lüth",
      "Udo Schlegel",
      "Till Bungert",
      "Mennatallah El-Assady",
      "Paul Jäger"
    ],
    "venue": "Advances in Neural Information Processing Systems (NeurIPS)",
    "venueBadge": "NeurIPS",
    "year": 2024,
    "pages": "",
    "selected": true,
    "featured": true,
    "categories": [
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@article{klein2024navigating,\n  title={Navigating the maze of explainable ai: A systematic approach to evaluating methods and metrics},\n  author={Klein, Lukas and L{\\\"u}th, Carsten and Schlegel, Udo and Bungert, Till and El-Assady, Mennatallah and J{\\\"a}ger, Paul},\n  journal={Advances in Neural Information Processing Systems (NeurIPS)},\n  year={2024}\n}"
  },
  {
    "id": "lokovc2024prak",
    "citeKey": "lokovc2024prak",
    "type": "inproceedings",
    "title": "Prak tool: An interactive search tool based on video data services",
    "authors": [
      ""
    ],
    "venue": "International Conference on Multimedia Modeling (MMM)",
    "venueBadge": "MMM",
    "year": 2024,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Vision & Multimodal"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{lokovc2024prak,\n  title={Prak tool: An interactive search tool based on video data services},\n  author={Loko{\\v{c}}, Jakub and Vop{\\'a}lkov{\\'a}, Zuzana and Stroh, Michael and Buchmueller, Raphael and Schlegel, Udo},\n  booktitle={International Conference on Multimedia Modeling (MMM)},\n  year={2024},\n  organization={Springer Nature Switzerland}\n}"
  },
  {
    "id": "schlegel2024visual",
    "citeKey": "schlegel2024visual",
    "type": "article",
    "title": "Visual Explainable AI for Time Series: The Potential of Attributions and Counterfactuals",
    "authors": [
      "Udo Schlegel"
    ],
    "venue": "PhD Thesis",
    "venueBadge": "PhD Thesis",
    "year": 2024,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Theses",
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {
      "kops": "https://kops.uni-konstanz.de/entities/publication/4e108aaf-2cf9-4cfb-bc98-2730b512880b",
      "project": "https://time-series-xai.dbvis.de/",
      "code": "https://github.com/visual-xai-for-time-series"
    },
    "bibtex": "@phdthesis{schlegel2024visual,\n  title={Visual Explainable AI for Time Series: The Potential of Attributions and Counterfactuals},\n  author={Schlegel, Udo},\n  school={University of Konstanz},\n  url={https://kops.uni-konstanz.de/entities/publication/4e108aaf-2cf9-4cfb-bc98-2730b512880b},\n  year={2024}\n}"
  },
  {
    "id": "schlegel2024finding",
    "citeKey": "schlegel2024finding",
    "type": "inproceedings",
    "title": "Finding the deepdream for time series: Activation maximization for univariate time series",
    "authors": [
      "Udo Schlegel",
      "Daniel A. Keim",
      "Tobias Sutter"
    ],
    "venue": "ECML-PKDD Workshop for Explainable AI in Time Series and Data Streams (TempXAI)",
    "venueBadge": "ECML-PKDD TempXAI",
    "year": 2024,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{schlegel2024finding,\n  title={Finding the deepdream for time series: Activation maximization for univariate time series},\n  author={Schlegel, Udo and Keim, Daniel A and Sutter, Tobias},\n  booktitle={ECML-PKDD Workshop for Explainable AI in Time Series and Data Streams (TempXAI)},\n  year={2024}\n}"
  },
  {
    "id": "bidlingmaier2024fishing",
    "citeKey": "bidlingmaier2024fishing",
    "type": "inproceedings",
    "title": "Fishing Vizzard: An Interactive Visual Analytics Tool to Identify Suspicious Fishing Behavior",
    "authors": [
      "Antonella Bidlingmaier",
      "Julian Jandeleit",
      "Fred Kunze",
      "Lisa-Maria Reutlinger",
      "Tolga Tuncer",
      "Udo Schlegel",
      "Daniel A. Keim"
    ],
    "venue": "IEEE Visual Analytics Science and Technology (VAST Challenge)",
    "venueBadge": "IEEE VAST",
    "year": 2024,
    "pages": "26–27",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{bidlingmaier2024fishing,\n  title={Fishing Vizzard: An Interactive Visual Analytics Tool to Identify Suspicious Fishing Behavior},\n  author={Bidlingmaier, Antonella and Jandeleit, Julian and Kunze, Fred and Reutlinger, Lisa-Maria and Tuncer, Tolga and Schlegel, Udo and Keim, Daniel A},\n  booktitle={IEEE Visual Analytics Science and Technology (VAST Challenge)},\n  pages={26--27},\n  year={2024},\n  organization={IEEE}\n}"
  },
  {
    "id": "schlegel2024interactive_2",
    "citeKey": "schlegel2024interactive",
    "type": "inproceedings",
    "title": "Interactive counterfactual generation for univariate time series",
    "authors": [
      "Udo Schlegel",
      "Julius Rauscher",
      "Daniel A. Keim"
    ],
    "venue": "ECML-PKDD International Workshop on eXplainable Knowledge Discovery in Data Mining",
    "venueBadge": "ECML-PKDD XKDD",
    "year": 2024,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {
      "code": "https://github.com/visual-xai-for-time-series/interactive-counterfactuals-for-time-series",
      "demo": "https://icfts.time-series-xai.dbvis.de/"
    },
    "bibtex": "@inproceedings{schlegel2024interactive,\n  title={Interactive counterfactual generation for univariate time series},\n  author={Schlegel, Udo and Rauscher, Julius and Keim, Daniel A},\n  booktitle={ECML PKDD International Workshop on eXplainable Knowledge Discovery in Data Mining},\n  year={2024}\n}"
  },
  {
    "id": "schlegel2024interactive",
    "citeKey": "schlegel2024interactive",
    "type": "inproceedings",
    "title": "Interactive dense pixel visualizations for time series and model attribution explanations",
    "authors": [
      "Udo Schlegel",
      "Daniel A. Keim"
    ],
    "venue": "EuroVis Workshop on Machine Learning Methods in Visualisation for Big Data (MLVis)",
    "venueBadge": "EuroVis MLVis",
    "year": 2024,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Explainable AI",
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {
      "code": "https://github.com/visual-xai-for-time-series/dense-time-series-attributions",
      "demo": "https://davots.time-series-xai.dbvis.de/"
    },
    "bibtex": "@inproceedings{schlegel2024interactive,\n  title={Interactive dense pixel visualizations for time series and model attribution explanations},\n  author={Schlegel, Udo and Keim, Daniel A},\n  booktitle={EuroVis Workshop on Machine Learning Methods in Visualisation for Big Data (MLVis)},\n  year={2024}\n}"
  },
  {
    "id": "jackl2024leveraging",
    "citeKey": "jackl2024leveraging",
    "type": "article",
    "title": "Leveraging color channel independence for improved unsupervised object detection",
    "authors": [
      "Bastian Jäckl",
      "Yannick Metz",
      "Udo Schlegel",
      "Daniel A. Keim",
      "Maximilian T. Fischer"
    ],
    "venue": "arXiv preprint arXiv:2412.15150",
    "venueBadge": "arXiv Preprint",
    "year": 2024,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Vision & Multimodal"
    ],
    "arxiv": "https://arxiv.org/abs/2412.15150",
    "links": {},
    "bibtex": "@article{jackl2024leveraging,\n  title={Leveraging color channel independence for improved unsupervised object detection},\n  author={J{\\\"a}ckl, Bastian and Metz, Yannick and Schlegel, Udo and Keim, Daniel A and Fischer, Maximilian T},\n  journal={arXiv preprint arXiv:2412.15150},\n  year={2024}\n}"
  },
  {
    "id": "vopalkova2024searching",
    "citeKey": "vopalkova2024searching",
    "type": "inproceedings",
    "title": "Searching temporally distant activities in lifelog data with prak tool V2",
    "authors": [
      "Zuzana Vopálková",
      "Jakub Yaghob",
      "Michael Stroh",
      "Udo Schlegel",
      "Jakub Lokoc"
    ],
    "venue": "ACM Workshop on the Lifelog Search Challenge",
    "venueBadge": "ACM LSC",
    "year": 2024,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{vopalkova2024searching,\n  title={Searching temporally distant activities in lifelog data with prak tool V2},\n  author={Vop{\\'a}lkov{\\'a}, Zuzana and Yaghob, Jakub and Stroh, Michael and Schlegel, Udo and Lokoc, Jakub},\n  booktitle={ACM Workshop on the Lifelog Search Challenge},\n  year={2024}\n}"
  },
  {
    "id": "buchmuller2024visual",
    "citeKey": "buchmuller2024visual",
    "type": "inproceedings",
    "title": "Visual Bias Detection for Addressing Illegal Fishing Activities",
    "authors": [
      "Raphael Buchmüller",
      "Daniel Fürst",
      "Alexander Frings",
      "Udo Schlegel",
      "Daniel Keim"
    ],
    "venue": "IEEE Visual Analytics Science and Technology (VAST Challenge)",
    "venueBadge": "IEEE VAST",
    "year": 2024,
    "pages": "9–10",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{buchmuller2024visual,\n  title={Visual Bias Detection for Addressing Illegal Fishing Activities},\n  author={Buchm{\\\"u}ller, Raphael and F{\\\"u}rst, Daniel and Frings, Alexander and Schlegel, Udo and Keim, Daniel},\n  booktitle={IEEE Visual Analytics Science and Technology (VAST Challenge)},\n  pages={9--10},\n  year={2024},\n  organization={IEEE}\n}"
  },
  {
    "id": "schlegel2023introducing",
    "citeKey": "schlegel2023introducing",
    "type": "inproceedings",
    "title": "Introducing the attribution stability indicator: A measure for time series XAI attributions",
    "authors": [
      "Udo Schlegel",
      "Daniel A. Keim"
    ],
    "venue": "Joint European Conference on Machine Learning and Knowledge Discovery in Databases",
    "venueBadge": "ECML-PKDD",
    "year": 2023,
    "pages": "3–18",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {
      "code": "https://github.com/visual-xai-for-time-series/attribution-stability-indicator"
    },
    "bibtex": "@inproceedings{schlegel2023introducing,\n  title={Introducing the attribution stability indicator: A measure for time series Xai attributions},\n  author={Schlegel, Udo and Keim, Daniel A},\n  booktitle={Joint European Conference on Machine Learning and Knowledge Discovery in Databases},\n  pages={3--18},\n  year={2023},\n  organization={Springer Nature Switzerland, Cham}\n}"
  },
  {
    "id": "schlegel2023deep",
    "citeKey": "schlegel2023deep",
    "type": "inproceedings",
    "title": "A deep dive into perturbations as evaluation technique for time series XAI",
    "authors": [
      "Udo Schlegel",
      "Daniel A. Keim"
    ],
    "venue": "World Conference on Explainable Artificial Intelligence (XAI)",
    "venueBadge": "xAI",
    "year": 2023,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {
      "code": "https://github.com/visual-xai-for-time-series/time-series-xai-perturbation-analysis"
    },
    "bibtex": "@inproceedings{schlegel2023deep,\n  title={A deep dive into perturbations as evaluation technique for time series XAI},\n  author={Schlegel, Udo and Keim, Daniel A},\n  booktitle={World Conference on Explainable Artificial Intelligence (XAI)},\n  year={2023},\n  organization={Springer Nature Switzerland}\n}"
  },
  {
    "id": "laguna2023explimeable_2",
    "citeKey": "laguna2023explimeable",
    "type": "inproceedings",
    "title": "ExpLIMEable: A visual analytics approach for exploring LIME",
    "authors": [
      "Sonia Laguna",
      "Julian N. Heidenreich",
      "Jiugeng Sun",
      "Nilüfer Cetin",
      "Ibrahim Al-Hazwani",
      "Udo Schlegel",
      "Furui Cheng",
      "Mennatallah El-Assady"
    ],
    "venue": "IEEE VIS Workshop on Visual Analytics in Healthcare (VAHC)",
    "venueBadge": "IEEE VIS VAHC",
    "year": 2023,
    "pages": "27–33",
    "selected": false,
    "featured": false,
    "categories": [
      "Explainable AI",
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{laguna2023explimeable,\n  title={ExpLIMEable: A visual analytics approach for exploring LIME},\n  author={Laguna, Sonia and Heidenreich, Julian N and Sun, Jiugeng and Cetin, Nil{\\\"u}fer and Al-Hazwani, Ibrahim and Schlegel, Udo and Cheng, Furui and El-Assady, Mennatallah},\n  booktitle={IEEE VIS Workshop on Visual Analytics in Healthcare (VAHC)},\n  pages={27--33},\n  year={2023},\n  organization={IEEE}\n}"
  },
  {
    "id": "laguna2023explimeable",
    "citeKey": "laguna2023explimeable",
    "type": "inproceedings",
    "title": "ExpLIMEable: An exploratory framework for LIME",
    "authors": [
      "Sonia Laguna",
      "Julian Heidenreich",
      "Jiugeng Sun",
      "Nilüfer Cetin",
      "Ibrahim Al Hazwani",
      "Udo Schlegel",
      "Furui Cheng",
      "Mennatallah El-Assady"
    ],
    "venue": "NeurIPS Workshop on XAI in Action: Past, Present, and Future Applications",
    "venueBadge": "NeurIPS Workshop",
    "year": 2023,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{laguna2023explimeable,\n  title={ExpLIMEable: An exploratory framework for LIME},\n  author={Laguna, Sonia and Heidenreich, Julian and Sun, Jiugeng and Cetin, Nil{\\\"u}fer and Al Hazwani, Ibrahim and Schlegel, Udo and Cheng, Furui and El-Assady, Mennatallah},\n  booktitle={NeurIPS Workshop on XAI in Action: Past, Present, and Future Applications},\n  year={2023}\n}"
  },
  {
    "id": "schlegel2023visual",
    "citeKey": "schlegel2023visual",
    "type": "article",
    "title": "Visual explanations with attributions and counterfactuals on time series classification",
    "authors": [
      "Udo Schlegel",
      "Daniela Oelke",
      "Daniel A. Keim",
      "Mennatallah El-Assady"
    ],
    "venue": "arXiv preprint arXiv:2307.08494",
    "venueBadge": "arXiv Preprint",
    "year": 2023,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": "https://arxiv.org/abs/2307.08494",
    "links": {
      "code": "https://github.com/visual-xai-for-time-series/visual-explanations-on-time-series",
      "demo": "https://visual-explanations.time-series-xai.dbvis.de/"
    },
    "bibtex": "@article{schlegel2023visual,\n  title={Visual explanations with attributions and counterfactuals on time series classification},\n  author={Schlegel, Udo and Oelke, Daniela and Keim, Daniel A and El-Assady, Mennatallah},\n  journal={arXiv preprint arXiv:2307.08494},\n  year={2023}\n}"
  },
  {
    "id": "theissler2022explainable",
    "citeKey": "theissler2022explainable",
    "type": "article",
    "title": "Explainable AI for time series classification: a review, taxonomy and research directions",
    "authors": [
      "Andreas Theissler",
      "Francesco Spinnato",
      "Udo Schlegel",
      "Riccardo Guidotti"
    ],
    "venue": "IEEE Access",
    "venueBadge": "IEEE Access",
    "year": 2022,
    "pages": "",
    "selected": false,
    "featured": true,
    "categories": [
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@article{theissler2022explainable,\n  title={Explainable AI for time series classification: a review, taxonomy and research directions},\n  author={Theissler, Andreas and Spinnato, Francesco and Schlegel, Udo and Guidotti, Riccardo},\n  journal={IEEE Access},\n  year={2022}\n}"
  },
  {
    "id": "metz2022comprehensive",
    "citeKey": "metz2022comprehensive",
    "type": "inproceedings",
    "title": "A comprehensive workflow for effective imitation and reinforcement learning with visual analytics",
    "authors": [
      "Yannick Metz",
      "Udo Schlegel",
      "Daniel Seebacher",
      "Mennatallah El-Assady",
      "Daniel A. Keim"
    ],
    "venue": "EuroVis Workshop on Visual Analytics (EuroVA)",
    "venueBadge": "EuroVis EuroVA",
    "year": 2022,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{metz2022comprehensive,\n  title={A comprehensive workflow for effective imitation and reinforcement learning with visual analytics},\n  author={Metz, Yannick and Schlegel, Udo and Seebacher, Daniel and El-Assady, Mennatallah and Keim, Daniel A},\n  booktitle={EuroVis Workshop on Visual Analytics (EuroVA)},\n  year={2022}\n}"
  },
  {
    "id": "el2022semantic",
    "citeKey": "el2022semantic",
    "type": "inproceedings",
    "title": "Semantic color mapping: A pipeline for assigning meaningful colors to text",
    "authors": [
      "Mennatallah El-Assady",
      "Rebecca Kehlbeck",
      "Yannick Metz",
      "Udo Schlegel",
      "Rita Sevastjanova",
      "Fabian Sperrle",
      "Thilo Spinner"
    ],
    "venue": "IEEE VIS Workshop on Visualization Guidelines in Research, Design, and Education (VisGuides)",
    "venueBadge": "IEEE VIS VisGuides",
    "year": 2022,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{el2022semantic,\n  title={Semantic color mapping: A pipeline for assigning meaningful colors to text},\n  author={El-Assady, Mennatallah and Kehlbeck, Rebecca and Metz, Yannick and Schlegel, Udo and Sevastjanova, Rita and Sperrle, Fabian and Spinner, Thilo},\n  booktitle={IEEE VIS Workshop on Visualization Guidelines in Research, Design, and Education (VisGuides)},\n  year={2022},\n  organization={IEEE}\n}"
  },
  {
    "id": "schlegel2022vinnpruner",
    "citeKey": "schlegel2022vinnpruner",
    "type": "inproceedings",
    "title": "ViNNPruner: Visual Interactive Pruning for Deep Learning",
    "authors": [
      "Udo Schlegel",
      "Samuel Schiegg",
      "Daniel A. Keim"
    ],
    "venue": "EuroVis Workshop on Machine Learning Methods in Visualisation for Big Data (MLVis)",
    "venueBadge": "EuroVis MLVis",
    "year": 2022,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Machine Learning"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{schlegel2022vinnpruner,\n  title={ViNNPruner: Visual Interactive Pruning for Deep Learning},\n  author={Schlegel, Udo and Schiegg, Samuel and Keim, Daniel A},\n  booktitle={EuroVis Workshop on Machine Learning Methods in Visualisation for Big Data (MLVis)},\n  year={2022}\n}"
  },
  {
    "id": "jentner2022visualisierung",
    "citeKey": "jentner2022visualisierung",
    "type": "article",
    "title": "Visualisierung der covid-19-inzidenzen und behandlungskapazitäten mit coronavis",
    "authors": [
      "Wolfgang Jentner",
      "Fabian Sperrle",
      "Daniel Seebacher",
      "Matthias Kraus",
      "Rita Sevastjanova",
      "Maximilian T. Fischer",
      "Udo Schlegel",
      "Dirk Streeb",
      "Matthias Miller",
      "Thilo Spinner",
      "et al."
    ],
    "venue": "Resilienz und Pandemie: Handlungsempfehlungen anhand von Erfahrungen mit COVID-19",
    "venueBadge": "Book Chapter",
    "year": 2022,
    "pages": "176–189",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@article{jentner2022visualisierung,\n  title={Visualisierung der covid-19-inzidenzen und behandlungskapazit{\\\"a}ten mit coronavis},\n  author={Jentner, Wolfgang and Sperrle, Fabian and Seebacher, Daniel and Kraus, Matthias and Sevastjanova, Rita and Fischer, Maximilian T and Schlegel, Udo and Streeb, Dirk and Miller, Matthias and Spinner, Thilo and others},\n  journal={Resilienz und Pandemie: Handlungsempfehlungen anhand von Erfahrungen mit COVID-19},\n  pages={176--189},\n  year={2022},\n  publisher={Kohlhammer}\n}"
  },
  {
    "id": "streeb2021task",
    "citeKey": "streeb2021task",
    "type": "article",
    "title": "Task-based visual interactive modeling: Decision trees and rule-based classifiers",
    "authors": [
      "Dirk Streeb",
      "Yannick Metz",
      "Udo Schlegel",
      "Bruno Schneider",
      "Mennatallah El-Assady",
      "Hansjörg Neth",
      "Min Chen",
      "Daniel A. Keim"
    ],
    "venue": "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
    "venueBadge": "IEEE TVCG",
    "year": 2021,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@article{streeb2021task,\n  title={Task-based visual interactive modeling: Decision trees and rule-based classifiers},\n  author={Streeb, Dirk and Metz, Yannick and Schlegel, Udo and Schneider, Bruno and El-Assady, Mennatallah and Neth, Hansj{\\\"o}rg and Chen, Min and Keim, Daniel A},\n  journal={IEEE Transactions on Visualization and Computer Graphics (TVCG)},\n  year={2021}\n}"
  },
  {
    "id": "schlegel2021ts",
    "citeKey": "schlegel2021ts",
    "type": "inproceedings",
    "title": "Ts-mule: Local interpretable model-agnostic explanations for time series forecast models",
    "authors": [
      "Udo Schlegel",
      "Duy Lam Vo",
      "Daniel A. Keim",
      "Daniel Seebacher"
    ],
    "venue": "Joint european conference on machine learning and knowledge discovery in databases",
    "venueBadge": "ECML-PKDD",
    "year": 2021,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series"
    ],
    "arxiv": null,
    "links": {
      "code": "https://github.com/dbvis-ukon/ts-mule/"
    },
    "bibtex": "@inproceedings{schlegel2021ts,\n  title={Ts-mule: Local interpretable model-agnostic explanations for time series forecast models},\n  author={Schlegel, Udo and Vo, Duy Lam and Keim, Daniel A and Seebacher, Daniel},\n  booktitle={Joint european conference on machine learning and knowledge discovery in databases},\n  year={2021},\n  organization={Springer International Publishing}\n}"
  },
  {
    "id": "buchmuller2021spatialrugs",
    "citeKey": "buchmuller2021spatialrugs",
    "type": "article",
    "title": "SpatialRugs: A compact visualization of space and time for analyzing collective movement data",
    "authors": [
      "Juri F. Buchmüller",
      "Udo Schlegel",
      "Eren Cakmak",
      "Daniel A. Keim",
      "Evanthia Dimara"
    ],
    "venue": "Computers & Graphics",
    "venueBadge": "Computers & Graphics",
    "year": 2021,
    "pages": "23–34",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@article{buchmuller2021spatialrugs,\n  title={SpatialRugs: A compact visualization of space and time for analyzing collective movement data},\n  author={Buchm{\\\"u}ller, Juri F and Schlegel, Udo and Cakmak, Eren and Keim, Daniel A and Dimara, Evanthia},\n  journal={Computers \\& Graphics},\n  volume={101},\n  pages={23--34},\n  year={2021},\n  publisher={Pergamon}\n}"
  },
  {
    "id": "spinner2021speculative",
    "citeKey": "spinner2021speculative",
    "type": "inproceedings",
    "title": "Speculative Execution of Similarity Queries: Real-Time Parameter Optimization through Visual Exploration",
    "authors": [
      "Thilo Spinner",
      "Udo Schlegel",
      "Martin Schall",
      "Fabian Sperrle",
      "Rita Sevastjanova",
      "Beatrice Gobbo",
      "Julius Rauscher",
      "Mennatallah El-Assady",
      "Daniel A. Keim"
    ],
    "venue": "Workshop Proceedings of the EDBT/ICDT",
    "venueBadge": "EDBT/ICDT",
    "year": 2021,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Machine Learning"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{spinner2021speculative,\n  title={Speculative Execution of Similarity Queries: Real-Time Parameter Optimization through Visual Exploration},\n  author={Spinner, Thilo and Schlegel, Udo and Schall, Martin and Sperrle, Fabian and Sevastjanova, Rita and Gobbo, Beatrice and Rauscher, Julius and El-Assady, Mennatallah and Keim, Daniel A},\n  booktitle={Workshop Proceedings of the EDBT/ICDT},\n  year={2021}\n}"
  },
  {
    "id": "schlegel2021time",
    "citeKey": "schlegel2021time",
    "type": "inproceedings",
    "title": "Time series model attribution visualizations as explanations",
    "authors": [
      "Udo Schlegel",
      "Daniel A. Keim"
    ],
    "venue": "IEEE VIS Workshop on TRust and EXpertise in Visual Analytics (TREX)",
    "venueBadge": "IEEE VIS TREX",
    "year": 2021,
    "pages": "27–31",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Explainable AI",
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{schlegel2021time,\n  title={Time series model attribution visualizations as explanations},\n  author={Schlegel, Udo and Keim, Daniel A},\n  booktitle={IEEE VIS Workshop on TRust and EXpertise in Visual Analytics (TREX)},\n  pages={27--31},\n  year={2021},\n  organization={IEEE}\n}"
  },
  {
    "id": "cakmak2020multiscale",
    "citeKey": "cakmak2020multiscale",
    "type": "article",
    "title": "Multiscale snapshots: Visual analysis of temporal summaries in dynamic graphs",
    "authors": [
      "Eren Cakmak",
      "Udo Schlegel",
      "Dominik Jäckle",
      "Daniel Keim",
      "Tobias Schreck"
    ],
    "venue": "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
    "venueBadge": "IEEE TVCG",
    "year": 2020,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@article{cakmak2020multiscale,\n  title={Multiscale snapshots: Visual analysis of temporal summaries in dynamic graphs},\n  author={Cakmak, Eren and Schlegel, Udo and J{\\\"a}ckle, Dominik and Keim, Daniel and Schreck, Tobias},\n  journal={IEEE Transactions on Visualization and Computer Graphics (TVCG)},\n  year={2020}\n}"
  },
  {
    "id": "schlegel2020towards",
    "citeKey": "schlegel2020towards",
    "type": "inproceedings",
    "title": "Towards visual debugging for multi-target time series classification",
    "authors": [
      "Udo Schlegel",
      "Eren Cakmak",
      "Hiba Arnout",
      "Mennatallah El-Assady",
      "Daniela Oelke",
      "Daniel A. Keim"
    ],
    "venue": "ACM Conference on Intelligent User Interfaces (IUI)",
    "venueBadge": "ACM IUI",
    "year": 2020,
    "pages": "202–206",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{schlegel2020towards,\n  title={Towards visual debugging for multi-target time series classification},\n  author={Schlegel, Udo and Cakmak, Eren and Arnout, Hiba and El-Assady, Mennatallah and Oelke, Daniela and Keim, Daniel A},\n  booktitle={ACM Conference on Intelligent User Interfaces (IUI)},\n  pages={202--206},\n  year={2020}\n}"
  },
  {
    "id": "schlegel2020empirical",
    "citeKey": "schlegel2020empirical",
    "type": "article",
    "title": "An empirical study of Explainable AI techniques on deep learning models for time series tasks",
    "authors": [
      "Udo Schlegel",
      "Daniela Oelke",
      "Daniel A. Keim",
      "Mennatallah El-Assady"
    ],
    "venue": "arXiv preprint arXiv:2012.04344",
    "venueBadge": "arXiv Preprint",
    "year": 2020,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": "https://arxiv.org/abs/2012.04344",
    "links": {},
    "bibtex": "@article{schlegel2020empirical,\n  title={An empirical study of explainable AI techniques on deep learning models for time series tasks},\n  author={Schlegel, Udo and Oelke, Daniela and Keim, Daniel A and El-Assady, Mennatallah},\n  journal={arXiv preprint arXiv:2012.04344},\n  year={2020}\n}"
  },
  {
    "id": "schlegel2020modelspex",
    "citeKey": "schlegel2020modelspex",
    "type": "inproceedings",
    "title": "Modelspex: Model specification using explainable artificial intelligence methods",
    "authors": [
      "Udo Schlegel",
      "Eren Cakmak",
      "Daniel A. Keim"
    ],
    "venue": "EuroVis Workshop on Machine Learning Methods in Visualisation for Big Data (MLVis)",
    "venueBadge": "EuroVis MLVis",
    "year": 2020,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{schlegel2020modelspex,\n  title={Modelspex: Model specification using explainable artificial intelligence methods},\n  author={Schlegel, Udo and Cakmak, Eren and Keim, Daniel A},\n  booktitle={EuroVis Workshop on Machine Learning Methods in Visualisation for Big Data (MLVis)},\n  year={2020}\n}"
  },
  {
    "id": "englert2020somewraps",
    "citeKey": "englert2020somewraps",
    "type": "inproceedings",
    "title": "Somewraps-Something with Graphs: Visual Analytics of Network Data",
    "authors": [
      "David Englert",
      "Pablo Martinez-Blasco",
      "Eren Cakmak",
      "Udo Schlegel",
      "Juri Buchmüller",
      "Daniel A. Keim"
    ],
    "venue": "IEEE Conference on Visual Analytics Science and Technology (VAST Challenge 2020 Mini Challenge 1)",
    "venueBadge": "IEEE VAST",
    "year": 2020,
    "pages": "11",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{englert2020somewraps,\n  title={Somewraps-Something with Graphs: Visual Analytics of Network Data},\n  author={Englert, David and Martinez-Blasco, Pablo and Cakmak, Eren and Schlegel, Udo and Buchm{\\\"u}ller, Juri and Keim, Daniel A},\n  booktitle={IEEE Conference on Visual Analytics Science and Technology (VAST Challenge 2020 Mini Challenge 1)},\n  pages={11},\n  year={2020}\n}"
  },
  {
    "id": "buchmuller2020spatialrugs",
    "citeKey": "buchmuller2020spatialrugs",
    "type": "inproceedings",
    "title": "SpatialRugs: Enhancing spatial awareness of movement in dense pixel visualizations",
    "authors": [
      "Juri F. Buchmüller",
      "Udo Schlegel",
      "Eren Cakmak",
      "Evanthia Dimara",
      "Daniel A. Keim"
    ],
    "venue": "EuroVis Workshop on Visual Analytics (EuroVA)",
    "venueBadge": "EuroVis EuroVA",
    "year": 2020,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{buchmuller2020spatialrugs,\n  title={SpatialRugs: Enhancing spatial awareness of movement in dense pixel visualizations},\n  author={Buchm{\\\"u}ller, Juri F and Schlegel, Udo and Cakmak, Eren and Dimara, Evanthia and Keim, Daniel A},\n  booktitle={EuroVis Workshop on Visual Analytics (EuroVA)},\n  year={2020}\n}"
  },
  {
    "id": "spinner2019explainer",
    "citeKey": "spinner2019explainer",
    "type": "article",
    "title": "explAIner: A visual analytics framework for interactive and explainable machine learning",
    "authors": [
      "Thilo Spinner",
      "Udo Schlegel",
      "Hanna Schäfer",
      "Mennatallah El-Assady"
    ],
    "venue": "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
    "venueBadge": "IEEE TVCG",
    "year": 2019,
    "pages": "",
    "selected": false,
    "featured": true,
    "categories": [
      "Explainable AI",
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@article{spinner2019explainer,\n  title={explAIner: A visual analytics framework for interactive and explainable machine learning},\n  author={Spinner, Thilo and Schlegel, Udo and Sch{\\\"a}fer, Hanna and El-Assady, Mennatallah},\n  journal={IEEE Transactions on Visualization and Computer Graphics (TVCG)},\n  year={2019},\n  publisher={IEEE}\n}"
  },
  {
    "id": "majumdar2019earthquake",
    "citeKey": "majumdar2019earthquake",
    "type": "inproceedings",
    "title": "Earthquake investigation and visual cognizance of multivariate temporal tabular data using machine learning",
    "authors": [
      "Arjun Majumdar",
      "Gent Ymeri",
      "Sebastian Strumbelj",
      "Juri Buchmüller",
      "Udo Schlegel",
      "Daniel A. Keim"
    ],
    "venue": "IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)",
    "venueBadge": "IEEE VAST",
    "year": 2019,
    "pages": "136–137",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{majumdar2019earthquake,\n  title={Earthquake investigation and visual cognizance of multivariate temporal tabular data using machine learning},\n  author={Majumdar, Arjun and Ymeri, Gent and Strumbelj, Sebastian and Buchm{\\\"u}ller, Juri and Schlegel, Udo and Keim, Daniel A},\n  booktitle={IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)},\n  pages={136--137},\n  year={2019},\n  organization={IEEE}\n}"
  },
  {
    "id": "sperrle2019human",
    "citeKey": "sperrle2019human",
    "type": "inproceedings",
    "title": "Human trust modeling for bias mitigation in artificial intelligence",
    "authors": [
      "Fabian Sperrle",
      "Udo Schlegel",
      "Mennatallah El-Assady",
      "Daniel A. Keim"
    ],
    "venue": "ACM CHI Workshop on Where is the Human? Bridging the Gap Between AI and HCI",
    "venueBadge": "ACM CHI Workshop",
    "year": 2019,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{sperrle2019human,\n  title={Human trust modeling for bias mitigation in artificial intelligence},\n  author={Sperrle, Fabian and Schlegel, Udo and El-Assady, Mennatallah and Keim, Daniel A},\n  booktitle={ACM CHI Workshop on Where is the Human? Bridging the Gap Between AI and HCI},\n  year={2019}\n}"
  },
  {
    "id": "jentner2019neat",
    "citeKey": "jentner2019neat",
    "type": "inproceedings",
    "title": "NEAT-Novel Emergency Analysis Tool",
    "authors": [
      "Wolfgang Jentner",
      "Juri Buchmüller",
      "Fabian Sperrle",
      "Rita Sevastjanova",
      "Thilo Spinner",
      "Udo Schlegel",
      "Dirk Streeb",
      "Hanna Schäfer"
    ],
    "venue": "IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)",
    "venueBadge": "IEEE VAST",
    "year": 2019,
    "pages": "104–105",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{jentner2019neat,\n  title={NEAT-Novel Emergency Analysis Tool},\n  author={Jentner, Wolfgang and Buchm{\\\"u}ller, Juri and Sperrle, Fabian and Sevastjanova, Rita and Spinner, Thilo and Schlegel, Udo and Streeb, Dirk and Sch{\\\"a}fer, Hanna},\n  booktitle={IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)},\n  pages={104--105},\n  year={2019},\n  organization={IEEE}\n}"
  },
  {
    "id": "jeitler2019rescuemark",
    "citeKey": "jeitler2019rescuemark",
    "type": "inproceedings",
    "title": "RescueMark: Visual Analytics of social media data for guiding emergency response in disaster situations: Award for skillful integration of language model",
    "authors": [
      "Astrik Jeitler",
      "Alpin Türkoglu",
      "Denis Makarov",
      "Timo Jockers",
      "Juri Buchmüller",
      "Udo Schlegel",
      "Daniel A. Keim"
    ],
    "venue": "IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)",
    "venueBadge": "IEEE VAST",
    "year": 2019,
    "pages": "120–121",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{jeitler2019rescuemark,\n  title={RescueMark: Visual Analytics of social media data for guiding emergency response in disaster situations: Award for skillful integration of language model},\n  author={Jeitler, Astrik and T{\\\"u}rkoglu, Alpin and Makarov, Denis and Jockers, Timo and Buchm{\\\"u}ller, Juri and Schlegel, Udo and Keim, Daniel A},\n  booktitle={IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)},\n  pages={120--121},\n  year={2019},\n  organization={IEEE}\n}"
  },
  {
    "id": "el2019towards",
    "citeKey": "el2019towards",
    "type": "inproceedings",
    "title": "Towards XAI: structuring the processes of explanations",
    "authors": [
      "Mennatallah El-Assady",
      "Wolfgang Jentner",
      "Rebecca Kehlbeck",
      "Udo Schlegel",
      "Rita Sevastjanova",
      "Fabian Sperrle",
      "Thilo Spinner",
      "Daniel Keim"
    ],
    "venue": "ACM CHI Workshop on Human-Centered Machine Learning",
    "venueBadge": "ACM CHI Workshop",
    "year": 2019,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{el2019towards,\n  title={Towards XAI: structuring the processes of explanations},\n  author={El-Assady, Mennatallah and Jentner, Wolfgang and Kehlbeck, Rebecca and Schlegel, Udo and Sevastjanova, Rita and Sperrle, Fabian and Spinner, Thilo and Keim, Daniel},\n  booktitle={ACM CHI Workshop on Human-Centered Machine Learning},\n  year={2019}\n}"
  },
  {
    "id": "schlegel2019towards",
    "citeKey": "schlegel2019towards",
    "type": "inproceedings",
    "title": "Towards a rigorous evaluation of XAI methods on time series",
    "authors": [
      "Udo Schlegel",
      "Hiba Arnout",
      "Mennatallah El-Assady",
      "Daniela Oelke",
      "Daniel A. Keim"
    ],
    "venue": "IEEE/CVF International Conference on Computer Vision Workshop (ICCVW)",
    "venueBadge": "IEEE/CVF ICCVW",
    "year": 2019,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Explainable AI"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{schlegel2019towards,\n  title={Towards a rigorous evaluation of XAI methods on time series},\n  author={Schlegel, Udo and Arnout, Hiba and El-Assady, Mennatallah and Oelke, Daniela and Keim, Daniel A},\n  booktitle={IEEE/CVF International Conference on Computer Vision Workshop (ICCVW)},\n  year={2019}\n}"
  },
  {
    "id": "schlegel2019visual",
    "citeKey": "schlegel2019visual",
    "type": "inproceedings",
    "title": "Visual Analytics for Supporting Conflict Resolution in Large Railway Networks",
    "authors": [
      "Udo Schlegel",
      "Wolfgang Jentner",
      "Juri Buchmueller",
      "Eren Cakmak",
      "Giuliano Castiglia",
      "Renzo Canepa",
      "Simone Petralli",
      "Luca Oneto",
      "Daniel A. Keim",
      "Davide Anguita"
    ],
    "venue": "INNS Big Data and Deep Learning conference",
    "venueBadge": "INNS BDDL",
    "year": 2019,
    "pages": "206–215",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{schlegel2019visual,\n  title={Visual Analytics for Supporting Conflict Resolution in Large Railway Networks},\n  author={Schlegel, Udo and Jentner, Wolfgang and Buchmueller, Juri and Cakmak, Eren and Castiglia, Giuliano and Canepa, Renzo and Petralli, Simone and Oneto, Luca and Keim, Daniel A and Anguita, Davide},\n  booktitle={INNS Big Data and Deep Learning conference},\n  pages={206--215},\n  year={2019},\n  organization={Springer International Publishing, Cham}\n}"
  },
  {
    "id": "nagel2019cpmviz",
    "citeKey": "nagel2019cpmviz",
    "type": "inproceedings",
    "title": "cpmViz: A web-based visualization tool for uncertain spatiotemporal data",
    "authors": [
      "Fabian Nagel",
      "Giuliano Castiglia",
      "Gemza Ademaj",
      "Juri Buchmller",
      "Udo Schlegel",
      "Daniel A. Keim"
    ],
    "venue": "IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)",
    "venueBadge": "IEEE VAST",
    "year": 2019,
    "pages": "140–141",
    "selected": false,
    "featured": false,
    "categories": [
      "Time Series",
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{nagel2019cpmviz,\n  title={cpmViz: A web-based visualization tool for uncertain spatiotemporal data},\n  author={Nagel, Fabian and Castiglia, Giuliano and Ademaj, Gemza and Buchmller, Juri and Schlegel, Udo and Keim, Daniel A},\n  booktitle={IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)},\n  pages={140--141},\n  year={2019},\n  organization={IEEE}\n}"
  },
  {
    "id": "schlegel2018g",
    "citeKey": "schlegel2018g",
    "type": "inproceedings",
    "title": "G-Rap: Interactive text synthesis using recurrent neural network suggestions",
    "authors": [
      "Udo Schlegel",
      "Eren Cakmak",
      "Juri F. Buchmüller",
      "Daniel A. Keim"
    ],
    "venue": "European Symposium on Artificial Neural Networks, Computational Intelligence and Machine Learning (ESANN)",
    "venueBadge": "ESANN",
    "year": 2018,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Machine Learning"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{schlegel2018g,\n  title={G-Rap: Interactive text synthesis using recurrent neural network suggestions},\n  author={Schlegel, Udo and Cakmak, Eren and Buchm{\\\"u}ller, Juri F and Keim, Daniel A},\n  booktitle={European Symposium on Artificial Neural Networks, Computational Intelligence and Machine Learning (ESANN)},\n  year={2018}\n}"
  },
  {
    "id": "cakmak2018interactive",
    "citeKey": "cakmak2018interactive",
    "type": "inproceedings",
    "title": "Interactive Classification Using Spectrograms and Audio Glyphs",
    "authors": [
      "Eren Cakmak",
      "Udo Schlegel",
      "Matthias Miller",
      "Juri Buchmüller",
      "Wolfgang Jentner",
      "Daniel A. Keim"
    ],
    "venue": "IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)",
    "venueBadge": "IEEE VAST",
    "year": 2018,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{cakmak2018interactive,\n  title={Interactive Classification Using Spectrograms and Audio Glyphs},\n  author={Cakmak, Eren and Schlegel, Udo and Miller, Matthias and Buchm{\\\"u}ller, Juri and Jentner, Wolfgang and Keim, Daniel A},\n  booktitle={IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)},\n  year={2018}\n}"
  },
  {
    "id": "schlegel2018towards",
    "citeKey": "schlegel2018towards",
    "type": "phdthesis",
    "title": "Towards Crime Forecasting Using Deep Learning",
    "authors": [
      "Udo Schlegel"
    ],
    "venue": "Master Thesis, University of Konstanz",
    "venueBadge": "Master Thesis",
    "year": 2018,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Theses"
    ],
    "arxiv": null,
    "links": {
      "kops": "https://kops.uni-konstanz.de/entities/publication/dffabcfe-c719-454c-9b9b-a9190e91be92"
    },
    "bibtex": "@mastersthesis{schlegel2018towards,\n  title={Towards Crime Forecasting Using Deep Learning},\n  author={Schlegel, Udo},\n  year={2018},\n  school={University of Konstanz},\n  url={https://kops.uni-konstanz.de/entities/publication/dffabcfe-c719-454c-9b9b-a9190e91be92}\n}"
  },
  {
    "id": "streeb2017uncovering",
    "citeKey": "streeb2017uncovering",
    "type": "inproceedings",
    "title": "Uncovering the Mistford Toxic Conspiracy",
    "authors": [
      "Dirk Streeb",
      "Juri Buchmuller",
      "Udo Schlegel",
      "Wolfgang Jentner",
      "Michael Behrisch",
      "Bruno Schneider",
      "Daniel Seebacher"
    ],
    "venue": "IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)",
    "venueBadge": "IEEE VAST",
    "year": 2017,
    "pages": "243–244",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{streeb2017uncovering,\n  title={Uncovering the Mistford Toxic Conspiracy},\n  author={Streeb, Dirk and Buchmuller, Juri and Schlegel, Udo and Jentner, Wolfgang and Behrisch, Michael and Schneider, Bruno and Seebacher, Daniel},\n  booktitle={IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)},\n  pages={243--244},\n  year={2017},\n  organization={IEEE}\n}"
  },
  {
    "id": "schlegel2016interactive",
    "citeKey": "schlegel2016interactive",
    "type": "misc",
    "title": "Interactive Support for Malware Classification",
    "authors": [
      "Udo Schlegel"
    ],
    "venue": "Bachelor Thesis, University of Konstanz",
    "venueBadge": "Bachelor Thesis",
    "year": 2016,
    "pages": "",
    "selected": false,
    "featured": false,
    "categories": [
      "Theses",
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {
      "kops": "https://kops.uni-konstanz.de/entities/publication/bca844a0-22b3-4193-b725-f9366c215225"
    },
    "bibtex": "@misc{schlegel2016interactive,\n  title={Interactive Support for Malware Classification},\n  author={Schlegel, Udo},\n  year={2016},\n  howpublished={Bachelor Thesis, University of Konstanz},\n  url={https://kops.uni-konstanz.de/entities/publication/bca844a0-22b3-4193-b725-f9366c215225}\n}"
  },
  {
    "id": "streeb2015using",
    "citeKey": "streeb2015using",
    "type": "inproceedings",
    "title": "Using visual analytics to analyze movement and action patterns",
    "authors": [
      "Dirk Streeb",
      "Udo Schlegel",
      "Juri Buchmüller",
      "Fabian Fischer",
      "Daniel A. Keim"
    ],
    "venue": "IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)",
    "venueBadge": "IEEE VAST",
    "year": 2015,
    "pages": "171–172",
    "selected": false,
    "featured": false,
    "categories": [
      "Visual Analytics"
    ],
    "arxiv": null,
    "links": {},
    "bibtex": "@inproceedings{streeb2015using,\n  title={Using visual analytics to analyze movement and action patterns},\n  author={Streeb, Dirk and Schlegel, Udo and Buchm{\\\"u}ller, Juri and Fischer, Fabian and Keim, Daniel A},\n  booktitle={IEEE Conference on Visual Analytics Science and Technology (VAST Challenge)},\n  pages={171--172},\n  year={2015},\n  organization={IEEE}\n}"
  }
];

function isSelfAuthor(name) {
  const n = name.toLowerCase();
  return n.includes('schlegel') && (n.includes('udo') || n.startsWith('u.') || n.startsWith('u '));
}

function lastName(fullName) {
  if (fullName === 'et al.') return 'et al.';
  const parts = fullName.trim().split(/\s+/);
  return parts[parts.length - 1];
}

export function Publications() {
  const [showAll, setShowAll] = useState(false);
  const [query, setQuery] = useState('');
  const [activeBibPub, setActiveBibPub] = useState(null);

  const selectedCount = useMemo(() => PUBLICATIONS.filter((p) => p.selected).length, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    // When searching, search across all publications; otherwise show Selected unless showAll is toggled
    const pool = q || showAll ? PUBLICATIONS : PUBLICATIONS.filter((p) => p.selected);
    if (!q) return pool;
    return pool.filter((p) => {
      const haystack = [
        p.title,
        p.venue,
        p.venueBadge,
        String(p.year),
        p.authors.join(' ')
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [showAll, query]);

  const isSearching = query.trim().length > 0;

  return (
    <section id="publications" className="cv-section" tabIndex={-1}>
      <h2 className="cv-heading">
        <span>{showAll || isSearching ? 'Publications' : 'Selected Publications'}</span>
      </h2>

      <div className="pub-toolbar no-print">
        <div className="pub-search-wrap">
          <label htmlFor="pub-search-input" className="sr-only">
            Search all {PUBLICATIONS.length} publications
          </label>
          <Icon name="search" size={14} className="pub-search-icon" />
          <input
            id="pub-search-input"
            type="search"
            className="pub-search-input"
            placeholder={`Search all ${PUBLICATIONS.length} publications…`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="pub-toolbar-links">
          <button
            type="button"
            className="minimal-toggle-btn"
            onClick={() => {
              if (isSearching) setQuery('');
              setShowAll((prev) => !prev);
            }}
          >
            {showAll
              ? `Show selected highlights (${selectedCount})`
              : `Show all publications (${PUBLICATIONS.length})`}
          </button>
          <span className="toolbar-sep" aria-hidden="true">·</span>
          <a
            href="https://scholar.google.com/citations?user=OmfaIuYAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
          <span className="toolbar-sep" aria-hidden="true">·</span>
          <a href={BIB_FILE} download="udo-schlegel.bib">
            .bib
          </a>
        </div>
      </div>

      {isSearching && (
        <p className="pub-search-status no-print">
          Showing {filtered.length} {filtered.length === 1 ? 'match' : 'matches'} across all 
          {PUBLICATIONS.length} publications.
        </p>
      )}

      {filtered.length === 0 ? (
        <p className="pub-empty-text">
          No publications match &ldquo;{query}&rdquo;. 
          <button type="button" className="inline-reset-btn" onClick={() => setQuery('')}>
            Clear search
          </button>
        </p>
      ) : (
        <div className="pub-table">
          {filtered.map((pub) => {
            const scholarUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(
              `${pub.title} Schlegel`
            )}`;
            return (
              <article key={pub.id} className="pub-row">
                <div className="pub-year">{pub.year}</div>

                <div className="pub-main">
                  <div className="pub-authors-line">
                    {(pub.displayAuthors || pub.authors).map((author, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && ', '}
                        {isSelfAuthor(author) ? (
                          <strong className="pub-author-self">{lastName(author)}</strong>
                        ) : (
                          <span>{lastName(author)}</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="pub-title-line">
                    {pub.links && (pub.links.din || pub.links.kops) ? (
                      <a
                        href={pub.links.din || pub.links.kops}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-title-text pub-title-link"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      <span className="pub-title-text">{pub.title}</span>
                    )}
                    <span className="pub-row-actions no-print">
                      {pub.links && pub.links.din && (
                        <a href={pub.links.din} target="_blank" rel="noopener noreferrer">
                          din
                        </a>
                      )}
                      {pub.links && pub.links.kops && (
                        <a href={pub.links.kops} target="_blank" rel="noopener noreferrer">
                          kops
                        </a>
                      )}
                      {pub.links && pub.links.project && (
                        <a href={pub.links.project} target="_blank" rel="noopener noreferrer">
                          site
                        </a>
                      )}
                      {pub.arxiv && (
                        <a href={pub.arxiv} target="_blank" rel="noopener noreferrer">
                          arXiv
                        </a>
                      )}
                      {pub.links && pub.links.demo && (
                        <a href={pub.links.demo} target="_blank" rel="noopener noreferrer">
                          demo
                        </a>
                      )}
                      {pub.links && pub.links.code && (
                        <a href={pub.links.code} target="_blank" rel="noopener noreferrer">
                          code
                        </a>
                      )}
                      {!(pub.links && pub.links.din) && (
                        <a href={scholarUrl} target="_blank" rel="noopener noreferrer">
                          scholar
                        </a>
                      )}
                      <button
                        type="button"
                        className="pub-bibtex-trigger"
                        onClick={() => setActiveBibPub(pub)}
                      >
                        bibtex
                      </button>
                    </span>
                  </div>
                </div>

                <div className="pub-venue-right" title={pub.venue}>
                  {pub.venueBadge}
                </div>
              </article>
            );
          })}
        </div>
      )}

      {!isSearching && !showAll && (
        <div className="pub-more-footer no-print">
          <button
            type="button"
            className="minimal-toggle-btn"
            onClick={() => setShowAll(true)}
          >
            + View all {PUBLICATIONS.length} publications (2015–2026)
          </button>
        </div>
      )}

      <ModalDialog
        isOpen={Boolean(activeBibPub)}
        onClose={() => setActiveBibPub(null)}
        title={activeBibPub ? `BibTeX · ${activeBibPub.citeKey}` : 'BibTeX Citation'}
      >
        {activeBibPub && (
          <div className="bibtex-modal-content">
            <p className="bibtex-modal-paper-title">{activeBibPub.title}</p>
            <pre className="bibtex-pre">
              <code>{activeBibPub.bibtex}</code>
            </pre>
            <div className="bibtex-modal-actions">
              <CopyButton text={activeBibPub.bibtex} label="Copy BibTeX" />
            </div>
          </div>
        )}
      </ModalDialog>
    </section>
  );
}
