import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Philosophy.css';

export default function Philosophy() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="philosophy" ref={ref}>
            <div className="philosophy-container">
                <motion.div
                    className="philosophy-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.span className="section-label" variants={itemVariants}>
                        THE PHILOSOPHY
                    </motion.span>

                    <motion.h2 className="philosophy-title" variants={itemVariants}>
                        Luxury isn't about price.<br />
                        It's about <span className="accent-italic">values</span>.
                    </motion.h2>

                    <motion.p className="philosophy-text" variants={itemVariants}>
                        We curate a small, evolving set of high-impact causes—selected for clarity,
                        impact, and trust. Each one is turned into a story worth your attention.
                    </motion.p>

                    <motion.p className="philosophy-text emphasis" variants={itemVariants}>
                        Just as you curate your diet, your wardrobe, and your media—Spark helps you
                        curate your impact. It's not just a donation platform; it's an identity layer for your
                        values.
                    </motion.p>

                    <motion.ul className="philosophy-features" variants={itemVariants}>
                        <li>
                            <span className="check-icon">◎</span>
                            Verified high-impact causes
                        </li>
                        <li>
                            <span className="check-icon">◎</span>
                            Story-driven engagement
                        </li>
                        <li>
                            <span className="check-icon">◎</span>
                            Community of tastemakers
                        </li>
                    </motion.ul>
                </motion.div>

                <motion.div
                    className="philosophy-visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="visual-card">
                        <div className="visual-avatar">S</div>
                        <span className="visual-label">"The Tastemakers"</span>
                    </div>

                    <motion.div
                        className="curated-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="badge-title">Curated Impact</span>
                        <span className="badge-subtitle">TOP 1% SELECTION</span>
                        <div className="badge-lines">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="badge-line"
                                    initial={{ scaleX: 0 }}
                                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                                    transition={{ duration: 0.5, delay: 0.9 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
