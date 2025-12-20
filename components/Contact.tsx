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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Get In Touch
        </h2>
        <div className="space-y-4">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="flex items-center justify-center gap-3 text-base md:text-lg text-gray-700 hover:text-primary transition-colors"
          >
            <Mail size={20} />
            {portfolioData.personal.email}
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-base md:text-lg text-gray-700 hover:text-primary transition-colors"
          >
            <Github size={20} />
            GitHub Profile
          </a>
          <div className="flex items-center justify-center gap-3 text-base md:text-lg text-gray-700">
            <MapPin size={20} />
            {portfolioData.personal.location}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

