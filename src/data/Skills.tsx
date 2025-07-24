import { DiDjango } from "react-icons/di";
import {
  FaHtml5,
  FaPython,
  FaReact,
  FaSass,
  FaLinux,
  FaEye,
  FaShieldAlt,
} from "react-icons/fa";
import { GiHydra } from "react-icons/gi";
import { ImGit } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCss3,
  SiExpo,
  SiTypescript,
  SiFigma,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiBurpsuite,
  SiMysql,
} from "react-icons/si";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const Skills: SkillsType[] = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color="#f8f8ff" />,
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color="#f8f8ff" />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: <FaReact color="#f8f8ff" />,
    link: "https://reactjs.org/",
  },
  {
    name: "Expo",
    icon: <SiExpo color="#f8f8ff" />,
    link: "https://expo.dev/",
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#f8f8ff" />,
    link: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql color="#f8f8ff" />,
    link: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="#f8f8ff" />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Express.js",
    icon: <SiExpress color="#f8f8ff" />,
    link: "https://expressjs.com/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 color="#f8f8ff" />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color="#f8f8ff" />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "SASS",
    icon: <FaSass color="#f8f8ff" />,
    link: "https://sass-lang.com/",
  },

  {
    name: "Git",
    icon: <ImGit color="#f8f8ff" />,
    link: "https://git-scm.com/",
  },
  {
    name: "Python",
    icon: <FaPython color="#f8f8ff" />,
    link: "https://www.python.org/",
  },
  {
    name: "Django",
    icon: <DiDjango color="#f8f8ff" />,
    link: "https://www.djangoproject.com/",
  },
  {
    name: "Figma",
    icon: <SiFigma color="#f8f8ff" />,
    link: "https://www.figma.com/",
  },
  {
    name: "Burp Suite",
    icon: <SiBurpsuite color="#f8f8ff" />,
    link: "https://portswigger.net/burp",
  },
  {
    name: "Kali Linux",
    icon: <FaLinux color="#f8f8ff" />,
    link: "https://www.kali.org/",
  },
  {
    name: "Nmap",
    icon: <FaEye color="#f8f8ff" />,
    link: "https://nmap.org/",
  },
  {
    name: "Hydra",
    icon: <GiHydra color="#f8f8ff" />,
    link: "https://github.com/vanhauser-thc/thc-hydra",
  },
  {
    name: "Nessus",
    icon: <FaShieldAlt color="#f8f8ff" />,
    link: "https://www.tenable.com/products/nessus",
  },
];
