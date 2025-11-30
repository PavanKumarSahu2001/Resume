import React from 'react';
import { motion } from 'framer-motion';
import { Home, Terminal, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--bg-primary)',
      padding: '20px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', maxWidth: '600px' }}
      >
        <motion.div
          animate={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3 
          }}
          style={{ marginBottom: '30px' }}
        >
          <AlertTriangle size={80} color="var(--accent-cyan)" />
        </motion.div>

        <h1 style={{ 
          fontSize: 'clamp(80px, 15vw, 150px)', 
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1
        }}>
          404
        </h1>

        <div className="terminal-box" style={{
          background: 'var(--bg-secondary)',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '30px',
          textAlign: 'left',
          border: '1px solid var(--glass-border)'
        }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca40' }}></span>
          </div>
          <code className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--accent-cyan)' }}>$ </span>
            curl -I {window.location.href}
            <br />
            <span style={{ color: '#ff6b6b' }}>HTTP/1.1 404 Not Found</span>
            <br />
            <span style={{ color: 'var(--accent-purple)' }}>Error:</span> The page you're looking for has been moved, deleted, or never existed.
          </code>
        </div>

        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.1rem', 
          marginBottom: '30px' 
        }}>
          Looks like you've ventured into uncharted territory! 🚀
        </p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="/" 
            className="btn btn-solid"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Home size={18} />
            Back to Home
          </a>
          <a 
            href="/#projects" 
            className="btn btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Terminal size={18} />
            View Projects
          </a>
        </div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default NotFound;
