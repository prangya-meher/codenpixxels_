import React, { useEffect, useState } from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate random particles for the dust effect
        const newParticles = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            size: `${Math.random() * 4 + 1}px`,
            opacity: Math.random() * 0.5 + 0.2
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="bg-animation-container">
            {/* Subtle Purple Corner Glows */}
            <div className="corner-glow glow-top-left"></div>
            <div className="corner-glow glow-bottom-right"></div>

            {/* Floating Purple Dust Network */}
            <div className="dust-container">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="dust-particle"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: particle.size,
                            height: particle.size,
                            opacity: particle.opacity,
                            animationDuration: particle.animationDuration,
                            animationDelay: particle.animationDelay
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default BackgroundAnimation;
