const experiences = [
    {
        title: 'Full Stack Developer',
        company: 'Remitbee Pvt Ltd',
        date: 'Mar 2023 — Present',
        bullets: [
            '3× Employee of the Quarter (Q3 2025, Q2 2025, Q4 2024) — recognized for consistent delivery and engineering excellence',
            'Built scalable Design System with Next.js + TypeScript, establishing shared component library across multiple teams',
            'Led customer-facing app redesign, improving UX and system reliability across payment flows',
            'Developed greenfield payments UI with secure REST API integrations and WhatsApp 2FA',
            'Independently migrated Next.js 12 → 14, modernizing SSR/SSG patterns and improving build performance',
            'Implemented Storybook for reusable component documentation and accelerated developer onboarding',
            'Resolved production incidents by correlating Sentry errors with Datadog metrics for root cause analysis',
            'Built 1000+ SEO-optimized SSR/SSG pages with Next.js, improving organic search visibility at scale',
            'Owned CORE Admin Panel end-to-end (Next.js + Express/NestJS), building 70+ GraphQL queries/mutations',
            'Integrated MoEngage analytics, Google Analytics tracking, and WhatsApp-based 2FA flows',
            'Mentored 4 interns in building a full HRMS tool, deployed with Docker on Azure',
        ],
    },
    {
        title: 'Full Stack Developer — Intern',
        company: 'Klenty',
        date: 'Dec 2022 — Jan 2023',
        bullets: [
            'Built Express.js + MongoDB microservices for sales engagement platform',
            'Wrote comprehensive test suites using Mocha and Chai for API reliability',
        ],
    },
    {
        title: 'Software Trainee',
        company: 'Tolemy',
        date: 'Sep 2022 — Dec 2022',
        bullets: [
            'Developed full-stack applications with React + Vite frontend and Node.js REST API backend',
            'Implemented state management with Redux and built responsive UI components',
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" aria-label="Work experience">
            <div className="container">
                <p className="section-label reveal">Experience</p>
                <h2 className="section-title reveal">Where I&apos;ve worked.</h2>

                <div className="timeline">
                    {experiences.map((exp) => (
                        <div className="timeline-item reveal" key={exp.company}>
                            <div className="timeline-header">
                                <h3>{exp.title}</h3>
                                <span className="timeline-company">{exp.company}</span>
                            </div>
                            <span className="timeline-date">{exp.date}</span>
                            <ul className="timeline-bullets">
                                {exp.bullets.map((bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
