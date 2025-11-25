// ============================================
// data/sampleData.js
// ============================================
//
// This file contains sample data for the football app.
// In a real app, this data would come from an API.
//
// DATA STRUCTURE EXPLANATION:
// ---------------------------
// Each data type has a specific shape (structure) that components expect.
// Keep this consistent when connecting to your real API.

// ============================================
// TEAMS DATA
// ============================================
// Base team objects - reused in other data structures
// Using an object (not array) for easy lookup by key
export const teams = {
  eagles: {
    id: "eagles", // Unique identifier
    name: "FC Eagles", // Full team name
    abbr: "FE", // Abbreviation for logos
    position: "1",
    points: "100",
  },
  lions: {
    id: "lions",
    name: "United Lions",
    abbr: "UL",
  },
  tigers: {
    id: "tigers",
    name: "Sporting Tigers",
    abbr: "ST",
  },
};

// ============================================
// PLAYERS DATA
// ============================================
// Top scorers list - should be sorted by goals (descending)
// before: playerData
export const players = [
  {
    id: 1,
    name: "Miguel Santos",
    team: "FC Eagles",
    goals: 18,
    assists: 7,
    matches: 12,
  },
  {
    id: 2,
    name: "José Lima",
    team: "United Lions",
    goals: 15,
    assists: 9,
    matches: 14,
  },
  {
    id: 3,
    name: "Rui Almeida",
    team: "Sporting Tigers",
    goals: 14,
    assists: 5,
    matches: 11,
  },
  {
    id: 4,
    name: "Tomás Ferreira",
    team: "FC Eagles",
    goals: 12,
    assists: 4,
    matches: 10,
  },
  {
    id: 5,
    name: "Ricardo Nunes",
    team: "United Lions",
    goals: 10,
    assists: 3,
    matches: 13,
  },
  {
    id: 6,
    name: "Jaime Bonde",
    team: "Sporting Tigers",
    goals: 8,
    assists: 6,
    matches: 12,
  },
];
