export type ImageLayout = 'full' | 'half' | 'third' | 'dominant';
export type ImageType = 'render' | 'plan' | 'section' | 'diagram' | 'process' | 'context' | 'elevation';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  type: ImageType;
  layout: ImageLayout;
  annotation?: string;
  objectFit?: 'cover' | 'contain';
  naturalRatio?: boolean;
}

export interface ProjectSection {
  heading?: string;
  body: string;
  reportLink?: string;
  reportLabel?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  course: string;
  institution: string;
  location: string;
  typology: string;
  collaborators?: string;
  advisor?: string;
  reportLink?: string;
  reportLabel?: string;
  featured: boolean;
  order: number;
  heroImage?: string;
  thumbnailImage: string;
  concept?: string;
  overview?: string;
  /** Non-studio research/engagement layout: no hero, title-first, section-based writeups */
  researchProject?: boolean;
  /** Ordered writeup sections (used by research projects); each may carry its own PDF link */
  sections?: ProjectSection[];
  tags: string[];
  images: ProjectImage[];
}
