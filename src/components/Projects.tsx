import React from 'react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolio_data';
import { motion } from 'motion/react';
import { ExternalLink, Github, FolderKanban } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Key Projects" subtitle="Showcasing my technical and developmental contributions." />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between bg-white dark:bg-gray-800/80 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-xl transition-all h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-xl">
                    <FolderKanban className="text-teal-600 dark:text-teal-400" size={28} />
                  </div>
                  <div className="flex gap-4">
                    {project.detailsUrl && (
                      <a 
                        href={project.detailsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        aria-label="View Details"
                      >
                        <Github size={22} />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        aria-label="View Live Project"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
