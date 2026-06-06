import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { certificates } from '../data/portfolio_data';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডিং */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Certifications & <span className="text-teal-600 dark:text-teal-400">Achievements</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            আমার অর্জিত কিছু গুরুত্বপূর্ণ সার্টিফিকেশন এবং একাডেমিক স্বীকৃতিসমূহ।
          </p>
        </div>

        {/* রেসপনসিভ গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* সার্টিফিকেটের ছবি (১টা থাকলে ফুল স্ক্রিন, ২টা থাকলে ২-কলাম গ্রিড) */}
              <div className={`relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 grid ${cert.images.length > 1 ? 'grid-cols-2 gap-0.5' : 'grid-cols-1'}`}>
                {cert.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${cert.title} - ${idx + 1}`}
                    className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-500"
                  />
                ))}
              </div>

              {/* সার্টিফিকেটের ডিটেইলস */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mt-1 flex items-center gap-1">
                      <Award size={14} /> {cert.issuer}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap pt-1">
                    {cert.date}
                  </span>
                </div>

                {/* লিঙ্কডইন পোস্ট বাটন বা লোকাল ইন্ডিকেটর */}
                <div className="mt-6 pt-4 border-t border-gray-50 dark:border-gray-800/50">
                  {cert.linkedinLink ? (
                    <a
                      href={cert.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      View LinkedIn Post
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/40 px-2.5 py-1 rounded-md">
                      <ImageIcon size={12} /> 2 Verified Documents Included
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}