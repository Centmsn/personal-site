import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactList as ContactListType } from "../constants";

export interface ContactListProps {
  listData: ContactListType;
}

const ContactList = ({ listData = [] }: ContactListProps) => {
  const renderList = () =>
    listData.map((listElement, index) => (
      <li key={index}>
        {listElement.icon && (
          <span>
            <FontAwesomeIcon icon={listElement.icon} />
          </span>
        )}
        {listElement.desc}{" "}
        {listElement.link && (
          <a
            href={listElement.link.to}
            target="_blank"
            rel="noreferrer"
            title={listElement.link.title}
          >
            {listElement.link.desc}
          </a>
        )}
      </li>
    ));

  return <ul>{renderList()}</ul>;
};

export default ContactList;
