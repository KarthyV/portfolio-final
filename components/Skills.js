const skillCategories = [
    {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'Storybook', 'Sass', 'Material UI', 'HTML5', 'CSS3'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'Apollo', 'Strapi', 'REST APIs'],
    },
    {
        title: 'Databases',
        skills: ['MongoDB', 'MySQL', 'Sequelize'],
    },
    {
        title: 'DevOps & Tools',
        skills: ['Docker', 'Git', 'Azure', 'Sentry', 'Datadog', 'MoEngage', 'Google Analytics'],
    },
    {
        title: 'Testing',
        skills: ['Jest', 'Enzyme', 'Mocha', 'Chai'],
    },
];

export default function Skills() {
    return (
        <section id="skills" aria-label="Technical skills">
            <div className="container">
                <p className="section-label reveal">Skills</p>
                <h2 className="section-title reveal">My toolkit.</h2>
                <p className="section-subtitle reveal">
                    Technologies I use daily to build scalable, production-grade applications.
                </p>

                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div
                            className={`skill-category reveal${idx > 0 ? ` reveal-delay-${Math.min(idx, 4)}` : ''}`}
                            key={category.title}
                        >
                            <div className="skill-category-title">{category.title}</div>
                            <div className="skill-tags">
                                {category.skills.map((skill) => (
                                    <span className="skill-tag" key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
