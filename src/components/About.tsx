import React from 'react';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolio_data';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="A brief overview of my professional journey and aspirations." />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 font-light leading-relaxed"
        >
          <p>{personalInfo.about}</p>
        </motion.div>
      </div>
    </section>
  );
}
