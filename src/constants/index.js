import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";

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
    id: "price",
    title: "Pricing",
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
    value: "100+",
  },
  {
    id: "stats-2",
    title: "Projects Completed",
    value: "100+",
  },
  {
    id: "stats-3",
    title: "Logo Designed",
    value: "100+",
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
        name: "Address - 00 Some Street, Perth",
        link: "https://goo.gl/maps/rnXJK6xxnpGeCQ8z9",
      },
      {
        name: "Email - softhatsolution@gmail.com",
        link: "mailto:softhatsolution@gmail.com",
      },
      {
        name: "Telphone - +61420024420",
        link: "tel:+61420024420",
      },
      {
        name: "Suggestions for Improvement",
        link: "#contact",
      },

    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Job for SoftHat",
        link: "#home",
      },
      {
        name: "Job with SoftHat",
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


export const cards = [
  {
    title: 'Basic Plan',
    description: 'Perfect for getting started.',
    price: '$19',
    features: ['Unlimited access', '24/7 Customer support', 'Access to premium features'],
  },
  {
    title: 'Pro Plan',
    description: 'For those who need more.',
    price: '$39',
    features: ['All Basic features', 'Advanced analytics', 'Priority support'],
  },
  {
    title: 'Enterprise Plan',
    description: 'For large businesses.',
    price: '$99',
    features: ['All Pro features', 'Dedicated account manager', 'Custom solutions'],
  },
];