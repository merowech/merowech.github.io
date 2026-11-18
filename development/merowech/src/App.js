import React from 'react';
import { Header } from './components/header';
import { About } from './components/about';
import { ExperienceSection, SkillsSection, EducationSection } from './components/resume';
import { Projects } from './components/projects';
import { Publications } from './components/publications';
import { Contact } from './components/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="page-wrap cv-main">
        <About />
        <ExperienceSection />
        <Projects />
        <SkillsSection />
        <Publications />
        <EducationSection />
      </main>
      <Contact />
    </div>
  );
}

export default App;
