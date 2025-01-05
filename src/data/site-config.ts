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
            text: 'Teaching',
            href: '/teaching'
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
