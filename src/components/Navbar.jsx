import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      background: scrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-cyan)', fontWeight: 'bold', fontSize: '1.2rem' }}
        >
          <Terminal size={24} />
          <span className="mono">Pavan.dev</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'none', gap: '30px', alignItems: 'center' }}>
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                style={{ cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '0.9rem' }}
                className="mono hover-text"
              >
                <span style={{ color: 'var(--accent-cyan)' }}>0{i + 1}.</span> {link.name}
              </Link>
            </motion.div>
          ))}
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'flex', gap: '20px' }}>
           <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-cyan)' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          style={{ background: 'var(--bg-secondary)', padding: '20px', borderBottom: '1px solid var(--glass-border)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
              style={{ display: 'block', padding: '15px 0', color: 'var(--text-primary)', textAlign: 'center' }}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .hover-text:hover { color: var(--accent-cyan) !important; }
      `}</style>
    </nav>
  );
};

export default Navbar;
