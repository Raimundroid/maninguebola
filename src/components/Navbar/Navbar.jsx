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

  // SVGs for the navItems icons
  const HomeIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 155.139 155.139"
      height="20px"
      width="20px"
      fill="currentColor"
      stroke="currentColor"
      // strokeWidth="2"
      // strokeLinecap="round"
      // strokeLinejoin="round"
      className={className}
    >
      <path
        // style="fill:#010002;"
        d="M125.967,51.533V20.314h-16.862V38.06L77.569,12.814L0,74.869h21.361v67.455h112.416v-67.45h21.361 L125.967,51.533z M125.925,134.472H97.546V82.37H57.58v52.103H29.202V71.146l48.356-38.689l48.355,38.689v63.326H125.925z"
      ></path>
    </svg>
  );
  const MatchIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height="20px"
      width="20px"
      fill="currentColor"
      stroke="currentColor"
      // strokeWidth="2"
      // strokeLinecap="round"
      // strokeLinejoin="round"
      className={className}
    >
      <path d="M0,71.442v369.116h512V71.442H0z M273.86,205.491c20.788,7.373,35.721,27.225,35.721,50.509s-14.933,43.137-35.721,50.509 V205.491z M35.721,190.512h47.628v130.977H35.721V190.512z M238.14,306.509c-20.788-7.373-35.721-27.225-35.721-50.509 c0-23.284,14.933-43.137,35.721-50.509V306.509z M238.14,168.494c-40.712,8.297-71.442,44.38-71.442,87.506 s30.729,79.208,71.442,87.506v61.332H35.721v-47.628h59.535c13.131,0,23.814-10.683,23.814-23.814V178.605 c0-13.131-10.683-23.814-23.814-23.814H35.721v-47.628H238.14V168.494z M476.279,321.488h-47.628V190.512h47.628V321.488z M476.279,154.791h-59.535c-13.131,0-23.814,10.683-23.814,23.814v154.791c0,13.131,10.683,23.814,23.814,23.814h59.535v47.628 H273.86v-61.332c40.712-8.297,71.442-44.38,71.442-87.506s-30.73-79.208-71.442-87.506v-61.332h202.419V154.791z"></path>
    </svg>
  );

  const StandingsIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 491.52 491.52"
      height="20px"
      width="20px"
      fill="currentColor"
      stroke="currentColor"
      // strokeWidth="2"
      // strokeLinecap="round"
      // strokeLinejoin="round"
      className={className}
    >
      <polygon points="266.24,143.36 245.76,81.92 226.427,143.36 163.84,143.36 214.467,178.217 195.133,237.732 245.76,204.8 296.387,237.732 277.053,178.217 327.68,143.36 "></polygon>{" "}
      <path d="M433.355,62.149l-3.275-0.1V20.48C430.08,9.169,420.911,0,409.6,0H81.92C70.609,0,61.44,9.169,61.44,20.48v41.56 l-3.892,0.117C26.118,62.149,0.002,89.195,0.002,121.295v70.451c0,36.984,19.681,71.675,51.423,90.701l3.617,1.712l53.518,19.186 c20.689,23.439,46.858,42.159,75.759,53.443v32.332h-14.725c-37.116,0-67.195,30.079-67.195,67.195v14.725 c0,11.311,9.169,20.48,20.48,20.48h245.76c11.311,0,20.48-9.169,20.48-20.48v-14.725c0-37.116-30.079-67.195-67.195-67.195H307.2 v-32.332c28.901-11.284,55.07-30.005,75.759-53.443l53.518-19.186l3.617-1.712c31.742-19.025,51.423-53.716,51.423-90.701 v-70.451C491.518,89.195,465.402,62.149,433.355,62.149z M70.891,246.328c-18.473-11.825-29.929-32.626-29.929-54.582v-70.451 c0-9.793,8.105-18.186,17.203-18.186l3.275-0.098v81.862c0,21.569,4.435,42.698,12.384,62.506L70.891,246.328z M347.527,450.56 H143.993c2.622-11.724,13.085-20.48,25.602-20.48H204.8h81.92h35.205C334.442,430.08,344.906,438.836,347.527,450.56z M266.24,367.408v21.712h-40.96v-21.807c5.036,0.644,10.109,1.062,15.211,1.231c0.074,0.003,0.148,0.007,0.222,0.009 c1.68,0.053,3.362,0.087,5.047,0.087c1.563,0,3.123-0.025,4.682-0.071c1.414-0.039,2.83-0.105,4.246-0.18 c0.027-0.002,0.054-0.002,0.081-0.004C258.587,368.182,262.411,367.865,266.24,367.408z M252.855,327.465 c-0.242,0.013-0.483,0.025-0.725,0.037c-0.854,0.046-1.708,0.084-2.563,0.112c-1.271,0.038-2.541,0.066-3.807,0.066 c-1.402,0-2.81-0.029-4.224-0.084c-0.051-0.002-0.101-0.005-0.152-0.007c-10.007-0.405-20.289-2.188-30.802-5.281 c-0.866-0.255-1.732-0.446-2.595-0.585C149.915,303.436,102.4,245.622,102.4,184.873V40.96h286.72v143.913 C389.12,256.059,323.876,323.22,252.855,327.465z M450.558,191.746c0,21.956-11.457,42.757-29.929,54.582l-2.932,1.051 c7.948-19.808,12.384-40.937,12.384-62.506v-81.854l2.657,0.08c9.716,0.009,17.821,8.403,17.821,18.196V191.746z"></path>
    </svg>
  );

  const TeamsIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500.152 500.152"
      height="20px"
      width="20px"
      fill="currentColor"
      stroke="currentColor"
      // strokeWidth="2"
      // strokeLinecap="round"
      // strokeLinejoin="round"
      className={className}
    >
      <path d="M461.944,110.436C453.52,83.74,434.32,61.252,409.28,48.732L315.96,2.076H184.184L90.864,48.74 C65.824,61.26,46.632,83.748,38.2,110.444L0,231.412l95.44,28.632l18.632-62.128v300.16h272v-300.16l18.64,62.12l95.44-28.632 L461.944,110.436z M303.256,18.076c-5.136,12.2-18.752,32-53.184,32c-34.128,0-47.856-19.784-53.104-32H303.256z M114.072,162.076 h-5.952l-23.408,78.04l-64.56-19.368l5.808-18.384l53.92,15.408l4.4-15.384L30.784,187.1l22.688-71.84 C60.6,92.668,76.84,73.636,98.032,63.052l16.04-8.032V162.076z M162.072,482.076h-32v-312v-8V47.02l19.304-9.656 c2.4,6.288,6.408,14.96,12.696,24.144V482.076z M202.072,482.076h-24V79.924c6.624,6.04,14.592,11.52,24,15.952V482.076z M242.072,482.076h-24V101.804c7.264,2.008,15.28,3.28,24,3.816V482.076z M282.072,482.076h-24V105.62 c8.72-0.528,16.736-1.8,24-3.816V482.076z M322.072,482.076h-24v-386.2c9.408-4.432,17.376-9.912,24-15.952V482.076z M250.072,90.076c-60.32,0-80.872-43.696-86.424-59.848l17.584-8.792c6.128,15.784,23.48,44.64,68.84,44.64 s62.712-28.856,68.832-44.64l17.544,8.776C330.76,46.284,309.784,90.076,250.072,90.076z M370.072,162.076v8v312h-32V61.508 c6.288-9.184,10.296-17.848,12.696-24.144l19.304,9.656V162.076z M392.024,162.076h-5.952V55.02l16.056,8.024 c21.184,10.592,37.432,29.624,44.56,52.208l22.688,71.84L415.88,202.38l4.4,15.384l53.92-15.408l5.808,18.384l-64.56,19.368 L392.024,162.076z"></path>
    </svg>
  );

  const PlayersIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 434.736 434.736"
      height="20px"
      width="20px"
      fill="currentColor"
      stroke="currentColor"
      // strokeWidth="2"
      // strokeLinecap="round"
      // strokeLinejoin="round"
      className={className}
    >
      <g>
        <path d="M357.205,275.198l-9.731-73.657c-0.12-0.865-0.329-1.811-0.612-2.668l-0.428-1.293l-25.261-76.324 c-0.177-0.528-0.392-1.108-0.607-1.63c-4.984-12-86.54-42.732-97.354-41.155L90.175,97.869 c-7.348,1.063-12.935,7.448-12.805,15.067c0.143,8.265,6.957,14.849,15.221,14.706l107.767-1.848l-44.295,115.861l-54.117,79.14 c-4.766,6.958-4.115,16.542,2.019,22.786c6.97,7.094,18.372,7.195,25.466,0.225l64.957-63.814l-13.498,46.399l-54.54,80.312 c-5.035,7.475-3.81,17.775,3.217,23.753c7.55,6.425,18.877,5.512,25.302-2.037l66.124-77.707c0.946-1.123,1.79-2.455,2.392-3.877 l1.047-2.472l67.891-170.07l15.07,36.286l12.991,70.446c1.804,9.68,10.903,16.409,20.78,15.104 C351.372,294.778,358.555,285.407,357.205,275.198z"></path>
        <circle cx="295.325" cy="44.742" r="44.742"></circle>
        <path d="M295.325,344.734c-24.813,0-45,20.187-45,45s20.188,45,45,45c24.813,0,45-20.187,45-45S320.139,344.734,295.325,344.734z M326.986,403.497l-7.945-13.763l7.945-13.763h1.09c1.786,4.234,2.775,8.885,2.775,13.763s-0.989,9.528-2.775,13.763H326.986z M307.96,356.538l-4.688,8.119h-15.893l-4.688-8.119c3.928-1.501,8.185-2.33,12.634-2.33 C299.775,354.208,304.031,355.037,307.96,356.538z M311.219,389.734l-7.947,13.763h-15.893l-7.946-13.763l7.946-13.763h15.893 L311.219,389.734z M262.575,375.971h1.09l7.945,13.763l-7.945,13.763h-1.09c-1.786-4.234-2.776-8.885-2.776-13.763 S260.789,380.206,262.575,375.971z M282.691,422.93l4.688-8.119h15.893l4.688,8.119c-3.929,1.501-8.185,2.33-12.635,2.33 C290.876,425.261,286.619,424.431,282.691,422.93z"></path>
      </g>
    </svg>
  );

  const PlayersStatsIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 21 21"
      height="20px"
      width="20px"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      // strokeLinecap="round"
      // strokeLinejoin="round"
      className={className}
    >
      <g transform="translate(-419.000000, -800.000000)">
        <g transform="translate(56.000000, 160.000000)">
          <path d="M374.55,657 C374.55,657.552 374.0796,658 373.5,658 C372.9204,658 372.45,657.552 372.45,657 L372.45,643 C372.45,642.448 372.9204,642 373.5,642 C374.0796,642 374.55,642.448 374.55,643 L374.55,657 Z M374.55,640 L372.45,640 C371.28975,640 370.35,640.895 370.35,642 L370.35,658 C370.35,659.105 371.28975,660 372.45,660 L374.55,660 C375.71025,660 376.65,659.105 376.65,658 L376.65,642 C376.65,640.895 375.71025,640 374.55,640 L374.55,640 Z M367.2,657 C367.2,657.552 366.7296,658 366.15,658 C365.5704,658 365.1,657.552 365.1,657 L365.1,647 C365.1,646.448 365.5704,646 366.15,646 C366.7296,646 367.2,646.448 367.2,647 L367.2,657 Z M367.2,644 L365.1,644 C363.93975,644 363,644.895 363,646 L363,658 C363,659.105 363.93975,660 365.1,660 L367.2,660 C368.36025,660 369.3,659.105 369.3,658 L369.3,646 C369.3,644.895 368.36025,644 367.2,644 L367.2,644 Z M381.9,657 C381.9,657.552 381.4296,658 380.85,658 C380.2704,658 379.8,657.552 379.8,657 L379.8,653 C379.8,652.448 380.2704,652 380.85,652 C381.4296,652 381.9,652.448 381.9,653 L381.9,657 Z M381.9,650 L379.8,650 C378.63975,650 377.7,650.895 377.7,652 L377.7,658 C377.7,659.105 378.63975,660 379.8,660 L381.9,660 C383.06025,660 384,659.105 384,658 L384,652 C384,650.895 383.06025,650 381.9,650 L381.9,650 Z"></path>
        </g>
      </g>
    </svg>
  );

  const AboutIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      height="20px"
      width="20px"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      // strokeLinecap="round"
      // strokeLinejoin="round"
      className={className}
    >
      <g transform="translate(-420.000000, -959.000000)">
        <g transform="translate(56.000000, 160.000000)">
          <path d="M380.872728,808.94 C380.872728,810.045 379.977728,810.94 378.872728,810.94 C377.767728,810.94 376.872728,810.045 376.872728,808.94 C376.872728,807.835 377.767728,806.94 378.872728,806.94 C379.977728,806.94 380.872728,807.835 380.872728,808.94 M375.872728,808.94 C375.872728,810.045 374.977728,810.94 373.872728,810.94 C372.767728,810.94 371.872728,810.045 371.872728,808.94 C371.872728,807.835 372.767728,806.94 373.872728,806.94 C374.977728,806.94 375.872728,807.835 375.872728,808.94 M370.872728,808.94 C370.872728,810.045 369.977728,810.94 368.872728,810.94 C367.767728,810.94 366.872728,810.045 366.872728,808.94 C366.872728,807.835 367.767728,806.94 368.872728,806.94 C369.977728,806.94 370.872728,807.835 370.872728,808.94 M381.441728,817 C381.441728,817 378.825728,816.257 377.018728,816.257 C375.544728,816.257 375.208728,816.518 373.957728,816.518 C369.877728,816.518 366.581728,813.508 366.075728,809.851 C365.403728,804.997 369.268728,800.999 373.957728,801 C377.900728,801 381.002728,803.703 381.732728,807.083 C382.000728,808.318 381.973728,809.544 381.654728,810.726 C381.274728,812.131 381.291728,813.711 381.703728,815.294 C381.914728,816.103 382.302728,817 381.441728,817 M383.917728,815.859 C383.917728,815.859 383.640728,814.794 383.639728,814.79 C383.336728,813.63 383.271728,812.405 383.584728,811.248 C383.970728,809.822 384.035728,808.268 383.687728,806.66 C382.767728,802.405 378.861728,799 373.957728,799 C367.999728,798.999 363.264728,804.127 364.094728,810.125 C364.736728,814.766 368.870728,818.518 373.957728,818.518 C375.426728,818.518 375.722728,818.257 377.019728,818.257 C378.583728,818.257 380.795728,818.919 380.795728,818.919 C382.683728,819.392 384.399728,817.71 383.917728,815.859"></path>
        </g>
      </g>
    </svg>
  );

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
    {
      id: "home",
      path: "/",
      label: "Início",
      icon: <HomeIcon className="svg-icon" />,
    },
    {
      id: "matches",
      path: "/jogos",
      label: "Jogos",
      icon: <MatchIcon className="svg-icon" />,
    },
    {
      id: "standings",
      path: "/classificacao",
      label: "Classificação",
      icon: <StandingsIcon className="svg-icon" />,
    },
    {
      id: "teams",
      path: "/equipas",
      label: "Equipas",
      icon: <TeamsIcon className="svg-icon" />,
      // icon: "🎽",
    },
    {
      id: "players",
      path: "/jogadores",
      label: "Jogadores",
      icon: <PlayersIcon className="svg-icon" />,
      // icon: "👥",
    },
    {
      id: "statistics",
      path: "/estatisticas",
      label: "Estatísticas",
      icon: <PlayersStatsIcon className="svg-icon" />,
      // icon: "📊",
    },
    {
      id: "about",
      path: "/sobre",
      label: "Sobre",
      icon: <AboutIcon className="svg-icon" />,
      // icon: "❔",
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
