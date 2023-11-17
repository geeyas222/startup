import { facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, firstProject, MCGarage, turtleGame, modernPortfolio } from "../assets";
import dropIdea from '../components/dropidea';

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "service",
    title: "Services",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
  {
    id: "about",
    title: "About Us",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "Be our new customer and get 20% on your first IT Service",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Satisfaction Guranteed",
    content:
      "Do pay us only when jobs gets done and you're satisfied",
  },
  {
    id: "feature-3",
    icon: send,
    title: "No need to go anywhere",
    content:
      "Do call us and we come to your place to solve  problem.",
  },
];



export const stats = [
  {
    id: "stats-1",
    title: "Satisfied Client",
    value: "10+",
  },
  {
    id: "stats-2",
    title: "Projects Completed",
    value: "50+",
  },
  {
    id: "stats-3",
    title: "Services",
    value: "79+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Services",
        link: "#service",
      },
      {
        name: "Projects",
        link: "#projects",
      },
      {
        name: "Pricing",
        link: "#price",
      },
      {
        name: "Contact Us",
        link: "#contact",
      },
      {
        name: "About Us",
        link: "#about",
      },
    ],
  },
  {
    title: "Contact",
    links: [

      {
        name: "Email - softhatsolution@gmail.com",
        link: "mailto:softhatsolution@gmail.com",
      },
      {
        name: "Telphone - +61 452292114",
        link: "tel:+61452292114",
      },
      {
        name: "Drop the idea",
        link: "#contact",
      },

    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Carrers",
        link: "#home",
      },
      {
        name: "Sponsor",
        link: "#home",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];


export const projects = [

  {
    name: "Turtle Game (Java project)",
    description:
      "",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Greenfoot (IDE)",
        color: "green-text-gradient",
      }
    ],
    image: turtleGame,
    source_code_link: "https://www.greenfoot.org/scenarios/26445",
  },
  {
    name: "3D portfolio (NextJS project)",
    description:
      "",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      }
    ],
    image: modernPortfolio,
    source_code_link: "https://3dportfolioo.netlify.app/",
  },
  {
    name: "Small Business",
    description:
      "",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "MySQl",
        color: "pink-text-gradient",
      },
      {
        name: "Relational Database (AWS)",
        color: "blue-text-gradient",
      },
      {
        name: "EC2 (AWS - Hosting)",
        color: "green-text-gradient",
      },
    ],
    image: MCGarage,
    source_code_link: "http://themcgarage.com/",
  },
];
