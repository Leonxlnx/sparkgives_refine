import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

export default function Experience() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".exp-cell", {
                y: 80,
                opacity: 0,
                stagger: 0.12,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleTilt = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        gsap.to(card, {
            rotateX, rotateY,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    const handleTiltReset = (e) => {
        gsap.to(e.currentTarget, {
            rotateX: 0, rotateY: 0,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    return (
        <section className="experience" ref={containerRef}>
            <div className="experience-header">
                <span className="section-label">THE EXPERIENCE</span>
                <h2 className="experience-title">
                    A Gym for Your <span className="accent-italic">Soul</span>
                </h2>
            </div>

            <div className="exp-bento">
                {/* Main Feature Card */}
                <div
                    className="exp-cell cell-ritual"
                    onMouseMove={handleTilt}
                    onMouseLeave={handleTiltReset}
                >
                    <div className="cell-icon">⊕</div>
                    <h3>The Daily Ritual</h3>
                    <span className="cell-tag">MENTAL FITNESS</span>
                    <ul>
                        <li>2-minute daily ritual</li>
                        <li>Learn something meaningful</li>
                        <li>Start your day with intention</li>
                    </ul>
                    <div className="cell-cta">WARM-UP STATION</div>
                </div>

                {/* Impact Visual */}
                <div className="exp-cell cell-impact-visual">
                    <img src="/impact.png" alt="Impact" loading="lazy" />
                    <div className="cell-overlay" />
                </div>

                {/* Streaks Card */}
                <div
                    className="exp-cell cell-streaks"
                    onMouseMove={handleTilt}
                    onMouseLeave={handleTiltReset}
                >
                    <div className="cell-icon">☆</div>
                    <h3>Impact Streaks</h3>
                    <span className="cell-tag">STRENGTH TRAINING</span>
                    <div className="streak-bars">
                        <div className="bar" style={{ height: '40%' }} />
                        <div className="bar" style={{ height: '60%' }} />
                        <div className="bar" style={{ height: '80%' }} />
                        <div className="bar active" style={{ height: '100%' }} />
                        <div className="bar" style={{ height: '70%' }} />
                        <div className="bar" style={{ height: '90%' }} />
                        <div className="bar" style={{ height: '50%' }} />
                    </div>
                    <div className="cell-cta dark">CORE LOOP</div>
                </div>

                {/* Community Visual */}
                <div className="exp-cell cell-community-visual">
                    <img src="/community.png" alt="Community" loading="lazy" />
                    <div className="cell-overlay" />
                    <span className="cell-label">Shared Progress</span>
                </div>

                {/* Tribal Card */}
                <div
                    className="exp-cell cell-tribal"
                    onMouseMove={handleTilt}
                    onMouseLeave={handleTiltReset}
                >
                    <div className="cell-icon">⚡</div>
                    <h3>Tribal Belonging</h3>
                    <span className="cell-tag">GROUP CLASS</span>
                    <ul>
                        <li>See what friends support</li>
                        <li>Leaderboards & ranks</li>
                        <li>Thoughtful social surfacing</li>
                    </ul>
                    <div className="cell-cta dark">COMMUNITY ZONE</div>
                </div>
            </div>
        </section>
    );
}
