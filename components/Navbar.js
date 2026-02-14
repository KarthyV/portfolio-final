'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const handleScroll = () => {
            const scrollY = window.scrollY + 100;
            sections.forEach((section) => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollY >= top && scrollY < top + height) {
                    setActiveSection(section.id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        document.body.style.overflow = '';
        const target = document.querySelector(href);
        if (target) {
            const navHeight = 64;
            window.scrollTo({ top: target.offsetTop - navHeight, behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : '';
    };

    const links = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#education', label: 'Education' },
    ];

    return (
        <nav className="nav" role="navigation" aria-label="Main navigation">
            <div className="nav-inner">
                <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    K<span>.</span>
                </a>
                <div className={`nav-links${isOpen ? ' open' : ''}`}>
                    {links.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className={activeSection === href.slice(1) ? 'active' : ''}
                            onClick={(e) => handleNav(e, href)}
                        >
                            {label}
                        </a>
                    ))}
                    <a href="#contact" className="nav-cta" onClick={(e) => handleNav(e, '#contact')}>
                        Contact
                    </a>
                </div>
                <button
                    className={`nav-toggle${isOpen ? ' active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}
