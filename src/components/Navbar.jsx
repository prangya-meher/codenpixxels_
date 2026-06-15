import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Mail, Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={22} /> },
    { name: 'About', path: '/about', icon: <User size={22} /> },
    { name: 'Services', path: '/services', icon: <Sparkles size={22} /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase size={22} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={22} /> },
];

const Navbar = () => {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (path) =>
        path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

    return (
        <>
            {/* ── Desktop: vertical sidebar ─────────────────────────── */}
            <nav className="side-navbar">
                <div className="nav-capsule">
                    <ul className="nav-items">
                        {navLinks.map((link) => (
                            <li key={link.path} className="nav-item">
                                <NavLink to={link.path} className="nav-icon-link" end={link.path === '/'}>
                                    <motion.div
                                        className="icon-wrapper"
                                        whileHover={{
                                            scale: 1.25,
                                            rotate: 8,
                                            transition: { type: 'spring', stiffness: 400, damping: 15 }
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <AnimatePresence>
                                            {isActive(link.path) && (
                                                <motion.span
                                                    key="active-bg"
                                                    layoutId="active-pill"
                                                    className="active-indicator"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.5 }}
                                                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                                                />
                                            )}
                                        </AnimatePresence>
                                        <span className={`nav-icon ${isActive(link.path) ? 'icon-active' : ''}`}>
                                            {link.icon}
                                        </span>
                                    </motion.div>
                                    <span className="nav-tooltip">{link.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* ── Mobile: hamburger + slide-in drawer ───────────────── */}
            <div className="mobile-navbar">
                {/* Top bar */}
                <div className="mobile-topbar">
                    <span className="mobile-logo">
                        <span className="text-gradient">Prangya</span>.dev
                    </span>
                    <motion.button
                        className="hamburger-btn"
                        onClick={() => setMobileOpen((o) => !o)}
                        whileTap={{ scale: 0.85 }}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {mobileOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={26} />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={26} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Slide-in drawer */}
                <AnimatePresence>
                    {mobileOpen && (
                        <>
                            {/* backdrop */}
                            <motion.div
                                className="drawer-backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setMobileOpen(false)}
                            />
                            {/* drawer */}
                            <motion.div
                                className="mobile-drawer"
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            >
                                <ul className="drawer-links">
                                    {navLinks.map((link, i) => (
                                        <motion.li
                                            key={link.path}
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.07 }}
                                        >
                                            <NavLink
                                                to={link.path}
                                                end={link.path === '/'}
                                                className={({ isActive }) =>
                                                    isActive ? 'drawer-link active' : 'drawer-link'
                                                }
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                <span className="drawer-icon">{link.icon}</span>
                                                {link.name}
                                            </NavLink>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Navbar;
