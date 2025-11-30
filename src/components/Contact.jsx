import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className="mono" style={{ color: 'var(--accent-cyan)', marginBottom: '20px' }}>06. What's Next?</p>
        <h2 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--text-primary)' }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '50px' }}>
          I am currently open to new opportunities in DevOps and Automation. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="contact-buttons">
          <a 
            href="mailto:pavansahu.power@gmail.com" 
            className="btn btn-primary contact-btn"
          >
            <Mail size={18} />
            <span>Email Me</span>
          </a>
          <a 
            href="https://linkedin.com/in/pavan-kumar-sahu-a1ba74184" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary contact-btn"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://wa.me/919876543210?text=Hi%20Pavan!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary contact-btn whatsapp-btn"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>

      <style>{`
        .contact-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
        }

        .contact-btn {
          display: flex !important;
          align-items: center;
          gap: 8px;
          padding: 15px 25px;
          font-size: 1rem;
        }

        .contact-btn:hover {
          transform: translateY(-3px);
        }

        .whatsapp-btn {
          border-color: #25D366 !important;
          color: #25D366 !important;
        }

        .whatsapp-btn:hover {
          background: rgba(37, 211, 102, 0.1) !important;
        }

        @media (max-width: 480px) {
          .contact-buttons {
            flex-direction: column;
          }
          
          .contact-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
