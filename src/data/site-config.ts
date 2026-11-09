export type Image = {
    src: string;
    alt?: string;
    caption?: string;
    width?: number;
    height?: number;
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
    subtitle: 'PhD Candidate in Economics, LSE',
    description:
        'Applied economist and PhD candidate at LSE working on development, labour and environmental economics.',
    image: {
        src: '/og-image.jpg',
        alt: 'Lachi Singh, PhD Candidate in Economics at the London School of Economics',
        width: 1200,
        height: 630
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Research',
            href: '/#research'
        },
        {
            text: 'Teaching',
            href: '/#teaching'
        },
        {
            text: 'CV',
            href: '/LachiSingh_CV.pdf'
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
            src: '/lachi-portrait-2026.jpg',
            alt: 'Lachi Singh',
            caption: 'I am on the 2026-27 job market.'
        },
        actions: [
            {
                text: 'Email',
                href: 'mailto:l.singh7@lse.ac.uk'
            },
            {
                text: 'LinkedIn',
                href: 'https://www.linkedin.com/in/lachi-singh/'
            },
            {
                text: 'CV',
                href: '/LachiSingh_CV.pdf'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
