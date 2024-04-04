export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Lachi Singh',
    subtitle: 'London School of Economics and Political Science',
    description: 'PhD student at LSE in the Dept. of Economics',
    image: {
        src: '/lachi-portrait.jpeg',
        alt: 'Portrait of Lachi Singh'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/lachi-singh/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/LachiSingh'
        }
    ],
    hero: {
        text: 'I am a PhD candidate in the Department of Economics. My main fields of interest are development economics, labour ecnonomics, and environmental economics. Originally from India, I hold a BA. (Hons.) in Economics from Miranda House (University of Delhi) and an MA in International and Development Economics from Yale University. I was previously a pre-doctoral fellow at Tobin Centre for Economic Policy at Yale University.',
        image: {
            src: '/lachi-portrait.jpeg',
            alt: 'Lachi Singh'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
