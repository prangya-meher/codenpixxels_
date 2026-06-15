import React from 'react';
import { motion } from 'framer-motion';
import { Link, useOutlet } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projects';
import './Projects.css';

const Projects = () => {
    const outlet = useOutlet();

    // If a child route (ProjectDetail) is active, only render the child!
    if (outlet) {
        return outlet;
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const boxVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <section className="projects-section">
            <div className="container">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Projects
                </motion.h2>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card glass-card"
                            variants={boxVariants}
                            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(147, 51, 234, 0.3)' }}
                        >
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <Link to={`/projects/${project.id}`} className="btn btn-primary btn-sm">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description.substring(0, 100)}...</p>
                                <div className="project-card-footer">
                                    <Link to={`/projects/${project.id}`} className="view-more text-gradient">
                                        Read more &rarr;
                                    </Link>
                                    <div className="project-links">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
