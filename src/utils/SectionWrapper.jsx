import React from "react";

const SectionWrapper = (props) => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-22">
      {props.children}
    </div>
  );
};

export default SectionWrapper;
