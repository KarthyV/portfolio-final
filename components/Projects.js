'use client';

import { useState } from 'react';

const professionalProjects = [
    {
        icon: '🎨',
        title: 'Design System Platform',
        problem: 'Built a scalable, enterprise-grade design system from scratch to unify UI patterns across multiple apps, reduce duplicate code, and onboard new developers faster.',
        impact: '↗ Accelerated feature delivery with reusable component library + Storybook documentation',
        stack: ['Next.js', 'TypeScript', 'Storybook', 'Sass'],
        role: 'Lead developer — architected component API, wrote documentation, established design tokens',
        badge: 'Internal',
    },
    {
        icon: '💳',
        title: 'Payments Transaction Flow UI',
        problem: 'Developed greenfield customer-facing payments interface with secure REST API integrations, handling complex transaction states and real-time status updates.',
        impact: '↗ Improved UX reliability through redesigned flow + WhatsApp 2FA integration',
        stack: ['Next.js', 'TypeScript', 'REST APIs', '2FA'],
        role: 'Full stack owner — built UI, API integration, secure payment flows',
        badge: 'Internal',
    },
    {
        icon: '🖥️',
        title: 'CORE Admin Panel',
        problem: 'Owned the internal admin panel powering operations — built with GraphQL services (70+ queries/mutations), real-time data views, and role-based access control.',
        impact: '↗ Built 70+ GraphQL queries/mutations powering admin workflows company-wide',
        stack: ['Next.js', 'NestJS', 'GraphQL', 'Apollo', 'Express'],
        role: 'Lead developer — end-to-end ownership of frontend + backend services',
        badge: 'Internal',
    },
    {
        icon: '🔍',
        title: 'SEO Scale Engine',
        problem: 'Engineered 1000+ server-rendered and statically generated pages for SEO at scale, optimizing Core Web Vitals and achieving high search engine visibility.',
        impact: '↗ 1000+ SSR/SSG pages with optimized performance and search indexability',
        stack: ['Next.js 14', 'SSR/SSG', 'Strapi', 'SEO'],
        role: 'Sole developer — led Next.js 12 → 14 migration, implemented rendering strategies',
        badge: 'Internal',
    },
];

const personalProjects = [
    {
        icon: '🛒',
        title: 'Amigo — E-commerce Platform',
        problem: 'Full-featured e-commerce platform for gadget enthusiasts with cart management, Stripe payments, real-time notifications via Socket.io, and admin dashboard.',
        stack: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
        github: 'https://github.com/KarthyV/e-commerce-client',
        live: 'https://karthyv-e-app.netlify.app',
    },
    {
        icon: '📋',
        title: 'Kanban — Task Manager',
        problem: 'Minimalist task management app with drag-and-drop boards, Razorpay payment integration, and email notifications via NodeMailer.',
        stack: ['React', 'Vite', 'Node.js', 'MongoDB', 'Razorpay'],
        github: 'https://github.com/KarthyV/kanban-client',
        live: 'https://kanban-client-beta.vercel.app',
    },
    {
        icon: '🍕',
        title: 'Foodzie — Recipe App',
        problem: 'A continental recipe platform with Auth0 authentication, responsive Material UI design, and full CRUD operations for managing recipes.',
        stack: ['React', 'Auth0', 'Material UI', 'Node.js', 'MongoDB', 'JWT'],
        github: 'https://github.com/KarthyV/foodzie-frontEnd',
        live: 'https://foodzie-app.netlify.app',
    },
    {
        icon: '📝',
        title: 'Blog App',
        problem: 'A minimalist blogging platform with JWT authentication, Redux state management, and a clean responsive interface for publishing articles.',
        stack: ['React', 'Redux', 'Node.js', 'MongoDB', 'JWT'],
        github: 'https://github.com/KarthyV/Blog---Frontend',
        live: 'https://karthyv-blogapp.netlify.app',
    },
    {
        icon: '▶️',
        title: 'YTC Lite — YouTube Clone',
        problem: 'An entertainment app built with YouTube API and Firebase, featuring real-time data syncing with Firestore and Redux state management.',
        stack: ['React', 'Firebase', 'Material UI', 'Redux'],
        github: 'https://github.com/KarthyV/youtube-clone',
        live: 'https://clone-4d027.web.app',
    },
    {
        icon: '💬',
        title: 'StackOverflow Clone',
        problem: 'A full-stack Q&A platform inspired by StackOverflow with user authentication, question/answer posting, voting, and search functionality.',
        stack: ['React', 'Redux', 'Node.js', 'MongoDB', 'Material UI'],
        github: 'https://github.com/KarthyV/stackoverflow',
        live: 'https://coruscating-faloodeh-10cdab.netlify.app',
    },
];

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

const ExternalIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

export default function Projects() {
    const [activeTab, setActiveTab] = useState('professional');

    return (
        <section id="projects" aria-label="Featured projects">
            <div className="container">
                <p className="section-label reveal">Projects</p>
                <h2 className="section-title reveal">Things I&apos;ve built.</h2>
                <p className="section-subtitle reveal">
                    Production systems and personal projects that demonstrate real engineering impact.
                </p>

                <div className="projects-tabs reveal" role="tablist">
                    <button
                        className={`project-tab${activeTab === 'professional' ? ' active' : ''}`}
                        onClick={() => setActiveTab('professional')}
                        role="tab"
                        aria-selected={activeTab === 'professional'}
                    >
                        Professional
                    </button>
                    <button
                        className={`project-tab${activeTab === 'personal' ? ' active' : ''}`}
                        onClick={() => setActiveTab('personal')}
                        role="tab"
                        aria-selected={activeTab === 'personal'}
                    >
                        Personal
                    </button>
                </div>

                {activeTab === 'professional' && (
                    <div className="projects-grid" role="tabpanel">
                        {professionalProjects.map((project, idx) => (
                            <article className={`project-card reveal${idx > 0 ? ` reveal-delay-${Math.min(idx, 3)}` : ''}`} key={project.title}>
                                <div className="project-card-header">
                                    <span className="project-icon" aria-hidden="true">{project.icon}</span>
                                    <span className="project-badge">{project.badge}</span>
                                </div>
                                <h3>{project.title}</h3>
                                <p className="project-problem">{project.problem}</p>
                                <p className="project-impact">{project.impact}</p>
                                <div className="project-stack">
                                    {project.stack.map((tech) => (<span key={tech}>{tech}</span>))}
                                </div>
                                <p className="project-role"><strong>Role:</strong> {project.role}</p>
                                <div className="project-links">
                                    <span className="project-private">🔒 Private / Internal</span>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {activeTab === 'personal' && (
                    <div className="projects-grid" role="tabpanel">
                        {personalProjects.map((project, idx) => (
                            <article className={`project-card reveal${idx > 0 ? ` reveal-delay-${Math.min(idx, 3)}` : ''}`} key={project.title}>
                                <div className="project-card-header">
                                    <span className="project-icon" aria-hidden="true">{project.icon}</span>
                                    <span className="project-badge oss">Open Source</span>
                                </div>
                                <h3>{project.title}</h3>
                                <p className="project-problem">{project.problem}</p>
                                <div className="project-stack">
                                    {project.stack.map((tech) => (<span key={tech}>{tech}</span>))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <GithubIcon /> Source
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        <ExternalIcon /> Live Demo
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
