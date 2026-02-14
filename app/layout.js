import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata = {
    metadataBase: new URL('https://karthyv.netlify.app'),
    title: 'Karthik V — Full Stack Developer | React · Next.js · Node.js',
    description:
        'Karthik V is a Full Stack Developer with 3+ years of experience building scalable web applications with React, Next.js, TypeScript, Node.js, GraphQL, and NestJS. 3× Employee of the Quarter at Remitbee.',
    keywords: [
        'Karthik V',
        'Full Stack Developer',
        'React Developer',
        'Next.js Developer',
        'Node.js',
        'TypeScript',
        'GraphQL',
        'NestJS',
        'Frontend Engineer',
        'Software Engineer',
        'Web Developer Portfolio',
    ],
    authors: [{ name: 'Karthik V' }],
    openGraph: {
        type: 'website',
        title: 'Karthik V — Full Stack Developer',
        description:
            'Full Stack Developer specializing in React, Next.js, TypeScript & Node.js. 3+ years building scalable, production-grade web applications.',
        url: 'https://karthyv.netlify.app',
        siteName: 'Karthik V Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Karthik V — Full Stack Developer',
        description:
            'Full Stack Developer specializing in React, Next.js, TypeScript & Node.js. 3+ years building scalable, production-grade web applications.',
    },
    robots: { index: true, follow: true },
    alternates: { canonical: 'https://karthyv.netlify.app' },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Karthik V',
                            url: 'https://karthyv.netlify.app',
                            jobTitle: 'Full Stack Developer',
                            worksFor: { '@type': 'Organization', name: 'Remitbee' },
                            sameAs: [
                                'https://github.com/KarthyV',
                                'https://www.linkedin.com/in/karthick-v-663252157',
                            ],
                            knowsAbout: [
                                'React.js',
                                'Next.js',
                                'TypeScript',
                                'Node.js',
                                'GraphQL',
                                'NestJS',
                                'Express.js',
                            ],
                        }),
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
