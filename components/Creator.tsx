"use client";

import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";
import { Youtube, Facebook, ExternalLink, Volume2, Video } from "lucide-react";

interface CreatorProps {
  disableExpansion?: boolean;
}

export default function Creator({ disableExpansion = false }: CreatorProps) {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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

          {/* Text to Speech Card */}
          <motion.a
            href={portfolioData.content.textToSpeech.url}
            target={portfolioData.content.textToSpeech.url.startsWith('http') ? '_blank' : undefined}
            rel={portfolioData.content.textToSpeech.url.startsWith('http') ? 'noopener noreferrer' : undefined}
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
              <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">
                {portfolioData.content.textToSpeech.status}
              </span>
              <span className="inline-flex items-center gap-1 text-xs md:text-sm text-primary">
                {portfolioData.content.textToSpeech.url.startsWith('mailto') ? 'Contact' : portfolioData.content.textToSpeech.url.startsWith('http') ? 'Visit App' : 'Coming Soon'} <ExternalLink size={14} />
              </span>
            </div>
          </motion.a>

          {/* Video Editing Software Card */}
          <motion.a
            href={portfolioData.content.videoEditing.url}
            target={portfolioData.content.videoEditing.url.startsWith('http') ? '_blank' : undefined}
            rel={portfolioData.content.videoEditing.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 hover:shadow-md dark:hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <Video size={32} className="text-indigo-600 dark:text-indigo-500" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                {portfolioData.content.videoEditing.name}
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
              {portfolioData.content.videoEditing.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded">
                {portfolioData.content.videoEditing.status}
              </span>
              <span className="inline-flex items-center gap-1 text-xs md:text-sm text-primary">
                {portfolioData.content.videoEditing.url.startsWith('http') ? 'Visit App' : 'Coming Soon'} <ExternalLink size={14} />
              </span>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

