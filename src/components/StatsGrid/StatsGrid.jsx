// ============================================
// StatsGrid.jsx
// ============================================
// Displays statistics in a responsive grid of cards

// Individual stat card (internal component)
const StatCard = ({ value, label }) => {
  const styles = {
    card: {
      background: "var(--card-bg)",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
    },
    value: {
      fontSize: "32px",
      fontWeight: "700",
      color: "var(--primary)",
      marginBottom: "4px",
    },
    label: {
      fontSize: "13px",
      color: "var(--text-light)",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.value}>{value}</div>
      <div style={styles.label}>{label}</div>
    </div>
  );
};

// Main grid component
// Props:
//   - stats: array of stat objects [{ value: '36', label: 'Jogos' }, ...]
const StatsGrid = ({ stats }) => {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "16px",
      marginBottom: "32px",
    },
  };

  return (
    <div style={styles.grid}>
      {stats.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default StatsGrid;
