import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Server, Activity, Cpu, HardDrive, Wifi, CheckCircle2, AlertTriangle } from 'lucide-react';

const InfrastructureMonitor = () => {
  const [metrics, setMetrics] = useState({
    cpu: 45,
    memory: 62,
    network: 78,
    pods: { running: 12, total: 12 },
    uptime: '99.99%',
  });

  const [nodes, setNodes] = useState([
    { name: 'node-1', status: 'healthy', region: 'us-east-1' },
    { name: 'node-2', status: 'healthy', region: 'us-west-2' },
    { name: 'node-3', status: 'healthy', region: 'eu-west-1' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        cpu: Math.min(100, Math.max(20, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.min(100, Math.max(30, prev.memory + (Math.random() - 0.5) * 8)),
        network: Math.min(100, Math.max(40, prev.network + (Math.random() - 0.5) * 15)),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value) => {
    if (value < 60) return '#22c55e';
    if (value < 80) return '#eab308';
    return '#ef4444';
  };

  return (
    <div className="infra-monitor">
      <div className="monitor-header">
        <Activity className="pulse-icon" />
        <span>Infrastructure Status</span>
        <div className="live-badge">
          <span className="live-dot"></span>
          LIVE
        </div>
      </div>

      <div className="metrics-grid">
        {/* CPU Metric */}
        <div className="metric-card">
          <div className="metric-icon">
            <Cpu size={20} />
          </div>
          <div className="metric-info">
            <span className="metric-label">CPU Usage</span>
            <div className="metric-bar">
              <motion.div 
                className="metric-fill"
                animate={{ width: `${metrics.cpu}%` }}
                transition={{ duration: 0.5 }}
                style={{ background: getStatusColor(metrics.cpu) }}
              />
            </div>
            <span className="metric-value" style={{ color: getStatusColor(metrics.cpu) }}>
              {metrics.cpu.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Memory Metric */}
        <div className="metric-card">
          <div className="metric-icon">
            <HardDrive size={20} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Memory</span>
            <div className="metric-bar">
              <motion.div 
                className="metric-fill"
                animate={{ width: `${metrics.memory}%` }}
                transition={{ duration: 0.5 }}
                style={{ background: getStatusColor(metrics.memory) }}
              />
            </div>
            <span className="metric-value" style={{ color: getStatusColor(metrics.memory) }}>
              {metrics.memory.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Network Metric */}
        <div className="metric-card">
          <div className="metric-icon">
            <Wifi size={20} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Network I/O</span>
            <div className="metric-bar">
              <motion.div 
                className="metric-fill"
                animate={{ width: `${metrics.network}%` }}
                transition={{ duration: 0.5 }}
                style={{ background: getStatusColor(metrics.network) }}
              />
            </div>
            <span className="metric-value" style={{ color: getStatusColor(metrics.network) }}>
              {metrics.network.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      {/* Nodes Status */}
      <div className="nodes-section">
        <div className="nodes-header">
          <Server size={16} />
          <span>Kubernetes Nodes</span>
          <span className="pods-count">{metrics.pods.running}/{metrics.pods.total} pods</span>
        </div>
        <div className="nodes-list">
          {nodes.map((node, index) => (
            <motion.div 
              key={node.name}
              className="node-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="node-status">
                {node.status === 'healthy' ? (
                  <CheckCircle2 size={14} color="#22c55e" />
                ) : (
                  <AlertTriangle size={14} color="#eab308" />
                )}
              </div>
              <span className="node-name">{node.name}</span>
              <span className="node-region">{node.region}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Uptime Badge */}
      <div className="uptime-section">
        <span className="uptime-label">Uptime</span>
        <span className="uptime-value">{metrics.uptime}</span>
      </div>

      <style>{`
        .infra-monitor {
          background: var(--glass-bg);
          border-radius: 16px;
          border: 1px solid var(--glass-border);
          padding: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .monitor-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--accent-cyan);
        }

        .pulse-icon {
          animation: pulse-scale 2s infinite;
        }

        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .live-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(239, 68, 68, 0.2);
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.65rem;
          color: #ef4444;
          margin-left: auto;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background: #ef4444;
          border-radius: 50%;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .metrics-grid {
          display: grid;
          gap: 12px;
          margin-bottom: 1.5rem;
        }

        .metric-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }

        .metric-icon {
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .metric-info {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .metric-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          width: 80px;
        }

        .metric-bar {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .metric-fill {
          height: 100%;
          border-radius: 3px;
          transition: background 0.3s ease;
        }

        .metric-value {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: bold;
          width: 50px;
          text-align: right;
        }

        .nodes-section {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 1rem;
        }

        .nodes-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }

        .pods-count {
          margin-left: auto;
          color: #22c55e;
        }

        .nodes-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .node-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
        }

        .node-name {
          color: var(--text-primary);
        }

        .node-region {
          margin-left: auto;
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .uptime-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 12px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 8px;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .uptime-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .uptime-value {
          font-family: var(--font-mono);
          font-size: 1rem;
          font-weight: bold;
          color: #22c55e;
        }
      `}</style>
    </div>
  );
};

export default InfrastructureMonitor;
