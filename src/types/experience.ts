export interface ExperienceHighlight {
  project: string;
  impact: string;
  details: string;
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  description: string;
  highlights: ExperienceHighlight[];
  techStack: string[];
}
