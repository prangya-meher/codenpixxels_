import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about/profile.jpg';
import './About.css';

const skills = [
    { name: 'HTML5', level: '95%' },
    { name: 'CSS3', level: '85%' },
    { name: 'JavaScript', level: '75%' },
    { name: 'React.js', level: '70%' },
    { name: 'Tailwind CSS', level: '80%' },
    { name: 'GSAP', level: '80%' },
    { name: 'Locomotive', level: '80%' },
    { name: 'Framer Motion', level: '65%' },
    { name: 'Git&GitHub', level: '75%' },
    { name: 'MongoDB', level: '70%' },
    { name: 'Wordpress', level: '70%' },
    { name: 'Bootstrap', level: '70%' }

];

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="image-wrapper">
                            <img src={aboutImg} alt="Frontend Developer" className="about-img" />
                            <div className="image-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <h3>Who am I?</h3>
                        <p className="about-desc">
                            I am a passionate <strong>Frontend Developer</strong> who focuses on writing clean, elegant, and efficient code. With a strong background in modern JS frameworks, I build user-friendly web interfaces that are not only performant but also visually appealing.
                            My goal is to constantly learn and improve my skills while delivering premium digital experiences.
                        </p>

                        <div className="skills-container">
                            <h4>My Skills</h4>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="skill-card glass-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                                        whileHover={{ scale: 1.05, borderColor: 'var(--accent-1)' }}
                                    >
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="skill-bar-bg">
                                            <motion.div
                                                className="skill-bar-fill"
                                                initial={{ width: 0 }}
                                                animate={{ width: skill.level }}
                                                transition={{ delay: 0.8 + (index * 0.1), duration: 1 }}
                                            ></motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
