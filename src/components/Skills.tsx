import React from 'react';
import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolio_data';
import { motion } from 'motion/react';
import { Code, BookOpen, TrendingUp, Scissors, Globe } from 'lucide-react';

const categoryConfig = {
  web_development: { icon: Code, label: 'Web Development', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  research_writing: { icon: BookOpen, label: 'Research & Writing', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
  digital_marketing: { icon: TrendingUp, label: 'Digital Marketing', color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20' },
  textile_engineering: { icon: Scissors, label: 'Textile Engineering', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
  languages: { icon: Globe, label: 'Languages', color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-900/20' }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Skills" subtitle="My cross-domain expertise spanning engineering, development, and communication." />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.keys(skills) as Array<keyof typeof skills>).map((key, index) => {
            const config = categoryConfig[key];
            const Icon = config.icon;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${config.bg}`}>
                    <Icon className={config.color} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{config.label}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills[key].map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
