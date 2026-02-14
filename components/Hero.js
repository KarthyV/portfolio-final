export default function Hero() {
    return (
        <section className="hero" id="hero" aria-label="Introduction">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge reveal">
                        <span className="dot" aria-hidden="true" />
                        Open to opportunities
                    </div>

                    <h1 className="reveal reveal-delay-1">
                        Karthik <span className="gradient-text">V</span>
                    </h1>

                    <p className="hero-title-role reveal reveal-delay-2">
                        Full Stack Developer — React · Next.js · Node.js
                    </p>

                    <p className="hero-description reveal reveal-delay-2">
                        I build scalable, production-grade web applications that drive business
                        impact. 3+ years architecting frontend systems, building backend
                        services, and shipping features that serve thousands of users.
                    </p>

                    <div className="hero-actions reveal reveal-delay-3">
                        <a href="#contact" className="btn-primary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Get in Touch
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1EQFo12GJp85V7vFPtM2KgME9DOuypoIO/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                            View Resume
                        </a>
                    </div>

                    <div className="hero-stats reveal reveal-delay-4">
                        <div className="hero-stat">
                            <span className="number">3+</span>
                            <span className="label">Years Experience</span>
                        </div>
                        <div className="hero-stat">
                            <span className="number">3×</span>
                            <span className="label">Employee of the Quarter</span>
                        </div>
                        <div className="hero-stat">
                            <span className="number">1000+</span>
                            <span className="label">SSR/SSG Pages Built</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
