"use client";

import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const featuredProjects = portfolioData.projects.slice(0, 3);

  return (
    <section id="projects" className="container mx-auto px-4 py-12 md:py-16 bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="mt-6 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

