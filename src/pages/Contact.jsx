import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';
import contactImg from '../assets/images/contact-illustration.png';
import './Contact.css';

/*
  ┌──────────────────────────────────────────────────────────────┐
  │  HOW TO GET YOUR FREE WEB3FORMS KEY (2 minutes):             │
  │                                                              │
  │  1. Go to  https://web3forms.com/                            │
  │  2. Enter your email → click "Create Access Key"             │
  │  3. Copy the key from the email they send you                │
  │  4. Paste it below replacing  YOUR_WEB3FORMS_ACCESS_KEY      │
  └──────────────────────────────────────────────────────────────┘
*/
const WEB3FORMS_ACCESS_KEY = '698598e7-4b97-4352-9b00-4b38c08c1b8b';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: 'New Portfolio Message from ' + formData.name,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    // Honeypot – anti-spam
                    botcheck: '',
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                console.error('Web3Forms error:', data);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch (err) {
            console.error('Network error:', err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const isLoading = status === 'loading';
    const isSuccess = status === 'success';
    const isError = status === 'error';

    return (
        <section className="contact-section">
            <div className="container">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-content">

                    {/* Illustration */}
                    <motion.div
                        className="contact-image-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <img src={contactImg} alt="Contact Illustration" className="contact-img" />
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        className="contact-form-container glass-card"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-item">
                                <Mail className="info-icon" />
                                <a href="mailto:meherprangya@gmail.com" className="info-link">
                                    meherprangya@gmail.com
                                </a>
                            </div>
                            <div className="info-item">
                                <MapPin className="info-icon" />
                                <span>Odisha, India</span>
                            </div>
                            <div className="info-item">
                                <Phone className="info-icon" />
                                <a href="tel:+918117862163" className="info-link">+91 8117862163</a>
                            </div>
                            <div className="contact-socials">
                                <a
                                    href="https://github.com/prangya-meher"
                                    target="_blank" rel="noopener noreferrer"
                                    className="social-icon-link" aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/prangyanjali-meher-aa6b56316"
                                    target="_blank" rel="noopener noreferrer"
                                    className="social-icon-link" aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="contact-form">
                            {/* Honeypot (hidden – anti-spam) */}
                            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                            <div className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className={`btn btn-primary submit-btn ${isSuccess ? 'submitted' : ''}`}
                                whileTap={{ scale: 0.97 }}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending…'
                                    : isSuccess ? 'Sent!'
                                        : isError ? 'Try again'
                                            : 'Send Message'}
                                {isSuccess ? <CheckCircle size={20} />
                                    : isError ? <AlertCircle size={20} />
                                        : <Send size={20} />}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Success / Error toast */}
                <AnimatePresence>
                    {(isSuccess || isError) && (
                        <motion.div
                            className={`popup-msg ${isError ? 'popup-error' : ''}`}
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.8 }}
                        >
                            {isSuccess
                                ? <><CheckCircle size={30} color="#10b981" /><p>Message sent! I'll reply soon. 🎉</p></>
                                : <><AlertCircle size={30} color="#ef4444" /><p>Failed to send. Please email me directly.</p></>
                            }
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Contact;