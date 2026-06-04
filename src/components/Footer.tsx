import React from 'react';
import { personalInfo } from '../data/portfolio_data';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-950 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="font-display text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Arnab<span className="text-teal-600 dark:text-teal-400">.</span>
          </a>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            © {year} Md. Tahmidul Islam Arnab. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
