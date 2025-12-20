import { portfolioData } from "@/lib/data";
import { Mail, Github, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About - David V Onquit",
  description: "Learn about my journey as a solopreneur and mobile app developer",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          About Me
        </h1>

        <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
          <p className="whitespace-pre-line">{portfolioData.about.full}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Achievements</h2>
          <ul className="space-y-3">
            {portfolioData.about.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-base md:text-lg text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deployment Workflows</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {portfolioData.deployment.nextjs.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                {portfolioData.deployment.nextjs.description}
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-gray-700">
                {portfolioData.deployment.nextjs.workflow.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {portfolioData.deployment.mobile.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                {portfolioData.deployment.mobile.description}
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-gray-700">
                {portfolioData.deployment.mobile.workflow.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
          <div className="space-y-3">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center gap-3 text-base md:text-lg text-gray-700 hover:text-primary transition-colors"
            >
              <Mail size={20} />
              {portfolioData.personal.email}
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base md:text-lg text-gray-700 hover:text-primary transition-colors"
            >
              <Github size={20} />
              {portfolioData.personal.github}
            </a>
            <div className="flex items-center gap-3 text-base md:text-lg text-gray-700">
              <MapPin size={20} />
              {portfolioData.personal.location}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
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

