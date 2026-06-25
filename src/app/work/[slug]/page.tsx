import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjects, getNextProject } from '@/lib/projects';
import { ProjectPageContent } from './ProjectPageContent';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.concept ?? project.subtitle,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const next = getNextProject(project.slug) ?? null;

  return <ProjectPageContent project={project} next={next} />;
}
