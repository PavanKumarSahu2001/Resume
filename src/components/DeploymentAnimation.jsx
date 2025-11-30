import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, GitCommit, Package, Server, Cloud, CheckCircle, Loader, Rocket, Container, Database, Shield } from 'lucide-react';

const DeploymentAnimation = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isDeploying, setIsDeploying] = useState(true);
  const [logs, setLogs] = useState([]);

  const stages = [
    { icon: GitCommit, label: 'Git Push', color: '#f97316' },
    { icon: Package, label: 'Build', color: '#eab308' },
    { icon: Container, label: 'Docker', color: '#0ea5e9' },
    { icon: Server, label: 'K8s Deploy', color: '#8b5cf6' },
    { icon: Cloud, label: 'Live!', color: '#22c55e' },
  ];

  const deploymentLogs = [
    '$ git push origin main',
    '→ Triggering CI/CD pipeline...',
    '✓ Code pushed to repository',
    '$ npm run build',
    '→ Building production bundle...',
    '✓ Build completed successfully',
    '$ docker build -t app:latest .',
    '→ Creating container image...',
    '✓ Image pushed to registry',
    '$ kubectl apply -f deployment.yaml',
    '→ Rolling update in progress...',
    '✓ Pods are running (3/3)',
    '→ Health checks passing...',
    '✓ Deployment successful!',
    '🚀 Application is LIVE!',
  ];

  useEffect(() => {
    if (!isDeploying) return;

    const stageInterval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev >= stages.length - 1) {
          setTimeout(() => {
            setCurrentStage(0);
            setLogs([]);
          }, 3000);
          return prev;
        }
        return prev + 1;
      });
    }, 2500);

    const logInterval = setInterval(() => {
      setLogs((prev) => {
        if (prev.length >= deploymentLogs.length) return prev;
        return [...prev, deploymentLogs[prev.length]];
      });
    }, 500);

    return () => {
      clearInterval(stageInterval);
      clearInterval(logInterval);
    };
  }, [isDeploying, currentStage]);

  return (
    <div className="deployment-container">
      {/* Pipeline Visualization */}
      <div className="pipeline">
        <div className="pipeline-header">
          <Rocket className="rocket-icon" />
          <span>Live Deployment Pipeline</span>
          <div className="status-badge">
            <span className="status-dot"></span>
            Running
          </div>
        </div>

        <div className="pipeline-stages">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = index === currentStage;
            const isCompleted = index < currentStage;
            
            return (
              <React.Fragment key={stage.label}>
                <motion.div
                  className={`stage ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                  animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
                >
                  <div 
                    className="stage-icon"
                    style={{ 
                      borderColor: isCompleted || isActive ? stage.color : 'var(--text-secondary)',
                      background: isCompleted ? stage.color : 'transparent'
                    }}
                  >
                    {isCompleted ? (
                      <CheckCircle size={20} color="#fff" />
                    ) : isActive ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Loader size={20} style={{ color: stage.color }} />
                      </motion.div>
                    ) : (
                      <Icon size={20} style={{ color: 'var(--text-secondary)' }} />
                    )}
                  </div>
                  <span className="stage-label" style={{ color: isCompleted || isActive ? stage.color : 'var(--text-secondary)' }}>
                    {stage.label}
                  </span>
                </motion.div>
                
                {index < stages.length - 1 && (
                  <div className="connector">
                    <motion.div 
                      className="connector-progress"
                      initial={{ width: '0%' }}
                      animate={{ width: isCompleted ? '100%' : '0%' }}
                      transition={{ duration: 0.5 }}
                      style={{ background: stages[index + 1].color }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Terminal Logs */}
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn-close"></span>
            <span className="btn-minimize"></span>
            <span className="btn-maximize"></span>
          </div>
          <span className="terminal-title">deployment-logs — bash</span>
        </div>
        <div className="terminal-body">
          <AnimatePresence>
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`log-line ${log.startsWith('✓') ? 'success' : log.startsWith('→') ? 'info' : log.startsWith('$') ? 'command' : log.includes('🚀') ? 'deploy' : ''}`}
              >
                {log}
              </motion.div>
            ))}
          </AnimatePresence>
          <motion.span
            className="cursor"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            ▋
          </motion.span>
        </div>
      </div>

      {/* Floating DevOps Icons */}
      <div className="floating-icons">
        {[GitBranch, Container, Database, Shield, Cloud].map((Icon, i) => (
          <motion.div
            key={i}
            className="floating-icon"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Icon size={24} />
          </motion.div>
        ))}
      </div>

      <style>{`
        .deployment-container {
          position: relative;
          padding: 2rem;
          background: var(--glass-bg);
          border-radius: 16px;
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(10px);
          overflow: hidden;
        }

        .pipeline {
          margin-bottom: 1.5rem;
        }

        .pipeline-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--accent-cyan);
        }

        .rocket-icon {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(34, 197, 94, 0.2);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          color: #22c55e;
          margin-left: auto;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .pipeline-stages {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
        }

        .stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .stage-icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .stage-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .connector {
          flex: 1;
          height: 3px;
          background: var(--glass-border);
          margin: 0 5px;
          margin-bottom: 25px;
          border-radius: 2px;
          overflow: hidden;
        }

        .connector-progress {
          height: 100%;
          border-radius: 2px;
        }

        .terminal {
          background: #0d1117;
          border-radius: 8px;
          overflow: hidden;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }

        .terminal-header {
          background: #161b22;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .terminal-buttons {
          display: flex;
          gap: 8px;
        }

        .terminal-buttons span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .btn-close { background: #ff5f57; }
        .btn-minimize { background: #febc2e; }
        .btn-maximize { background: #28c840; }

        .terminal-title {
          color: #8b949e;
          font-size: 0.75rem;
        }

        .terminal-body {
          padding: 15px;
          height: 180px;
          overflow-y: auto;
          scrollbar-width: thin;
        }

        .log-line {
          color: #8b949e;
          line-height: 1.8;
          white-space: nowrap;
        }

        .log-line.command { color: #58a6ff; }
        .log-line.success { color: #3fb950; }
        .log-line.info { color: #d29922; }
        .log-line.deploy { 
          color: #f0883e; 
          font-weight: bold;
          animation: glow 1s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { text-shadow: 0 0 5px #f0883e; }
          to { text-shadow: 0 0 20px #f0883e, 0 0 30px #f97316; }
        }

        .cursor {
          color: var(--accent-cyan);
        }

        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-icon {
          position: absolute;
          top: 20px;
          color: var(--accent-cyan);
          opacity: 0.15;
        }

        @media (max-width: 768px) {
          .pipeline-stages {
            flex-wrap: wrap;
            gap: 15px;
          }
          
          .connector {
            display: none;
          }
          
          .stage-label {
            font-size: 0.6rem;
          }
          
          .stage-icon {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </div>
  );
};

export default DeploymentAnimation;
