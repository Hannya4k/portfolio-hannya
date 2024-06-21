
import { AiOutlineMail, AiOutlineSkype } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { ImGithub, ImLinkedin } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';

interface LinkTypes {
    title: string;
    link: string;
    icon: any;
}

export const Links: LinkTypes[] = [
    {
        title: 'Instagram',
        link: 'https://www.instagram.com/hannya4k/',
        icon: <SiInstagram color="#000000dc" />,
    },
    {
        title: 'Facebook',
        link: 'https://www.facebook.com/karl.andoque/',
        icon: <FaFacebook color="#000000dc" />,
    },
    {
        title: 'GitHub',
        link: 'https://github.com/Hannya4k?tab=repositories',
        icon: <ImGithub color="#000000dc" />,
    },
    {
        title: 'LinkedIn',
        link: 'www.linkedin.com/in/karl-andoque-hannya',
        icon: <ImLinkedin color="#000000dc" />,
    },
    {
        title: 'Email',
        link: 'mailto:karlthegamer24@gmail.com',
        icon: <AiOutlineMail color="#000000dc" />,
    },
    {
        title: 'Skype',
        link: 'skype:live:karlandoque?chat', // replace 'your_skype_username' with your actual Skype username
        icon: <AiOutlineSkype color="#000000dc" />,
    },
];