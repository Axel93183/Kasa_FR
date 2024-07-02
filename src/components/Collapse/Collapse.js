import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Collapse.scss";

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
            icon={faChevronDown}
            className={`collapse-icon ${isOpen ? "open" : ""}`}
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
