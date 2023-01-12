import React from "react";
import ContactCard from "../Atomic/Card/ContactCard";
import { contactsData } from "../../data/ContactsData";
import star2 from "../../images/star-2.png";
import star3 from "../../images/star-3.png";
import darwin from "../../images/darwin.png";

const ContactSection = () => {
  const contacts = contactsData;

  return (
    <div className="relative flex flex-col pb-32" id="contact">
      <div className="absolute -ml-12 -mt-6 z-10">
        <img src={star2} alt="star-2" />
      </div>
      <span className="text-7xl">Interested in working together</span>
      <div className="flex items-center">
        <span className="text-7xl">with me?</span>
        <div className="border-b-2 border-b-zl-brown w-[455px] ml-4" />
        <div className="ml-auto -mt-6 z-10">
          <img src={star3} alt="star-3" />
        </div>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-14">
        {contacts.map((contact) => (
          <div className="w-full">
            <ContactCard contact={contact} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 md:-right-10 xl:-right-20 2xl:-right-28">
        <img src={darwin} alt="darwin" />
      </div>
    </div>
  );
};

export default ContactSection;
