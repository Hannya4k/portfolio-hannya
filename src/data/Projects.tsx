interface ProjectsType {
  title: string;
  description: string;
  tech: string[];
  image: string;
  GitHub: string;
}

export const Projects: ProjectsType[] = [
  {
    title: "Biosite Internal Website",
    description: "Company intranet with centralized employee access to tools, resources, and internal documentation.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    image: "https://imgur.com/uwq2J5G.png",
    GitHub: "Private",
  },
  {
    title: "Biosite Landing Page",
    description: "Public website for Biositeph with a Node.js backend, PostgreSQL database, and custom admin system.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    image: "https://imgur.com/n28tC1Z.png",
    GitHub: "https://biositeph.com/user/about",
  },
  {
    title: "BetterMomsh",
    description: "App for expecting mothers with pregnancy health monitoring and milestone tracking.",
    tech: ["React Native", "Expo"],
    image: "https://i.imgur.com/fRcQxRY.png",
    GitHub: "Private",
  },
  {
    title: "Portfolio",
    description: "This site — terminal-style loader, scramble animations, skeleton screen, and a working contact form.",
    tech: ["React", "TypeScript", "SCSS", "Framer Motion"],
    image: "https://imgur.com/sjjdaMd.png",
    GitHub: "Private",
  },
  {
    title: "Comcare Website",
    description: "Insurance agency site rebuilt from a legacy PHP/CodeIgniter system with a modern stack.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "https://i.imgur.com/iKnAVvZ.png",
    GitHub: "Private",
  },
  {
    title: "Compass App",
    description: "Attendance app for field employees with clock-in/out, daily logs, and a management web platform.",
    tech: ["React Native", "Expo"],
    image: "https://i.imgur.com/G2ghkvC.png",
    GitHub: "Private",
  },
  {
    title: "Fruit Grader",
    description: "Computer vision system to classify fruit types and grade produce quality.",
    tech: ["Python", "TensorFlow", "CNN", "CBAM", "React"],
    image: "https://imgur.com/aJdG4ZA.png",
    GitHub: "",
  },
  {
    title: "ChatterBox",
    description: "Real-time chat app with room creation and live updates.",
    tech: ["Flutter"],
    image: "https://i.imgur.com/ptoo806.png",
    GitHub: " ",
  },
  {
    title: "GalleryGrid",
    description: "Pinterest-inspired image gallery with masonry layout and user-curated collections.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    image: "https://i.imgur.com/sD6Ec0j.png",
    GitHub: "",
  },
  {
    title: "Expense Tracker",
    description: "Personal finance tracker for logging and categorizing daily expenses with full CRUD.",
    tech: ["React"],
    image: "https://i.imgur.com/X9gGcXj.png",
    GitHub: "",
  },
];
