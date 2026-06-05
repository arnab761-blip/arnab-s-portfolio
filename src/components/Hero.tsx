// @ts-nocheck
import profileImg from '../profile.jpg';
import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio_data';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/40 via-transparent to-transparent dark:from-teal-900/20"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 w-fit mb-6 mx-auto lg:mx-0 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Available for work
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-teal-600 dark:text-teal-400">Arnab</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 font-light">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white dark:bg-gray-800 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Let's Talk
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-gray-500 dark:text-gray-400">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href={`tel:${personalInfo.phone}`} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" aria-label="Phone">
                <Phone size={24} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

<motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="relative mx-auto lg:ml-auto max-w-md w-full"
                    >
                      <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 border-4 border-white">
                        {/* Replace with actual image later, using placeholder or abstract pattern */}
                        <img src={profileImg} alt="Profile" className="object-cover w-full h-full" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            );
          }