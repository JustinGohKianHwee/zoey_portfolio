import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjects, getNextProject } from '@/lib/projects';
import { FadeIn } from '@/components/ui/FadeIn';
import type { ProjectImage } from '@/types/project';

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
    description: project.concept,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);

  return (
    <>
      {/* Hero — full bleed, no text overlay */}
      {project.heroImage && (
        <div className="relative w-full h-[65vh] md:h-[82vh] overflow-hidden">
          <Image
            src={project.heroImage}
            alt={`${project.title} — ${project.subtitle}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      <article>
        <div className="max-w-content mx-auto px-6 md:px-10">

          {/* Title block */}
          <FadeIn>
            <header className="py-10 md:py-12 border-b border-border">
              <h1 className="font-serif text-[1.875rem] md:text-[2.375rem] text-ink font-normal leading-tight">
                {project.title}
              </h1>
              <p className="font-sans text-sm text-stone mt-1.5">{project.subtitle}</p>
              <dl className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                <MetaItem label="Year" value={project.year} />
                <MetaItem label="Location" value={project.location} />
                <MetaItem label="Course" value={project.course} />
                <MetaItem label="Institution" value={project.institution} />
                {project.collaborators && (
                  <MetaItem label="With" value={project.collaborators} />
                )}
              </dl>
            </header>
          </FadeIn>

          {/* Concept pull quote */}
          <FadeIn delay={0.05}>
            <blockquote className="my-12 md:my-16 pl-5 border-l-[2px] border-accent">
              <p className="font-serif text-xl md:text-[1.375rem] text-ink italic font-normal leading-relaxed max-w-[46rem]">
                {project.concept}
              </p>
            </blockquote>
          </FadeIn>

          {/* Overview */}
          <FadeIn>
            <div className="mb-14 md:mb-18 max-w-prose">
              {project.overview.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className={`font-sans text-[0.9375rem] text-stone leading-relaxed${i > 0 ? ' mt-4' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Image grid — full content width, gentle padding */}
        {project.images.length > 0 && (
          <div className="max-w-content mx-auto px-6 md:px-10 mb-16 md:mb-24">
            <div className="grid grid-cols-12 gap-2 md:gap-3">
              {project.images.map((img) => (
                <ImageBlock key={img.src} image={img} />
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Next project */}
      {next && (
        <div className="border-t border-border">
          <div className="max-w-content mx-auto px-6 md:px-10">
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-between py-10 md:py-12 hover:opacity-70 transition-opacity duration-300"
              aria-label={`Next project: ${next.title}`}
            >
              <div>
                <p className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-1.5">
                  Next Project
                </p>
                <p className="font-serif text-xl md:text-2xl text-ink font-normal">
                  {next.title}
                </p>
                <p className="font-sans text-xs text-stone mt-0.5">{next.subtitle}</p>
              </div>
              <span
                className="font-sans text-2xl text-stone group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

function ImageBlock({ image }: { image: ProjectImage }) {
  const colSpan =
    image.layout === 'full'
      ? 'col-span-12'
      : image.layout === 'half'
      ? 'col-span-12 md:col-span-6'
      : 'col-span-12 md:col-span-4';

  const isRender = image.type === 'render' || image.type === 'context';
  const aspectRatio = image.layout === 'full' ? '16/9' : '4/3';

  return (
    <FadeIn className={colSpan}>
      <figure>
        <div
          className="relative overflow-hidden bg-surface"
          style={{ aspectRatio }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={
              image.layout === 'full'
                ? '(max-width: 1200px) 100vw, 1200px'
                : image.layout === 'half'
                ? '(max-width: 768px) 100vw, 600px'
                : '(max-width: 768px) 100vw, 400px'
            }
            className={isRender ? 'object-cover' : 'object-contain p-2 md:p-4'}
          />
        </div>
        {image.caption && (
          <figcaption className="mt-2 font-sans text-xs text-muted leading-snug">
            {image.caption}
          </figcaption>
        )}
      </figure>
    </FadeIn>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-sans text-[0.625rem] uppercase tracking-widest text-muted">
        {label}
      </dt>
      <dd className="font-sans text-xs text-stone mt-0.5">{value}</dd>
    </div>
  );
}
