"use client";

import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Get In Touch
        </h2>
        <div className="space-y-4">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="flex items-center justify-center gap-3 text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <Mail size={20} />
            {portfolioData.personal.email}
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <Github size={20} />
            GitHub Profile
          </a>
          <div className="flex items-center justify-center gap-3 text-base md:text-lg text-gray-700 dark:text-gray-300">
            <MapPin size={20} />
            {portfolioData.personal.location}
          </div>
          <div className="pt-4 mt-4">
            <div className="w-4/5 sm:w-3/5 mx-auto border-t border-gray-200 dark:border-gray-700 mb-3"></div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 italic">Alternative emails:</p>
            <div className="space-y-1">
              {portfolioData.personal.emails.slice(1).map((email, index) => (
                <a
                  key={index}
                  href={`mailto:${email}`}
                  className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors italic break-all px-2"
                >
                  <Mail size={14} className="flex-shrink-0" />
                  <span className="break-words">{email}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

