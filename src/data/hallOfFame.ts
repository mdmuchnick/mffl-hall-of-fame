/* MFFL Player Hall of Fame — curated honoree list, not derived from the
   season archive. Selected from 24 seasons of VOR data. Guideline (not a
   hard rule): 2+ league MVP seasons, or a multi-year run of top-3 VOR
   finishes — Marc has final say on exceptions (see Bell below).
   Source figures pulled from mvp_data_083126.json (season-by-season MVP +
   top-3 VOR). Update this file by hand when the shortlist changes — it is
   intentionally separate from league.ts, which only holds data derived
   automatically from the season archive.

   IMPORTANT: "mvps" counts the OFFICIAL season MVP field in
   mvp_data_083126.json, which already applies the team-success tiebreak —
   it is NOT the same as "led the top-3 list that year." A player can lead
   raw VOR and still lose the award to a tiebreak (this happened to Brees in
   2011 and to Barkley in both 2018 and 2024). "top3s" and "peakVor" ARE
   the raw VOR ranking, unaffected by any tiebreak. Recount both fields
   from the source file, not from each other, whenever this list changes. */

export interface Inductee {
  name: string;
  slug: string;
  position: string;
  span: string;
  classYear: number;
  mvps: number;
  top3s: number;
  peakVor: number;
  citation: string;
}

export const hallOfFame: Inductee[] = [
  {
    name: "Priest Holmes",
    slug: "priest-holmes",
    position: "RB",
    span: "2002–2003",
    classYear: 2003,
    mvps: 1,
    top3s: 2,
    peakVor: 208.7,
    citation:
      "Back-to-back top-3 finishes to open the archive, capped by a 27-touchdown 2003 season during the most prolific rushing stretch of his career.",
  },
  {
    name: "Peyton Manning",
    slug: "peyton-manning",
    position: "QB",
    span: "2002–2013",
    classYear: 2013,
    mvps: 2,
    top3s: 4,
    peakVor: 273.9,
    citation:
      "Top-3 in four seasons spanning 2002 to 2013, with MVP wins a decade apart — the longest reign of any career in the archive.",
  },
  {
    name: "LaDainian Tomlinson",
    slug: "ladainian-tomlinson",
    position: "RB",
    span: "2003–2007",
    classYear: 2007,
    mvps: 1,
    top3s: 4,
    peakVor: 309.7,
    citation:
      "Four top-3 finishes in five years, punctuated by a 309.7 VOR season in 2006 — still the second-highest single season ever recorded.",
  },
  {
    name: "Drew Brees",
    slug: "drew-brees",
    position: "QB",
    span: "2008–2011",
    classYear: 2011,
    mvps: 1,
    top3s: 2,
    peakVor: 243.6,
    citation:
      "MVP in 2008, then the league's outright VOR leader again in 2011 — that year's award went to a tiebreak instead, in the deepest quarterback era the league has seen.",
  },
  {
    name: "Le'Veon Bell",
    slug: "leveon-bell",
    position: "RB",
    span: "2014–2017",
    classYear: 2017,
    mvps: 0,
    top3s: 3,
    peakVor: 237.6,
    citation:
      "Three top-3 finishes in four years — 2014, 2016, and 2017 — the most consistent career of any player without a season MVP to his name.",
  },
  {
    name: "Christian McCaffrey",
    slug: "christian-mccaffrey",
    position: "RB",
    span: "2018–2025",
    classYear: 2025,
    mvps: 3,
    top3s: 4,
    peakVor: 333.0,
    citation:
      "Three MVP seasons and the highest single-season VOR ever recorded — 333.0 in 2019 — the most decorated career in league history.",
  },
];

export interface BallotEntry {
  name: string;
  why: string;
}

export const onTheBallot: BallotEntry[] = [
  { name: "Tom Brady", why: "2007 MVP, 263.66 VOR — highest single-season VOR that year, one appearance" },
  { name: "Saquon Barkley", why: "Outright VOR leader in 2018 & 2024, denied MVP by tiebreak both times" },
  { name: "Todd Gurley", why: "2 MVPs, back-to-back 2017–18" },
  { name: "Cooper Kupp", why: "2021 MVP, 280.9 VOR — 3rd-highest season ever, one appearance" },
  { name: "Antonio Brown", why: "2015 MVP, 175.3 VOR, one appearance" },
  { name: "Ja'Marr Chase", why: "2024 MVP (tiebreak), 215.5 VOR, one appearance" },
  { name: "Andre Johnson", why: "2 top-3 finishes (2008–09), no MVP" },
  { name: "Calvin Johnson", why: "2 top-3 finishes (2011–12), no MVP" },
];
