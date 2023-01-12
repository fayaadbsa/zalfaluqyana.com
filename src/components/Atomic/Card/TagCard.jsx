import React from "react";

const TagCard = (props) => {
  const { tag } = props;

  return (
    <div className="bg-zl-pink-light-super text-zl-pink-dark p-2 rounded-[4px]">
      {tag}
    </div>
  );
};

export default TagCard;
