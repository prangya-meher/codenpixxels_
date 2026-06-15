import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import wavingImg from '../assets/images/waving-removebg-preview.png';
import './IntroScreen.css';

const loadingTexts = [
    "Initializing components...",
    "Compiling styling...",
    "Fetching project data...",
    "Optimizing assets...",
    "Almost ready..."
];

const IntroScreen = () => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex(prev => Math.min(prev + 1, loadingTexts.length - 1));
        }, 600);
        return () => clearInterval(interval);
    }, []);
    return (
        <motion.div
            className="intro-section"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: 'easeInOut' }}
        >
            <div className="intro-content">
                {/* Animated Girl Character Element */}
                <div className="desk-scene-container">
                    {/* 3D Character at desk */}
                    <motion.div
                        className="character-scene"
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{
                            scale: 1,
                            y: [0, -15, 0], // Floating activity
                            opacity: 1
                        }}
                        transition={{
                            y: {
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut"
                            },
                            opacity: { duration: 1 },
                            scale: { duration: 1 }
                        }}
                    >
                        <img
                            src={wavingImg}
                            alt="Frontend Girl Waving"
                            className="character-img"
                        />
                    </motion.div>
                </div>

                {/* Dynamic Text Loading Animation */}
                <motion.div
                    className="intro-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <h1 className="intro-title">&lt;Portfolio /&gt;</h1>
                    <div className="text-loading-container">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={textIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="loading-dynamic-text text-gradient"
                            >
                                {loadingTexts[textIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>


        </motion.div>
    );
};

export default IntroScreen;
