import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { publications, biteSizeLink } from '../data/portfolio_data';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Filter, FileText } from 'lucide-react';

const categories = ["All", ...new Set(publications.map(p => p.category))];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPublications = activeCategory === "All" 
    ? publications 
    : publications.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Portfolio & Publications" subtitle="Read my reviews, articles, and series on various platforms." />
        
        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2 mb-10">
          <div className="mr-2 flex items-center text-gray-500 dark:text-gray-400">
            <Filter size={18} className="mr-2" /> 
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPublications.map((pub) => (
              <motion.a
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={pub.id}
                href={pub.url !== "#" ? pub.url : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 transition-all ${
                  pub.url !== "#" ? "hover:border-teal-500 hover:shadow-md cursor-pointer" : "cursor-default opacity-80"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-white dark:bg-gray-900 rounded-lg shrink-0">
                    <FileText className="text-teal-600 dark:text-teal-400" size={24} />
                  </div>
                  {pub.url !== "#" && (
                    <ExternalLink className="text-gray-400 group-hover:text-teal-500 transition-colors" size={20} />
                  )}
                </div>
                <div className="mt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2 block">
                    {pub.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {pub.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bite-Size News Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-3xl p-8 sm:p-12 text-center border border-teal-100 dark:border-teal-800"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Bite-Size News & Photo Cards</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 font-light">
            Explore my collection of 30+ visually rich, bite-sized scientific and technical news cards engineered for social media engagement.
          </p>
          <a
            href={biteSizeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
          >
            View All Photo Cards & Infographics
            <ExternalLink size={18} />
          </a>
        </motion.div>

        {/* 10 Article Placeholders */}
        <div className="mt-24">
          <SectionHeading title="More Articles" subtitle="Placeholder section for 10 upcoming or featured articles." />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={`article-${index}`} className="bg-white dark:bg-gray-800/80 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={`https://via.placeholder.com/400x220/0d9488/ffffff?text=Article+${index + 1}`} 
                  alt={`Placeholder Article ${index + 1}`} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2 block">
                    Featured read
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Placeholder Article Title {index + 1}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-light">
                    This is a dummy description for the placeholder article {index + 1}. It is meant to show exactly how the UI layout looks when populated with content.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 50 Bite-Size News & Photo Cards (Facebook Links) Placeholders */}
        <div className="mt-24">
          <SectionHeading title="Bite-Size News & Photo Cards" subtitle="A dedicated collection of 50 Facebook post links and infographics." />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 50 }).map((_, index) => (
              <a 
                key={`bitesize-${index}`} 
                href="#"
                className="group flex flex-col bg-white dark:bg-gray-800/80 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:border-teal-500 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="aspect-video w-full bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                  <img 
                    src={`https://via.placeholder.com/400x225/334155/ffffff?text=News+Card+${index + 1}`} 
                    alt={`Bite-Size News ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                      Facebook Post
                    </span>
                    <ExternalLink className="text-gray-400 group-hover:text-teal-500 transition-colors" size={16} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                    Facebook Bite-Size News Article {index + 1}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-light line-clamp-3 mb-2 flex-grow">
                    This is a placeholder description for the bite-size news photo card {index + 1}. Clicking this card will redirect the user to the original Facebook post.
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
