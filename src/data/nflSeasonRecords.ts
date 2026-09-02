/* Real-world NFL single-season records, bounded to the 2002-2025 seasons —
   the span of MFFL's existence (2026 is still in progress). Same pattern
   and purpose as nflEraLeaders.ts (that file's header explains the
   scoring/window rationale in full): this is trivia/reference content,
   NOT derived from the league archive and NOT tied to any MFFL roster.

   Every record below is the outright NFL single-season record and happens
   to fall inside the 2002-2025 window on its own — no in-window-only
   asterisks are needed here, unlike a couple of the career tables.

   Sourced 2026-09-01 via Pro-Football-Reference's single-season leaderboards
   and Wikipedia's season-by-season articles, cross-checked against
   contemporary reporting (Washington Post, NFL.com) for each record-setting
   game/season. */

export interface SeasonPlayerRecord {
  label: string;
  player: string;
  value: string;
  detail: string;
  team: string;
  year: number;
}

export const nflSeasonRecords: SeasonPlayerRecord[] = [
  { label: "Most Passing Yards", player: "Peyton Manning", value: "5,477", detail: "passing yards in a season", team: "Denver Broncos", year: 2013 },
  { label: "Most Passing TDs", player: "Peyton Manning", value: "55", detail: "passing touchdowns in a season", team: "Denver Broncos", year: 2013 },
  { label: "Most Rushing Yards", player: "Adrian Peterson", value: "2,097", detail: "rushing yards in a season", team: "Minnesota Vikings", year: 2012 },
  { label: "Most Receptions", player: "Michael Thomas", value: "149", detail: "receptions in a season", team: "New Orleans Saints", year: 2019 },
  { label: "Most Receiving Yards", player: "Calvin Johnson", value: "1,964", detail: "receiving yards in a season", team: "Detroit Lions", year: 2012 },
  { label: "Most TDs (non-QB)", player: "LaDainian Tomlinson", value: "31", detail: "total TDs in a season (28 rush, 3 rec)", team: "San Diego Chargers", year: 2006 },
];
