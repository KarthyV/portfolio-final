export default function Education() {
    return (
        <section id="education" aria-label="Education and Certifications">
            <div className="container">
                <p className="section-label reveal">Education &amp; Certifications</p>
                <h2 className="section-title reveal">Background.</h2>

                <div className="edu-cert-grid">
                    <div className="reveal">
                        <h3 className="group-title">🎓 Education</h3>
                        <div className="edu-list">
                            <div className="edu-card">
                                <h4>B.Tech Mechanical Engineering</h4>
                                <p className="institution">SRM Institute of Science and Technology</p>
                                <p className="date">2020 — 2023</p>
                                <p className="grade">First Class — 8.73 CGPA</p>
                            </div>
                            <div className="edu-card">
                                <h4>Diploma in Mechanical Engineering</h4>
                                <p className="institution">Central Polytechnic College</p>
                                <p className="date">2015 — 2018</p>
                                <p className="grade">First Class — 83%</p>
                            </div>
                        </div>
                    </div>

                    <div className="reveal reveal-delay-1">
                        <h3 className="group-title">📜 Certifications</h3>
                        <div className="cert-list">
                            <div className="cert-card">
                                <h4>NestJS: The Complete Developer&apos;s Guide</h4>
                                <p className="issuer">Udemy — 2025</p>
                            </div>
                            <div className="cert-card">
                                <h4>Next.js 14 &amp; React — The Complete Guide</h4>
                                <p className="issuer">Udemy — 2024</p>
                            </div>
                            <div className="cert-card">
                                <h4>Full Stack MERN Development</h4>
                                <p className="issuer">GUVI (IIT-M Incubated) — 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
