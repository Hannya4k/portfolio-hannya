export interface ExperienceType {
  title: string;
  subtitle: string;
  website?: string;
  date: string;
  content: { text: string; list: string[]; tech: string[] };
}

export const Experience: ExperienceType[] = [
  {
    title: "Cybersecurity Intern",
    subtitle: "Tech Advise Solutions and Services - Davao City, Philippines",
    website: "https://techadviseph.com/",
    date: "May - July 2025",
    content: {
      text: " ",
      list: [
        "Conducted a vulnerability assessment using Nessus to identify and report potential security issues in web applications.",
        "Performed basic penetration testing on a target website, simulating real-world attack scenarios.",
        "Created an Amazon EC2 instance and configured a security group using Terraform to automate deployment of the test environment.",
      ],
      tech: [
        "Cybersecurity",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Ethical Hacking",
        "IaC",
        "Terraform",
      ],
    },
  },
  {
    title: "Junior Software Engineer",
    subtitle: "Aquila Softwares Corporation - Davao City, Philippines",
    website: "https://aquilasoftwares.com",
    date: "September 2023 - March 2025",
    content: {
      text: " ",
      list: [
        "Developed BetterMomsh, a mobile pregnancy app, using React Native.",
        "Assisted in implementing UI components for the Clinix Plus mobile application.",
        "Built core design features for the Compass mobile app and parts of its web platform.",
        "Implemented custom front-end features for the ACS Web platform, tailored specifically for doctors’ workflows",
        "Fixed bugs and added features to the PMRS website, improving functionality and user experience.",
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
    date: "January - November 2024",
    content: {
      text: "",
      list: [
        "Helped debug issues and implement requested features on a legacy system using PHP CodeIgniter.",
        "Developed the new Comcare website using Next.js, focusing on modern, responsive design and performance optimization.",
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
        "AntDesign",
      ],
    },
  },
];
