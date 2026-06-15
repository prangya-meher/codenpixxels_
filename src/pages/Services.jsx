import React from 'react';
import { motion } from 'framer-motion';
import { Code, MonitorSmartphone, Layers, Zap } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        icon: <Code size={40} />,
        title: 'Web Development',
        desc: 'Building responsive, fast-loading, and interactive websites using modern frameworks like React and Next.js.'
    },
    {
        icon: <MonitorSmartphone size={40} />,
        title: 'Responsive Design',
        desc: 'Ensuring your website looks perfect and functions seamlessly on all devices, from desktops to mobile phones.'
    },
    {
        icon: <Layers size={40} />,
        title: 'UI/UX Implementation',
        desc: 'Translating design mockups into pixel-perfect, accessible, and user-friendly web interfaces.'
    },
    {
        icon: <Zap size={40} />,
        title: 'Performance Optimization',
        desc: 'Improving modern web vitals, reducing load times, and ensuring a buttery smooth experience for users.'
    }
];

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="services-section">
            <div className="container">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Services
                </motion.h2>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card glass-card"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 20px 40px rgba(147, 51, 234, 0.4)',
                                borderColor: 'var(--accent-1)'
                            }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
