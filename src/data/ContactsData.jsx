import { AiFillBehanceCircle, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const contactsData = [
  {
    id: "1",
    icon: <MdEmail />,
    name: "Email",
    description: "Send email to contact me directly for professional work.",
    buttonText: "Send Email",
    buttonUrl: "",
  },
  {
    id: "2",
    icon: <FaLinkedinIn />,
    name: "LinkedIn",
    description: "Let’s connect in LinkedIn!",
    buttonText: "Visit LinkedIn",
    buttonUrl: "",
  },
  {
    id: "3",
    icon: <AiFillBehanceCircle />,
    name: "Behance",
    description: "Visit my Behance to see my UI/UX Design projects.",
    buttonText: "Visit Behance",
    buttonUrl: "",
  },
  {
    id: "4",
    icon: <AiFillInstagram />,
    name: "Instagram",
    description: "Get to know me better by visiting my Instagram!",
    buttonText: "Visit Instagram",
    buttonUrl: "",
  },
];
