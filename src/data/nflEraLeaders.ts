// Real NFL career leaders by position, 2002-2025 (regular season).
// Separate from league.ts (which only touches MFFL's own derived data) —
// this file holds curated, externally-researched NFL stat data, same
// pattern as hallOfFame.ts.
//
// Each position exposes one "column" per stat category. Every column is
// its own top-10 (top-5 for team defense) leaderboard for THAT stat —
// clicking a column header on the page swaps to that column's real
// leaders, not just a re-sort of a fixed set of rows. Sorting is
// descending only (top N by category), so each column's row list is
// already in final order.
//
// Fantasy Points uses MFFL's actual current (2026) league scoring — full
// PPR, 6 points per passing TD, 6 points per rush/receiving TD, flat
// kicker scoring (3/FG, 1/XP, no distance tiers), standard defensive
// scoring (1/sack, 2/INT, 2/fumble rec, 6/TD) — applied the same way
// across all 25 seasons even though the league's real settings have
// changed over time. A few categories that would require game logs
// rather than career totals (100/300-yard game bonuses, kicker distance
// tiers, points-allowed tiers) aren't computed here.
//
// Sourced from StatMuse career/season-split queries, cross-checked
// against Pro-Football-Reference for players whose careers straddle the
// 2002 or 2025 boundary. Research notes on individual figures are kept
// in the git history of this file's predecessor research (see
// nflEraLeaders.ts.bak_* alongside this file).

export function commas(n: number): string {
  return Math.round(n).toLocaleString("en-US");
}

export function oneDecimal(n: number): string {
  return n.toFixed(1);
}

// ---------------------------------------------------------------------
// Quarterbacks
// ---------------------------------------------------------------------

export interface QbRow {
  player: string;
  passYds: number;
  passTd: number;
  rushYds: number;
  rushTd: number;
  ints: number;
  fantasyPts: number;
}

const qbStats: Record<string, Omit<QbRow, "player">> = {
  "Tom Brady": { passYds: 86365, passTd: 631, rushYds: 1080, rushTd: 28, ints: 200, fantasyPts: 7116.6 },
  "Drew Brees": { passYds: 80137, passTd: 570, rushYds: 734, rushTd: 25, ints: 243, fantasyPts: 6362.9 },
  "Aaron Rodgers": { passYds: 66274, passTd: 527, rushYds: 3634, rushTd: 36, ints: 123, fantasyPts: 6146.4 },
  "Matthew Stafford": { passYds: 64516, passTd: 423, rushYds: 1900, rushTd: 13, ints: 196, fantasyPts: 4994.6 },
  "Ben Roethlisberger": { passYds: 64088, passTd: 418, rushYds: 1373, rushTd: 20, ints: 211, fantasyPts: 4906.8 },
  "Philip Rivers": { passYds: 63984, passTd: 425, rushYds: 600, rushTd: 3, ints: 212, fantasyPts: 4763.4 },
  "Matt Ryan": { passYds: 62792, passTd: 381, rushYds: 1539, rushTd: 13, ints: 183, fantasyPts: 4663.6 },
  "Eli Manning": { passYds: 57023, passTd: 366, rushYds: 567, rushTd: 7, ints: 244, fantasyPts: 4087.6 },
  "Peyton Manning": { passYds: 55522, passTd: 428, rushYds: 259, rushTd: 11, ints: 170, fantasyPts: 4540.8 },
  "Joe Flacco": { passYds: 48176, passTd: 272, rushYds: 900, rushTd: 5, ints: 172, fantasyPts: 3335.0 },
  "Russell Wilson": { passYds: 46966, passTd: 353, rushYds: 5568, rushTd: 31, ints: 114, fantasyPts: 4511.4 },
  "Patrick Mahomes": { passYds: 35939, passTd: 267, rushYds: 2665, rushTd: 19, ints: 85, fantasyPts: 3250.1 },
  "Josh Allen": { passYds: 30102, passTd: 220, rushYds: 4721, rushTd: 79, ints: 94, fantasyPts: 3282.2 },
  "Cam Newton": { passYds: 32382, passTd: 194, rushYds: 5631, rushTd: 75, ints: 123, fantasyPts: 3226.4 },
  "Lamar Jackson": { passYds: 22608, passTd: 187, rushYds: 6522, rushTd: 35, ints: 56, fantasyPts: 2776.5 },
  "Michael Vick": { passYds: 21679, passTd: 131, rushYds: 5820, rushTd: 35, ints: 85, fantasyPts: 2275.2 },
  "Jalen Hurts": { passYds: 17891, passTd: 110, rushYds: 3554, rushTd: 63, ints: 45, fantasyPts: 2019.0 },
  "Kyler Murray": { passYds: 20460, passTd: 121, rushYds: 3186, rushTd: 32, ints: 60, fantasyPts: 1935.0 },
  "Justin Fields": { passYds: 9039, passTd: 52, rushYds: 2892, rushTd: 23, ints: 32, fantasyPts: 1036.8 },
};

