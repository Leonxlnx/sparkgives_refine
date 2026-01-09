import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import './Philosophy.css';

export default function Philosophy() {
    const containerRef = useRef(null);
    const visualRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin Visual
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                animation: gsap.from(visualRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                })
            });

            // Text Reveal
            const text = new SplitType(titleRef.current, { types: 'words' });
            gsap.from(text.words, {
                opacity: 0.1,
                stagger: 0.05,
                duration: 0.5,
                ease: "none",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "bottom 50%",
                    scrub: true
                }
            });

            // Stagger items
            gsap.from(".philosophy-features li", {
                opacity: 0,
                x: -20,
                stagger: 0.1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".philosophy-features",
                    start: "top 85%"
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="philosophy" ref={containerRef}>
            <div className="philosophy-container">
                <div className="philosophy-content" ref={contentRef}>
                    <span className="section-label">THE PHILOSOPHY</span>

                    <h2 className="philosophy-title" ref={titleRef}>
                        Luxury isn't about price. It's about <span className="accent-italic">values</span>.
                    </h2>

                    <p className="philosophy-text">
                        We curate a small, evolving set of high-impact causes—selected for clarity,
                        impact, and trust. Each one is turned into a story worth your attention.
                    </p>

                    <p className="philosophy-text emphasis">
                        Just as you curate your diet, your wardrobe, and your media—Spark helps you
                        curate your impact. It's not just a donation platform; it's an identity layer for your
                        values.
                    </p>

                    <ul className="philosophy-features">
                        <li><span className="check-icon">◎</span> Verified high-impact causes</li>
                        <li><span className="check-icon">◎</span> Story-driven engagement</li>
                        <li><span className="check-icon">◎</span> Community of tastemakers</li>
                    </ul>
                </div>

                <div className="philosophy-visual-wrapper">
                    <div className="philosophy-visual" ref={visualRef}>
                        <img src="/tastemaker.png" alt="The Tastemaker" className="visual-image" />
                        <div className="visual-overlay" />

                        <div className="visual-card-content">
                            <span className="visual-label">"The Tastemakers"</span>
                        </div>

                        <div className="curated-badge">
                            <span className="badge-title">Curated Impact</span>
                            <span className="badge-subtitle">TOP 1% SELECTION</span>
                            <div className="badge-lines">
                                <div className="badge-line" />
                                <div className="badge-line" />
                                <div className="badge-line" />
                                <div className="badge-line" />
                                <div className="badge-line" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
