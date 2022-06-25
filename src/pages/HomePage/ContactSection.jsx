import React from "react";
import { MdEmail } from "react-icons/md";
import ContactCard from "../../components/Card/ContactCard";
import { contactsData } from "../../data/ContactsData";

const ContactSection = () => {
  const contacts = contactsData;

  return (
    <div className="flex flex-col pb-32" id="contact">
      <span className="text-7xl">Interested in working together</span>
      <div className="flex items-center">
        <span className="text-7xl">with me?</span>
        <div className="border-b-2 border-b-zl-brown w-[455px] ml-4" />
      </div>
      <div className="flex justify-between mt-14">
        {contacts.map((contact) => (
          <ContactCard contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
