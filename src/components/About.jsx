import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px', alignItems: 'center' }}
        >
          <div>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', fontSize: '2rem' }}>
              <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem' }}>01.</span> 
              About Me
            </h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.1rem' }}>
              <p style={{ marginBottom: '15px' }}>
                Hello! My name is Pavan and I enjoy creating things that live on the internet and the cloud. My interest in technology started back in 2015 when I was a Patrol Leader in Scouts, where I learned the value of systems and organization.
              </p>
              <p style={{ marginBottom: '15px' }}>
                Fast-forward to today, and I've had the privilege of working at <span style={{ color: 'var(--accent-cyan)' }}>Accenture</span> for over 3 years. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p>
                I also run an Instagram photography page <span style={{ color: 'var(--accent-purple)' }}>@koraput_clicks</span> and love experimenting with the latest tech gadgets.
              </p>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div className="img-wrapper" style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden' }}>
               <img 
                  src={import.meta.env.BASE_URL + 'pavan.jpg'} 
                  alt="Pavan Kumar Sahu" 
                  style={{ 
                    width: '100%', 
                    height: '300px', 
                    objectFit: 'cover',
                    border: '2px solid var(--accent-cyan)', 
                    borderRadius: '10px',
                    filter: 'grayscale(20%)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.filter = 'grayscale(0%)'}
                  onMouseOut={(e) => e.target.style.filter = 'grayscale(20%)'}
               />
               <div style={{ position: 'absolute', top: '20px', left: '20px', width: '100%', height: '100%', border: '2px solid var(--accent-cyan)', borderRadius: '10px', zIndex: -1 }}></div>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
