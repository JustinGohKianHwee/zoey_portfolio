import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/project';
import { FadeIn } from './FadeIn';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  aspectRatio?: string;
}

export function ProjectCard({
  project,
  priority = false,
  aspectRatio = 'aspect-[4/3]',
}: ProjectCardProps) {
  return (
    <FadeIn>
      <Link
        href={`/work/${project.slug}`}
        className="group block cursor-pointer"
        aria-label={`View ${project.title} — ${project.subtitle}`}
      >
        <div className={`relative ${aspectRatio} overflow-hidden bg-surface`}>
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.02]"
            priority={priority}
          />
        </div>
        <div className="border-t border-border pt-3 mt-0">
          <p className="font-sans text-[0.625rem] uppercase tracking-widest text-stone mb-1">
            {project.typology}
          </p>
          <p className="font-sans text-sm text-ink group-hover:text-accent transition-colors duration-300">
            {project.title}
          </p>
          <p className="font-sans text-xs text-muted mt-0.5">{project.year}</p>
        </div>
      </Link>
    </FadeIn>
  );
}
