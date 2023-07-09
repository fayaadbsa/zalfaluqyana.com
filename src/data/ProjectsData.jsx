import ovoImg from "../images/projects/thumbnail/ovo.png";
import kChuImg from "../images/projects/thumbnail/k-chu.png";
import ukutunerImg from "../images/projects/thumbnail/ukutuner.png";
import krlAccessImg from "../images/projects/thumbnail/krl-access.png";
import coduckWebImg from "../images/projects/thumbnail/coduck-web.png";
import coduckMobileImg from "../images/projects/thumbnail/coduck-mobile.png";
import theBodyShopImg from "../images/projects/thumbnail/the-body-shop.png";
import wceImg from "../images/projects/thumbnail/wce.png";
import ovoActiveImg from "../images/projects/active/ovo.png";
import kChuActiveImg from "../images/projects/active/k-chu.png";
import ukutunerActiveImg from "../images/projects/active/ukutuner.png";
import krlAccessActiveImg from "../images/projects/active/krl-access.png";
import coduckWebActiveImg from "../images/projects/active/coduck-web.png";
import coduckMobileActiveImg from "../images/projects/active/coduck-mobile.png";
import theBodyShopActiveImg from "../images/projects/active/the-body-shop.png";
import wceActiveImg from "../images/projects/active/wce.png";
import { PROJECT_TYPE_ENUM, TAG_ENUM } from "../utils/enumerate";

export const projectsData = [
  {
    id: 1,
    img: wceImg,
    activeImg: wceActiveImg,
    alt: "Weekend Career Expo by UI WIB",
    title: "Weekend Career Expo by UI WIB",
    desc: "Weekend Career Expo by UI Women in Business aims to not only help graduates and students find the right job, but also to help employers acquire top-notch human resources.",
    websiteUrl: "https://uiwomeninbusiness.com/",
    period: "February - July 2023",
    tags: [
      TAG_ENUM.DESKTOP_WEBSITE,
      TAG_ENUM.MOBILE_WEBSITE,
      TAG_ENUM.PRODUCT_DESIGN,
      TAG_ENUM.UI_DESIGN,
    ],
    type: PROJECT_TYPE_ENUM.PERSONAL_PROJECT,
  },
  {
    id: 2,
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
    type: PROJECT_TYPE_ENUM.PERSONAL_CASE_STUDY,
  },
  {
    id: 3,
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
    type: PROJECT_TYPE_ENUM.COLLEGE_GROUP,
  },
  {
    id: 4,
    img: kChuImg,
    activeImg: kChuActiveImg,
    alt: "K-Chu Mobile App",
    title: "K-Chu Mobile App",
    desc: "K-Chu is a mobile app provided by Kopi Chuseyo, a coffee shop company, for Indonesian K-pop fans. With this app, Kpopers will be able to see K-Pop events to attend, vote for their favorite idol to get benefits, and chat with fellow Kpopers with the same interest.",
    websiteUrl:
      "https://www.behance.net/gallery/166681117/K-Chu-Mobile-App-A-Platform-for-K-Pop-Fans",
    period: "March-June 2022",
    tags: [
      TAG_ENUM.MOBILE_APP,
      TAG_ENUM.KPOP,
      TAG_ENUM.PRODUCT_DESIGN,
      TAG_ENUM.UI_DESIGN,
    ],
    type: PROJECT_TYPE_ENUM.PERSONAL_INTERNSHIP,
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
