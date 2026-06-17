import type { Metadata } from 'next';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Sze Zo Ey — architecture graduate open to opportunities.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-36 pb-20 px-6 md:px-10 max-w-content mx-auto">
      <div className="max-w-[36rem]">

        <FadeIn>
          <h1 className="font-serif text-[2rem] md:text-[2.5rem] text-ink font-normal leading-tight mb-8 md:mb-10">
            Get in touch
          </h1>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="font-sans text-[0.9375rem] text-stone leading-relaxed mb-10 md:mb-12">
            Open to architecture positions, studio collaborations, and design conversations.
            The best way to reach me is by email.
          </p>
        </FadeIn>

        <div className="border-t border-border" />

        <FadeIn delay={0.08}>
          <div className="py-10 md:py-12 space-y-6">
            <div>
              <p className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-1.5">
                Email
              </p>
              <a
                href="mailto:e0774841@u.nus.edu"
                className="font-sans text-sm text-ink hover:text-accent transition-colors duration-300"
              >
                e0774841@u.nus.edu
              </a>
            </div>

            <div>
              <p className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-1.5">
                LinkedIn
              </p>
              <p className="font-sans text-sm text-stone">
                [needs Zoey input — LinkedIn profile URL]
              </p>
            </div>

            <div>
              <p className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-1.5">
                CV / Resume
              </p>
              <p className="font-sans text-sm text-stone">
                [needs Zoey input — PDF CV download link]
              </p>
            </div>

            <div>
              <p className="font-sans text-[0.625rem] uppercase tracking-widest text-muted mb-1.5">
                Based in
              </p>
              <p className="font-sans text-sm text-stone">Singapore</p>
            </div>
          </div>
        </FadeIn>

        <div className="border-t border-border" />
      </div>
    </div>
  );
}
