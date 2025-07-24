import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { ImGithub, ImLinkedin } from "react-icons/im";
// import { SiInstagram } from "react-icons/si";

interface LinkTypes {
  title: string;
  link: string;
  icon: any;
}

export const Links: LinkTypes[] = [
  // {
  //   title: "Instagram",
  //   link: "https://www.instagram.com/hannya4k/",
  //   icon: <SiInstagram color="#000000dc" />,
  // },
  {
    title: "Facebook",
    link: "https://www.facebook.com/karl.andoque/",
    icon: <FaFacebook color="#f8f8ff" />,
  },
  {
    title: "GitHub",
    link: "https://github.com/Hannya4k",
    icon: <ImGithub color="#f8f8ff" />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/karl-andoque-hannya/",
    icon: <ImLinkedin color="#f8f8ff" />,
  },
  {
    title: "Email",
    link: "mailto:k.andoque07@gmail.com",
    icon: <AiOutlineMail color="#f8f8ff" />,
  },
  // {
  //     title: 'Skype',
  //     link: 'skype:live:.cid.f7be91ec788557fe?chat', // replace 'your_skype_username' with your actual Skype username
  //     icon: <AiOutlineSkype color="#000000dc" />,
  // },
];
