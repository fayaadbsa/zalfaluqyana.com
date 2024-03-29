import React, { useEffect, useState } from "react";
import { contactsData } from "../../data/ContactsData";

const Sidebar = () => {
  const contacts = contactsData;

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute hidden md:block top-96 z-20 ml-5 2xl:ml-10 
        transition duration-1000 ease-out"
      style={{ transform: `translateY(${offsetY * 1}px)` }}
    >
      <div className="flex flex-col items-end text-zl-green-dark">
        {contacts.map((contact) => {
          return (
            <a
              href={contact.url}
              aria-label={contact.name}
              target="_blank"
              rel="noreferrer"
              className="mb-4 hover:drop-shadow-zl-soft"
            >
              {contact.sidebarIcon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
