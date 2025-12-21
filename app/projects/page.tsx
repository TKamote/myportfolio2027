import { portfolioData } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects - David Verano",
  description: "Featured mobile apps and projects by David Verano",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        All Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

