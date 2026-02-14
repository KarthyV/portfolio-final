'use client';

import { useEffect } from 'react';

export default function ScrollAnimator() {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        revealElements.forEach((el) => observer.observe(el));

        // Re-observe when new elements appear (tab switches)
        const mutationObserver = new MutationObserver(() => {
            document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
                observer.observe(el);
            });
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return null;
}
