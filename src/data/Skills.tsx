import { DiDjango } from "react-icons/di";
import {
  FaHtml5,
  FaJava,
  // FaPhp,
  // FaPhp,
  FaPython,
  FaReact,
  FaSass,
  FaLinux,
  FaNetworkWired,
  FaVimeoV,
} from "react-icons/fa";
import { GiHydra } from "react-icons/gi";
import { ImGit } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import {
  // SiBootstrap,
  SiCss3,
  // SiDart,
  SiExpo,
  // SiFlutter,
  // SiMysql,
  SiTypescript,
  // SiVisualstudio,
  // SiNextdotjs,
  SiAntdesign,
  SiFigma,
  // SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiBurpsuite,
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

  // {
  //   name: "MySQL",
  //   icon: <SiMysql color="#4479A1" />,
  //   link: "https://www.mysql.com/",
  // },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql color="#336791" />,
    link: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="#47A248" />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Express.js",
    icon: <SiExpress color="#000000" />,
    link: "https://expressjs.com/",
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
  // {
  //   name: "VSCode",
  //   icon: <SiVisualstudio color="#007ACC" />,
  //   link: "https://code.visualstudio.com/",
  // },

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
  // {
  //   name: "Next.js",
  //   icon: <SiNextdotjs color="#000000" />,
  //   link: "https://nextjs.org/",
  // },
  {
    name: "Ant Design",
    icon: <SiAntdesign color="#0170FE" />,
    link: "https://ant.design/",
  },
  {
    name: "Figma",
    icon: <SiFigma color="#F24E1E" />,
    link: "https://www.figma.com/",
  },
  // {
  //   name: "PHP",
  //   icon: <FaPhp color="#777BB4" />,
  //   link: "https://www.php.net/",
  // },
  // {
  //   name: "C#",
  //   icon: <SiDotnet color="#239120" />,
  //   link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  // },
  // {
  //   name: "Flutter",
  //   icon: <SiFlutter color="#02569B" />,
  //   link: "https://flutter.dev/",
  // },
  // {
  //   name: "Dart",
  //   icon: <SiDart color="#0175C2" />,
  //   link: "https://dart.dev/",
  // },
  {
    name: "Java",
    icon: <FaJava color="#007396" />,
    link: "https://www.java.com/",
  },
  {
    name: "Burp Suite",
    icon: <SiBurpsuite color="#FF6600" />,
    link: "https://portswigger.net/burp",
  },
  {
    name: "Kali Linux",
    icon: <FaLinux color="#557C94" />,
    link: "https://www.kali.org/",
  },
  {
    name: "Nmap",
    icon: <FaNetworkWired color="#4682B4" />,
    link: "https://nmap.org/",
  },
  {
    name: "Hydra",
    icon: <GiHydra color="#FF0000" />,
    link: "https://github.com/vanhauser-thc/thc-hydra",
  },
];
