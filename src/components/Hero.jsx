import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg">
                <img src="/hero-bg.png" alt="" className="hero-bg-image" />
                <div className="hero-overlay" />
            </div>

            <div className="hero-content">
                <motion.div
                    className="early-signups-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="badge-dot" />
                    22 EARLY SIGNUPS
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    The Daily Habit for<br />
                    <span className="hero-title-accent">Meaningful Impact.</span>
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    A simple ritual built around carefully curated causes.<br />
                    Join the community shaping meaningful impact.
                </motion.p>

                <motion.button
                    className="hero-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.03, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                >
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
                </motion.button>
            </div>

            {/* Animated particles */}
            <div className="hero-particles">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="particle"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            y: [-20, -100],
                            x: Math.random() * 40 - 20
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeOut"
                        }}
                        style={{
                            left: `${20 + i * 12}%`,
                            bottom: '20%'
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
