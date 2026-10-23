export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  isInteractiveDemo?: boolean;
  architectureHighlights: string[];
}
