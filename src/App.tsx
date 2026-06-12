// @ts-nocheck
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Certificates from './components/Certificates';
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
{/* Designed photocards and infographics Section */}
        <div className="mb-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b-2 border-blue-500 pb-2 inline-block mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              🎨 Designed photocards and infographics
            </h2>
          </div>

          <div>
            <a href="https://drive.google.com/drive/folders/1NK3zvaLenFh9EyprTwbnRAtjE2jHTAIr?usp=sharing" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center gap-3 px-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-slate-700 dark:text-slate-200 font-medium cursor-pointer">
              
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.71 3.5L1.15 15l3.43 6 6.55-11.5M9.73 15L6.3 21h13.12l3.43-6M13.72 3.5h-6.6l6.56 11.5h6.58"/>
              </svg>
              
              View Designs on Google Drive
              
              <svg className="w-4 h-4 ml-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
        <Portfolio />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}