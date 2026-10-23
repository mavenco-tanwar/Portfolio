export interface ResumeData {
  title: string;
  role: string;
  badge: string;
  pdfUrl: string;
  fileSize: string;
  lastUpdated: string;
  summary: string;
  keyHighlights: string[];
  competencies: {
    category: string;
    skills: string[];
  }[];
}
