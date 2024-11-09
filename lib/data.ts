import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import twitterImage from "@/public/twitter.png";
import rmtdevImg from "@/public/rmtdev.png";
import ninjanexImage from "@/public/ninjanex.png";
import petShopImage from "@/public/petshop.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors in Applied Computer Science",
    location: "The University of Winnipeg",
    description:
      "Completed my in degree in Bsc Applied Computer Science, focusing on software development and system design. Engaged in coursework covering algorithms, data structures, and databases, with active participation in coding competitions and collaborative projects.",
    describe: [
      "Studying algorithms, data structures, operating systems, and databases.",
      "Participating in coding competitions and technical projects.",
      "Developing problem-solving and software engineering skills.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2021 - May 2023",
  },
  {
    title: "Full-Stack Android developer Intern",
    location: "Neo Fanacial",
    description:
      "Completed a 6-month full-stack internship at Weareengineer, building web applications using Android stduio, kotlin and graphQL as backend. Worked on backend APIs, database management, and collaborated on version-controlled projects with Agile practices.",
    describe: [
      "Developed full-stack web applications using Kotlin and Jetpack Compose.",
      "Built GraphQl APIs and managed databases with MongoDB.",
      "Collaborated with teams following Agile methodologies.",
      "Utilized Git for version control and continuous integration.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - Oct 2023",
  },
  {
    title: "Full-Stack Developer (Remote)",
    location: "Punjab, India.",
    description:
      "Completed a 10-month full-stack internship at Weareengineer, building web applications using React and Node.js. Worked on backend APIs, database management, and collaborated on version-controlled projects with Agile practices.",
    describe: [
      "Developed full-stack web applications using React and Node.js.",
      "Built RESTful APIs and managed databases with MongoDB.",
      "Collaborated with teams following Agile methodologies.",
      "Utilized Git for version control and continuous integration.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - Oct 2023",
  },
  {
    title: "Freelancer",
    location: "Remote",
    description:
      "Working as a freelance full-stack developer, building dynamic applications with React, Next.js, TypeScript, and Tailwind CSS. Managing end-to-end development, including back-end solutions with Prisma and MongoDB.",
    describe: [
      "Building scalable web applications with React and Next.js.",
      "Learn TypeScript for robust code development.",
      "Handling full project lifecycle from design to deployment.",
    ],
    icon: React.createElement(FaReact),
    date: "Apr 2024 - Jun 2024",
  },
  {
    title: "Full-Stack Developer (Peoject Based)",
    location: "University of Winnipeg",
    description:
      "Working as a full-stack javascript developer, build a dynamic applications with React, building a overall estate booking sections to manage the flats and properties related stuff. also work on chat functionality.",
    describe: [
      "Optimized backend queries by implementing bull.js and Redis, improving overall system responsiveness by 20%",
      "Created a dynamic estate booking system for reallist.ai, boosting user engagement and operational efficiency by 35%",
      "Migrated the application from React 16 to React 18, resulting in a 20% performance boost.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Quzify",
    description:
      "Ninjanex is an anime streaming app for Windows and Ubuntu, featuring a user-friendly interface, extensive anime library, and high-quality streaming.",
    tags: ["Electron.js", "PostgresQL", "Chakra UI", "Prisma", "Express.js"],
    imageUrl: ninjanexImage,
    githubUrl: "https://github.com/jashan-786/Quizyfy",
    demoUrl: "https://github.com/VedantBhawsar/ninjanex",
  },
  {
    title: "YouTube Clone",
    description:
      "TwitClone is a Twitter clone featuring real-time updates and user authentication for an engaging social media experience.",
    tags: ["Next.js", "GraphQL", "Tailwind", "React Query"],
    imageUrl: twitterImage,
    githubUrl: "https://github.com/jashan-786/YouTubeClone",
    demoUrl: "https://jashan-yt.netlify.app/",
  },
  {
    title: "Credsys",
    description:
      "Credsys is a app helps you build your credist history. This involves tenenats , landlords and credit unions to help you give you credit score as tenats pay constant rent",
    tags: ["Next.js", "GraphQL", "Tailwind", "React Query"],
    imageUrl: twitterImage,
    githubUrl: "https://github.com/jashan-786/Cred-sys-backend",
    demoUrl: "https://twitter-clone-three-omega-20.vercel.app/",
  },
  {
    title: "Movies",
    description:
      "A vibrant landing page for PetShop, offering a range of pet products and services for an engaging user experience.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: petShopImage,
    githubUrl: "https://github.com/jashan-786/Spring_boot_movie_project",
    demoUrl: "https://petshoppy.vercel.app/",
  },

  {
    title: "Your Journey",
    description:
      "Aall in one place where you can different a rentals and other stuff on cheap prices .",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: petShopImage,
    githubUrl: "https://github.com/jashan-786/Ecommerce-backend",
    demoUrl: "https://your-new-journey.netlify.app/",
  },

] as const;

export const skillsData = [
  // Frontend Technologies
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "Tailwind CSS",
  "Framer Motion",
  "Bootstrap",
  "Chakra UI",

  // Backend Technologies
  "Node.js",
  "Express.js",
  "NestJS",
  "Apollo Server",
  "Prisma",
  "GraphQL",
  "REST API",
  "Kafka",

  // Databases & ORM
  "MongoDB",
  "PostgreSQL",
  "Redis",

  // DevOps & Tools
  "Git",
  "Docker",
  "Kubernetes",
  "CI/CD Pipelines",
  "GitHub Actions",
  "Jenkins",
  "Bash Scripting",
  "Linux",
  "Nginx",
  "AWS (EC2, S3)",
  "Vercel",
  "Grafana",

  // Monitoring & Logging
  "Prometheus",
  "Grafana",

  // Testing & Linting
  "Jest",
  "Cypress",
  "ESLint",
  "Prettier",

  // Other Tools & Skills
  "Figma",
  "Postman",
  "Webpack",
] as const;