function rows<T extends Record<string, number>>(stats: Record<string, T>, order: string[]): (T & { player: string })[] {
  return order.map((player) => ({ player, ...stats[player] }));
}

export const eraQbColumns: { key: keyof QbRow; label: string; rows: QbRow[] }[] = [
  { key: "passYds", label: "Pass Yds", rows: rows(qbStats, ["Tom Brady", "Drew Brees", "Aaron Rodgers", "Matthew Stafford", "Ben Roethlisberger", "Philip Rivers", "Matt Ryan", "Eli Manning", "Peyton Manning", "Joe Flacco"]) },
  { key: "passTd", label: "Pass TD", rows: rows(qbStats, ["Tom Brady", "Drew Brees", "Aaron Rodgers", "Peyton Manning", "Philip Rivers", "Matthew Stafford", "Ben Roethlisberger", "Matt Ryan", "Eli Manning", "Russell Wilson"]) },
  { key: "rushYds", label: "Rush Yds", rows: rows(qbStats, ["Lamar Jackson", "Michael Vick", "Cam Newton", "Russell Wilson", "Josh Allen", "Aaron Rodgers", "Jalen Hurts", "Kyler Murray", "Justin Fields", "Patrick Mahomes"]) },
  { key: "fantasyPts", label: "Fantasy Pts", rows: rows(qbStats, ["Tom Brady", "Drew Brees", "Aaron Rodgers", "Matthew Stafford", "Ben Roethlisberger", "Philip Rivers", "Matt Ryan", "Peyton Manning", "Russell Wilson", "Eli Manning"]) },
];

// ---------------------------------------------------------------------
// Running Backs
// ---------------------------------------------------------------------

export interface RbRow {
  player: string;
  rushYds: number;
  recYds: number;
  rec: number;
  rushTd: number;
  recTd: number;
  totalTd: number;
  fantasyPts: number;
}

