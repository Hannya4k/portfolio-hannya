export interface ExperienceType {
  title: string;
  subtitle: string;
  website?: string;
  date: string;
  content: { text: string; list: string[]; tech: string[] };
}

export const Experience: ExperienceType[] = [
  {
    title: "Junior Software Engineer",
    subtitle: "Aquila Softwares Corporation - Davao City, Philippines",
    website: "https://aquilasoftwares.com",
    date: "September 2023 - March 2025",
    content: {
      text: " ",
      list: [
        "Developed BetterMomsh, a pregnancy mobile app, using React Native.",
        "Assisted in implementing the design for the Clinix Plus mobile app.",
        "Implemented the design for the Compass mobile app and parts of the web platform.",
        "Implemented design features for the ACS Web platform tailored for doctors.",
      ],
      tech: [
        "React.js",
        "Expo",
        "React Native",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "SASS",
        "AntDesign",
      ],
    },
  },
  {
    title: "Project Based Developer",
    subtitle: "Comcare Insurance Agency - Davao City, Philippines",
    // website: ' ',
    date: "January 2024 - November 2024",
    content: {
      text: " ",
      list: [
        "Helped debug issues and implemented requested features.",
        "Developed the new Comcare website using Next.js.",
      ],
      tech: [
        "PHP",
        "CodeIgniter",
        "MySQL",
        "JavaScript",
        "HTML",
        "CSS",
        "SASS",
        "Next.js",
        "PosgreSQL",
      ],
    },
  },
];
