import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ flex: '1 1 500px' }}
        >
          <p className="mono" style={{ color: 'var(--accent-cyan)', marginBottom: '20px' }}>Hi, my name is</p>
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 'bold', lineHeight: 1.1, color: 'var(--text-primary)' }}>
            Pavan Kumar Sahu.
          </h1>
          <h2 style={{ fontSize: 'clamp(30px, 6vw, 60px)', fontWeight: 'bold', lineHeight: 1.1, color: 'var(--text-secondary)', marginBottom: '20px' }}>
            I automate things on the cloud.
          </h2>
          <p style={{ maxWidth: '540px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '40px' }}>
            I'm a DevOps & Automation Engineer specializing in building (and occasionally breaking) exceptional digital experiences. Currently focused on CI/CD pipelines, Kubernetes orchestration, and AWS infrastructure at <span style={{ color: 'var(--accent-cyan)' }}>Accenture</span>.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">Check out my work</a>
            <a href="/resume.pdf" className="btn btn-solid" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Download size={18} /> Resume
            </a>
          </div>

          <div style={{ marginTop: '60px', display: 'flex', gap: '25px' }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><Github className="hover-icon" /></a>
            <a href="https://linkedin.com/in/pavan-kumar-sahu-a1ba74184" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><Linkedin className="hover-icon" /></a>
            <a href="mailto:pavansahu.power@gmail.com" style={{ color: 'var(--text-secondary)' }}><Mail className="hover-icon" /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ flex: '0 0 auto' }}
        >
          <div style={{
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            border: '4px solid var(--accent-cyan)',
            overflow: 'hidden',
            boxShadow: '0 0 30px rgba(100, 255, 218, 0.3)'
          }}>
            <img
              src="/profile.jpg"
              alt="Pavan Kumar Sahu"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </motion.div>
      </div>
      <style>{`
        .hover-icon:hover { color: var(--accent-cyan); transform: translateY(-3px); transition: all 0.3s; }
      `}</style>
    </section>
  );
};

export default Hero;