const rbStats: Record<string, Omit<RbRow, "player">> = {
  "Christian McCaffrey": { rushYds: 7589, recYds: 5390, rec: 626, rushTd: 62, recTd: 36, totalTd: 98, fantasyPts: 2511.9 },
  "Alvin Kamara": { rushYds: 7250, recYds: 4948, rec: 606, rushTd: 61, recTd: 25, totalTd: 86, fantasyPts: 2341.8 },
  "Austin Ekeler": { rushYds: 4765, recYds: 4288, rec: 480, rushTd: 43, recTd: 30, totalTd: 73, fantasyPts: 1823.3 },
  "Darren Sproles": { rushYds: 3552, recYds: 4840, rec: 553, rushTd: 23, recTd: 32, totalTd: 55, fantasyPts: 1722.2 },
  "Brian Westbrook": { rushYds: 6335, recYds: 3940, rec: 442, rushTd: 41, recTd: 30, totalTd: 71, fantasyPts: 1895.5 },
  "LeSean McCoy": { rushYds: 11102, recYds: 3898, rec: 518, rushTd: 73, recTd: 16, totalTd: 89, fantasyPts: 2552.0 },
  "Matt Forte": { rushYds: 9796, recYds: 4672, rec: 554, rushTd: 54, recTd: 21, totalTd: 75, fantasyPts: 2450.8 },
  "Le'Veon Bell": { rushYds: 6554, recYds: 3289, rec: 399, rushTd: 42, recTd: 9, totalTd: 51, fantasyPts: 1689.3 },
  "Saquon Barkley": { rushYds: 8356, recYds: 2651, rec: 358, rushTd: 55, recTd: 16, totalTd: 71, fantasyPts: 1884.7 },
  "Priest Holmes": { rushYds: 4515, recYds: 1763, rec: 189, rushTd: 68, recTd: 5, totalTd: 73, fantasyPts: 1254.8 },
  "Reggie Bush": { rushYds: 5490, recYds: 3598, rec: 477, rushTd: 36, recTd: 18, totalTd: 54, fantasyPts: 1709.8 },
  "Ray Rice": { rushYds: 6180, recYds: 3034, rec: 369, rushTd: 37, recTd: 6, totalTd: 43, fantasyPts: 1548.4 },
  "LaDainian Tomlinson": { rushYds: 12448, recYds: 4405, rec: 565, rushTd: 135, recTd: 17, totalTd: 152, fantasyPts: 3162.3 },
  "Frank Gore": { rushYds: 16000, recYds: 3985, rec: 484, rushTd: 81, recTd: 18, totalTd: 99, fantasyPts: 3076.5 },
  "Adrian Peterson": { rushYds: 14918, recYds: 2474, rec: 305, rushTd: 120, recTd: 6, totalTd: 126, fantasyPts: 2800.2 },
  "Derrick Henry": { rushYds: 13018, recYds: 1801, rec: 189, rushTd: 122, recTd: 5, totalTd: 127, fantasyPts: 2432.9 },
  "Marshawn Lynch": { rushYds: 10413, recYds: 2214, rec: 287, rushTd: 85, recTd: 9, totalTd: 94, fantasyPts: 2113.7 },
  "Steven Jackson": { rushYds: 11438, recYds: 3683, rec: 461, rushTd: 69, recTd: 9, totalTd: 78, fantasyPts: 2441.1 },
  "Clinton Portis": { rushYds: 9923, recYds: 2018, rec: 247, rushTd: 75, recTd: 5, totalTd: 80, fantasyPts: 1921.1 },
};

export const eraRbColumns: { key: keyof RbRow; label: string; rows: RbRow[] }[] = [
  { key: "rushYds", label: "Rush Yds", rows: rows(rbStats, ["Frank Gore", "Adrian Peterson", "Derrick Henry", "LaDainian Tomlinson", "Steven Jackson", "LeSean McCoy", "Marshawn Lynch", "Clinton Portis", "Matt Forte", "Saquon Barkley"]) },
  { key: "recYds", label: "Rec Yds", rows: rows(rbStats, ["Christian McCaffrey", "Alvin Kamara", "Darren Sproles", "Matt Forte", "LaDainian Tomlinson", "Austin Ekeler", "Frank Gore", "Brian Westbrook", "LeSean McCoy", "Steven Jackson"]) },
  { key: "totalTd", label: "Total TD", rows: rows(rbStats, ["LaDainian Tomlinson", "Derrick Henry", "Adrian Peterson", "Frank Gore", "Christian McCaffrey", "Marshawn Lynch", "LeSean McCoy", "Alvin Kamara", "Clinton Portis", "Steven Jackson"]) },
  { key: "fantasyPts", label: "Fantasy Pts", rows: rows(rbStats, ["LaDainian Tomlinson", "Frank Gore", "Adrian Peterson", "LeSean McCoy", "Christian McCaffrey", "Matt Forte", "Steven Jackson", "Derrick Henry", "Alvin Kamara", "Marshawn Lynch"]) },
];

// ---------------------------------------------------------------------
// Wide Receivers
// ---------------------------------------------------------------------

