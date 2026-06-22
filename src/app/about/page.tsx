import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Sze Zo Ey — NUS architecture graduate focused on regenerative design and contextual spatial thinking.',
};

export default function AboutPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-28 md:pt-36 pb-20 px-6 md:px-10 max-w-content mx-auto">

      <div className="max-w-[52rem]">

        {/* Name */}
        <FadeIn>
          <h1 className="font-serif text-[2rem] md:text-[2.5rem] text-ink font-normal leading-tight mb-8 md:mb-10">
            Sze Zo Ey
          </h1>
        </FadeIn>

        {/* Bio + portrait */}
        <FadeIn delay={0.05}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-12 md:mb-14">
            <figure className="order-1 md:order-2 w-full max-w-[15rem] mx-auto md:mx-0 md:w-[16rem] md:shrink-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
                <Image
                  src="/images/zoey-portrait.png"
                  alt="Sze Zo Ey"
                  fill
                  sizes="(max-width: 768px) 240px, 256px"
                  className="object-cover"
                />
              </div>
            </figure>
            <div className="order-2 md:order-1 md:flex-1 space-y-4">
              <p className="font-sans text-[0.9375rem] text-stone leading-relaxed">
                Sze Zo Ey is an architecture graduate with experience in both architectural
                and interior design practice, involved in projects from concept development to
                detailed design coordination. She has developed an understanding of how spatial
                ideas translate into built form, with attention to materiality, light,
                proportion, and user experience.
              </p>
              <p className="font-sans text-[0.9375rem] text-stone leading-relaxed">
                Her design approach focuses on community-centred environments that prioritise
                human well-being, fostering interaction, inclusivity, and meaningful everyday
                experiences. She views architecture as part of wider social and ecological
                systems that evolve with their users.
              </p>
              <p className="font-sans text-[0.9375rem] text-stone leading-relaxed">
                Sustainability and experiential quality are key drivers in her work, guiding
                both conceptual and design decisions. Overall, she is interested in creating
                thoughtful, context-sensitive architecture that enhances everyday life through
                human-centred design.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="border-t border-border" />

        {/* Details grid */}
        <FadeIn delay={0.1}>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 py-10 md:py-12">
            <div>
              <dt className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-1.5">
                Education
              </dt>
              <dd className="font-sans text-sm text-stone leading-relaxed">
                Master of Architecture<br />
                Bachelor of Arts (Architecture)<br />
                National University of Singapore
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-1.5">
                Exchange
              </dt>
              <dd className="font-sans text-sm text-stone">
                Hanyang University, Seoul<br />
                South Korea, 2023
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-1.5">
                Experience
              </dt>
              <dd className="font-sans text-sm text-stone leading-relaxed">
                Design Trainee — TBG Interior Design<br />
                Jun–Aug 2025<br />
                <br />
                Architecture Intern — IX Architects<br />
                Jun–Dec 2024
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-1.5">
                Skills
              </dt>
              <dd className="font-sans text-sm text-stone leading-relaxed">
                Rhino 3D · ArchiCAD · AutoCAD<br />
                Enscape · Twinmotion<br />
                Photoshop · Illustrator · InDesign<br />
                3D Printing · Laser Cutting
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-1.5">
                Contact
              </dt>
              <dd className="font-sans text-sm text-stone">
                <a
                  href="mailto:zoeysze@gmail.com"
                  className="hover:text-ink transition-colors duration-300"
                >
                  zoeysze@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-1.5">
                CV / Resume
              </dt>
              <dd className="font-sans text-sm text-stone">
                <a
                  href="/Sze_Zo_Ey_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sze Zo Ey_Resume.pdf"
                  className="border-b border-stone/40 pb-px hover:text-ink hover:border-ink transition-colors duration-300"
                >
                  Download CV ↓
                </a>
              </dd>
            </div>
          </dl>
        </FadeIn>

        <div className="border-t border-border" />

        {/* Projects list */}
        <FadeIn delay={0.12}>
          <div className="pt-10 md:pt-12">
            <p className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-6">
              Projects
            </p>
            <ul className="space-y-0">
              {projects.map((project) => (
                <li key={project.slug} className="border-b border-border last:border-0">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group flex items-center justify-between py-4 hover:opacity-70 transition-opacity duration-300"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-xs text-muted w-8 shrink-0">
                        {project.year}
                      </span>
                      <span className="font-sans text-sm text-ink">{project.title}</span>
                      <span className="font-sans text-xs text-stone hidden md:inline">
                        — {project.typology}
                      </span>
                    </div>
                    <span className="font-sans text-sm text-stone group-hover:translate-x-0.5 transition-transform duration-300">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <div className="border-t border-border pt-10 md:pt-12">
          <FadeIn>
            <Link
              href="/contact"
              className="inline-block font-sans text-xs text-stone border-b border-stone/40 pb-px hover:text-ink hover:border-ink transition-colors duration-300"
            >
              Get in touch →
            </Link>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
