import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

/**
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
 * - Mobile-first responsive design using Bootstrap's 6 breakpoints
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
   *
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

  // ==========================================
  // NAVIGATION ITEMS CONFIGURATION
  // ==========================================

  /**
   * Array of navigation menu items
   * Each item contains:
   * - id: unique identifier (for React key prop)
   * - path: the route path that React Router will navigate to
   * - label: display text shown in the menu
   * - icon: Emoji icon displayed next to the label
   */
  const navItems = [
    { id: "home", path: "/", label: "Início", icon: "🏠" },
    { id: "matches", path: "/jogos", label: "Jogos", icon: "🆚" },
    { id: "players", path: "/jogadores", label: "Jogadores", icon: "👥" },
    {
      id: "standings",
      path: "/classificacao",
      label: "Classificação",
      icon: "🏆",
    },
    {
      id: "statistics",
      path: "/estatisticas",
      label: "Estatísticas",
      icon: "📊",
    },
    {
      id: "teams",
      path: "/equipas",
      label: "Equipas",
      icon: "🎽",
    },
  ];

  // ==========================================
  // EVENT HANDLERS
  // ==========================================

  /**
   * toggleMenu: Opens or close the mobile hamburger menu
   *
   * When called:
   * If menu is closed (false),it opens (becomes true)
   * If menu is open (true),it closes (becomes false)
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle between true and false
  };

  /**
   * handleNavClick:Called when a navigation link is clicked
   *
   * Purpose: Close the mobile menu after navigation
   * This ensures the menu does not stay open after the user selects a page
   */
  const handleNavClick = () => {
    setIsMenuOpen(false); // Close mobile menu
    // React Routers' NavLink handles navigation automatically
  };

  /**
   * toggleTheme: Switches between light and dark themes
   *
   * Process:
   * 1. Determine new theme (opposite of current)
   * 2. Update state
   * 3. Apply to document
   * 4. Save to localStorage for persistence
   */
  const toggleTheme = () => {
    // Calculate the opposite theme
    const newTheme = theme === "light" ? "dark" : "light";

    // Update component state
    setTheme(newTheme);

    // Apply theme to entire page via data attribute
    document.documentElement.setAttribute("data-theme", newTheme);

    // Save to localStorage so theme persists after page refresh
    localStorage.setItem("theme", newTheme);
  };

  // ==========================================
  // CLICK OUTSIDE DETECTION
  // ==========================================

  /**
   * useEffect hook  to close menu when clicking outside of it
   *
   * How it works:
   * 1. Add a click listener to the entire document
   * 2. When any click happens, check if it's outide the navbar
   * 3. If outside and menu is open, close the menu
   * 4. Cleanup the listener when component unmounts
   */
  useEffect(() => {
    /**
     * handleClickOutside: Check if click is outside navbar
     * @param {Event} event the cick event from the document
     */
    const handleClickOutside = (event) => {
      // Get the navbar element from the DOM
      const navbar = document.querySelector(".navbar");

      // Check if:
      // 1. Menu is currently open
      // 2. Navbar elemnt exists
      // 3. The clicked element is not inside the navbar
      if (isMenuOpen && navbar && !navbar.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    // Add click listener to entire document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function: Remove listener when component anmounts
    // This prevents memory leaks
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); //Re-runs effect when isMenuOpen changes

  // ==========================================
  // BODY SCROLL PREVENTION
  // ==========================================

  /**
   * useEffect hook to prevent scrolling when mobile menu is open
   *
   * Why: When the mobile menu is open, we do not want users to scroll the page behind it. this creates a better mobile experience
   *
   * How it works:
   * - When menu opens: Set body overflow to "hidden" (prevents scroll)
   * - When menu closes: Set body overflow to "unset" (allows scroll)
   */
  useEffect(() => {
    if (isMenuOpen) {
      //Prevent Scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Allow Scrolling
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]); //Runs whenever isMenuOpen changes

  return (
    //Main navigation container
    //Semantic nav tag for accessibility
    <nav className="navbar">
      {/* Inner container that centers content and adds padding
       Max-width constraints keep content readable on large screens */}
      <div className="nav-container">
        {/* LOGO SECTION */}
        {/* Logo that links to home page
        Uses NavLink for routning, styles as a logo */}
        <NavLink to="/" className="logo" onClick={handleNavClick}>
          {/* Soccer ball Emoji as logo icon */}
          <span className="logo-icon">⚽</span>

          {/* Brand name text
        Hidden on every small screens (xs), shown on sm and up */}
          <span className="logo-text">ManingueBola</span>
        </NavLink>

        {/* DESKTOP & MOBILE NAVIGATIONA LINKS */}
        {/* Unordered list of navigation links
        Behavior:
        - Mobile (xm - sm): Vertical menu that slides in from left
        - Desktop (md +): Horizontal row of links

        The "nav-links--active" is added when menu is open on mobile*/}
        <ul className={`nav-links ${isMenuOpen ? "nav-links--active" : ""}`}>
          {/* Loop through each navigation item and create a link
           map() creates a list item for each entry in navItems array*/}
          {navItems.map((item) => (
            <li key={item.id}>
              {/* NavLink from React Router automatically adds "active"class when route matches

              Benefits of NavLink over regulat anchor (a) tag:
              - Automatic active state detection
              - No page reload (SPA navigation)
              - Browser history management
              - Built-in active style support*/}
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  // Conditional classes:
                  // Base class "nav-link" is always present
                  // "nav-link--active" is added when this route is active
                  `nav-link ${isActive ? "nav-link--active" : ""}`
                }
                onClick={handleNavClick} // Close mobile menu on click
              >
                {/* Icon desplayed before the text */}
                <span className="nav-link-icon">{item.icon}</span>

                {/* Text label for the navigation  item */}
                <span className="nav-link-text">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ACTION BUTTONS (Theme Toggle & Humberger Menu) */}

        {/* Container for action buttons on the right
        Contains: Theme toggle and  mobile menu button*/}
        <div className="nav-actions">
          {/* THEME TOGGLE BUTTON */}
          {/* Button to switch between dark and light themes
          Visible on all screen sizes (mobile and desktop)

          Uses CSS-based icons (Unicode characters) instead of icon library

          Accessibility features:
          - aria-label: Describes button for screen readers
          - title: Shows tooltip on hover */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={theme === "light" ? "Modo escuro" : "Modo claro"}
          >
            {/* Conditional rendering of icon using unicode characters:
            - Light theme: Show Moon icon ☾ (suggests switching to dark mode)
            - Dark theme: Show Sun icon ☀ (suggests switching to dark mode) */}
            <span className="theme-icon">
              {theme === "light" ? "🌙" : "☀️"}
            </span>
          </button>

          {/* MOBILE HAMBURGER MENU BUTTON */}
          {/* Hamburger menu button only visible on mobile devices (xs - sm)
          Hidden on medium screens and up (md +)
          Toggles the mobile navigation menu open/closed

          Use CSS to create the hamburger icon (no icon library needed)

          Accessibility features:
          - aria-label: Describes button for screen readers
          - aria-expanded: Tells screen readers if menu is open/closed
          */}
          <button
            className={`hamburger ${isMenuOpen ? "hamburger--active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {/* Hamburger icon container
            The actual icon is created with CSS pseudo-elements (::before, ::after) and the span itself forms the middle line

            When active, CSS transforms these lines into an X shape*/}
            <span className="hamburger-icon"></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {/* Semi-transparent overlay that appears behind mobile menu

      Purpose:
      - Dims the content page behind the menu
      - Provides a click target to close the menu
      - Only renders when menu is open (conditional rendering)

      When clicked: Closes the mobile menu*/}
      {isMenuOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
