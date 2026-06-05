interface NavLinkType {
  title: string;
  linkTo: string;
}

export const NavLinks: NavLinkType[] = [
  { title: "~/about", linkTo: "#about" },
  { title: "~/experience", linkTo: "#experience" },
  { title: "~/projects", linkTo: "#projects" },
  { title: "~/certifications", linkTo: "#certificates" },
  { title: "~/contact", linkTo: "#contact" },
];
