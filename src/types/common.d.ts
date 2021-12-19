export interface PageSection {
  name: SectionNames;
  isVisible: boolean;
  desc: string;
}

export type SectionNames = "header" | "hobbies" | "info" | "contact";
