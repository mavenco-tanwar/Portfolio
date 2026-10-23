export type SkillCategory = 'core' | 'ui' | 'api' | 'perf' | 'data-ai';

export interface CodeSnippet {
  title: string;
  language: string;
  code: string;
  description: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number;
  experienceYears: number;
  featuredSnippet: CodeSnippet;
}