export interface ReceiverRow {
  player: string;
  rec: number;
  recYds: number;
  recTd: number;
  fantasyPts: number;
}

const wrStats: Record<string, Omit<ReceiverRow, "player">> = {
  "Larry Fitzgerald": { rec: 1432, recYds: 17492, recTd: 121, fantasyPts: 3907.2 },
  "Andre Johnson": { rec: 1062, recYds: 14185, recTd: 70, fantasyPts: 2900.5 },
  "Reggie Wayne": { rec: 1043, recYds: 14000, recTd: 82, fantasyPts: 2935.0 },
  "Anquan Boldin": { rec: 1076, recYds: 13779, recTd: 82, fantasyPts: 2945.9 },
  "Steve Smith Sr": { rec: 1021, recYds: 14577, recTd: 81, fantasyPts: 2964.7 },
  "Torry Holt": { rec: 705, recYds: 9596, recTd: 55, fantasyPts: 1994.6 },
  "Randy Moss": { rec: 674, recYds: 9896, recTd: 103, fantasyPts: 2281.6 },
  "Terrell Owens": { rec: 666, recYds: 9764, recTd: 94, fantasyPts: 2206.4 },
  "Marvin Harrison": { rec: 580, recYds: 7502, recTd: 66, fantasyPts: 1726.2 },
  "Antonio Brown": { rec: 928, recYds: 12291, recTd: 83, fantasyPts: 2655.1 },
  "Julio Jones": { rec: 914, recYds: 13703, recTd: 66, fantasyPts: 2680.3 },
  "DeAndre Hopkins": { rec: 1006, recYds: 13295, recTd: 85, fantasyPts: 2845.5 },
  "Davante Adams": { rec: 1017, recYds: 12633, recTd: 117, fantasyPts: 2982.3 },
  "Keenan Allen": { rec: 1055, recYds: 12051, recTd: 70, fantasyPts: 2680.1 },
  "Stefon Diggs": { rec: 942, recYds: 11504, recTd: 74, fantasyPts: 2536.4 },
  "Mike Evans": { rec: 866, recYds: 13052, recTd: 108, fantasyPts: 2819.2 },
  "Calvin Johnson": { rec: 731, recYds: 11619, recTd: 83, fantasyPts: 2390.9 },
  "Tyreek Hill": { rec: 819, recYds: 11363, recTd: 83, fantasyPts: 2453.3 },
  "Brandon Marshall": { rec: 970, recYds: 12351, recTd: 83, fantasyPts: 2703.1 },
  "Wes Welker": { rec: 903, recYds: 9924, recTd: 50, fantasyPts: 2195.4 },
};

export const eraWrColumns: { key: keyof ReceiverRow; label: string; rows: ReceiverRow[] }[] = [
  { key: "rec", label: "Rec", rows: rows(wrStats, ["Larry Fitzgerald", "Anquan Boldin", "Andre Johnson", "Keenan Allen", "Reggie Wayne", "Steve Smith Sr", "Davante Adams", "DeAndre Hopkins", "Brandon Marshall", "Stefon Diggs"]) },
  { key: "recYds", label: "Rec Yds", rows: rows(wrStats, ["Larry Fitzgerald", "Steve Smith Sr", "Andre Johnson", "Reggie Wayne", "Anquan Boldin", "Julio Jones", "DeAndre Hopkins", "Mike Evans", "Davante Adams", "Brandon Marshall"]) },
  { key: "recTd", label: "Rec TD", rows: rows(wrStats, ["Larry Fitzgerald", "Davante Adams", "Mike Evans", "Randy Moss", "Terrell Owens", "DeAndre Hopkins", "Brandon Marshall", "Antonio Brown", "Calvin Johnson", "Tyreek Hill"]) },
  { key: "fantasyPts", label: "Fantasy Pts", rows: rows(wrStats, ["Larry Fitzgerald", "Davante Adams", "Steve Smith Sr", "Anquan Boldin", "Reggie Wayne", "Andre Johnson", "DeAndre Hopkins", "Mike Evans", "Brandon Marshall", "Julio Jones"]) },
];

