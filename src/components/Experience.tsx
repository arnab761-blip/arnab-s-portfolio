import React from 'react';
import SectionHeading from './SectionHeading';
import { workExperience } from '../data/portfolio_data';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" subtitle="My professional track record across various roles." />
        
        <div className="mt-16 max-w-3xl border-l-[3px] border-teal-100 dark:border-teal-900/50 pl-6 lg:pl-10 relative">
          {workExperience.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] lg:-left-[51px] flex h-10 w-10 items-center justify-center rounded-full border-4 border-gray-50 dark:border-gray-950 bg-teal-100 dark:bg-teal-900 shadow-sm">
                <Briefcase size={16} className="text-teal-600 dark:text-teal-400" />
              </div>
              
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
                    <div className="text-lg font-medium text-teal-600 dark:text-teal-400">{job.company}</div>
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit">
                    {job.period} • {job.type}
                  </div>
                </div>
                
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-300 font-light">
                  {job.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
