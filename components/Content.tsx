"use client";

import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";
import { Youtube, Facebook, ExternalLink, Volume2 } from "lucide-react";

export default function Content() {
  return (
    <section id="content" className="container mx-auto px-4 py-12 md:py-16 bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Content Creation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <motion.a
            href={portfolioData.content.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 hover:shadow-md dark:hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <Youtube size={32} className="text-red-600 dark:text-red-500" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                {portfolioData.content.youtube.name}
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
              {portfolioData.content.youtube.description}
            </p>
            <span className="inline-flex items-center gap-1 text-xs md:text-sm text-primary">
              Visit Channel <ExternalLink size={14} />
            </span>
          </motion.a>

          <motion.a
            href={portfolioData.content.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 hover:shadow-md dark:hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <Facebook size={32} className="text-blue-600 dark:text-blue-500" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                {portfolioData.content.facebook.name}
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
              {portfolioData.content.facebook.description}
            </p>
            <span className="inline-flex items-center gap-1 text-xs md:text-sm text-primary">
              Visit Page <ExternalLink size={14} />
            </span>
          </motion.a>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 hover:shadow-md dark:hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <Volume2 size={32} className="text-purple-600 dark:text-purple-500" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                {portfolioData.content.textToSpeech.name}
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
              {portfolioData.content.textToSpeech.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded">
                {portfolioData.content.textToSpeech.status}
              </span>
              <span className="inline-flex items-center gap-1 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                Coming Soon
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

