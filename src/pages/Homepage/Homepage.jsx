// ============================================
// Homepage.jsx
// ============================================
// The main dashboard page showing live, recent, and upcoming matches
//
// Props:
//   - matches: array of all match objects
//   - stats: array of statistics to display
//
// Note: With React Router, you'd typically fetch data here or receive
// it from a parent/context. Navigation is handled by React Router's
// Link component or useNavigate hook instead of onNavigate prop.

// import { Link } from "react-router-dom"; // For React Router navigation
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import MatchesGrid from "../../components/MatchesGrid/MatchesGrid";
import StatsGrid from "../../components/StatsGrid/StatsGrid";
import ContactCard from "../../components/atoms/ContactCard/ContactCard";
import NewYearBanner from "../../components/atoms/newYearBanner/NewYearBanner";
import "./Homepage.css";

const Homepage = ({ matches, stats }) => {
  // Filter matches by their status
  // .filter() creates a new array with only items that pass the test
  const liveMatches = matches.filter((m) => m.status === "live");

  const recentMatches = matches
    .filter((m) => m.status === "finished")
    .sort((a, b) => {
      const timeA = a.time || "00:00";
      const timeB = b.time || "00:00";

      const dateTimeA = new Date(`${a.date}T${timeA}`);
      const dateTimeB = new Date(`${b.date}T${timeB}`);

      return dateTimeB - dateTimeA;
      // new Date(b) - new Date(a);
    })
    .slice(0, 6); // Get first 2

  const upcomingMatches = matches
    .filter((m) => m.status === "upcoming")
    .slice(0, 6);

  const canceledMatches = matches
    .filter((m) => m.status === "canceled")
    .slice(0, 4);

  return (
    <div className="homepage-container">
      {/* Your existing Hero component goes here */}
      {/* <NewYearBanner /> */}

      {/* Live matches section - only show if there are live matches */}
      {/* Conditional rendering: {condition && <Component />} */}
      {liveMatches.length > 0 && (
        <>
          <SectionHeader
            title="🔴 Ao Vivo Agora"
            linkTo={"/jogos?filter=live"}
            linkText={"Ver todos"}
          />
          <MatchesGrid matches={liveMatches} />
        </>
      )}
      {/* Recent results section */}

      <SectionHeader
        title="Resultados Recentes"
        linkTo={"/jogos?filter=finished"}
        linkText={"Ver todos"}
      />
      <MatchesGrid matches={recentMatches} />

      {/* Upcoming matches section */}
      <SectionHeader
        title="Próximos Jogos"
        linkTo={"/jogos?filter=upcoming"}
        linkText={"Ver todos"}
      />
      <MatchesGrid matches={upcomingMatches} />

      {/* Upcoming matches section */}
      {/* <SectionHeader
        title="Jogos Cancelados"
        linkTo={"/jogos?filter=canceled"}
        linkText={"Ver todos"}
      /> */}
      {/* <MatchesGrid matches={canceledMatches} /> */}

      {/* Statistics section */}
      {/* <SectionHeader title="Estatísticas Rápidas" /> */}
      {/* <StatsGrid stats={stats} /> */}

      {/* --- TEAM REGISTRATION (ONBOARDING) --- */}
      <ContactCard />
    </div>
  );
};

export default Homepage;
