"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  tech: string[];
  status: string;
  website?: string;
  appStore?: string;
  github?: string;
  youtube?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-xl transition-shadow"
    >
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded whitespace-nowrap">
            {project.status}
          </span>
        </div>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.website && project.website !== "#" && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs md:text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Website <ExternalLink size={14} />
            </a>
          )}
          {project.appStore && project.appStore !== "#" && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs md:text-sm text-primary hover:text-primary-dark transition-colors"
            >
              App Store <ExternalLink size={14} />
            </a>
          )}
          {project.youtube && project.youtube !== "#" && (
            <a
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs md:text-sm text-primary hover:text-primary-dark transition-colors"
            >
              YouTube <ExternalLink size={14} />
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 text-xs md:text-sm text-primary hover:text-primary-dark transition-colors ml-auto"
          >
            Learn More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

