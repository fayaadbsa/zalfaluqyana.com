import React from "react";
import classNames from "classnames";

const Button = (props) => {
  const { href, icon, intent = "primary" } = props;

  return (
    <button
      className={classNames("text-zl-black", {
        "py-4 px-6 bg-zl-white shadow-zl-md rounded-lg hover:shadow-zl-lg hover:stroke-zl-grey-light transition":
          intent === "primary",
        "py-3 px-6 bg-zl-pink-light border border-zl-black font-medium": intent === "secondary",
      })}
    >
      <a href={href || "#"} {...props}>
        <div className="flex items-center">
          {icon && <div className="mr-2">{icon}</div>}
          {props.children}
        </div>
      </a>
    </button>
  );
};

export default Button;
