import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = projectsData.find(p => p.id === id);
        if (!foundProject) {
            navigate('/projects');
        } else {
            setProject(foundProject);
        }
    }, [id, navigate]);

    if (!project) return null;

    return (
        <motion.section
            className="project-detail-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <Link to="/projects" className="back-btn">
                    <ArrowLeft size={20} /> Back to Projects
                </Link>

                <div className="project-detail-content glass-card">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="detail-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    />

                    <div className="detail-info">
                        <motion.h2
                            className="detail-title text-gradient"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            {project.title}
                        </motion.h2>

                        <motion.div
                            className="detail-tags"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="tag">{tag}</span>
                            ))}
                        </motion.div>

                        <motion.p
                            className="detail-desc"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            {project.description}
                        </motion.p>

                        <motion.div
                            className="detail-actions"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Live Preview <ExternalLink size={20} />
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                Source Code <Github size={20} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectDetail;
