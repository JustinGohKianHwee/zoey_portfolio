import Link from 'next/link';
import { getFeaturedProjects, getAllProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FadeIn } from '@/components/ui/FadeIn';

export default function HomePage() {
  const featured = getFeaturedProjects();
  const all = getAllProjects();
  const selected = all.filter((p) => !p.featured);

  return (
    <>
      {/* Intro */}
      <section className="pt-40 pb-16 md:pt-52 md:pb-20 px-6 md:px-10 max-w-content mx-auto">
        <FadeIn>
          <h1 className="font-serif text-[2.25rem] md:text-[2.75rem] text-ink leading-tight font-normal">
            Sze Zo Ey
          </h1>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="font-sans text-sm text-stone mt-2">
            Master of Architecture · National University of Singapore
          </p>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="font-sans text-sm text-stone mt-4 max-w-prose leading-relaxed">
            Architecture designer passionate about creating community-centred environments
            that promote human well-being and environmental sustainability.
          </p>
        </FadeIn>
      </section>

      <div className="border-t border-border" />

      {/* Featured Projects */}
      <section className="py-16 md:py-20 px-6 md:px-10 max-w-content mx-auto">
        <FadeIn>
          <p className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-8">
            Selected Work
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i === 0} />
          ))}
        </div>
      </section>

      {/* Selected Works — supporting projects */}
      {selected.length > 0 && (
        <>
          <div className="border-t border-border" />
          <section className="py-16 md:py-20 px-6 md:px-10 max-w-content mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {selected.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  aspectRatio="aspect-[3/4]"
                />
              ))}
            </div>
          </section>
        </>
      )}

      <div className="border-t border-border" />

      {/* About strip */}
      <section className="py-14 md:py-16 px-6 md:px-10 max-w-content mx-auto">
        <FadeIn>
          <div className="md:flex md:items-start md:gap-24">
            <p className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-4 md:mb-0 md:pt-1 shrink-0">
              About
            </p>
            <div>
              <p className="font-sans text-sm text-stone leading-relaxed max-w-prose">
                Sze Zo Ey is an architecture graduate from the National University of
                Singapore, holding a Bachelor of Arts (Architecture) and a Master of
                Architecture. Her work spans regenerative design, adaptive environmental
                systems.
              </p>
              <Link
                href="/about"
                className="inline-block mt-4 font-sans text-xs text-stone border-b border-stone/40 pb-px hover:text-ink hover:border-ink transition-colors duration-300"
              >
                More about Zoey
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
