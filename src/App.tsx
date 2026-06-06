// @ts-nocheck
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import QuickNav from './components/QuickNav';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans selection:bg-teal-200 selection:text-teal-900">
      <main>
        <Hero />
        <QuickNav />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}