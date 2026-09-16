/**
 * Marc's weekly commissioner recaps for the in-progress season, plus the
 * player-level highlights that power the recap page's charts. Kept
 * separate from currentSeason.json/ts (team-level scores/standings only)
 * the same way lore.ts/hallOfFame.ts are kept separate from league.ts -
 * this is hand-authored, approved-by-Marc content, not a derived stat.
 *
 * Add one entry here each week after Marc approves the recap text
 * (mffl-weekly-recap skill, step 4). `highlights` are the players named
 * in that week's recap - steals, busts, studs - with their pre-game
 * projection and actual score, used by PlayerHighlightChart.
 */

export interface RecapHighlight {
  player: string;
  nflTeam: string;
  manager: string;       // manager slug, links to /managers/[slug]
  fantasyTeam: string;
  proj: number;
  actual: number;
  tag: "steal" | "bust" | "stud";
  round?: number;         // draft round, when relevant to the tag
}

export interface WeeklyRecap {
  week: number;
  year: number;
  publishedDate: string;  // ISO date
  paragraphs: string[];
  highlights: RecapHighlight[];
}

export const weeklyRecaps: WeeklyRecap[] = [
  {
    week: 1,
    year: 2026,
    publishedDate: "2026-09-16",
    paragraphs: [
      "One week in the books, and it was as unpredictable as you would expect when starters don't play together in preseason. Six games, most decided by three-touchdown margins or more, except for one that came down to less than a field goal. Loren asked me when the last time every team scored more than 100pts. The answer was Week 3 in 2025, not as rare as we thought.",
      "Top score of the week: Sunday's Best (John), who strolled to 165.06 and blew his own projection out by 41 points. Bottom of the barrel: Give Em' The Beans! (Loren), scraping together 102.40 — and he'd have had a much better day if Ja'Marr Chase, the 2nd overall pick in this draft, hadn't decided Week 1 was the week to go for 2 catches, 12 yards, and 3.20 points. Loren, there's really nothing else to say about that one.",
      "Tenacious D 132.84, You're My Boy Blue! 105.42 — Biggest margin of the week, and yes, that's me on the wrong end of it. Bijan did his job (31.30, well over his number), but A.J. Brown put up a literal zero — one catch, two yards — and Drake Maye threw three picks like he was trying to get himself benched before Thursday. Steve didn't need to do much; my own bench did it to me.",
      "Breece's Pieces 118.26, TheDudeAbides 120.12 — This one hurt to watch. Jack got a video-game 156 yards and two scores from Jahmyr Gibbs AND a 39-point night from a 6th-round Caleb Williams — two league-winning performances in the same lineup — and still lost by under two points because Judkins, London, Smith and Kittle all no-showed at once. Greg didn't do much right except draft Christian Watson in the 4th round, who went for 147 yards and two scores like Jordan Love forgot anyone else was on the field. Early nomination for snipe of the year.",
      "DolFan Madness 108.76, OJ Might've Done It 132.56 — Andrew K.'s third-round Josh Allen picked Week 1 to throw for 334, run for two more, and remind everyone why he went that early (40.66 points), and his 2nd-round Ashton Jeanty already looks like a workhorse (35.70). Meanwhile Saquon — Andrew K.'s own 1st-rounder — had a quiet 9.00 and it didn't matter one bit. Jeff got a nice debut from Jaxon Smith-Njigba (29.20) but there was no answer for that kind of firepower.",
      "Finding Nico 125.12, Give Em' The Beans! 102.40 — Andrew B. got a monster Zay Flowers day (150 yards, a score, nearly double his projection), and it's a good sign when Nico Collins is also quietly doing work for the team named after him. Meanwhile, see above re: Chase.",
      "King Will 112.06, Puka's Paradise 138.86 — Ryan's team is named after Puka Nacua, who had a pedestrian day (12.40 points). Didn't matter — D'Andre Swift went off for 35.40 and carried the paradise on his own. Jonathan Taylor was solid for Will, just not enough.",
      "Sunday's Best 165.06, The Skeeters 138.34 — Two teams that combined for more points than some entire divisions will score this week, and one of them still had to lose. Kenneth Walker (37.10, a 3rd-round pick already looking like a steal) and Trey McBride both popped off for John, while across the line a 6th-round Chris Olave put up 182 yards and 31.20 points and Justin Jefferson did Justin Jefferson things — and Scott still lost by 27. Rough sport.",
      "Early steals: Chris Olave (Round 6, Scott), Christian Watson (Round 4, Greg), and whoever decided a Round 6 Caleb Williams made a fine QB2 (Jack) — three loud statements in week one.",
      "Early regrets: Ja'Marr Chase at pick 2 overall going for 3.20 (sorry again, Loren), and quiet debuts from Saquon Barkley and Christian McCaffrey for the two managers (Andrew K. and Steve) who spent early picks expecting fireworks out of the gate.",
      "One week down, plenty of season left to get your team back on track. At least that's what I'm telling myself. See you next week.",
      "Marc",
    ],
    highlights: [
      { player: "D'Andre Swift", nflTeam: "Chi", manager: "ryan-muchnick", fantasyTeam: "Puka's Paradise", proj: 12.64, actual: 35.40, tag: "steal", round: 3 },
      { player: "Christian Watson", nflTeam: "GB", manager: "greg-stiefvater", fantasyTeam: "TheDudeAbides", proj: 12.95, actual: 35.70, tag: "steal", round: 4 },
      { player: "Kenneth Walker", nflTeam: "KC", manager: "john-briscoe", fantasyTeam: "Sunday's Best", proj: 14.58, actual: 37.10, tag: "steal", round: 3 },
      { player: "Ashton Jeanty", nflTeam: "LV", manager: "andrew-king", fantasyTeam: "OJ Might've Done It", proj: 14.74, actual: 35.70, tag: "stud", round: 2 },
      { player: "Josh Allen", nflTeam: "Buf", manager: "andrew-king", fantasyTeam: "OJ Might've Done It", proj: 19.88, actual: 40.66, tag: "stud", round: 3 },
      { player: "Caleb Williams", nflTeam: "Chi", manager: "jack-muchnick", fantasyTeam: "Breece's Pieces", proj: 18.63, actual: 39.26, tag: "steal", round: 6 },
      { player: "Chris Olave", nflTeam: "NO", manager: "scott-zide", fantasyTeam: "The Skeeters", proj: 15.99, actual: 31.20, tag: "steal", round: 6 },
      { player: "Ja'Marr Chase", nflTeam: "Cin", manager: "loren-muchnick", fantasyTeam: "Give Em' The Beans!", proj: 21.36, actual: 3.20, tag: "bust", round: 1 },
    ],
  },
];

export function recapForWeek(week: number, year = 2026): WeeklyRecap | undefined {
  return weeklyRecaps.find((r) => r.week === week && r.year === year);
}
