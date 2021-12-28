import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IAboutMeFields {
  /** mainText */
  mainText: Document;

  /** mainSkills */
  mainSkills: Record<string, any>;
}

export interface WebDevSectionBar {
  title: string;
  percent: number;
}

/** Główna sekcja o mnie (jeden z głównych slide'ów) */

export interface IAboutMe extends Entry<IAboutMeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "aboutMe";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISlideFields {
  /** mainImg */
  mainImg: Asset;

  /** Title */
  title: string;

  /** description */
  description: string;

  /** linkDemo */
  linkDemo: string;

  /** linkCode */
  linkCode: string;

  /** linkBackend */
  linkBackend?: string | undefined;
}

/** slajd przedstawiający poszczególne projekty (w zakładce webDev) */

export interface ISlide extends Entry<ISlideFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "slide";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IWebDevFields {
  /** professionalExperience */
  professionalExperience: Document;

  /** learnedSkills */
  learnedSkills: Array<WebDevSectionBar>;

  /** learnedSkillsAdditional */
  learnedSkillsAdditional?: string | undefined;

  /** learningSkills */
  learningSkills: Array<WebDevSectionBar>;

  /** learningSkillsAdditional */
  learningSkillsAdditional?: string | undefined;
}

/** opis znajdujący się na pierwszej stronie po wejściu w zakładkę webDev */

export interface IWebDev extends Entry<IWebDevFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "webDev";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "aboutMe" | "slide" | "webDev";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";

export type CONTENTFUL_MODELS = ISlideFields | IWebDevFields | IAboutMeFields;
