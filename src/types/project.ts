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
  reportLink?: string;
  featured: boolean;
  order: number;
  heroImage?: string;
  thumbnailImage: string;
  concept: string;
  overview: string;
  tags: string[];
  images: ProjectImage[];
}
