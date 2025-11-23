import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className="mono" style={{ color: 'var(--accent-cyan)', marginBottom: '20px' }}>05. What's Next?</p>
        <h2 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--text-primary)' }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '50px' }}>
          I am currently open to new opportunities in DevOps and Automation. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:pavansahu.power@gmail.com" className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
