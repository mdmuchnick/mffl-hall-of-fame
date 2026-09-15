/**
 * The in-progress 2026 season — deliberately kept OUT of fixtures.json /
 * league.ts. That seam's `Season` type requires a champion, runner-up and
 * full draft board, and every all-time stat (career records, MVP tallies,
 * trophy cases, the homepage "reigning champion" banner) is derived from
 * it. A season that isn't finished yet can't supply those fields without
 * corrupting the historical numbers, so this stays a separate, siblings-of-
 * lore.ts/hallOfFame.ts module. Once 2026 is complete, its data moves into
 * fixtures.json like every other season and this file's job is done until
 * 2027.
 *
 * Update this file (and currentSeason.json) week to week during the season.
 */
import raw from "./currentSeason.json";
import { managerName, fmt, recordLine } from "./league";

export interface CurrentTeam {
  manager: string;
  teamName: string;
  wins: number;
  losses: number;
  ties: number;
  pointsFor: number;
  pointsAgainst: number;
}

export interface CurrentMatchup {
  week: number;
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
  playoff: boolean;
}

export interface CurrentSeasonData {
  year: number;
  teamCount: number;
  weeksPlayed: number;
  lastUpdated: string;
  teams: CurrentTeam[];
  matchups: CurrentMatchup[];
}

export const currentSeason = raw as CurrentSeasonData;

export interface StandingsRow extends CurrentTeam {
  rank: number;
  winPct: number;
}

/** Ranked by win% first, total points for as the tiebreaker — same
 *  ordering Yahoo's live standings use mid-season, before seeding kicks in. */
export function currentStandings(): StandingsRow[] {
  const games = (t: CurrentTeam) => t.wins + t.losses + t.ties;
  const withPct = currentSeason.teams.map((t) => ({
    ...t,
    winPct: games(t) > 0 ? (t.wins + t.ties * 0.5) / games(t) : 0,
  }));
  const sorted = withPct.sort((a, b) => b.winPct - a.winPct || b.pointsFor - a.pointsFor);
  return sorted.map((t, i) => ({ ...t, rank: i + 1 }));
}

export function currentWeeks(): number[] {
  return [...new Set(currentSeason.matchups.map((m) => m.week))].sort((a, b) => a - b);
}

export { managerName, fmt, recordLine };
