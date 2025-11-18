import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

import MatchesPage from "./pages/MatchesPage/MatchesPage.jsx";
import PlayersPage from "./pages/PlayersPage/PlayersPage.jsx";
import StandingsPage from "./pages/StandingsPage/StandingsPage.jsx";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage.jsx";

import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path="/jogos" element={<MatchesPage />} />
            <Route path="/jogadores" element={<PlayersPage />} />
            <Route path="/classificacao" element={<StandingsPage />} />
            <Route path="/estatistica" element={<StatisticsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// // import { useState } from "react";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar.jsx"
// import "./App.css";

// function App() {
//   // const [count, setCount] = useState(0);

//   return (
//     <>
//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <h1>Vite + React</h1>
//       <h2>Just a Test</h2>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//       <div className="coming-soon-container">
//         <h1>⚽ManingueBola⚽</h1>
//         <p>... coming soon ...</p>
//       </div>
//     </>
//   );
// }

// export default App;
