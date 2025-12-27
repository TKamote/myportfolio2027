"use client";

import { portfolioData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Facebook, ExternalLink, Volume2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface CreatorProps {
  disableExpansion?: boolean;
}

export default function Creator({ disableExpansion = false }: CreatorProps) {
  const [isTextToSpeechExpanded, setIsTextToSpeechExpanded] = useState(false);

  return (
    <section id={disableExpansion ? "content" : undefined} className={`container mx-auto px-4 py-12 md:py-16 ${disableExpansion ? 'bg-gray-50 dark:bg-gray-800/50' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={disableExpansion ? undefined : { opacity: 1, y: 0 }}
        whileInView={disableExpansion ? { opacity: 1, y: 0 } : undefined}
        viewport={disableExpansion ? { once: true } : undefined}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {disableExpansion ? (
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Content Creation
          </h2>
        ) : (
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Content Creation
          </h1>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* YouTube Card */}
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

          {/* Facebook Card */}
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

          {/* Text to Speech Card - Expandable or Link */}
          {disableExpansion ? (
            <motion.a
              href="/creator"
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 hover:shadow-md dark:hover:shadow-lg transition-shadow cursor-pointer block"
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
                <span className="inline-flex items-center gap-1 text-xs md:text-sm text-primary">
                  View Details <ExternalLink size={14} />
                </span>
              </div>
            </motion.a>
          ) : (
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 hover:shadow-md dark:hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setIsTextToSpeechExpanded(!isTextToSpeechExpanded)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Volume2 size={32} className="text-purple-600 dark:text-purple-500" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {portfolioData.content.textToSpeech.name}
                  </h3>
                </div>
                {isTextToSpeechExpanded ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </div>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
                {portfolioData.content.textToSpeech.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded">
                  {portfolioData.content.textToSpeech.status}
                </span>
                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  {isTextToSpeechExpanded ? "Click to collapse" : "Click to expand"}
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Expanded Text to Speech UI - Only show if expansion is enabled */}
        <AnimatePresence>
          {!disableExpansion && isTextToSpeechExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-6 md:p-8">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <Volume2 size={32} className="text-purple-600 dark:text-purple-400" />
                    Text to Speech Service
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Convert your text into natural-sounding speech using AI-powered technology.
                  </p>
                  
                  {/* Placeholder for Text to Speech UI */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Text to Speech interface will be built here
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

