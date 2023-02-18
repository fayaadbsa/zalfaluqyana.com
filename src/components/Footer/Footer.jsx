import React from "react";
import lang from "../../data/lang";
import blues from "../../images/blues.png";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="flex justify-center items-center bg-zl-pink-light-super shadow-zl-xl py-2">
        <img src={blues} alt="blues" />
        <span className="text-zl-brown ml-3">{lang.footer.title}</span>
      </div>
    </footer>
  );
};

export default Footer;
