import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

export default function Experience() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Cinematic stagger reveal
            gsap.from(".exp-cell", {
                y: 120,
                opacity: 0,
                scale: 0.85,
                rotateY: 15,
                stagger: 0.15,
                duration: 1.4,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".exp-bento",
                    start: "top 75%"
                }
            });

            // Parallax on images
            gsap.utils.toArray(".exp-parallax").forEach(img => {
                gsap.to(img, {
                    yPercent: -25,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5
                    }
                });
            });

            // Streak bars animation
            gsap.from(".bar", {
                scaleY: 0,
                transformOrigin: "bottom",
                stagger: 0.08,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".streak-bars",
                    start: "top 85%"
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
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(card, {
            rotateX, rotateY,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    const handleTiltReset = (e) => {
        gsap.to(e.currentTarget, {
            rotateX: 0, rotateY: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)"
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
                <div className="exp-cell cell-ritual" onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
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

                {/* Spark Particles Visual */}
                <div className="exp-cell cell-spark">
                    <img src="/spark-particles.png" alt="Spark" className="exp-parallax" loading="lazy" />
                    <div className="cell-overlay gradient-fire" />
                    <span className="cell-badge fire">SPARK</span>
                </div>

                {/* Abstract Flow Visual */}
                <div className="exp-cell cell-abstract">
                    <img src="/abstract-flow.png" alt="Flow" className="exp-parallax" loading="lazy" />
                    <div className="cell-overlay" />
                </div>

                {/* Streaks Card */}
                <div className="exp-cell cell-streaks" onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
                    <div className="cell-icon">☆</div>
                    <h3>Impact Streaks</h3>
                    <span className="cell-tag purple">STRENGTH TRAINING</span>
                    <div className="streak-bars">
                        <div className="bar" style={{ height: '40%' }} />
                        <div className="bar" style={{ height: '60%' }} />
                        <div className="bar" style={{ height: '80%' }} />
                        <div className="bar active" style={{ height: '100%' }} />
                        <div className="bar" style={{ height: '70%' }} />
                        <div className="bar" style={{ height: '90%' }} />
                        <div className="bar" style={{ height: '55%' }} />
                    </div>
                    <div className="cell-cta dark">CORE LOOP</div>
                </div>

                {/* Tribal Card */}
                <div className="exp-cell cell-tribal" onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
                    <div className="cell-icon light">⚡</div>
                    <h3>Tribal Belonging</h3>
                    <span className="cell-tag teal">GROUP CLASS</span>
                    <ul>
                        <li>See what friends support</li>
                        <li>Leaderboards & ranks</li>
                        <li>Thoughtful social surfacing</li>
                    </ul>
                    <div className="cell-cta gradient">COMMUNITY ZONE</div>
                </div>

                {/* Nature Visual */}
                <div className="exp-cell cell-nature-exp">
                    <img src="/nature-glow.png" alt="Nature" className="exp-parallax" loading="lazy" />
                    <div className="cell-overlay gradient-teal" />
                    <span className="cell-badge teal">GROWTH</span>
                </div>
            </div>
        </section>
    );
}
