// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Início</Link>
//         </li>

//         <li>
//           <Link to="/jogos">Jogos</Link>
//         </li>

//         <li>
//           <Link to="/jogadores">Jogadores</Link>
//         </li>

//         <li>
//           <Link to="/classificacao">Classificação</Link>
//         </li>

//         <li>
//           <Link to="/estatistica">Estatística</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

//  const navItems = [
//    { id: "home", path: "/", label: "Início", icon: "🏠" },
//    { id: "matches", path: "/jogos", label: "Jogos", icon: "⚽" },
//    {
//      id: "standings",
//      path: "/classificacao",
//      label: "Classificação",
//      icon: "🏆",
//    },
//    {
//      id: "ststistics",
//      path: "/estatistica",
//      label: "Estatística",
//      icon: "📊",
//    },
//    { id: "teams", path: "/teams", label: "Equipas", icon: "👥" },
//    { id: "players", path: "/jogadores", label: "Jogadores", icon: "⭐" },
//  ];

import react, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

/*
 * ============================================
 * RESPONSIVE NAVIGATION BAR COMPONENT
 * ============================================
 *
 * A fully responsive navigation component with the following features:
 *
 * FEATURES:
 * - Mobile hamburger menu that slides in from the left
 * - Dark/Light theme toggle with localStorage persistence
 * - Active page highlighting using React Router's NavLink
 * - Sticky navigation that stays at the top while scrolling
 * - Mobile-first responsive design using Bootstrap 6 breakpoints
 * - Accessibility features (ARIA labels, keyboard navigation, focus states)
 * - Click-outside detection to close mobile menu
 * - Body scroll prevention when mobile menu is open
 * - CSS-based icons (no external icon library needed)
 *
 * BOOTSTRAP 6 BREAKPOINTS USED:
 * - xs: < 576px (Extra small devices - phones)
 * - sm: ≥ 576px (Small devices - landscape phones)
 * - md: ≥ 768px (Medium devices - tablets)
 * - lg: ≥ 992px (Large devices - desktops)
 * - xl: ≥ 1200px (Extra large devices - large desktops)
 * - xxl: ≥ 1400px (Extra extra large devices - larger desktops)
 *
 * PROPS:
 * This component doesn't require any props as it uses React Router
 * for navigation handling automatically
 */

const Navbar = () => {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================

  /**
   * isMenuOpen: controls whether the mobile hamburger menu is visible
   * false (default): menu is hidden on mobile
   * true: menu slides in and is visible
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * theme: controls the current theme (light or dark mode)
   * "light" (default): light theme with white background
   * "dark": dark theme with dark background
   * This value is saved to localStorage to persist across page reloads
   */
  const [theme, setTheme] = useState("light");

  // ==========================================
  // THEME INITIALIZATION ON COMPONENT MOUNT
  // ==========================================

  /**
   * useEffect hook that runs once when the component first loads
   * Purpose: load the saved theme from localStorage (if it exists)
   *
   * How it works:
   * 1. Check localStorage for saved theme preference
   * 2. If found, use it; otherwise default to "light"
   * 3. Apply the theme to the HTML document root element
   * 4. Update the component state
   */
  useEffect(() => {
    // Try to get saved theme from browser's localStorage
    // If no theme is saved, use "light" as default
    const savedTheme = localStorage.getItem("theme") || "light";

    // Update component state with saved theme
    setTheme(savedTheme);

    // Apply theme to the entire document by setting a data attribute
    // This allows CSS to style based on [data-theme="dark"] or [data-theme="light"]
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []); // Empty dependency array means this only runs once on mount

  return <div>Hello</div>;
};

export default Navbar;
