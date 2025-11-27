// ============================================
// SectionHeader.jsx
// ============================================
// A header for content sections with optional "View all" link
// Props:
//   - title: the section title text
//   - linkText: optional text for the link (e.g., "Ver todos")
//   - onLinkClick: optional function to call when link is clicked

const SectionHeader = ({ title, linkText, onLinkClick }) => {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "700",
      color: "var(--text)",
    },
    link: {
      color: "var(--primary)",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.header}>
      <h2 style={styles.title}>{title}</h2>
      {/* Only render link if linkText is provided */}
      {linkText && (
        <a
          href="#"
          style={styles.link}
          onClick={(e) => {
            e.preventDefault(); // Prevent page navigation
            onLinkClick?.(); // Call handler if it exists (optional chaining)
          }}
        >
          {linkText} →
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
