import { portfolioData } from "@/lib/data";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = portfolioData.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors mb-6"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {project.title}
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-base text-gray-700">
                <span className="text-primary mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.hasImages && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Visual Showcase</h2>
            <p className="text-sm text-gray-600 mb-4">
              Screenshots and still images from actual live streams will be displayed here.
            </p>
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 text-center text-gray-500">
              <p className="text-sm">Overlay screenshots and live stream images</p>
              <p className="text-xs mt-2">(Images to be added)</p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {project.website && project.website !== "#" && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm md:text-base"
            >
              Visit Website <ExternalLink size={18} />
            </a>
          )}
          {project.appStore && project.appStore !== "#" && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm md:text-base"
            >
              App Store <ExternalLink size={18} />
            </a>
          )}
          {project.youtube && project.youtube !== "#" && (
            <a
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm md:text-base"
            >
              YouTube Channel <ExternalLink size={18} />
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm md:text-base"
            >
              GitHub <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

