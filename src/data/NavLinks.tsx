interface NavLinkType {
  title: string;
  linkTo: string;
}

export const NavLinks: NavLinkType[] = [
  {
    title: "Home",
    linkTo: "/",
  },
  // {
  //     title: 'Resume',
  //     linkTo: '/resume',
  // },
  {
    title: "Skills",
    linkTo: "/skills",
  },
  {
    title: "Experience",
    linkTo: "/experience",
  },
  {
    title: "Projects",
    linkTo: "/projects",
  },
  {
    title: "Certifications",
    linkTo: "/certificates",
  },
];