// ---------------------------------------------------------------------
// Tight Ends
// ---------------------------------------------------------------------

const teStats: Record<string, Omit<ReceiverRow, "player">> = {
  "Tony Gonzalez": { rec: 991, recYds: 11169, recTd: 81, fantasyPts: 2593.9 },
  "Antonio Gates": { rec: 955, recYds: 11841, recTd: 116, fantasyPts: 2835.1 },
  "Jason Witten": { rec: 1228, recYds: 13046, recTd: 74, fantasyPts: 2976.6 },
  "Travis Kelce": { rec: 1080, recYds: 13002, recTd: 82, fantasyPts: 2872.2 },
  "Rob Gronkowski": { rec: 621, recYds: 9286, recTd: 92, fantasyPts: 2101.6 },
  "Jimmy Graham": { rec: 719, recYds: 8545, recTd: 89, fantasyPts: 2107.5 },
  "Greg Olsen": { rec: 742, recYds: 8683, recTd: 60, fantasyPts: 1970.3 },
  "Zach Ertz": { rec: 825, recYds: 8592, recTd: 57, fantasyPts: 2026.2 },
  "George Kittle": { rec: 595, recYds: 8008, recTd: 52, fantasyPts: 1707.8 },
  "Mark Andrews": { rec: 484, recYds: 5952, recTd: 56, fantasyPts: 1415.2 },
  "Vernon Davis": { rec: 583, recYds: 7562, recTd: 63, fantasyPts: 1717.2 },
  "Heath Miller": { rec: 592, recYds: 6569, recTd: 45, fantasyPts: 1518.9 },
  "Dallas Clark": { rec: 505, recYds: 5665, recTd: 53, fantasyPts: 1389.5 },
};

export const eraTeColumns: { key: keyof ReceiverRow; label: string; rows: ReceiverRow[] }[] = [
  { key: "rec", label: "Rec", rows: rows(teStats, ["Jason Witten", "Travis Kelce", "Tony Gonzalez", "Antonio Gates", "Zach Ertz", "Greg Olsen", "Jimmy Graham", "Rob Gronkowski", "George Kittle", "Heath Miller"]) },
  { key: "recYds", label: "Rec Yds", rows: rows(teStats, ["Jason Witten", "Travis Kelce", "Antonio Gates", "Tony Gonzalez", "Rob Gronkowski", "Greg Olsen", "Zach Ertz", "Jimmy Graham", "George Kittle", "Vernon Davis"]) },
  { key: "recTd", label: "Rec TD", rows: rows(teStats, ["Antonio Gates", "Rob Gronkowski", "Jimmy Graham", "Travis Kelce", "Tony Gonzalez", "Jason Witten", "Vernon Davis", "Greg Olsen", "Zach Ertz", "Mark Andrews"]) },
  { key: "fantasyPts", label: "Fantasy Pts", rows: rows(teStats, ["Jason Witten", "Travis Kelce", "Antonio Gates", "Tony Gonzalez", "Jimmy Graham", "Rob Gronkowski", "Zach Ertz", "Greg Olsen", "Vernon Davis", "George Kittle"]) },
];

// ---------------------------------------------------------------------
// Kickers
// ---------------------------------------------------------------------

export interface KRow {
  player: string;
  fgMade: number;
  fgAtt: number;
  xpMade: number;
  fantasyPts: number;
}

