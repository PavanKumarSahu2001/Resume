import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Accenture",
    role: "Advanced App Engineering Analyst",
    duration: "Nov 2024 - Present",
    location: "Bengaluru, India",
    description: "Leading automation initiatives and optimizing CI/CD pipelines for enterprise-scale applications.",
    skills: ["DevOps", "Automation", "Cloud"]
  },
  {
    company: "Accenture",
    role: "Advanced App Engineering Associate",
    duration: "Dec 2022 - Nov 2024",
    location: "Bengaluru, India",
    description: "Managed container orchestration using Docker & Kubernetes. Implemented monitoring solutions using Splunk.",
    skills: ["Docker", "Kubernetes", "Splunk"]
  },
  {
    company: "MasonBrickmann",
    role: "Consultant Cinematographer",
    duration: "Jun 2021 - Dec 2022",
    location: "India",
    description: "Collaborated on creative media projects, demonstrating versatility and attention to detail.",
    skills: ["Media", "Management"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', fontSize: '2rem' }}>
            <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem' }}>02.</span> 
            Where I've Worked
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {experiences.map((exp, index) => (
              <div key={index} className="glass-card" style={{ position: 'relative', borderLeft: '4px solid var(--accent-cyan)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>{exp.role} <span style={{ color: 'var(--accent-cyan)' }}>@ {exp.company}</span></h3>
                  <span className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} /> {exp.duration}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>{exp.description}</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {exp.skills.map(skill => (
                    <span key={skill} className="mono" style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', background: 'rgba(100, 255, 218, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
