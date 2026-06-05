import { DiDjango } from "react-icons/di";
import { FaHtml5, FaPython, FaReact, FaSass } from "react-icons/fa";
import { ImGit } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCss3,
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiDigitalocean,
  SiZoho,
} from "react-icons/si";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const Skills: SkillsType[] = [
  { name: "JavaScript", icon: <IoLogoJavascript color="#f8f8ff" />, link: "https://www.javascript.com/" },
  { name: "TypeScript", icon: <SiTypescript color="#f8f8ff" />, link: "https://www.typescriptlang.org/" },
  { name: "React", icon: <FaReact color="#f8f8ff" />, link: "https://reactjs.org/" },
  { name: "Next.js", icon: <SiNextdotjs color="#f8f8ff" />, link: "https://nextjs.org/" },
  { name: "Node.js", icon: <SiNodedotjs color="#f8f8ff" />, link: "https://nodejs.org/" },
  { name: "Express.js", icon: <SiExpress color="#f8f8ff" />, link: "https://expressjs.com/" },
  { name: "Python", icon: <FaPython color="#f8f8ff" />, link: "https://www.python.org/" },
  { name: "Django", icon: <DiDjango color="#f8f8ff" />, link: "https://www.djangoproject.com/" },
  { name: "FastAPI", icon: <SiFastapi color="#f8f8ff" />, link: "https://fastapi.tiangolo.com/" },
  { name: "HTML", icon: <FaHtml5 color="#f8f8ff" />, link: "https://www.w3schools.com/html/" },
  { name: "CSS", icon: <SiCss3 color="#f8f8ff" />, link: "https://www.w3schools.com/css/" },
  { name: "SASS", icon: <FaSass color="#f8f8ff" />, link: "https://sass-lang.com/" },
  { name: "PostgreSQL", icon: <SiPostgresql color="#f8f8ff" />, link: "https://www.postgresql.org/" },
  { name: "Git", icon: <ImGit color="#f8f8ff" />, link: "https://git-scm.com/" },
  { name: "DigitalOcean", icon: <SiDigitalocean color="#f8f8ff" />, link: "https://www.digitalocean.com/" },
  { name: "Zoho", icon: <SiZoho color="#f8f8ff" />, link: "https://www.zoho.com/" },
];
