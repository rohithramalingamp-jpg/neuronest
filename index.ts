export interface CurriculumModule {
  id: number;
  number: string;
  title: string;
  duration: string;
  summary: string;
  topics: string[];
}

export interface CareerPathItem {
  id: string;
  title: string;
  role: string;
  environment: string;
  description: string;
  highlights: string[];
}

export interface ToolkitItem {
  id: string;
  name: string;
  items: string;
  category: string;
  description: string;
  iconName: string;
}

export interface TransformationItem {
  id: string;
  from: string;
  to: string;
  description: string;
  focusArea: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryImageItem {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  aspect?: string;
  categoryColor?: string;
  accentColor?: string;
  badgeBg?: string;
  badgeBorder?: string;
  titleColor?: string;
  descColor?: string;
}
