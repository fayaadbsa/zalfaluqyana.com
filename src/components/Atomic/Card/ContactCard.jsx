import React from "react";
import Button from "../Button/Button";

const ContactCard = (props) => {
  const { contact } = props;

  return (
    <div className="flex flex-col bg-zl-white shadow-zl-md rounded-2xl w-full xl:w-[264px] h-[262px] p-6">
      <span className="text-zl-pink-dark font-semibold text-xl">
        {React.cloneElement(contact.icon, { size: 54 })}
        <span className="mt-8">{contact.name}</span>
      </span>
      <span className="text-zl-brown text-sm my-4">{contact.description}</span>
      <div className="mt-auto w-full">
        <Button intent="secondary">{contact.buttonText}</Button>
      </div>
    </div>
  );
};

export default ContactCard;
