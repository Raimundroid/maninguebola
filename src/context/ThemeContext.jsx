// NOT USED YET

// // ============================================
// // ThemeContext.jsx
// // ============================================
// //
// // WHAT IS THIS?
// // -------------
// // ThemeContext is a React Context that manages the app's color theme (light/dark).
// // It allows ANY component in your app to access and change the theme without
// // passing props through every level of components (called "prop drilling").
// //
// // HOW IT WORKS:
// // -------------
// // 1. We create a "context" - think of it as a global variable for React
// // 2. ThemeProvider wraps your entire app and holds the theme state
// // 3. Any child component can use useTheme() to read or change the theme
// //
// // WHEN TO USE:
// // ------------
// // - Wrap your App with <ThemeProvider> once at the top level
// // - Call useTheme() in any component that needs to:
// //   a) Display differently based on theme (read 'theme' value)
// //   b) Toggle the theme (call 'toggleTheme' function)
// //
// // EXAMPLE USAGE:
// // --------------
// // In your Navbar: const { theme, toggleTheme } = useTheme();
// // Then: <button onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button>

// import { createContext, useContext, useState, useEffect } from 'react';

// // Step 1: Create the context (empty container for now)
// // This creates a "bucket" that will hold our theme data
// const ThemeContext = createContext();

// // Step 2: Create the Provider component
// // This component will WRAP your entire app and PROVIDE theme data to all children
// export const ThemeProvider = ({ children }) => {
//   // Initialize theme state
//   // We use a function inside useState to check localStorage ONLY on first render
//   // This is called "lazy initialization" - it's more efficient
//   const [theme, setTheme] = useState(() => {
//     // Try to get saved theme from browser storage, default to 'light'
//     return localStorage.getItem('theme') || 'light';
//   });

//   // useEffect runs AFTER the component renders
//   // This effect runs every time 'theme' changes
//   useEffect(() => {
//     // Update the HTML element's data-theme attribute
//     // This is what our CSS uses to apply different colors:
//     // [data-theme="dark"] { --text: white; } etc.
//     document.documentElement.setAttribute('data-theme', theme);

//     // Save to localStorage so the theme persists after page refresh
//     localStorage.setItem('theme', theme);
//   }, [theme]); // <-- Dependency array: only run when 'theme' changes

//   // Function to toggle between light and dark
//   // 'prev' is the previous state value - React gives us this to ensure accuracy
//   const toggleTheme = () => {
//     setTheme(prev => prev === 'dark' ? 'light' : 'dark');
//   };

//   // Step 3: Return the Provider with our values
//   // 'value' is what will be available to all children via useTheme()
//   // 'children' is whatever components are wrapped by ThemeProvider
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Step 4: Create a custom hook to easily access the context
// // This is just a shortcut so we don't have to write useContext(ThemeContext) everywhere
// export const useTheme = () => useContext(ThemeContext);
