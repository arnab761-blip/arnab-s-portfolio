import React from 'react';
import { ChevronDown, Briefcase, GraduationCap, Code, Layers } from 'lucide-react';

export default function QuickNav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          
          {/* বাম পাশের লোগো */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl font-bold text-teal-600 dark:text-teal-400">Arnab.</a>
          </div>

          {/* মেইন মেনু আইটেমসমূহ */}
          <div className="flex items-center space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            
            <a href="#experience" className="flex items-center gap-1 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <Briefcase size={16} /> Experience
            </a>

            <a href="#education" className="flex items-center gap-1 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <GraduationCap size={16} /> Education
            </a>

            <a href="#skills" className="flex items-center gap-1 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <Code size={16} /> Skills
            </a>

            {/* View My Work - Dropdown Menu */}
            <div className="group relative cursor-pointer py-2">
              <span className="flex items-center gap-1 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Layers size={16} /> View My Work <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </span>

              {/* ড্রপডাউন লিস্ট */}
              <div className="absolute right-0 top-full mt-1 hidden w-52 rounded-xl border border-gray-100 bg-white p-2 shadow-xl group-hover:block dark:border-gray-800 dark:bg-gray-800">
                <a href="#portfolio" className="block rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-xs">
                  📁 All Projects & Articles
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}