// ============================================
// MatchCard.jsx
// ============================================
// Displays a single match with teams, score, and status
// Props:
//   - match: object containing all match data (teams, scores, status, etc.)

import "./MatchCard.css";

const MatchCard = ({ match }) => {
  // Destructure all properties we need from the match object
  // This is cleaner than writing match.homeTeam, match.awayTeam, etc.
  const {
    homeTeam, // { name: 'FC Eagles', abbr: 'FE' }
    awayTeam, // { name: 'United Lions', abbr: 'UL' }
    homeScore, // number (e.g., 3)
    awayScore, // number (e.g., 2)
    date, // string (e.g., 'Sáb, 16 Nov')
    time, // string (e.g., '14:00')
    status, // 'live' | 'finished' | 'upcoming'
    venue, // string (e.g., 'Campo Principal')
    // ✅ These are now Arrays (e.g. ["Name 1", "Name 2"])
    // default to empty array [] to prevent crash if undefined
    homeScorers = [],
    awayScorers = [],
    info, // optional extra info string
    competition,
    // minute, // current minute if live (e.g., 67)
  } = match;

  // Convert ISO date string to a Date object
  const matchDate = new Date(date);

  // Format the date for display (e.g., "Sat, 16 Nov")
  // You may need to adjust the locale ('pt-MZ' or similar) based on your user base
  const formatted = new Intl.DateTimeFormat("pt-MZ", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(matchDate);

  // Capitalize first letter (just in case locale returns lowercase)
  const formattedDate = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  // Check  if match is currently being played
  const isLive = status === "live";

  return (
    <div className={`match-card ${isLive ? "match-card--live" : ""}`}>
      {/* Only show live badge if match is currently being played */}
      {isLive && (
        <div className="active-badge">
          <span className="pulse-dot"></span>
          AO VIVO {/*  {minute}' */}
        </div>
      )}
      {/* Date and time - show FINALIZADO if match is finished  or (||) show PRÓXIMO if match is upcoming*/}
      <div
        className={`datetime ${
          status === "canceled" ? "canceled-match-datetime" : ""
        }`}
      >
        {formattedDate} • {time}
        {(status === "finished" && " • FINALIZADO") ||
          (status === "upcoming" && " • PRÓXIMO") ||
          (status === "canceled" && " • CANCELADO")}
      </div>

      {/* Teams and score section - 3 column grid */}
      <div className="teams">
        {/* Home team (left) */}
        {/* ------------------------LEFT-------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}

        <div className="team">
          {/* Best practice: Always render the logo, but show the abbreviation
          inside the logo container if the logo is missing. */}
          <div className="team-logo">
            {homeTeam?.logo ? (
              <img
                className="team-logo-img"
                src={homeTeam?.logo}
                alt={homeTeam?.abbr}
                loading="lazy"
                width="48"
                height="48"
              />
            ) : (
              // Fallback if logo path is missing
              homeTeam?.abbr
            )}
          </div>

          {/* <div className="team-name">{homeTeam?.name}</div> */}
          <div className="team-name">
            {/* Show on large screens */}
            <span className="name-full">{homeTeam?.name}</span>

            {/* Show on mobile screens (fallback to full name if shortName is missing) */}
            <span className="name-short">
              {homeTeam?.shortName || homeTeam?.name}
            </span>
          </div>

          {(status === "finished" || status === "live") &&
            homeScorers.length > 0 && (
              <div className="scorers home-scorers">
                {homeScorers.map((scorer, index) => (
                  <span key={index} className="scorer-name">
                    {scorer} <span className="ball-icon">⚽</span>
                  </span>
                ))}
              </div>
            )}
        </div>
        {/* Score (center) - shows VS if upcoming, actual score otherwise */}
        {/* -------------------------------------------------------- */}
        {/* ------------------------CENTER-------------------------------- */}
        {/* -------------------------------------------------------- */}
        <div className="score">
          {status === "upcoming" ? (
            <span className="vs">VS</span>
          ) : (
            <>
              <span>{homeScore}</span>
              <span className="score-separator">-</span>
              <span>{awayScore}</span>
            </>
          )}
        </div>
        {/* Away team (right) */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* ------------------------RIGHT-------------------------------- */}
        <div className="team">
          {/* Best practice: Always render the logo, but show the abbreviation
          inside the logo container if the logo is missing. */}
          <div className="team-logo">
            {awayTeam?.logo ? (
              <img
                className="team-logo-img"
                src={awayTeam?.logo}
                alt={awayTeam?.abbr}
                loading="lazy"
                width="48"
                height="48"
              />
            ) : (
              // Fallback if logo path is missing
              awayTeam?.abbr
            )}
          </div>
          {/* <div className="team-name">{awayTeam?.name}</div> */}

          <div className="team-name">
            {/* Show on large screens */}
            <span className="name-full">{awayTeam?.name}</span>

            {/* Show on mobile screens (fallback to full name if shortName is missing) */}
            <span className="name-short">
              {awayTeam?.shortName || awayTeam?.name}
            </span>
          </div>

          {(status === "finished" || status === "live") &&
            awayScorers.length > 0 && (
              <div className="scorers away-scorers">
                {awayScorers.map((scorer, index) => (
                  <span key={index} className="scorer-name">
                    <span className="ball-icon">⚽</span> {scorer}
                  </span>
                ))}
              </div>
            )}
        </div>
      </div>
      {/* Venue and additional info */}
      <div className="info">
        <div className="match-location">
          <span className="stadium-svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="stadium"
              fill="currentColor"
              // viewBox="0 0 512 512"
              width={36}
              height={36}
              viewBox="0 0 128 128"
              role="img"
            >
              {/* <g>
              <path d="M462.657,137.343C430.837,105.524,388.698,88,344,88H168c-44.698,0-86.837,17.524-118.657,49.343S0,211.302,0,256 s17.524,86.837,49.343,118.657S123.302,424,168,424h176c44.698,0,86.837-17.524,118.657-49.343S512,300.698,512,256 S494.476,169.163,462.657,137.343z M451.343,363.343C422.546,392.141,384.424,408,344,408H168 c-40.424,0-78.546-15.859-107.343-44.657S16,296.424,16,256s15.859-78.546,44.657-107.343S127.576,104,168,104h176 c40.424,0,78.546,15.859,107.343,44.657S496,215.576,496,256S480.141,334.546,451.343,363.343z"></path>
              <path d="M120,152c-13.234,0-24,10.766-24,24v160c0,13.234,10.766,24,24,24h272c13.234,0,24-10.766,24-24V176 c0-13.234-10.766-24-24-24H120z M248,295.195c-18.236-3.716-32-19.878-32-39.195s13.764-35.479,32-39.195V295.195z M264,216.805 c18.236,3.716,32,19.878,32,39.195s-13.764,35.479-32,39.195V216.805z M112,216h32v80h-32V216z M112,336v-24h40 c4.418,0,8-3.582,8-8v-96c0-4.418-3.582-8-8-8h-40v-24c0-4.411,3.589-8,8-8h128v32.581c-27.101,3.895-48,27.258-48,55.419 s20.899,51.525,48,55.419V344H120C115.589,344,112,340.411,112,336z M400,296h-32v-80h32V296z M400,176v24h-40 c-4.418,0-8,3.582-8,8v96c0,4.418,3.582,8,8,8h40v24c0,4.411-3.589,8-8,8H264v-32.581c27.101-3.895,48-27.258,48-55.419 s-20.899-51.525-48-55.419V168h128C396.411,168,400,171.589,400,176z"></path>
              <path d="M419.278,152.536c5.404,3.944,10.542,8.346,15.271,13.083c1.563,1.566,3.612,2.349,5.662,2.349 c2.045,0,4.09-0.779,5.652-2.338c3.127-3.122,3.131-8.187,0.01-11.314c-5.315-5.324-11.089-10.271-17.164-14.705 c-3.57-2.604-8.573-1.823-11.178,1.747C414.927,144.927,415.709,149.931,419.278,152.536z"></path>
              <path d="M466.142,179.793c-2.344-3.744-7.28-4.88-11.026-2.536c-3.745,2.344-4.88,7.281-2.536,11.026 C465.285,208.577,472,231.993,472,256c0,70.58-57.42,128-128,128H168c-70.58,0-128-57.42-128-128s57.42-128,128-128h176 c17.267,0,34.026,3.395,49.812,10.09c0.495,0.21,0.988,0.423,1.48,0.639c4.045,1.774,8.765-0.066,10.54-4.112 c1.775-4.046-0.066-8.765-4.112-10.54c-0.552-0.242-1.105-0.481-1.661-0.716C382.287,115.822,363.426,112,344,112H168 c-79.402,0-144,64.598-144,144s64.598,144,144,144h176c79.402,0,144-64.598,144-144C488,228.986,480.441,202.634,466.142,179.793z"></path>
            </g> */}
              <g>
                <path
                  d="M43.53 5.3c0-1.08.6-1.48 1.75-1.48s37.61-.14 38.22-.14c.6 0 1.28.6 1.21 1.41c-.07.81.07 12.23 0 12.83c-.07.6-.4 1.28-1.28 1.34c-.87.07-37.68.2-38.42.2s-1.34-.87-1.41-1.68s-.07-11.81-.07-12.48z"
                  fill="#546f7b"
                ></path>
                <path fill="#546f7b" d="M48.7 18.66h4.77v5.24H48.7z"></path>
                <path fill="#546f7b" d="M75.17 18.87h4.54v5.08h-4.54z"></path>
                <path fill="#c9c8c7" d="M47.49 6.71h33.65v9.07H47.49z"></path>
                <path
                  d="M92.83 27.13s.13-16.93.13-17.6s.54-1.28 1.48-1.01s2.55 1.14 5.37 2.02s5.97 1.95 6.26 2.33c.46.61-1.96 2.24-5.46 4.12c-3.18 1.71-4.77 2.75-4.77 2.75l-.2 8.46l-2.42.87l-.39-1.94z"
                  fill="#2385f8"
                ></path>
                <path
                  d="M109.76 35.79V19.2c0-.87 1.01-1.34 1.75-1.14c.74.2 2.15 1.07 4.63 2.08c2.17.88 6.1 1.91 6.05 2.62c-.08 1.01-3.26 2.31-5.11 3.5c-1.88 1.21-4.7 2.55-4.7 2.55v10.48l-2.62-3.5z"
                  fill="#4bc5fc"
                ></path>
                <path
                  d="M36.08 26.24V8.29c0-.88-1.18-.92-2.1-.76c-.99.18-2.48 1.34-4.82 1.86s-5.67.84-6.17 1.7c-.3.52 1.52 2.81 4.09 4.09s6.49 3.22 6.49 3.22v8.71l2.51-.87z"
                  fill="#2385f8"
                ></path>
                <path
                  d="M19.25 33.14s-.06-14.79-.06-15.08c0-.29-.7-.76-1.75-.35c-1.05.41-10.78 3.52-10.93 4.21c-.27 1.28 5.13 3.19 6.42 3.77s3.75 1.72 3.75 1.72v8.3l2.57-2.57z"
                  fill="#4bc5fc"
                ></path>
                <path
                  d="M5.19 53.86c-.74-6.65 7.2-33.04 58.32-32.5c54.15.58 58.96 29.02 58.67 32.34c-.2 2.31-.62 24.12-.62 24.12S63.94 95.87 63.94 95.29c0-.58-51.98-17.04-51.98-17.04S5.75 58.89 5.19 53.86z"
                  fill="#ee3e23"
                ></path>
                <path
                  d="M62.62 21.36s.62-.02 1.49 0s1.53.04 1.53.04l.07 37.57l-3.1-.07c-.01.01.12-37.43.01-37.54z"
                  fill="#ae111f"
                ></path>
                <path
                  fill="#ae111f"
                  d="M100.94 28.36L82.43 61.25l2.55.96l18.49-32.62z"
                ></path>
                <path
                  d="M122.31 54.15l-22.86 16.8l.69 2.48l21.97-15.91c-.01.01.33-4.26.2-3.37z"
                  fill="#ae111f"
                ></path>
                <path
                  fill="#ae111f"
                  d="M25.94 27.87l16.62 34.41l1.73-2.34l-15.88-33.13z"
                ></path>
                <path
                  d="M5.51 49.98l23.84 20.56l-1.38 2L5.16 53.26s-.01-.96.07-1.69c.09-.74.28-1.59.28-1.59z"
                  fill="#ae111f"
                ></path>
                <path
                  d="M25.37 78.34s-.29-2.96.39-5.61c1.16-4.55 9.48-17.61 38.8-17.13c29.12.48 37.64 12.58 37.73 18.87c.1 6.29-3.39 6.19-3.39 6.19l-36.86 9.38l-18.8-6l-17.87-5.7z"
                  fill="#b7d016"
                ></path>
                <path
                  d="M85.88 67.98c0-.83-.67-1.49-1.5-1.49H43.26c-.83 0-1.5.67-1.5 1.5l-.03 16.06l3 .01l.03-14.56h17.82V86h2V69.5h18.31l.09 14.38l3-.02l-.1-15.88z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M5.38 50.47s-.96 2.08-.9 6.58c.03 1.83 0 32.73 0 32.73l8.97 13.69l15.69 11.02l24.65 7.47H73.2l17.55-2.61l19.79-12.51l12.32-14.94s-.03-35.99-.07-36.54c-.32-4.39-1.19-5.56-1.19-5.56s4.43 14.72-19 26.61c-8.89 4.51-22.92 8.12-39.07 7.94c-23.84-.26-38.15-7.66-44.93-13.15C4.11 59.46 5.38 50.47 5.38 50.47z"
                  fill="#b0b0b0"
                ></path>
                <path
                  d="M4.54 93.71s5.22 12.28 21.61 21.53c8.92 5.03 21.27 9.45 37.58 9.86c14.73.37 29.17-3.91 37.93-9.24c16.19-9.86 21.5-22.63 21.5-22.63l-.05-6.23s-12.76 32.64-58.91 33.03c-15.46.13-28.43-4.09-37.88-9.97c-14.95-9.31-21.86-21.97-21.86-21.97l.08 5.62z"
                  fill="#858585"
                ></path>
                <path
                  d="M4.65 64.35S15.1 90.6 63.68 90.92c46.18.3 59.23-24.49 59.23-24.49l-.08-5.38s-11.67 27.36-59.04 26.97C14.08 87.62 4.5 58.59 4.5 58.59l.15 5.76z"
                  fill="#858585"
                ></path>
                <path
                  d="M29.21 116.93c-.32-.5.24-24.17.24-25.22c0-1.49 1.23-4.21 4.99-2.98c3.52 1.15 4.3 4.52 4.3 6.46s.18 23.5.18 24.03s.15 1.75-.79 1.5c-.42-.12-3.1-.87-4.85-1.64c-1.13-.52-3.75-1.66-4.07-2.15z"
                  fill="#2f2f2f"
                ></path>
                <path
                  d="M10.52 102.72c-.13-.52-.09-19.59-.09-20.83c0-2.46 2.14-4.34 4.67-2.85c2.53 1.49 3.82 4.21 3.89 7.84c.06 3.63.09 22.25.15 22.77c.06.52-.25.88-.84.45c-.17-.12-3.44-2.53-4.8-3.89c-1.36-1.35-2.98-3.49-2.98-3.49z"
                  fill="#2f2f2f"
                ></path>
                <path
                  d="M88.89 121.49c-.64-.46-.39-23.3-.39-24.86s.46-6.5 5.06-7.32c5.06-.91 4.54 4.41 4.6 6.16c.06 1.56.31 21.69.15 22.2c-.08.26-2.37 1.31-4.63 2.26c-1.88.78-4.65 1.65-4.79 1.56z"
                  fill="#2f2f2f"
                ></path>
                <path
                  d="M108.52 111.06c-.45-.08-.07-21.86.02-24.12c.1-2.33 1.15-6.48 4.45-7.69c3.18-1.17 4.16.72 4.16 3.77c0 1.88-.21 19.53-.27 19.98c-.04.28-1.39 1.73-3.21 3.6c-1.92 1.98-4.93 4.5-5.15 4.46z"
                  fill="#2f2f2f"
                ></path>
                <path
                  d="M13.54 47.21c-.07.71 3.44 3.76 3.87 3.72s3-2.79 3-3.36s-3.52-3.68-3.75-3.64c-.54.1-3.08 2.8-3.12 3.28z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M29.49 52.45c.03.54 2.28 4.71 3.12 4.68c1.05-.04 3.84-2.22 3.78-2.73s-2.43-4.38-3.15-4.47c-.71-.08-3.78 1.93-3.75 2.52z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M18.6 35.98c.02.38 2.51 4.02 2.96 3.98c.45-.04 3.23-1.99 3.29-2.51c.06-.59-2.27-3.93-2.84-4.06c-.57-.13-3.45 1.86-3.41 2.59z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M37.54 38.61c-.03.29 1.99 5.15 2.6 5.11c.85-.06 3.76-1.08 3.84-1.6c.08-.53-1.89-5.37-2.25-5.41s-4.15 1.5-4.19 1.9z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M44.88 30.95c-.13.54.96 3.42 1.22 3.93c.32.65.89 1.1 1.99.81c.83-.22 2.68-.89 2.76-1.58c.08-.69-1.5-4.46-1.99-4.71s-3.82.9-3.98 1.55z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M54.13 34.36c.37.23 4.37-.11 4.5-.41c.32-.73-.12-5.19-.57-5.52c-.45-.32-4.31-.01-4.5.37c-.57 1.13-.08 5.15.57 5.56z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M49.1 46.69c-.49.46 1.09 5.01 1.71 5.31c.72.35 4.06-.88 4.26-1.3c.24-.54-1.39-4.98-1.85-5.12c-.9-.26-3.52.56-4.12 1.11z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M70.11 32.15c-.91.7-.91 5.54-.46 6.33c.37.65 4.11.74 4.66.23c.31-.29.79-5.68.46-6.19c-.32-.51-4.06-.84-4.66-.37z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M79.43 27.25c-.55.55-1.2 5.86-.83 6.28c.56.63 4.02 1.02 4.57.69c.55-.32 1.62-5.59 1.34-6.37c-.27-.78-4.45-1.22-5.08-.6z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M80.31 47.3c-.69.23-2.51 5.72-2.4 6.19c.28 1.2 3.97 2.17 4.71 1.75c.43-.24 2.31-5.63 2.22-6.1c-.1-.45-3.8-2.08-4.53-1.84z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M105.66 38.1c-1.06.17-3.74 4.53-3.74 5.22c0 .69 2.86 2.63 3.42 2.54c.55-.09 3.79-5.08 3.79-5.45c0-.37-2.59-2.45-3.47-2.31z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M105.76 54.45c-.83 0-4.85 4.06-4.85 4.66c0 .6 2.31 2.82 3.09 2.91s4.89-4.11 4.94-4.85c.05-.73-2.35-2.72-3.18-2.72z"
                  fill="#ff7879"
                ></path>
                <path
                  d="M51.45 124.05c-.41-.41.05-16.67.12-19.35c.08-3.25 2.36-11.78 12.42-11.94c10.07-.16 12.99 9.1 12.99 12.1s.17 18.89-.2 19.38c-.16.22-5.24 1.1-13.04 1.02c-7.4-.08-11.88-.81-12.29-1.21z"
                  fill="#2f2f2f"
                ></path>
              </g>
            </svg>
          </span>
          <p>
            Local: <strong>{venue}</strong> {info && `• ${info}`}
          </p>
        </div>

        {/* <div>{competition && `• ${competition}`}</div> */}

        {competition && (
          <div className="competition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 491.52 491.52"
              height="14px"
              width="14px"
              fill="currentColor"
              stroke="currentColor"
              // strokeWidth="2"
              // strokeLinecap="round"
              // strokeLinejoin="round"
            >
              <polygon points="266.24,143.36 245.76,81.92 226.427,143.36 163.84,143.36 214.467,178.217 195.133,237.732 245.76,204.8 296.387,237.732 277.053,178.217 327.68,143.36 "></polygon>{" "}
              <path d="M433.355,62.149l-3.275-0.1V20.48C430.08,9.169,420.911,0,409.6,0H81.92C70.609,0,61.44,9.169,61.44,20.48v41.56 l-3.892,0.117C26.118,62.149,0.002,89.195,0.002,121.295v70.451c0,36.984,19.681,71.675,51.423,90.701l3.617,1.712l53.518,19.186 c20.689,23.439,46.858,42.159,75.759,53.443v32.332h-14.725c-37.116,0-67.195,30.079-67.195,67.195v14.725 c0,11.311,9.169,20.48,20.48,20.48h245.76c11.311,0,20.48-9.169,20.48-20.48v-14.725c0-37.116-30.079-67.195-67.195-67.195H307.2 v-32.332c28.901-11.284,55.07-30.005,75.759-53.443l53.518-19.186l3.617-1.712c31.742-19.025,51.423-53.716,51.423-90.701 v-70.451C491.518,89.195,465.402,62.149,433.355,62.149z M70.891,246.328c-18.473-11.825-29.929-32.626-29.929-54.582v-70.451 c0-9.793,8.105-18.186,17.203-18.186l3.275-0.098v81.862c0,21.569,4.435,42.698,12.384,62.506L70.891,246.328z M347.527,450.56 H143.993c2.622-11.724,13.085-20.48,25.602-20.48H204.8h81.92h35.205C334.442,430.08,344.906,438.836,347.527,450.56z M266.24,367.408v21.712h-40.96v-21.807c5.036,0.644,10.109,1.062,15.211,1.231c0.074,0.003,0.148,0.007,0.222,0.009 c1.68,0.053,3.362,0.087,5.047,0.087c1.563,0,3.123-0.025,4.682-0.071c1.414-0.039,2.83-0.105,4.246-0.18 c0.027-0.002,0.054-0.002,0.081-0.004C258.587,368.182,262.411,367.865,266.24,367.408z M252.855,327.465 c-0.242,0.013-0.483,0.025-0.725,0.037c-0.854,0.046-1.708,0.084-2.563,0.112c-1.271,0.038-2.541,0.066-3.807,0.066 c-1.402,0-2.81-0.029-4.224-0.084c-0.051-0.002-0.101-0.005-0.152-0.007c-10.007-0.405-20.289-2.188-30.802-5.281 c-0.866-0.255-1.732-0.446-2.595-0.585C149.915,303.436,102.4,245.622,102.4,184.873V40.96h286.72v143.913 C389.12,256.059,323.876,323.22,252.855,327.465z M450.558,191.746c0,21.956-11.457,42.757-29.929,54.582l-2.932,1.051 c7.948-19.808,12.384-40.937,12.384-62.506v-81.854l2.657,0.08c9.716,0.009,17.821,8.403,17.821,18.196V191.746z"></path>
            </svg>
            <p>
              Competição: <strong>{competition && `${competition}`}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchCard;
