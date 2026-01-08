import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Challenge.css';

export default function Challenge() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const avatars = [
        { initials: 'JO', color: '#1a1a1a' },
        { initials: 'SN', color: '#D4671C' },
        { initials: 'AL', color: '#8B5A2B' }
    ];

    return (
        <motion.section
            className="challenge"
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="challenge-container">
                <div className="challenge-content">
                    <motion.h3
                        className="challenge-title"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Challenge Your Friends
                    </motion.h3>
                    <motion.p
                        className="challenge-text"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Who knows more about climate change? Prove your knowledge.
                    </motion.p>
                </div>

                <motion.div
                    className="challenge-stats"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="avatar-stack">
                        {avatars.map((avatar, i) => (
                            <motion.div
                                key={i}
                                className="avatar"
                                style={{ backgroundColor: avatar.color, zIndex: avatars.length - i }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.5 + i * 0.1,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }}
                            >
                                {avatar.initials}
                            </motion.div>
                        ))}
                    </div>

                    <div className="rank-badge">
                        <span className="rank-percent">Top 10%</span>
                        <span className="rank-label">GLOBAL RANK</span>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
