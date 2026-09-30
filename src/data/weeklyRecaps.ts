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
  {
    week: 2,
    year: 2026,
    publishedDate: "2026-09-22",
    paragraphs: [
      "Week 2 is in the books and the league has started to sort itself out, mostly along the lines you'd expect. Sunday's Best (John) put up 177.28, the highest score of the young season, and beat his own projection by 51 points. On the other end, I managed 86.12 — the only team under 100 and a full 30 points short of my own number. And two of our six games weren't decided until Monday night.",
      "Here's the thing I can't stop looking at: our standings through two weeks are almost a straight copy of the draft board. John holds the 1.01 and he's 1st, 2-0, with 342 points. And the bottom four in the standings — Andrew B., Jeff, Will, and me — drafted 10th, 11th, 9th, and 12th. The four of us who waited the longest in round one are the four looking up at everybody. I won the title last year, I earned the 12th pick, and I am now in dead last with the fewest points in the league. The system works exactly as designed. I just didn't think it would work this fast.",
      "You're My Boy Blue! 86.12, Lisan al Gibbs 121.42 — Jack has renamed his team after Jahmyr Gibbs, which is either confidence or a jinx, and Gibbs went for 23.30 to back him up. He won this one in spite of some real bad luck: Caleb Williams pulled up with a non-contact hamstring injury against Minnesota and finished with 4.72. Didn't matter, because DeVonta Smith went for 117 and a score and a 14th-round Dalton Schultz caught 12 balls for 140 yards. Meanwhile Drake Maye threw for 208 with three sacks and a pick, Bijan got buried in a 34-3 loss, and I scored 86. No notes. There's nothing to analyze here. I was bad.",
      "DolFan Madness 141.08, Give Em' The Beans! 142.56 — Game of the week by a mile, and the cruelest result of the season so far. Jeff finished his Sunday with 141.08 — 45.50 from Jaxon Smith-Njigba (9 catches, 155 yards, three touchdowns), 25 from the Panthers defense, 23.90 from James Cook — and went to bed Sunday night up 24.82 with nobody left to play. Loren had three Monday night starters in Giants-Rams, and Kyren Williams, Cam Skattebo and Malik Nabers combined for 26.30. Loren wins by 1.48. That's a Monday night heist. He did it despite DJ Moore leaving the Thursday opener with a shoulder injury and finishing at negative 0.10, and after a 7th-round Dak threw four touchdowns and an 8th-round Kelce went for 101 and a score. Jeff, you're 0-2 with the third-most points in the league. Hate to kick you while you're down.",
      "Finding Nico 92.96, Sunday's Best 177.28 — This was not a game. Amon-Ra St. Brown, the 1.01, went for 142 and two scores (38.20), and Davante Adams — a 5th-round pick — put up 195 yards, two touchdowns and 42.50 on Monday night, long after this one was decided. Kenneth Walker added 26.80 for the second straight week. Andrew B. got a respectable day from Hampton and Hubbard, but Colston Loveland caught one ball for three yards and there was no coming back from that kind of firepower anyway. John is 2-0 and it's not close.",
      "King Will 117.54, The Skeeters 120.38 — The other Monday night robbery. Will finished Sunday at 117.54 and led by 12.16. Scott had the Rams defense and Harrison Mevis still to play, and the Rams proceeded to hold the Giants to six points — 11 for the defense, four from the kicker, and Scott wins by 2.84. Will got 29.20 from Jonathan Taylor's two-touchdown day and 18.10 from Tetairoa McMillan and lost anyway. Scott had also gotten 32.48 from a 10th-round Brock Purdy and another 22.60 from Chris Olave, who is quietly making that 6th-round pick look like theft two weeks running. Sorry, Will — 0-2, with two losses by a combined 24 points.",
      "OJ Might've Done It 110.82, Tenacious D 134.18 — Andrew K. got 44.82 from Josh Allen, three passing touchdowns and two more on the ground, and lost. Because Saquon — his own first-rounder, pick five — took a stinger, went to the locker room, came back in the second half and still finished with 3.00 on twenty total yards. That's a brutal way to lose a matchup. Steve didn't need to be clever: Jared Goff, a 10th-round pick, threw for 327 and four scores (36.78), McCaffrey got in twice, and Waddle went for 138 — enough that losing Dallas Goedert to a knee injury for 1.40 never cost him anything. Steve is 2-0.",
      "Puka's Paradise 105.80, TheDudeAbides 126.90 — Greg rode CeeDee Lamb (153 yards, two touchdowns, 38.30) and a 16-point day from Brandon Aubrey's leg to 2-0. Ryan's best players were a 15th-round Parker Washington (98 yards) and Stefon Diggs with two scores, which is a fine way to lose. And the cruelest detail of the week: the team is named Puka's Paradise, Puka's Rams played the Monday night game everybody else was sweating, and he was ruled inactive. Ryan got nothing out of the one game that decided two other matchups.",
      "So: one Monday night game, and it flipped two of the six. Loren erased a 24-point deficit with three Giants and Rams, Scott erased twelve with a defense and a kicker, and Jeff and Will went from winning to 0-2 without being able to do a thing about it. Set your lineups, but also maybe say a prayer.",
      "Early steals: Jared Goff (Round 10, Steve), Brock Purdy (Round 10, Scott), Dalton Schultz (Round 14, Jack), Davante Adams (Round 5, John) and Parker Washington (Round 15, Ryan). If you spent a draft pick on a quarterback before round seven, this was not your week.",
      "Early regrets: this one comes with an asterisk, because the trainer's room did most of the damage. Saquon at 1.05 finished with 3.00 after a stinger, Caleb Williams went down with a hamstring, DJ Moore left with a shoulder, Goedert hurt a knee, and Puka never suited up. The clean misses were De'Von Achane at 1.09 going for 12.30, Justin Jefferson at 1.06 putting up 8.50, and my own Bijan at 1.12 stuck on a team that's lost 34-3. Four of the first nine picks in this draft have been non-factors two weeks running, which should make the rest of you nervous.",
      "Two weeks down. If the draft board really is the standings, four of us have a long year ahead. I'll be over here scoring 86 and telling myself it gets better from here.",
      "Marc",
    ],
    highlights: [
      { player: "Davante Adams", nflTeam: "LAR", manager: "john-briscoe", fantasyTeam: "Sunday's Best", proj: 14.8, actual: 42.5, tag: "steal", round: 5 },
      { player: "Jaxon Smith-Njigba", nflTeam: "Sea", manager: "jeff-ready", fantasyTeam: "DolFan Madness", proj: 19.77, actual: 45.5, tag: "stud", round: 1 },
      { player: "Jared Goff", nflTeam: "Det", manager: "steve-king", fantasyTeam: "Tenacious D", proj: 17.58, actual: 36.78, tag: "steal", round: 10 },
      { player: "Brock Purdy", nflTeam: "SF", manager: "scott-zide", fantasyTeam: "The Skeeters", proj: 20.01, actual: 32.48, tag: "steal", round: 10 },
      { player: "Dalton Schultz", nflTeam: "Hou", manager: "jack-muchnick", fantasyTeam: "Lisan al Gibbs", proj: 11.49, actual: 29.0, tag: "steal", round: 14 },
      { player: "Dak Prescott", nflTeam: "Dal", manager: "loren-muchnick", fantasyTeam: "Give Em' The Beans!", proj: 21.0, actual: 35.76, tag: "steal", round: 7 },
      { player: "CeeDee Lamb", nflTeam: "Dal", manager: "greg-stiefvater", fantasyTeam: "TheDudeAbides", proj: 17.8, actual: 38.3, tag: "stud", round: 1 },
      { player: "Parker Washington", nflTeam: "Jax", manager: "ryan-muchnick", fantasyTeam: "Puka’s Paradise", proj: 12.04, actual: 16.8, tag: "steal", round: 15 },
      { player: "Saquon Barkley", nflTeam: "Phi", manager: "andrew-king", fantasyTeam: "OJ Might've Done It", proj: 14.89, actual: 3.0, tag: "bust", round: 1 },
      { player: "Caleb Williams", nflTeam: "Chi", manager: "jack-muchnick", fantasyTeam: "Lisan al Gibbs", proj: 19.03, actual: 4.72, tag: "bust", round: 6 },
      { player: "DJ Moore", nflTeam: "Buf", manager: "loren-muchnick", fantasyTeam: "Give Em' The Beans!", proj: 14.22, actual: -0.1, tag: "bust", round: 5 },
      { player: "Justin Jefferson", nflTeam: "Min", manager: "scott-zide", fantasyTeam: "The Skeeters", proj: 16.66, actual: 8.5, tag: "bust", round: 1 },
    ],
  },
  {
    week: 3,
    year: 2026,
    publishedDate: "2026-09-30",
    paragraphs: [
      "Week 3 is in the books, and the bottom of the standings finally fought back. Jeff put up 170.10, the top score of the week, and beat his own projection by 43 points. Andrew B. had the low score at 85.62, and his game with Will was the only one where neither team cracked 90. Steve won the closest game of the week by 2.62 and is the last unbeaten team in the league.",
      "Last week I said the standings looked like a copy of the draft board, with the four latest first-round picks — Andrew B., Jeff, Will and me — stuck at the bottom. Three of us were 0-2. All three of us won this week. Nobody in the league is winless anymore: it's Steve at 3-0, four teams at 2-1, and seven of us at 1-2. I'd love to call that a comeback. More likely the draft board took one week off.",
      "You're My Boy Blue! 127.16, OJ Might've Done It 105.06 — I won a game. Bijan, who spent last week buried in a 34-3 loss, ran for 194 yards and two touchdowns (38.30) in a 35-14 win at Green Bay. Garrett Wilson caught 10 balls for 107 and a score (29.70), and a 6th-round Harold Fannin Jr. caught two touchdowns (24.10). Now the part that keeps me humble. Drake Maye threw for 199 yards with two picks and three sacks, good for 0.76 points. Jacksonville beat New England 35-6, and my kicker, Cam Little, kicks for Jacksonville. He scored 5.00 on extra points against my own quarterback. Andrew K. got two rushing touchdowns from Josh Allen and still only 13.46 after two picks. Saquon, his 1.05, put up 9.00 in a 27-7 loss in Chicago. A 7th-round Michael Wilson caught 11 balls for 25.90, which was the best thing that happened to Andrew all day. Sorry, Andrew.",
      "Lisan al Gibbs 134.58, Supersonic turtles 105.94 — Biggest blowout of the week. Last week I asked whether naming your team after Jahmyr Gibbs was confidence or a jinx. It's confidence: 99 rushing yards, two touchdowns, seven catches, 41.40 points. Drake London added 194 receiving yards on nine catches (31.40), which more than covered C.J. Stroud's 10.68 and a zero from the Eagles defense. Ryan got 24.44 from Lamar and 21.90 from Jeremiyah Love, and it still wasn't close. Puka's Paradise is now Supersonic turtles, and Puka still isn't in the lineup. Ryan, I'm not going to ask.",
      "DolFan Madness 170.10, Sunday's Best 153.98 — Jeff had the top score of the week and needed most of it. Jaxon Smith-Njigba caught 10 passes for 128 yards and two touchdowns (38.36). Brock Bowers had 10 catches, 116 yards and a score (30.60). A 9th-round Matthew Golden went for 100 and a touchdown (24.00). James Cook ran for 154 and a score despite a lost fumble. John answered with 27.58 from Burrow, 23.70 from Davante Adams, and 17 from a Vikings defense that had six sacks and a return touchdown. 153.98 would have beaten every other team in the league this week, and it lost. It hurts more because the 1.01, Amon-Ra, went for 11.90. Jeff, after last week's 1.48-point heartbreak, this one's more like it.",
      "Finding Nico 85.62, King Will 88.84 — Neither team seemed interested in winning this one. Both finished under projection, and Andrew B. missed his by 25.24, the worst in the league. Jalen Hurts threw for 153 yards in Philly's loss in Chicago (10.62). Omarion Hampton, the 1.10, ran for 56 yards (5.60). Jalen Coker and Dalton Kincaid put up 3.80 each, and Kincaid lost a fumble for good measure. Will won while getting 1.70 from De'Von Achane (17 yards, now on IR), 9.20 from Jonathan Taylor and 3.70 from Tetairoa McMillan. Tee Higgins (90 yards and a score, 21.00) and his 9th-round keeper Bhayshul Tuten (17.00) bailed him out. Will cut Achane, the 1.09 pick, this morning for Braelon Allen. Andrew, you're 12th in points, and I promise it gets better. It pretty much has to.",
      "Give Em' The Beans! 124.74, Tenacious D 127.36 — Closest game of the week. Last week Loren won by 1.48, this week he lost by 2.62, so the universe is square. The difference was on defense. Steve's Broncos scored a touchdown with four sacks and two picks (14.00), and Loren's Bengals gave up 30 in Pittsburgh (3.00). Ja'Marr Chase (nine catches, 98 yards, a score, 24.80) and Kyren Williams (21.80) kept Loren in it. Steve got two touchdowns and 21.90 from Derrick Henry, 21.60 from McCaffrey, and a score from his 4th-round Luther Burden (19.80). That was enough to survive Jaylen Waddle's 6.40 and Hunter Henry's 1.50 at tight end. Steve is 3-0. Loren has already swapped the Bengals for the Browns, so he knows.",
      "The Skeeters 142.48, TheDudeAbides 115.38 — Scott's 10th-round Brock Purdy is at it again: 297 yards, four touchdowns, 39.28. Jaylen Warren ran for 127 and added 49 receiving (23.60), and Chris Olave caught nine for 107 (22.70). That's three straight weeks of Olave making that 6th-round pick look like theft, which is lucky, because Justin Jefferson, the 1.06, caught two passes for 32 yards. Greg got 23.20 from CeeDee and 22.60 from Christian Watson. But Breece Hall managed 8.50, and the Packers defense went negative (-2.00) after giving up 35 to Atlanta. That was Bijan, Greg. I'd apologize, but I needed that one.",
      "Early steals: Brock Purdy (Round 10, Scott) keeps rolling, with 39.28 on a 21.32 projection. Matthew Golden (Round 9, Jeff), Michael Wilson (Round 7, Andrew K.), Harold Fannin Jr. (Round 6, me) and Bhayshul Tuten (Round 9 keeper, Will) all scored 17 or more on projections around 11.",
      "Early regrets: three weeks in, these are about the whole season, not one bad Sunday. Saquon at 1.05 has 21.00 points total against a 45.67 projection, and he's 186th in the league. Achane at 1.09 scored 24.60 before landing on IR, and he's already on waivers. Puka at 1.08 has played one game. Hampton at 1.10 has 31.40, 110th overall. Jefferson at 1.06 opened with 31.20 in Week 1 and has 13.70 since. Round 2 hasn't been much kinder: Malik Nabers has 21.60 and George Pickens 31.00, both well short of their numbers, and Colston Loveland, a 3rd-rounder, has 8.40 total. And I can't leave myself out: A.J. Brown, my 2.01, has 5.60 points all season. One quiet week doesn't get you on this list. Amon-Ra and Josh Allen both had one this week, and they're still 9th and 3rd in the league. The three best first-rounders so far came from picks 11, 3 and 12: JSN is 1st in the league, Gibbs 2nd and Bijan 6th. For once, going late worked.",
      "Three weeks down, nobody's winless, and I'm 1-2 with the third-fewest points in the league. That's progress. Steve, enjoy 3-0 while it lasts.",
      "Marc",
    ],
    highlights: [
      { player: "Brock Purdy", nflTeam: "SF", manager: "scott-zide", fantasyTeam: "The Skeeters", proj: 21.32, actual: 39.28, tag: "steal", round: 10 },
      { player: "Michael Wilson", nflTeam: "Ari", manager: "andrew-king", fantasyTeam: "OJ Might've Done It", proj: 11.08, actual: 25.9, tag: "steal", round: 7 },
      { player: "Harold Fannin Jr.", nflTeam: "Cle", manager: "marc-muchnick", fantasyTeam: "You're My Boy Blue!", proj: 10.59, actual: 24.1, tag: "steal", round: 6 },
      { player: "Matthew Golden", nflTeam: "GB", manager: "jeff-ready", fantasyTeam: "DolFan Madness", proj: 11.82, actual: 24.0, tag: "steal", round: 9 },
      { player: "Bhayshul Tuten", nflTeam: "Jax", manager: "will-briscoe", fantasyTeam: "King Will", proj: 10.62, actual: 17.0, tag: "steal", round: 9 },
      { player: "Jahmyr Gibbs", nflTeam: "Det", manager: "jack-muchnick", fantasyTeam: "Lisan al Gibbs", proj: 23.74, actual: 41.4, tag: "stud", round: 1 },
      { player: "Bijan Robinson", nflTeam: "Atl", manager: "marc-muchnick", fantasyTeam: "You're My Boy Blue!", proj: 20.13, actual: 38.3, tag: "stud", round: 1 },
      { player: "Drake London", nflTeam: "Atl", manager: "jack-muchnick", fantasyTeam: "Lisan al Gibbs", proj: 14.86, actual: 31.4, tag: "stud", round: 2 },
      { player: "Saquon Barkley", nflTeam: "Phi", manager: "andrew-king", fantasyTeam: "OJ Might've Done It", proj: 14.89, actual: 9.0, tag: "bust", round: 1 },
      { player: "Malik Nabers", nflTeam: "NYG", manager: "loren-muchnick", fantasyTeam: "Give Em' The Beans!", proj: 13.01, actual: 7.6, tag: "bust", round: 2 },
      { player: "Omarion Hampton", nflTeam: "LAC", manager: "andrew-briscoe", fantasyTeam: "Finding Nico", proj: 14.62, actual: 5.6, tag: "bust", round: 1 },
      { player: "Justin Jefferson", nflTeam: "Min", manager: "scott-zide", fantasyTeam: "The Skeeters", proj: 16.34, actual: 5.2, tag: "bust", round: 1 },
    ],
  },
];

export function recapForWeek(week: number, year = 2026): WeeklyRecap | undefined {
  return weeklyRecaps.find((r) => r.week === week && r.year === year);
}
