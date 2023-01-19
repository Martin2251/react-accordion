import React, { useState } from "react";
import "./accordion.css";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
      <span>{isActive ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle  />}</span><h3>{heading}</h3><span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  );
};

export default Accordion;