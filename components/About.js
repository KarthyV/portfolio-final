export default function About() {
    return (
        <section id="about" aria-label="About me">
            <div className="container">
                <p className="section-label reveal">About</p>
                <h2 className="section-title reveal">
                    Building software that <br />people rely on.
                </h2>

                <div className="about-content">
                    <div className="about-text reveal">
                        <p>
                            I&apos;m a Full Stack Developer specializing in React, Next.js, and
                            Node.js — building production systems that scale. From designing
                            reusable component libraries to architecting SEO-optimized pages
                            serving thousands of users, I focus on delivering high-quality,
                            maintainable code.
                        </p>
                        <p>
                            At Remitbee, I&apos;ve independently led critical migrations, built
                            greenfield applications, and shipped GraphQL services powering
                            customer-facing products. I believe in pragmatic engineering —
                            writing just enough abstraction, measuring real impact, and always
                            shipping.
                        </p>
                    </div>

                    <div className="about-highlights reveal reveal-delay-1">
                        {[
                            { icon: '🏆', value: '3×', label: 'Employee of the Quarter' },
                            { icon: '⚡', value: '1000+', label: 'SEO Pages Shipped' },
                            { icon: '🔗', value: '70+', label: 'GraphQL Queries Built' },
                            { icon: '👥', value: '4', label: 'Interns Mentored' },
                        ].map((item) => (
                            <div className="highlight-card" key={item.label}>
                                <div className="icon" aria-hidden="true">{item.icon}</div>
                                <h4>{item.value}</h4>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
