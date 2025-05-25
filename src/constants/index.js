import {
  java,
  python,
  react,
  arduino,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  votesys,
  ub,
  sanhs,
  rootfinder,
  sumohockeybot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "App Development",
    icon: java,
  },
  {
    title: "AI",
    icon: python,
  },
  {
    title: "Web Development",
    icon: react,
  },
  {
    title: "Hardware",
    icon: arduino,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "TVL - ICT",
    company_name: "SAN AGUSTIN NHS",
    icon: sanhs,
    iconBg: "#383E56",
    date: "August 2020 - May 2022",
    points: [
      "With High Honor Graduate",
      "Best in Information Communication & Technology",
    ],
  },
  {
    title: "BS IN COMPUTER ENGINEERING",
    company_name: "UNIVERSITY OF BOHOL",
    icon: ub,
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      "",
    ],
  },
];

const projects = [
  {
    name: "Online Voting System",
    description:
      "Web-based platform that enables users to securely cast their votes online, verify their voting status, and view real-time election results from any internet-connected device.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "tomcat",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: votesys,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sumo / Hockey Bot",
    description:
      "Arduino-powered combat robot for sumo and hockey matches, featuring dual control modes, edge detection, and real-time obstacle avoidance.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "hardware",
        color: "pink-text-gradient",
      },
    ],
    image: sumohockeybot,
    source_code_link: "https://github.com/jaywarrencag-ong/sumo-hockey-bot.git",
  },
  {
    name: "Root Finder using Python",
    description:
      "Interactive desktop app for accurately finding function roots using six numerical methods with dynamic plotting and detailed results.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: rootfinder,
    source_code_link: "https://github.com/jaywarrencag-ong/root-finder-using-python.git",
  },
];

export { services, technologies, experiences, projects };