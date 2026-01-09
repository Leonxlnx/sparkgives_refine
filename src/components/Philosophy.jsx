import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Philosophy.css';

export default function Philosophy() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger reveal all bento cells
            gsap.from(".bento-cell", {
                y: 60,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="philosophy" ref={containerRef}>
            <div className="bento-grid">
                {/* Main Title Cell */}
                <div className="bento-cell cell-main">
                    <span className="section-label">THE PHILOSOPHY</span>
                    <h2 className="philosophy-title">
                        Luxury isn't about price.<br />
                        It's about <span className="accent-italic">values</span>.
                    </h2>
                    <p className="philosophy-text">
                        We curate a small, evolving set of high-impact causes—selected for clarity,
                        impact, and trust.
                    </p>
                </div>

                {/* Tastemaker Image Cell */}
                <div className="bento-cell cell-tastemaker">
                    <img src="/tastemaker.png" alt="The Tastemaker" loading="lazy" />
                    <div className="cell-overlay" />
                    <span className="cell-label">"The Tastemakers"</span>
                </div>

                {/* Abstract Glass Cell */}
                <div className="bento-cell cell-glass">
                    <img src="/amber-glass.png" alt="Abstract Art" loading="lazy" />
                    <div className="cell-overlay" />
                </div>

                {/* Features Cell */}
                <div className="bento-cell cell-features">
                    <ul className="philosophy-features">
                        <li><span className="check-icon">◎</span> Verified high-impact causes</li>
                        <li><span className="check-icon">◎</span> Story-driven engagement</li>
                        <li><span className="check-icon">◎</span> Community of tastemakers</li>
                    </ul>
                </div>

                {/* Quote Cell */}
                <div className="bento-cell cell-quote">
                    <blockquote>
                        "Curate your impact like you curate your identity."
                    </blockquote>
                    <div className="curated-badge">
                        <span className="badge-title">Curated Impact</span>
                        <span className="badge-subtitle">TOP 1% SELECTION</span>
                    </div>
                </div>

                {/* Community Hands Cell */}
                <div className="bento-cell cell-community">
                    <img src="/community.png" alt="Community" loading="lazy" />
                    <div className="cell-overlay" />
                </div>
            </div>
        </section>
    );
}
