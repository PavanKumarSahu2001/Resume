import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Trophy, Star, Zap, Target } from 'lucide-react';

const StreakTracker = () => {
  const [streak, setStreak] = useState(0);
  const [totalVisits, setTotalVisits] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const storedData = JSON.parse(localStorage.getItem('portfolioStreak') || '{}');
    
    const lastVisit = storedData.lastVisit;
    const currentStreak = storedData.streak || 0;
    const visits = storedData.totalVisits || 0;

    if (lastVisit === today) {
      // Already visited today
      setStreak(currentStreak);
      setTotalVisits(visits);
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toDateString();

      let newStreak;
      if (lastVisit === yesterdayString) {
        // Consecutive day - increase streak
        newStreak = currentStreak + 1;
      } else {
        // Streak broken - start fresh
        newStreak = 1;
      }

      const newVisits = visits + 1;
      
      setStreak(newStreak);
      setTotalVisits(newVisits);

      localStorage.setItem('portfolioStreak', JSON.stringify({
        lastVisit: today,
        streak: newStreak,
        totalVisits: newVisits
      }));

      // Celebrate milestones
      if (newStreak > 1 && (newStreak === 3 || newStreak === 7 || newStreak === 14 || newStreak === 30 || newStreak % 50 === 0)) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 3000);
      }
    }
  }, []);

  const getStreakMessage = () => {
    if (streak >= 30) return "🔥 Legendary! You're on fire!";
    if (streak >= 14) return "⚡ Amazing dedication!";
    if (streak >= 7) return "🌟 One week strong!";
    if (streak >= 3) return "💪 Keep it up!";
    return "👋 Welcome back!";
  };

  const getStreakColor = () => {
    if (streak >= 30) return '#FFD700';
    if (streak >= 14) return '#FF6B6B';
    if (streak >= 7) return '#FF9500';
    if (streak >= 3) return '#64FFDA';
    return 'var(--text-secondary)';
  };

  const getBadge = () => {
    if (streak >= 30) return { icon: <Trophy size={16} />, label: 'Legend' };
    if (streak >= 14) return { icon: <Star size={16} />, label: 'Dedicated' };
    if (streak >= 7) return { icon: <Zap size={16} />, label: 'Consistent' };
    if (streak >= 3) return { icon: <Target size={16} />, label: 'Explorer' };
    return { icon: <Flame size={16} />, label: 'Visitor' };
  };

  const badge = getBadge();

  return (
    <>
      {/* Celebration Overlay */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.8)',
              zIndex: 1000,
              pointerEvents: 'none'
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "linear" }}
              >
                <Trophy size={80} color="#FFD700" />
              </motion.div>
              <h2 style={{ color: '#FFD700', fontSize: '2rem', marginTop: '20px' }}>
                🎉 {streak} Day Streak!
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>{getStreakMessage()}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Streak Widget */}
      <motion.div
        className="streak-widget"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99,
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
            borderRadius: isExpanded ? '16px' : '50px',
            padding: isExpanded ? '20px' : '12px 20px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: isExpanded ? 'column' : 'row',
            alignItems: 'center',
            gap: isExpanded ? '15px' : '10px',
            minWidth: isExpanded ? '200px' : 'auto',
            transition: 'all 0.3s ease',
            boxShadow: `0 0 20px ${getStreakColor()}40`
          }}
        >
          {/* Flame Icon */}
          <motion.div
            animate={streak >= 3 ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Flame size={24} color={getStreakColor()} />
          </motion.div>

          {/* Streak Count */}
          <span style={{ 
            color: getStreakColor(), 
            fontWeight: 'bold',
            fontFamily: 'var(--font-mono)',
            fontSize: '1.2rem'
          }}>
            {streak}
          </span>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ width: '100%', textAlign: 'center' }}
              >
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.85rem',
                  marginBottom: '10px'
                }}>
                  {getStreakMessage()}
                </p>
                
                {/* Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: `${getStreakColor()}20`,
                  padding: '6px 12px',
                  borderRadius: '20px',
                  color: getStreakColor(),
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {badge.icon}
                  {badge.label}
                </div>

                {/* Stats */}
                <div style={{
                  marginTop: '15px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  fontSize: '0.75rem'
                }}>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>{streak}</span>
                    <br />Day Streak
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-purple)', fontWeight: 'bold' }}>{totalVisits}</span>
                    <br />Total Visits
                  </div>
                </div>

                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.7rem',
                  marginTop: '10px',
                  opacity: 0.7
                }}>
                  Visit daily to build your streak!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
};

export default StreakTracker;
