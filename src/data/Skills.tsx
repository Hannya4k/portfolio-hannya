import { DiDjango } from "react-icons/di";
import {
  FaHtml5,
  FaJava,
  // FaPhp,
  FaPython,
  FaReact,
  FaSass,
  FaVimeoV,
} from "react-icons/fa";
import { ImGit } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import {
  // SiBootstrap,
  SiCss3,
  SiDart,
  SiExpo,
  SiFlutter,
  SiMysql,
  SiTypescript,
  SiVisualstudiocode,
  SiNextdotjs,
  SiAntdesign,
} from "react-icons/si";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const Skills: SkillsType[] = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color="#F7DF1E" />,
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color="#3178C6" />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: <FaReact color="#61DAFB" />,
    link: "https://reactjs.org/",
  },
  {
    name: "Vite",
    icon: <FaVimeoV color="#646CFF" />,
    link: "https://vitejs.dev/",
  },
  {
    name: "Expo",
    icon: <SiExpo color="#000020" />,
    link: "https://expo.dev/",
  },
  {
    name: "Flutter",
    icon: <SiFlutter color="#02569B" />,
    link: "https://flutter.dev/",
  },
  {
    name: "Dart",
    icon: <SiDart color="#0175C2" />,
    link: "https://dart.dev/",
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#4479A1" />,
    link: "https://www.mysql.com/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 color="#E34F26" />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color="#1572B6" />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "SASS",
    icon: <FaSass color="#CC6699" />,
    link: "https://sass-lang.com/",
  },

  {
    name: "Git",
    icon: <ImGit color="#F05032" />,
    link: "https://git-scm.com/",
  },
  {
    name: "VSCode",
    icon: <SiVisualstudiocode color="#007ACC" />,
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Java",
    icon: <FaJava color="#007396" />,
    link: "https://www.java.com/",
  },
  {
    name: "Python",
    icon: <FaPython color="#3776AB" />,
    link: "https://www.python.org/",
  },
  {
    name: "Django",
    icon: <DiDjango color="#092E20" />,
    link: "https://www.djangoproject.com/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color="#000000" />,
    link: "https://nextjs.org/",
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign color="#0170FE" />,
    link: "https://ant.design/",
  },
];
