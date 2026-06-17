import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Architecture projects by Sze Zo Ey — seven projects across regenerative design, cultural centres, adaptive facades, and collective housing.',
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-28 md:pt-36 pb-16 px-6 md:px-10 max-w-content mx-auto">
      <FadeIn>
        <h1 className="font-serif text-[1.875rem] md:text-[2.25rem] text-ink font-normal mb-2">
          Work
        </h1>
        <p className="font-sans text-sm text-stone mb-12 md:mb-14">
          {projects.length} projects, 2022–2025
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i < 3} />
        ))}
      </div>
    </div>
  );
}
