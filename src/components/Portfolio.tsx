// @ts-nocheck
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { publications, biteSizeLink } from '../data/portfolio_data';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Filter, FileText } from 'lucide-react';
import Projects from './Projects';

const categories = ["All", ...new Set(publications.map(p => p.category))];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPublications = activeCategory === "All" 
    ? publications 
    : publications.filter(p => p.category === activeCategory);

return (
    <div id="portfolio">
      <Projects />
    </div>
  );
}