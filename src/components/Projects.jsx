import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: "Home Automation IoT",
    description: "Built an automated controller system for lights and fans using Bi-Directional Counters and LM35 Temperature Sensors. Demonstrates embedded systems expertise.",
    tech: ["IoT", "Embedded C", "Sensors"],
    links: { github: "#", external: "#" }
  },
  {
    title: "BlackJack Card Game",
    description: "A user-friendly command-line game developed using Python and OOP principles. Features complex game logic and state management.",
    tech: ["Python", "OOP", "CLI"],
    links: { github: "#", external: "#" }
  },
  {
    title: "DevOps Pipeline Demo",
    description: "A complete CI/CD pipeline setup using Jenkins and Docker to automate the deployment of a React application to AWS.",
    tech: ["Jenkins", "Docker", "AWS"],
    links: { github: "#", external: "#" }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', fontSize: '2rem' }}>
          <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem' }}>04.</span> 
          Featured Projects
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="glass-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
                  <Folder size={40} color="var(--accent-cyan)" />
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <a href={project.links.github} style={{ color: 'var(--text-secondary)' }}><Github size={20} /></a>
                    <a href={project.links.external} style={{ color: 'var(--text-secondary)' }}><ExternalLink size={20} /></a>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: 'var(--text-primary)' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>{project.description}</p>
              </div>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: 'auto' }}>
                {project.tech.map(t => (
                  <span key={t} className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
