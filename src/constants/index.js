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

export const projects = [
  {
    name: "First Portfolio website",
    description:
      "I made this portfolio website on my first year of Uni to test and elaborate my skills of HTML, CSS and Javascript",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: star,
    source_code_link: "https://geeyas.github.io/MyResume/",
  },
  {
    name: "Uni Assignment",
    description:
      "I developed this website as my uni assignment on my first year",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: star,
    source_code_link: "http://infotech.scu.edu.au/~gachar10/gacharya_ISY10209_Ass3_index.html",
  },
  {
    name: "Turtle Game (Java project)",
    description:
      "It is a Uni assignment developed on my second year using Java language.",
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
    image: star,
    source_code_link: "https://www.greenfoot.org/scenarios/26445",
  },
  {
    name: "Final Year Project",
    description:
      "It is our final year project developed with my team. We searched for a real client and based on his requirements that he need for his business we developed this website. We followed agile methodology as a project management. We used Jira and confluence to keep track of our work and assign task to eachother (Tutor was our scrum master).",
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
    image: star,
    source_code_link: "http://themcgarage.com/",
  },
];
