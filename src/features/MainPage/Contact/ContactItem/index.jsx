import React from "react";
import "./ContactItem.scss";

const ContactItem = ({ contact }) => {
  const { info } = contact;
  const renderInfoContent = (infos) => {
    return (
      infos.length > 0 &&
      infos.map((info, index) => (
        <span key={index} className="contentInfo">
          <a href={info.infoHref} target="_blank" rel="noreferrer noopener">
            {info.infoContent}
          </a>
        </span>
      ))
    );
  };

  return (
    <div className="contact-item flex-col-center">
      <div className="icon">
        <img alt="" src={contact.icon} />
      </div>
      <div className="contact-info flex-col-center">
        <span className="titleInfo">{contact.title}:</span>
        <div className="flex-col-center">{renderInfoContent(info)}</div>
      </div>
    </div>
  );
};

export default ContactItem;
