import {
  mobile,
  backend,
  creator,
  web,
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
  discord,
  twitter,
  AI,
  movie,
  UV,
  Netflix,
  Library,
  threejs,
  montclair,
  frontend,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
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
  
];

const experiences = [
  {
    title: "Computer Science Student",
    company_name: "Montclair State University",
    icon: montclair,
    iconBg: "#FFFFFF",
    date: "September 2018 - May 2022",
    points: [
      "Pursued and Completed a Bachelors of Science in Computer Science",
      "Completed multiple Exciting Courses such as data structures and algorithms, cloud computing and cybersecurity. ",
      "Learned the Ins and Outs of Python and Javascript.",
      "Participated in code reviews and providing constructive feedback to other peer developers.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Frontend Simplified",
    icon: frontend,
    iconBg: "#FFFFFF",
    date: "July 2023 - October 2023",
    points: [
      "Contributed to product engineering by collaborating on large-scale systems, optimizing code efficiency and performance.",
      "Collaborating with cross-functional teams using git. These teams included designers, product managers, and other developers to create high-quality products.",
      "Developed and transformed a static single page web application into an multi-page interactive marketplace with an incredible user interface and functionality.",
      "Participating in code reviews with fellow Interns and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company_name: "",
    icon: frontend,
    iconBg: "#FFFFFF",
    date: "October 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Constantly striving to improve and learn from every experience possible.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Leaving my comfort zone and learning brand new technologies every single day.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Kevin has the ambition and talent to develop great projects no matter the circumstance. I'm very proud of him and he will find success wherever he goes.",
    name: "David Bragg",
    designation: "CEO",
    company: "Frontend Simplifed",
    image: "https://frontendsimplified.com/_nuxt/img/platform.1d1619c.png",
  },
];

const projects = [
  {
    name: "Discord Clone",
    description:
      "Fullstack and Realtime Discord/Slack clone. Features Such as servers, channels, video calls, audio calls, editing and deleting messages as well as member roles. Includes Best Practice functionality and Authentication with Clerk to allow easy sign-in with Google!",
    tags: [
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: discord,
    source_code_link: "https://github.com/Kxsanchez323/discord-clone",
  },
  {
    name: "Netflix Clone",
    description:
      "Netflix clone created in react with Firebase as a database. Includes best practice functionality, Signup, Login and Account pages and Linked to the OMDB as the movie API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: Netflix,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ai Summarizer",
    description:
      "A AI Summarizer app that i created used an Open Source API from RapidAPi. This application beautifully summarizes any article using AI. Includes best practices functionality featuring lazy loading and saving all links posted in the local storage for easy access in the future.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: AI,
    source_code_link: "https://github.com/",
  },
  {
    name: "Twitter Web App",
    description:
      "Fullstack web application modled after twitter! Features Such as account creation and authentication through Firebase, Currently trending hashtags throughout the United States and the world and a live feed that you can interact with by commenting, liking and sharing with friends!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/Kxsanchez323/twitter-clone",
  },
  {
    name: "Movie Search API",
    description:
      "Movie API search engine made entirely with React. Includes best practice features such as Skeletal loading states and includes all of the information of the movies directly from the API. Goal of this project was to learn and understand how to work with APIs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Kxsanchez323/week6-final",
  },
  {
    name: "NFT Marketplace",
    description:
      "Web based Nft marketplace made as part of my Internship with Frontend Simplified.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: UV,
    source_code_link: "https://github.com/Kxsanchez323/Kevin-internship",
  },
  {
    name: "Library Marketplace",
    description:
      "Online book marketplace with features such as viewing individual products, best practice functionality and a fully functional cart.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Library,
    source_code_link: "https://github.com/Kxsanchez323/e-commerce-react",
  },
];

export { services, technologies, experiences, testimonials, projects };
