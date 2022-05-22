import React from "react";

const Button = (props) => {
  const { href, style, icon } = props;

  return (
    <button className="py-4 px-6 bg-zl-white shadow-zl-md rounded-lg hover:shadow-zl-lg hover:stroke-zl-grey-light transition ">
      <a href={href || "#"} className={style} {...props}>
        <div className="flex items-center">
          {icon && <div className="mr-2">{icon}</div>}
          {props.children}
        </div>
      </a>
    </button>
  );
};

export default Button;
