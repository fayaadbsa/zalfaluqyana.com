import ovoImg from "../images/projects/thumbnail/ovo.png";
import ukutunerImg from "../images/projects/thumbnail/ukutuner.png";
import krlAccessImg from "../images/projects/thumbnail/krl-access.png";
import coduckWebImg from "../images/projects/thumbnail/coduck-web.png";
import coduckMobileImg from "../images/projects/thumbnail/coduck-mobile.png";
import theBodyShopImg from "../images/projects/thumbnail/the-body-shop.png";
import ovoActiveImg from "../images/projects/active/ovo.png";
import ukutunerActiveImg from "../images/projects/active/ukutuner.png";
import krlAccessActiveImg from "../images/projects/active/krl-access.png";
import coduckWebActiveImg from "../images/projects/active/coduck-web.png";
import coduckMobileActiveImg from "../images/projects/active/coduck-mobile.png";
import theBodyShopActiveImg from "../images/projects/active/the-body-shop.png";
import { PROJECT_TYPE_ENUM, TAG_ENUM } from "../utils/enumerate";

export const projectsData = [
  {
    id: 1,
    img: ovoImg,
    activeImg: ovoActiveImg,
    alt: "OVO Case Study",
    title: "OVO Case Study",
    desc: "This case study covers the design solution for a problem that is faced by users regarding top-up and transfer out over the limit. Design Thinking approach is used in this work to create the design solution.",
    websiteUrl:
      "https://www.behance.net/gallery/140833721/OVO-Case-Study-User-Dashboard-Top-Up-Limit-Balance",
    period: "February 2022",
    tags: [
      TAG_ENUM.MOBILE_APP,
      TAG_ENUM.FINANCE,
      TAG_ENUM.DESIGN_THINKING,
      TAG_ENUM.USER_RESEARCH,
    ],
    type: PROJECT_TYPE_ENUM.PERSONAL,
  },
  {
    id: 2,
    img: coduckWebImg,
    activeImg: coduckWebActiveImg,
    alt: "Coduck (Web)",
    title: "Coduck (Web)",
    desc: "Coduck is a friendly IT online course that strives to provide the best learning experience to learner. We deliver the final design by adopting User-Centered Design method.",
    websiteUrl:
      "https://www.behance.net/gallery/140973785/Coduck-Online-Learning-Platform",
    period: "March-June 2021",
    tags: [
      TAG_ENUM.WEB_DESIGN,
      TAG_ENUM.ONLINE_COURSE,
      TAG_ENUM.PRODUCT_DESIGN,
      TAG_ENUM.USER_CENTERED_DESIGN,
    ],
    type: PROJECT_TYPE_ENUM.GROUP,
  },
  {
    id: 3,
    img: theBodyShopImg,
    activeImg: theBodyShopActiveImg,
    alt: "The Body Shop",
    title: "The Body Shop",
    desc: "The Body Shop is a company that provides eco-friendly beauty products. The objective of this redesign project is to maximize The Body Shop website design so it can help the company to introduce and sell their products more effectively.",
    websiteUrl:
      "https://www.behance.net/gallery/136673649/The-Body-Shop-Landing-Page-Redesign",
    period: "July 2021",
    tags: [
      TAG_ENUM.WEB_DESIGN,
      TAG_ENUM.REDESIGN,
      TAG_ENUM.USER_CENTERED_DESIGN,
      TAG_ENUM.BEAUTY,
    ],
    type: PROJECT_TYPE_ENUM.PERSONAL,
  },
  {
    id: 4,
    img: krlAccessImg,
    activeImg: krlAccessActiveImg,
    alt: "KRL Access",
    title: "KRL Access",
    desc: "KRL Access is a mobile app provided by PT KAI Indonesia to help guide KRL riders regarding KRL schedule, routes, price, and more. This project strives to make the processes in the app could be done effectively.",
    websiteUrl: "https://www.behance.net/gallery/135158211/KRL-Access-Redesign",
    period: "March 2021",
    tags: [
      TAG_ENUM.MOBILE_APP,
      TAG_ENUM.REDESIGN,
      TAG_ENUM.USER_CENTERED_DESIGN,
      TAG_ENUM.TRANSPORTATION,
    ],
    type: PROJECT_TYPE_ENUM.PERSONAL,
  },
  {
    id: 5,
    img: coduckMobileImg,
    activeImg: coduckMobileActiveImg,
    alt: "Coduck (Mobile App)",
    title: "Coduck (Mobile App)",
    desc: "Coduck is a friendly IT online course that strives to provide the best learning experience to learner. The project focuses on delivering the mobile app version from the original idea of Coduck, which is a website-based design idea.",
    websiteUrl:
      "https://www.behance.net/gallery/140975277/Coduck-%28Mobile-App-Ver%29-Online-Learning-Platform",
    period: "July 2021",
    tags: [
      TAG_ENUM.MOBILE_APP,
      TAG_ENUM.ONLINE_COURSE,
      TAG_ENUM.USER_CENTERED_DESIGN,
    ],
    type: PROJECT_TYPE_ENUM.PERSONAL,
  },
  {
    id: 6,
    img: ukutunerImg,
    activeImg: ukutunerActiveImg,
    alt: "Ukutuner",
    title: "Ukutuner",
    desc: "Ukutuner is a ukulele tuner for young amateur ukulele players. This app provides a game-like feature to help practice playing ukulele and also song chords feature that contains numerous popular song chords to play.",
    websiteUrl: "https://www.behance.net/gallery/135692903/ukutuner",
    period: "March 2021",
    tags: [
      TAG_ENUM.MOBILE_APP,
      TAG_ENUM.GAME,
      TAG_ENUM.MUSIC,
      TAG_ENUM.UI_DESIGN,
    ],
    type: PROJECT_TYPE_ENUM.PERSONAL,
  },
];
