import {
  faMapMarkedAlt,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export interface ContactListItem {
  desc?: string;
  icon?: IconDefinition;
  link?: {
    to: string;
    desc: string;
    title: string;
  };
}

export interface FooterProps {
  isVisible: boolean;
}

export type ContactList = Array<ContactListItem>;

export const CONTACT_LIST: ContactList = [
  { icon: faMapMarkedAlt, desc: "Łódź / Warszawa" },
  { icon: faPhone, desc: "+48 794-364-458" },
  {
    icon: faAt,
    link: {
      to: "mailto:wojciech.rygorowicz@gmail.com",
      desc: "wojciech.rygorowicz@gmail.com",
      title: "Napisz do mnie",
    },
  },
  {
    icon: faGithub,
    desc: "znajdziesz mnie także na",
    link: {
      to: "https://github.com/Centmsn",
      desc: "Githubie",
      title: "Github",
    },
  },
];
