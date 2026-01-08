import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Experience.css';

const features = [
    {
        icon: '⊕',
        title: 'The Daily Ritual',
        category: 'MENTAL FITNESS',
        items: [
            '2-minute daily ritual',
            'Learn something meaningful',
            'Start your day with intention'
        ],
        cta: 'WARM-UP STATION',
        color: '#1a5fb4'
    },
    {
        icon: '☆',
        title: 'Impact Streaks',
        category: 'STRENGTH TRAINING',
        items: [
            'Consistency compounds',
            'Track daily & weekly progress',
            'Visible status & badges'
        ],
        cta: 'CORE LOOP',
        color: '#444444'
    },
    {
        icon: '⚡',
        title: 'Tribal Belonging',
        category: 'GROUP CLASS',
        items: [
            'See what friends support',
            'Leaderboards & ranks',
            'Shared progress, thoughtfully surfaced'
        ],
        cta: 'COMMUNITY ZONE',
        color: '#1a1a1a'
    }
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="experience" ref={ref}>
            <div className="experience-container">
                <motion.div
                    className="experience-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-label">THE EXPERIENCE</span>
                    <h2 className="experience-title">
                        A Gym for Your <span className="accent-italic">Soul</span>
                    </h2>
                    <p className="experience-subtitle">
                        Ritual, curation, and consistency—combined into a daily practice for your moral identity.
                    </p>
                </motion.div>

                <motion.div
                    className="feature-cards"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="card-icon">{feature.icon}</div>
                            <h3 className="card-title">{feature.title}</h3>
                            <span className="card-category">{feature.category}</span>
                            <ul className="card-items">
                                {feature.items.map((item, i) => (
                                    <li key={i}>
                                        <span className="item-bullet">★</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <motion.div
                                className="card-cta"
                                style={{ backgroundColor: feature.color }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {feature.cta}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
