import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code, Camera, Database, Cloud, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "DevOps & Cloud",
    icon: <Cloud size={24} />,
    skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "GitHub Actions", "Nginx", "Splunk"]
  },
  {
    title: "Development",
    icon: <Code size={24} />,
    skills: ["Python", "JavaScript (ES6+)", "React", "HTML5/CSS3", "SQL", "C"]
  },
  {
    title: "Creative & Tools",
    icon: <Camera size={24} />,
    skills: ["Adobe Premiere Pro", "Canva", "Photography", "Process Automation"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', fontSize: '2rem' }}>
            <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem' }}>03.</span> 
            Technical Arsenal
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="glass-card" style={{ background: 'var(--bg-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--accent-cyan)' }}>
                  {cat.icon}
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{cat.title}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {cat.skills.map(skill => (
                    <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-secondary)' }}>
                      <Terminal size={12} color="var(--accent-purple)" />
                      <span>{skill}</span>
                    </div>
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

export default Skills;
