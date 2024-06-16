import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/sass/components/_collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="collapse-container" onClick={toggleCollapse}>
        <div className="collapse-header">
          <h2>{title}</h2>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className="collapse-icon"
          />
        </div>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : "closed"}`}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
