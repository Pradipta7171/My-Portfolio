import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCloud } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BlogsiteImg from "@/public/Blogsite.png";
import ChatsyncImg from "@/public/chatsync.png";
import NoteskeeperImg from "@/public/notekeeper.png";
import SociosyncImg from "@/public/sociosync.png";

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
    title: "Java Backend Development - GeeksforGeeks",
    location: "Remote",
    description:
      "Gained proficiency in Java backend development, including server-side programming, API development, and database management. Tech stacks used: Java, RESTful APIs, MySQL, Maven, Git, etc.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023 - July 2023",
  },
  {
    title: "Google Cloud Bootcamp - GeeksforGeeks",
    location: "Remote",
    description:
      "Successfully completed an intensive Google Cloud Bootcamp. Acquired proficiency in deploying, managing, and scaling applications on the Google Cloud Platform. Implemented solutions for data storage, processing, and analytics using Google Cloud tools.",
    icon: React.createElement(FaCloud),
    date: "Sept 2023 - Nov 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Dutta's Blog",
    description:
      "Explore, Engage, and Share: Your Platform for Dynamic Public Posts, Where Ideas Flourish and Creativity Knows No Bounds with Diverse Knowledge Sharing.",
    tags: ["React", "Next.js", "MongoDB", "Prisma", "Clerk", "Firebase", ],
    imageUrl: BlogsiteImg,
    link: "https://prodipto-blogsite.vercel.app",
  },
  {
    title: "Chat-Sync",
    description:
      "Empowering Conversations: Secure Chat with Media Sharing and Admin Controls including Group Chats and typing indicator.",
    tags: ["React", "Chakra UI", "Node.js", "Express.Js", "MongoDB", "Cloudinary"],
    imageUrl: ChatsyncImg,
    link: "https://chat-sync-s15y.onrender.com",
  },
  {
    title: "NotesKeeper App",
    description:
      "Effortlessly Capture, Organize, and Remember: Your Personal Notes Companion, Always On Schedule with No Extra Storage Required.",
    tags: ["React", "Node.js", "SQL", "MongoDB", "Google Auth"],
    imageUrl: NoteskeeperImg,
    link: "https://notes-keeper-hkf7.onrender.com",
  },
  {
    title: "SocioSync",
    description:
      "SocioSync: Chat, Share Media, and Express with GIFs. Connect, Collaborate, and Create Memorable Moments.",
    tags: ["Angular", "Typescript", "Node.Js", "SQL", "Firebase"],
    imageUrl: SociosyncImg,
    link: "https://sociosync-angular24.netlify.app",
  },
] as const;

export const skillsData = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "C/C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Tailwind", logo: "https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-5285308-4406745.png" },
  { name: "Framer Motion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Prisma", logo: "https://cdn.iconscout.com/icon/free/png-256/free-prisma-3628671-3029888.png" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
  { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "VMware", logo: "https://cdn.iconscout.com/icon/free/png-256/free-vmware-282822.png" },
] as const;