"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="container mx-auto px-4 py-12 md:py-16 bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {portfolioData.about.brief}
        </p>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-4"
          >
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {portfolioData.about.full}
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h3>
              <ul className="space-y-2">
                {portfolioData.about.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-base text-gray-700 dark:text-gray-300">
                    <span className="text-primary mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm md:text-base text-primary hover:text-primary-dark transition-colors"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp size={18} />
              </>
            ) : (
              <>
                Read Full Story <ChevronDown size={18} />
              </>
            )}
          </button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <Link
            href="/about"
            className="text-sm md:text-base text-primary hover:text-primary-dark transition-colors"
          >
            View Full About Page →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

