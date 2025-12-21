import { portfolioData } from "@/lib/data";
import { Mail, Github, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About - David Verano",
  description: "Learn about my journey as a solopreneur and mobile app developer",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h1>

        <div className="space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="whitespace-pre-line">{portfolioData.about.full}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h2>
          <ul className="space-y-3">
            {portfolioData.about.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-base md:text-lg text-gray-700 dark:text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Deployment Workflows</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {portfolioData.deployment.nextjs.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
                {portfolioData.deployment.nextjs.description}
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                {portfolioData.deployment.nextjs.workflow.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {portfolioData.deployment.mobile.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
                {portfolioData.deployment.mobile.description}
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                {portfolioData.deployment.mobile.workflow.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
          <div className="space-y-3">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center gap-3 text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <Mail size={20} />
              {portfolioData.personal.email}
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <Github size={20} />
              {portfolioData.personal.github}
            </a>
            <div className="flex items-center gap-3 text-base md:text-lg text-gray-700 dark:text-gray-300">
              <MapPin size={20} />
              {portfolioData.personal.location}
            </div>
            <div className="pt-4 mt-4">
              <div className="w-4/5 sm:w-3/5 border-t border-gray-200 dark:border-gray-700 mb-3"></div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 italic">Alternative emails:</p>
              <div className="space-y-1">
                {portfolioData.personal.emails.slice(1).map((email, index) => (
                  <a
                    key={index}
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500 hover:text-primary transition-colors italic break-all"
                  >
                    <Mail size={14} className="flex-shrink-0" />
                    <span className="break-words">{email}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <Link
            href={portfolioData.learningJourney.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-primary hover:text-primary-dark transition-colors"
          >
            {portfolioData.learningJourney.description} →
          </Link>
        </div>
      </div>
    </div>
  );
}

