export interface ExperienceType {
    title: string;
    subtitle: string;
    website?: string;
    date: string;
    content: { text: string; list: string[]; tech: string[] };
}

export const Experience: ExperienceType[] = [
    {
        title: 'Junior Software Engineer',
        subtitle: 'Aquila Softwares Corporation - Davao City, Philippines',
        website: 'https://aquilasoftwares.com',
        date: 'September 2023 - Current',
        content: {
            text: ' ',
            list: [
                'Developed and Tech Lead for BetterMomsh: A Pregnancy mobile app using React Native.',
                "Assisted in implementing the design in Clinix Plus mobile app.",
                'Implemented the Design in Compass mobile app.',
                'Convert ACS Web to a mobile/tablet app.',
            ],
            tech: [
                'React.js',
                'Expo',
                'React Native',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS',
                'SASS',
            ],
        },
    },
    {
        title: 'Project Based Developer',
        subtitle: 'Comcare Insurance Agency - Davao City, Philippines',
        // website: ' ',
        date: 'January 2024 - Current',
        content: {
            text: ' ',
            list: [
                'Helped debug issues.',
                'Implemented requested features.',
            ],
            tech: [
                'PHP',
                'CodeIgniter',
                'MySQL',
                'JavaScript',
                'HTML',
                'CSS',
            ],
        },
    },
];