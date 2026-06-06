import React from 'react';
import SectionHeading from './SectionHeading';
import { education } from '../data/portfolio_data';
import { motion } from 'motion/react';
import { GraduationCap, Award, Activity } from 'lucide-react';

export default function Education() {
  return (
<section id="education" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education & Achievements" />
        
        <div className="mt-12 space-y-8 max-w-3xl mx-auto md:mx-0">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between mb-6 gap-2 border-b border-gray-200 dark:border-gray-700 pb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <GraduationCap className="text-teal-600 dark:text-teal-400" size={24} />
                    {edu.degree}
                  </h3>
                  <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mt-1">
                    {edu.institution}
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {edu.period}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Activity className="shrink-0 text-gray-400 dark:text-gray-500 mt-1" size={18} />
                  <p className="text-gray-600 dark:text-gray-300 font-light">
                    <span className="font-medium text-gray-900 dark:text-gray-100">Activities:</span> {edu.activities}
                  </p>
                </div>
                {edu.award && (
                  <div className="flex items-start gap-3">
                    <Award className="shrink-0 text-amber-500 mt-1" size={18} />
                    <p className="text-gray-600 dark:text-gray-300 font-light">
                      <span className="font-medium text-gray-900 dark:text-gray-100">Award:</span> {edu.award}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
