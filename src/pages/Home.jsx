import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const text = "Portfolio";

    // Framer motion variants for typography
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.4 }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: "spring", damping: 12, stiffness: 200 }
        }
    };

    return (
        <div className="home-section">
            <div className="container home-container">
                <motion.div
                    className="home-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2
                        className="subtitle"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        CodeNPixels
                    </motion.h2>

                    <motion.h1
                        className="title portfolio-title"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {text.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className="text-gradient char-span"
                                whileHover={{ scale: 1.25, translateY: -10, color: '#ec4899', transition: { type: "spring", stiffness: 300 } }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        className="description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        Crafting engaging, responsive, and visually stunning web experiences. Let's bring great ideas to life through code and creativity.
                    </motion.p>

                    <motion.div
                        className="home-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <Link to="/projects" className="btn btn-primary">
                            View My Work <ArrowRight size={20} />
                        </Link>
                        <a href="/PRANGYANJALI-MEHER-%20Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            View CV <Download size={20} />
                        </a>
                        <Link to="/contact" className="btn btn-outline">
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div
                        className="home-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <a href="https://github.com/prangya-meher" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/prangyanjali-meher-aa6b56316" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={24} /></a>
                    </motion.div>

                </motion.div>
            </div>

            {/* Minimal background blobs just for home */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
        </div>
    );
};

export default Home;
