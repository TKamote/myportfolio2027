"use client";

import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          {portfolioData.personal.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
          {portfolioData.personal.title}
        </p>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6">
          {portfolioData.personal.tagline}
        </p>
        <motion.a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm md:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
          <ArrowDown size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
}

