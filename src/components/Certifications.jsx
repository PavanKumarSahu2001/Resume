import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    credlyUrl: "https://www.credly.com/badges/6e9511ba-fad1-45be-95e9-ddea885ffab2/linked_in_profile",
    badgeColor: "#FF9900"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    credlyUrl: "https://www.credly.com/badges/f6b41a0b-72f0-46b5-8617-c977ae124f61",
    badgeColor: "#FF9900"
  },
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    credlyUrl: "https://www.credly.com/badges/8e87e3ed-5fe5-438f-a6d7-dc85e2f0e24d/public_url",
    badgeColor: "#FF9900"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', fontSize: '2rem' }}>
            <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem' }}>04.</span> 
            Certifications
          </h2>

          <div className="certifications-grid">
            {certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="cert-icon" style={{ color: cert.badgeColor }}>
                  <Award size={40} />
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <div className="cert-link">
                  <ExternalLink size={18} />
                  <span>Verify</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
        }

        .certification-card {
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .certification-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: linear-gradient(180deg, var(--accent-cyan), var(--accent-purple));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .certification-card:hover::before {
          opacity: 1;
        }

        .cert-icon {
          flex-shrink: 0;
          padding: 12px;
          background: rgba(255, 153, 0, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-content {
          flex: 1;
        }

        .cert-title {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 4px;
          font-weight: 600;
        }

        .cert-issuer {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .cert-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-cyan);
          font-size: 0.85rem;
          font-family: var(--font-mono);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .certification-card:hover .cert-link {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 480px) {
          .certifications-grid {
            grid-template-columns: 1fr;
          }

          .certification-card {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
          }

          .cert-link {
            opacity: 1;
            transform: none;
            margin-top: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
