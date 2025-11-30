import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Terminal, Cloud, Server, Container } from 'lucide-react';
import DeploymentAnimation from './DeploymentAnimation';
import InfrastructureMonitor from './InfrastructureMonitor';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Grid */}
      <div className="hero-bg-grid"></div>
      
      {/* Floating DevOps Particles */}
      <div className="devops-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0.1 + Math.random() * 0.3
            }}
            animate={{ 
              y: [null, Math.random() * -100, null],
              x: [null, Math.random() * 50 - 25, null],
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* DevOps Status Bar */}
            <motion.div 
              className="status-bar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Terminal size={14} />
              <span className="typing-text">kubectl get pods --all-namespaces</span>
              <span className="status-green">✓ All systems operational</span>
            </motion.div>

            <p className="mono" style={{ color: 'var(--accent-cyan)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="blink-cursor">&gt;</span> Hi, my name is
            </p>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 'bold', lineHeight: 1.1, color: 'var(--text-primary)' }}>
              Pavan Kumar Sahu.
            </h1>
            <h2 style={{ fontSize: 'clamp(30px, 6vw, 60px)', fontWeight: 'bold', lineHeight: 1.1, color: 'var(--text-secondary)', marginBottom: '20px' }}>
              I automate things on the cloud.
            </h2>
            
            {/* Animated Tech Stack Pills */}
            <motion.div 
              className="tech-pills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Jenkins', 'GitOps'].map((tech, i) => (
                <motion.span 
                  key={tech}
                  className="tech-pill"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <p style={{ maxWidth: '540px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '40px' }}>
              I'm a DevOps & Automation Engineer specializing in building (and occasionally breaking) exceptional digital experiences. Currently focused on CI/CD pipelines, Kubernetes orchestration, and AWS infrastructure at <span style={{ color: 'var(--accent-cyan)' }}>Accenture</span>.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <motion.a 
                href="#projects" 
                className="btn btn-primary devops-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Server size={16} /> Check out my work
              </motion.a>
              <motion.a 
                href="/resume.pdf" 
                download="Pavan_Kumar_Sahu_Resume.pdf"
                className="btn btn-solid devops-btn" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} /> Resume
              </motion.a>
            </div>

            <div style={{ marginTop: '60px', display: 'flex', gap: '25px' }}>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><Github className="hover-icon" /></a>
              <a href="https://linkedin.com/in/pavan-kumar-sahu-a1ba74184" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><Linkedin className="hover-icon" /></a>
              <a href="mailto:pavansahu.power@gmail.com" style={{ color: 'var(--text-secondary)' }}><Mail className="hover-icon" /></a>
            </div>
          </motion.div>

          {/* DevOps Dashboard Side Panel */}
          <motion.div 
            className="hero-dashboard"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <DeploymentAnimation />
            <div style={{ marginTop: '1.5rem' }}>
              <InfrastructureMonitor />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hover-icon:hover { color: var(--accent-cyan); transform: translateY(-3px); transition: all 0.3s; }
        
        .hero-bg-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .devops-particles .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--accent-cyan);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .status-bar {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 0, 0, 0.3);
          padding: 8px 16px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          margin-bottom: 20px;
          border-left: 3px solid var(--accent-cyan);
        }

        .status-bar svg {
          color: var(--accent-cyan);
        }

        .typing-text {
          color: var(--text-secondary);
        }

        .status-green {
          color: #22c55e;
          margin-left: auto;
        }

        .blink-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }

        .tech-pill {
          background: rgba(100, 255, 218, 0.1);
          border: 1px solid rgba(100, 255, 218, 0.3);
          color: var(--accent-cyan);
          padding: 6px 14px;
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          cursor: default;
          transition: all 0.3s ease;
        }

        .devops-btn {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hero-dashboard {
          max-width: 500px;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
          }
          
          .hero-dashboard {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .status-bar {
            flex-wrap: wrap;
            font-size: 0.65rem;
          }
          
          .tech-pills {
            gap: 8px;
          }
          
          .tech-pill {
            font-size: 0.65rem;
            padding: 4px 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
