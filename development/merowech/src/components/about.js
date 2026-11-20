import React from 'react';

export function About() {
  return (
    <section id="about" className="cv-section" tabIndex={-1}>
      <h2 className="cv-heading">
        <span>About Me</span>
      </h2>

      <p className="about-paragraph">
        Hi, I’m Udo. I’m a Postdoctoral researcher and lecturer at Ludwig-Maximilians-Universität
        (LMU) Munich and the Munich Center for Machine Learning (MCML). I also work as a freelance
        consultant via{' '}
        <a href="https://merowech-solutions.de/" target="_blank" rel="noopener noreferrer">
          Merowech Solutions
        </a>{' '}
        and am open to research and industry projects. My work focuses on artificial intelligence,
        particularly deep learning, vision-language models, explainable AI, and cybersecurity. I’m
        especially interested in making AI systems more transparent and understandable, exploring
        explainable methods for time-series and foundation models in both supervised and
        unsupervised settings to uncover the patterns these models learn. Beyond the technical side,
        I enjoy thinking and talking about the ethical limits of AI and how human behavior can be
        responsibly modeled using AI.
      </p>

      <p className="summary-text">
        Over 9+ years of taking machine learning from research idea to working system, I have
        combined 40+ peer-reviewed papers (incl. NeurIPS, ICLR, ECML PKDD, TMLR) with 10+ years of
        full-stack development in Python and JavaScript, leading a €3M+, 10-partner applied-AI
        R&amp;D project from proposal to delivery and shipping production models with industry
        partners such as Siemens, Huawei, and Corpuls.
      </p>
    </section>
  );
}
