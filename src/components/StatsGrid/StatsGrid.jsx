// ============================================
// StatsGrid.jsx
// ============================================
// Displays statistics in a responsive grid of cards

import "./StatsGrid.css";

// Individual stat card (internal component)
const StatCard = ({ value, label }) => {
  return (
    <div className="stats-card">
      <div className="stats-card-value">{value}</div>
      <div className="stats-card-label">{label}</div>
    </div>
  );
};

// Main grid component
// Props:
//   - stats: array of stat objects [{ value: '36', label: 'Jogos' }, ...]
const StatsGrid = ({ stats }) => {
  return (
    <div className="stats-card-grid">
      {stats.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default StatsGrid;
