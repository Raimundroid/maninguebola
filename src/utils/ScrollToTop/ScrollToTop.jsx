// ============================================
// ScrollToTop.jsx
// ============================================
// Automatically scrolls to top of page when route changes
// Place this inside <BrowserRouter> in App.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Get current location/route from React Router
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever pathname changes (user navigates to new page)
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency: run effect when pathname changes

  // This component doesn't render anything
  return null;
};

export default ScrollToTop;
