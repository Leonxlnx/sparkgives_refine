import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Philosophy.css';

export default function Philosophy() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Cinematic stagger reveal with scale and rotation
            gsap.from(".bento-cell", {
                y: 100,
                opacity: 0,
                scale: 0.9,
                rotateX: 10,
                stagger: 0.12,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%"
                }
            });

            // Parallax on images
            gsap.utils.toArray(".parallax-img").forEach(img => {
                gsap.to(img, {
                    yPercent: -20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });
            });

            // Text reveal on scroll
            gsap.from(".philosophy-title", {
                y: 60,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".cell-main",
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
                        We curate high-impact causes—selected for clarity, impact, and trust.
                    </p>
                </div>

                {/* Cinematic Sunset Cell */}
                <div className="bento-cell cell-sunset">
                    <img src="/sunset-hands.png" alt="Community" className="parallax-img" loading="lazy" />
                    <div className="cell-overlay gradient-sunset" />
                    <span className="cell-badge">COMMUNITY</span>
                </div>

                {/* Abstract Flow Cell */}
                <div className="bento-cell cell-flow">
                    <img src="/abstract-flow.png" alt="Flow" className="parallax-img" loading="lazy" />
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

                {/* Nature Glow Cell */}
                <div className="bento-cell cell-nature">
                    <img src="/nature-glow.png" alt="Nature" className="parallax-img" loading="lazy" />
                    <div className="cell-overlay gradient-teal" />
                    <span className="cell-badge teal">IMPACT</span>
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
            </div>
        </section>
    );
}
