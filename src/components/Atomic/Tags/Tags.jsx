import React from "react";
import TagCard from "../Card/TagCard";

const Tags = (props) => {
  const { tags } = props;

  return (
    tags && (
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => {
          return <TagCard tag={t} />;
        })}
      </div>
    )
  );
};

export default Tags;
