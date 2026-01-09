import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import './Hero.css';

export default function Hero() {
    const containerRef = useRef(null);
    const bgRef = useRef(null);
    const titleRef = useRef(null);
    const badgeRef = useRef(null);
    const descRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background Parallax
            gsap.to(bgRef.current, {
                yPercent: 30,
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Split Text Animation
            const titleText = new SplitType(titleRef.current, { types: 'words, chars' });

            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.from(badgeRef.current, { y: 20, opacity: 0, duration: 1, delay: 0.5 })
                .from(titleText.chars, {
                    y: 100,
                    opacity: 0,
                    rotateZ: 5,
                    stagger: 0.02,
                    duration: 1.2
                }, "-=0.5")
                .from(descRef.current, { y: 30, opacity: 0, duration: 1 }, "-=0.8")
                .from(btnRef.current, { y: 30, opacity: 0, duration: 1 }, "-=0.8");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" ref={containerRef}>
            <div className="hero-bg" ref={bgRef}>
                <img src="/hero-bg.png" alt="" className="hero-bg-image" />
                <div className="hero-overlay" />
            </div>

            <div className="hero-content">
                <div className="early-signups-badge" ref={badgeRef}>
                    <span className="badge-dot" />
                    22 EARLY SIGNUPS
                </div>

                <h1 className="hero-title" ref={titleRef}>
                    The Daily Habit for<br />
                    <span className="hero-title-accent">Meaningful Impact.</span>
                </h1>

                <p className="hero-description" ref={descRef}>
                    A simple ritual built around carefully curated causes.<br />
                    Join the community shaping meaningful impact.
                </p>

                <button className="hero-cta" ref={btnRef}>
                    Sign up for early access
                    <svg
                        className="cta-arrow"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Particles (CSS only for perf) */}
            <div className="hero-particles">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${20 + i * 12}%`,
                        bottom: '20%',
                        animationDelay: `${i * 0.8}s`
                    }} />
                ))}
            </div>
        </section>
    );
}
