export type Domain =
  | "Universe"
  | "Earth"
  | "Life"
  | "Humans"
  | "Civilization";

export type ConceptStatus = "complete" | "coming-soon";

export interface Resource {
  type: "video" | "article" | "book";
  title: string;
  url?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface Relationship {
  slug: string;
  description: string;
}

export interface KnowledgeObject {
  id: string;
  slug: string;
  title: string;
  status: ConceptStatus;
  domains: Domain[];
  summary: string;
  whyItMatters: string;
  keyQuestion: string;
  mentalModel: string;
  learningObjectives: string[];
  prerequisites: string[];
  unlocks: string[];
  relationships: Relationship[];
  resources: Resource[];
  quiz: QuizQuestion[];
  reflection: string;
  completionCriteria: string;
  body: { heading: string; paragraphs: string[] }[];
}
