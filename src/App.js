import React from "react";
import Accordion from "../src/components/Accordion"
import { accordionData } from "../src/components/data"

const App = () => {
  return (
    <ul className="accordion">
      {accordionData.map(({ heading, content }) => (
        <Accordion heading={heading} content={content} />
      ))}
    </ul>
  );
};

export default App;
