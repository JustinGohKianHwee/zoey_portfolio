'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { Lightbox, useLightbox } from '@/components/ui/Lightbox';
import type { Project, ProjectImage } from '@/types/project';

interface Props {
  project: Project;
  next: Project | null;
}

export function ProjectPageContent({ project, next }: Props) {
  const { open, src: lbSrc, alt: lbAlt, openLightbox, closeLightbox } = useLightbox();

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
                {project.professor && (
                  <MetaItem label="Professor" value={project.professor} />
                )}
                {project.collaborators && (
                  <MetaItem label="With" value={project.collaborators} />
                )}
              </dl>
              {project.reportLink && (
                <a
                  href={project.reportLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 font-sans text-xs text-stone border-b border-stone/40 pb-px hover:text-ink hover:border-ink transition-colors duration-300"
                >
                  Download Thesis Report ↓
                </a>
              )}
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

        {/* Image grid — full content width */}
        {project.images.length > 0 && (
          <div className="max-w-content mx-auto px-6 md:px-10 mb-16 md:mb-24">
            <div className="grid grid-cols-12 gap-2 md:gap-3">
              {project.images.map((img) => (
                <ImageBlock key={img.src} image={img} onOpen={openLightbox} />
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

      <Lightbox open={open} src={lbSrc} alt={lbAlt} onClose={closeLightbox} />
    </>
  );
}

interface ImageBlockProps {
  image: ProjectImage;
  onOpen: (src: string, alt: string) => void;
}

function ImageBlock({ image, onOpen }: ImageBlockProps) {
  const useCover =
    image.objectFit === 'cover' ? true
    : image.objectFit === 'contain' ? false
    : image.type === 'render' || image.type === 'context';

  // When annotation is present, take full width so image+text sit side by side
  const colSpan = image.annotation
    ? 'col-span-12'
    : image.layout === 'dominant'
    ? 'col-span-12'
    : image.layout === 'full'
    ? 'col-span-12'
    : image.layout === 'half'
    ? 'col-span-12 md:col-span-6'
    : 'col-span-12 md:col-span-4';

  const aspectRatio =
    image.layout === 'full' || image.layout === 'dominant' ? '16/9' : '4/3';

  if (image.annotation) {
    return (
      <FadeIn className="col-span-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
          <figure className="w-full md:w-[58%] md:shrink-0">
            <div
              className="relative overflow-hidden bg-surface cursor-pointer"
              style={{ aspectRatio: '4/3' }}
              onClick={() => onOpen(image.src, image.alt)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className={useCover ? 'object-cover' : 'object-contain p-2 md:p-4'}
              />
            </div>
            {image.caption && (
              <figcaption className="mt-2 font-sans text-xs text-muted leading-snug">
                {image.caption}
              </figcaption>
            )}
          </figure>
          <div className="w-full md:flex-1 pt-1 md:pt-3">
            <p className="font-sans text-sm text-stone leading-relaxed">{image.annotation}</p>
          </div>
        </div>
      </FadeIn>
    );
  }

  if (image.naturalRatio) {
    return (
      <FadeIn className={colSpan}>
        <figure>
          <div
            className="bg-surface w-full cursor-pointer"
            onClick={() => onOpen(image.src, image.alt)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={2000}
              height={1500}
              style={{ width: '100%', height: 'auto' }}
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="block"
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

  if (image.layout === 'dominant') {
    return (
      <FadeIn className="col-span-12">
        <figure>
          <div
            className="relative w-full bg-surface cursor-pointer"
            style={{ minHeight: '65vh' }}
            onClick={() => onOpen(image.src, image.alt)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain p-4 md:p-8"
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

  return (
    <FadeIn className={colSpan}>
      <figure>
        <div
          className="relative overflow-hidden bg-surface cursor-pointer"
          style={{ aspectRatio }}
          onClick={() => onOpen(image.src, image.alt)}
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
            className={useCover ? 'object-cover' : 'object-contain p-2 md:p-4'}
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
