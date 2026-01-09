import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

const features = [
    {
        icon: '⊕',
        title: 'The Daily Ritual',
        category: 'MENTAL FITNESS',
        items: ['2-minute daily ritual', 'Learn something meaningful', 'Start your day with intention'],
        cta: 'WARM-UP STATION',
        color: '#1a5fb4'
    },
    {
        icon: '☆',
        title: 'Impact Streaks',
        category: 'STRENGTH TRAINING',
        items: ['Consistency compounds', 'Track daily & weekly progress', 'Visible status & badges'],
        cta: 'CORE LOOP',
        color: '#444444'
    },
    {
        icon: '⚡',
        title: 'Tribal Belonging',
        category: 'GROUP CLASS',
        items: ['See what friends support', 'Leaderboards & ranks', 'Shared progress, thoughtfully surfaced'],
        cta: 'COMMUNITY ZONE',
        color: '#1a1a1a'
    }
];

export default function Experience() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger Cards Reveal
            gsap.from(".feature-card", {
                y: 100,
                opacity: 0,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".feature-cards",
                    start: "top 80%"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg tilt
        const rotateY = ((x - centerX) / centerX) * 5;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    return (
        <section className="experience" ref={containerRef}>
            <div className="grain-overlay" />
            <div className="experience-container">
                <div className="experience-header">
                    <span className="section-label">THE EXPERIENCE</span>
                    <h2 className="experience-title">
                        A Gym for Your <span className="accent-italic">Soul</span>
                    </h2>
                    <p className="experience-subtitle">
                        Ritual, curation, and consistency—combined into a daily practice for your moral identity.
                    </p>
                </div>

                <div className="feature-cards">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="card-icon">{feature.icon}</div>
                            <h3 className="card-title">{feature.title}</h3>
                            <span className="card-category">{feature.category}</span>
                            <ul className="card-items">
                                {feature.items.map((item, i) => (
                                    <li key={i}>
                                        <span className="item-bullet">★</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div
                                className="card-cta"
                                style={{ backgroundColor: feature.color }}
                            >
                                {feature.cta}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
