export type ProjectDiscipline = 'frontend' | 'graphic-design';

export type ProjectCategory = 
  | 'all'
  | 'frontend'
  | 'graphic-design'
  | 'brand-identity'
  | 'logo-design'
  | 'illustration'
  | 'ui-ux'
  | 'packaging';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  discipline: ProjectDiscipline;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  liveUrl?: string;
  githubUrl?: string;
  behanceUrl?: string;
  featured?: boolean;
  coverImage?: string;
  imageSrc?: string;
  previewType: 'interactive-ui' | 'branding-grid' | 'code-preview' | 'editorial-spread';
}

export interface ContactInquiry {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}