const kStats: Record<string, Omit<KRow, "player">> = {
  "Adam Vinatieri": { fgMade: 439, fgAtt: 516, xpMade: 668, fantasyPts: 1985 },
  "Robbie Gould": { fgMade: 447, fgAtt: 517, xpMade: 620, fantasyPts: 1961 },
  "Mason Crosby": { fgMade: 400, fgAtt: 492, xpMade: 739, fantasyPts: 1939 },
  "Matt Prater": { fgMade: 425, fgAtt: 507, xpMade: 633, fantasyPts: 1908 },
  "Stephen Gostkowski": { fgMade: 392, fgAtt: 454, xpMade: 699, fantasyPts: 1875 },
  "Nick Folk": { fgMade: 431, fgAtt: 507, xpMade: 533, fantasyPts: 1826 },
  "Justin Tucker": { fgMade: 417, fgAtt: 468, xpMade: 524, fantasyPts: 1775 },
  "Matt Bryant": { fgMade: 397, fgAtt: 464, xpMade: 567, fantasyPts: 1758 },
  "Sebastian Janikowski": { fgMade: 391, fgAtt: 482, xpMade: 517, fantasyPts: 1690 },
  "Phil Dawson": { fgMade: 397, fgAtt: 472, xpMade: 449, fantasyPts: 1640 },
};

export const eraKColumns: { key: keyof KRow; label: string; rows: KRow[] }[] = [
  { key: "fgMade", label: "FG Made", rows: rows(kStats, ["Robbie Gould", "Adam Vinatieri", "Nick Folk", "Matt Prater", "Justin Tucker", "Mason Crosby", "Matt Bryant", "Phil Dawson", "Stephen Gostkowski", "Sebastian Janikowski"]) },
  { key: "fantasyPts", label: "Fantasy Pts", rows: rows(kStats, ["Adam Vinatieri", "Robbie Gould", "Mason Crosby", "Matt Prater", "Stephen Gostkowski", "Nick Folk", "Justin Tucker", "Matt Bryant", "Sebastian Janikowski", "Phil Dawson"]) },
];

// ---------------------------------------------------------------------
// Team Defense / Special Teams
// ---------------------------------------------------------------------

export interface DefRow {
  team: string;
  sacks: number;
  ints: number;
  fumbleRec: number;
  defTd: number;
  fantasyPts: number;
}

const defStats: Record<string, Omit<DefRow, "team">> = {
  "Baltimore Ravens": { sacks: 974, ints: 393, fumbleRec: 239, defTd: 74, fantasyPts: 2682 },
  "New England Patriots": { sacks: 922, ints: 418, fumbleRec: 246, defTd: 69, fantasyPts: 2664 },
  "Philadelphia Eagles": { sacks: 1014, ints: 351, fumbleRec: 260, defTd: 67, fantasyPts: 2638 },
  "Pittsburgh Steelers": { sacks: 1067, ints: 366, fumbleRec: 260, defTd: 51, fantasyPts: 2625 },
  "Green Bay Packers": { sacks: 951, ints: 404, fumbleRec: 219, defTd: 67, fantasyPts: 2599 },
  "Chicago Bears": { sacks: 856, ints: 387, fumbleRec: 270, defTd: 65, fantasyPts: 2560 },
  "Minnesota Vikings": { sacks: 977, ints: 355, fumbleRec: 252, defTd: 60, fantasyPts: 2551 },
  "Buffalo Bills": { sacks: 893, ints: 390, fumbleRec: 242, defTd: 58, fantasyPts: 2505 },
  "Los Angeles Rams": { sacks: 980, ints: 340, fumbleRec: 254, defTd: 55, fantasyPts: 2498 },
  "Tampa Bay Buccaneers": { sacks: 876, ints: 375, fumbleRec: 265, defTd: 47, fantasyPts: 2438 },
  "Denver Broncos": { sacks: 971, ints: 313, fumbleRec: 237, defTd: 37, fantasyPts: 2293 },
  "Miami Dolphins": { sacks: 947, ints: 342, fumbleRec: 215, defTd: 30, fantasyPts: 2241 },
  "Seattle Seahawks": { sacks: 943, ints: 369, fumbleRec: 253, defTd: 38, fantasyPts: 2415 },
  "Carolina Panthers": { sacks: 925, ints: 356, fumbleRec: 264, defTd: 33, fantasyPts: 2363 },
  "Cincinnati Bengals": { sacks: 798, ints: 377, fumbleRec: 227, defTd: 33, fantasyPts: 2204 },
};

