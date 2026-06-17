import { projects } from '@/content/projects';
import type { Project } from '@/types/project';

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const sorted = getAllProjects();
  const index = sorted.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return undefined;
  return sorted[(index + 1) % sorted.length];
}
