import { AiFillBehanceCircle, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from "react";
import { ReactComponent as IconEmail } from "../images/icon/email.svg";
import { ReactComponent as IconBehance } from "../images/icon/behance.svg";
import { ReactComponent as IconInstagram } from "../images/icon/instagram.svg";
import { ReactComponent as IconLinkedIn } from "../images/icon/linkedin.svg";

export const contactsData = [
  {
    id: "1",
    icon: <FaLinkedinIn />,
    sidebarIcon: <IconLinkedIn />,
    name: "LinkedIn",
    description: "Let’s connect in LinkedIn!",
    buttonText: "Check Out My LinkedIn",
    url: "https://www.linkedin.com/in/zalfaluqyana",
  },
  {
    id: "2",
    icon: <AiFillBehanceCircle />,
    sidebarIcon: <IconBehance />,
    name: "Behance",
    description: "Visit my Behance to see my UI/UX Design projects.",
    buttonText: "Visit My Behance",
    url: "https://www.behance.net/zalfaluqyana",
  },
  {
    id: "3",
    icon: <MdEmail />,
    sidebarIcon: <IconEmail />,
    name: "Email",
    description: "Send email to contact me directly for professional work.",
    buttonText: "Send Email",
    url: "mailto:zalfalqyn@gmail.com",
  },
  {
    id: "4",
    icon: <AiFillInstagram />,
    sidebarIcon: <IconInstagram />,
    name: "Instagram",
    description: "Get to know me better by visiting my Instagram!",
    buttonText: "Follow Me",
    url: "https://www.instagram.com/zalfaluqyana/",
  },
];