function defRows(order: string[]): DefRow[] {
  return order.map((team) => ({ team, ...defStats[team] }));
}

export const eraDefColumns: { key: keyof DefRow; label: string; rows: DefRow[] }[] = [
  { key: "sacks", label: "Sacks", rows: defRows(["Pittsburgh Steelers", "Philadelphia Eagles", "Los Angeles Rams", "Minnesota Vikings", "Baltimore Ravens", "Denver Broncos", "Green Bay Packers", "Miami Dolphins", "Seattle Seahawks", "Carolina Panthers"]) },
  { key: "ints", label: "INT", rows: defRows(["New England Patriots", "Green Bay Packers", "Baltimore Ravens", "Buffalo Bills", "Chicago Bears", "Cincinnati Bengals", "Tampa Bay Buccaneers", "Seattle Seahawks", "Pittsburgh Steelers", "Carolina Panthers"]) },
  { key: "fantasyPts", label: "Fantasy Pts", rows: defRows(["Baltimore Ravens", "New England Patriots", "Philadelphia Eagles", "Pittsburgh Steelers", "Green Bay Packers", "Chicago Bears", "Minnesota Vikings", "Buffalo Bills", "Los Angeles Rams", "Tampa Bay Buccaneers"]) },
];

// ---------------------------------------------------------------------
// Single-leader summary (used by the Record Book page)
// ---------------------------------------------------------------------

export interface CareerPlayerRecord {
  label: string;
  player: string;
  value: string;
  detail: string;
}

export function careerPlayerRecords(): CareerPlayerRecord[] {
  const qbEntries = Object.entries(qbStats);
  const passYds = qbEntries.reduce((best, cur) => (cur[1].passYds > best[1].passYds ? cur : best));
  const passTd = qbEntries.reduce((best, cur) => (cur[1].passTd > best[1].passTd ? cur : best));

  const rbEntries = Object.entries(rbStats);
  const rushYds = rbEntries.reduce((best, cur) => (cur[1].rushYds > best[1].rushYds ? cur : best));

  const receivers: { name: string; rec: number; recYds: number }[] = [
    ...rbEntries.map(([name, p]) => ({ name, rec: p.rec, recYds: p.recYds })),
    ...Object.entries(wrStats).map(([name, p]) => ({ name, rec: p.rec, recYds: p.recYds })),
    ...Object.entries(teStats).map(([name, p]) => ({ name, rec: p.rec, recYds: p.recYds })),
  ];
  const mostRec = receivers.reduce((best, cur) => (cur.rec > best.rec ? cur : best));
  const mostRecYds = receivers.reduce((best, cur) => (cur.recYds > best.recYds ? cur : best));

  const nonQbTds: { name: string; td: number }[] = [
    ...rbEntries.map(([name, p]) => ({ name, td: p.totalTd })),
    ...Object.entries(wrStats).map(([name, p]) => ({ name, td: p.recTd })),
    ...Object.entries(teStats).map(([name, p]) => ({ name, td: p.recTd })),
  ];
  const mostTd = nonQbTds.reduce((best, cur) => (cur.td > best.td ? cur : best));

  return [
    { label: "Most Passing Yards", player: passYds[0], value: commas(passYds[1].passYds), detail: "2002–2025 career" },
    { label: "Most Passing TDs", player: passTd[0], value: `${passTd[1].passTd}`, detail: "2002–2025 career" },
    { label: "Most Rushing Yards", player: rushYds[0], value: commas(rushYds[1].rushYds), detail: "2002–2025 career" },
    { label: "Most Receptions", player: mostRec.name, value: commas(mostRec.rec), detail: "2002–2025 career" },
    { label: "Most Receiving Yards", player: mostRecYds.name, value: commas(mostRecYds.recYds), detail: "2002–2025 career" },
    { label: "Most TDs (non-QB)", player: mostTd.name, value: `${mostTd.td}`, detail: "2002–2025 career, rushing + receiving" },
  ];
}
