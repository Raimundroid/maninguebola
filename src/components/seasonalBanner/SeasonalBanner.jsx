import "./SeasonalBanner.css";

/*
  SeasonalBanner
  ---------------
  A single, reusable banner that displays time-based messages
  (New Year, holidays, special events) based on the browser date.

  Key principles:
  - Client-side only (perfect for static sites)
  - Config-driven (no hardcoded UI logic)
  - Conditional rendering (zero DOM when inactive)
*/

const SeasonalBanner = () => {
  // Get today's date once (no reactivity needed, no re-renders)
  const today = new Date();

  const currentMonth = today.getMonth(); // 0 = January
  const currentDay = today.getDate();
  const currentYear = today.getFullYear();

  /*
    Central configuration object.
    To add a new seasonal banner:
    - Add a new entry here
    - No component changes required
  */
  const seasons = [
    {
      id: "new-year",
      start: { month: 0, day: 1 }, // Jan 1
      end: { month: 0, day: 15 }, // Jan 15
      title: `🎉 Happy New Year ${currentYear}! 🎉`,
      message: "Wishing you growth, success, and great moments this year ✨",
      backgroundImage: "/assets/new-year.jpg",
      ariaLabel: `Happy New Year ${currentYear} celebration banner`,
    },
    // Future examples:
    // {
    //   id: "independence-day",
    //   start: { month: 5, day: 25 },
    //   end: { month: 5, day: 25 },
    //   title: "🇲🇿 Happy Independence Day",
    //   message: "Celebrating unity and progress together",
    //   backgroundImage: "/assets/independence.jpg",
    //   ariaLabel: "Independence Day celebration banner",
    // },
  ];

  /*
    Find the first season that matches today's date.
    This allows:
    - One active banner at a time
    - Predictable rendering
  */
  const activeSeason = seasons.find((season) => {
    const starts =
      currentMonth > season.start.month ||
      (currentMonth === season.start.month && currentDay >= season.start.day);

    const ends =
      currentMonth < season.end.month ||
      (currentMonth === season.end.month && currentDay <= season.end.day);

    return starts && ends;
  });

  // If no season matches, render nothing (best performance)
  if (!activeSeason) return null;

  return (
    /*
      Semantic section:
      - Improves accessibility
      - Helps screen readers understand page structure
      - Correct since this is a distinct content block
    */
    <section
      className="seasonal-banner"
      aria-label={activeSeason.ariaLabel}
      style={{
        /*
          Inline style is used ONLY for dynamic data (image),
          while layout & visuals remain in CSS.
          This is a best-practice balance.
        */
        backgroundImage: `url(${activeSeason.backgroundImage})`,
      }}
    >
      <div className="seasonal-banner__overlay">
        {/* h2 is correct because this sits under the main hero (h1) */}
        <h2 className="seasonal-banner__title">{activeSeason.title}</h2>

        <p className="seasonal-banner__text">{activeSeason.message}</p>
      </div>
    </section>
  );
};

export default SeasonalBanner;
