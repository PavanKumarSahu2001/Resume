import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        <a href="https://github.com" className="hover-icon"><Github size={20} /></a>
        <a href="https://linkedin.com" className="hover-icon"><Linkedin size={20} /></a>
        <a href="https://instagram.com" className="hover-icon"><Instagram size={20} /></a>
      </div>
      <p className="mono">Built by Pavan Kumar Sahu</p>
      <style>{`
        .hover-icon { color: var(--text-secondary); transition: color 0.3s; }
        .hover-icon:hover { color: var(--accent-cyan); }
      `}</style>
    </footer>
  );
};

export default Footer;
