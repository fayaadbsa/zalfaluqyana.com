import React, { useState } from "react";
import classNames from "classnames";

const Button = (props) => {
  const { href, icon, intent = "primary", className, ...rest } = props;

  const [onClick, setOnClick] = useState(false);
  const [onHover, setOnHover] = useState(false);

  return (
    <a href={href || "#"}>
      <button
        className={classNames(
          "text-zl-black w-full",
          intent === "primary" && {
            "py-4 px-6 bg-zl-white shadow-zl-md rounded-lg hover:shadow-zl-lg hover:stroke-zl-grey-light transition": true,
            "bg-zl-green-light": onHover,
            "bg-zl-green-dark text-zl-white-secondary": onClick,
          },
          intent === "secondary" && {
            "py-3 px-5 bg-zl-pink-light border border-zl-black font-medium text-sm": true,
            "bg-zl-pink-dark text-zl-white border-transparent": onHover,
          },
          className
        )}
        onMouseOver={() => setOnHover(true)}
        onMouseDown={() => setOnClick(true)}
        onMouseLeave={() => {
          setOnHover(false);
          setOnClick(false);
        }}
        {...rest}
      >
        <div className="flex items-center justify-center">
          {icon && <div style={{ marginRight: "10px" }}>{icon}</div>}
          <span>{props.children}</span>
        </div>
      </button>
    </a>
  );
};

export default Button;
