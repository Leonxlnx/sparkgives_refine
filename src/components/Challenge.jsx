
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import './Challenge.css';

export default function Challenge() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".challenge", {
                scale: 0.95,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".challenge",
                    start: "top 85%"
                }
            });

            gsap.from(".avatar", {
                scale: 0,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".avatar-stack",
                    start: "top 90%"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="challenge no-overflow" ref={containerRef}>
            <div className="challenge-container">
                <div className="challenge-content">
                    <h3 className="challenge-title">Challenge Your Friends</h3>
                    <p className="challenge-text">Who knows more about climate change? Prove your knowledge.</p>
                </div>

                <div className="challenge-stats">
                    <div className="avatar-stack">
                        {/* Using background image sprite logic for efficiency or individual divs */}
                        <div className="avatar" style={{ backgroundImage: 'url(/avatars_full.png)', backgroundPosition: '0% 50%', backgroundSize: '300%' }} />
                        <div className="avatar" style={{ backgroundImage: 'url(/avatars_full.png)', backgroundPosition: '50% 50%', backgroundSize: '300%' }} />
                        <div className="avatar" style={{ backgroundImage: 'url(/avatars_full.png)', backgroundPosition: '100% 50%', backgroundSize: '300%' }} />
                    </div>

                    <div className="rank-badge">
                        <span className="rank-percent">Top 10%</span>
                        <span className="rank-label">GLOBAL RANK</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
