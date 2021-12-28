export interface PageSection {
  name: SectionNames;
  isVisible: boolean;
  desc: string;
}

export type SectionNames = "header" | "hobbies" | "info" | "contact";

export type Maybe<T> = T | undefined | null;

export type HTMLTagNames = keyof HTMLElementTagNameMap;
