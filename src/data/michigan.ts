export interface Game {
  date: string;
  opponent: string;
  location: "home" | "away" | "neutral";
  result?: "W" | "L";
  teamScore?: number;
  oppScore?: number;
  ot?: boolean;
  conference: boolean;
  oppRank?: number;
  arena: string;
}

export interface Player {
  name: string;
  number: number;
  position: string;
  year: string;
  ppg: number;
  rpg: number;
  apg: number;
  height: string;
  hometown: string;
}

export const TEAM = {
  name: "Michigan Wolverines",
  season: "2025-26",
  overallRecord: { wins: 25, losses: 1 },
  conferenceRecord: { wins: 15, losses: 1 },
  conference: "Big Ten",
  apRanking: 2,
  streak: "W11",
  coach: "Dusty May",
};

export const SCHEDULE: Game[] = [
  { date: "2025-11-03", opponent: "Oakland", location: "home", result: "W", teamScore: 121, oppScore: 78, conference: false, arena: "Crisler Arena" },
  { date: "2025-11-11", opponent: "Wake Forest", location: "neutral", result: "W", teamScore: 85, oppScore: 84, ot: true, conference: false, arena: "Little Caesars Arena" },
  { date: "2025-11-14", opponent: "TCU", location: "away", result: "W", teamScore: 67, oppScore: 63, conference: false, arena: "Schollmaier Arena" },
  { date: "2025-11-19", opponent: "Middle Tennessee", location: "home", result: "W", teamScore: 86, oppScore: 61, conference: false, arena: "Crisler Arena" },
  { date: "2025-11-24", opponent: "San Diego State", location: "neutral", result: "W", teamScore: 94, oppScore: 54, conference: false, arena: "Michelob Ultra Arena" },
  { date: "2025-11-25", opponent: "Auburn", location: "neutral", result: "W", teamScore: 102, oppScore: 72, conference: false, oppRank: 21, arena: "Michelob Ultra Arena" },
  { date: "2025-11-26", opponent: "Gonzaga", location: "neutral", result: "W", teamScore: 101, oppScore: 61, conference: false, oppRank: 12, arena: "MGM Grand Garden Arena" },
  { date: "2025-12-06", opponent: "Rutgers", location: "home", result: "W", teamScore: 101, oppScore: 60, conference: true, arena: "Crisler Arena" },
  { date: "2025-12-09", opponent: "Villanova", location: "home", result: "W", teamScore: 89, oppScore: 61, conference: false, arena: "Crisler Arena" },
  { date: "2025-12-13", opponent: "Maryland", location: "away", result: "W", teamScore: 101, oppScore: 83, conference: true, arena: "Xfinity Center" },
  { date: "2025-12-21", opponent: "La Salle", location: "home", result: "W", teamScore: 102, oppScore: 50, conference: false, arena: "Crisler Arena" },
  { date: "2025-12-29", opponent: "McNeese State", location: "home", result: "W", teamScore: 112, oppScore: 71, conference: false, arena: "Crisler Arena" },
  { date: "2026-01-02", opponent: "USC", location: "home", result: "W", teamScore: 96, oppScore: 66, conference: true, oppRank: 24, arena: "Crisler Arena" },
  { date: "2026-01-06", opponent: "Penn State", location: "away", result: "W", teamScore: 74, oppScore: 72, conference: true, arena: "Bryce Jordan Center" },
  { date: "2026-01-10", opponent: "Wisconsin", location: "home", result: "L", teamScore: 88, oppScore: 91, conference: true, arena: "Crisler Arena" },
  { date: "2026-01-14", opponent: "Washington", location: "away", result: "W", teamScore: 82, oppScore: 72, conference: true, arena: "Alaska Airlines Arena" },
  { date: "2026-01-17", opponent: "Oregon", location: "away", result: "W", teamScore: 81, oppScore: 71, conference: true, arena: "Matthew Knight Arena" },
  { date: "2026-01-20", opponent: "Indiana", location: "home", result: "W", teamScore: 86, oppScore: 72, conference: true, arena: "Crisler Arena" },
  { date: "2026-01-23", opponent: "Ohio State", location: "home", result: "W", teamScore: 74, oppScore: 62, conference: true, arena: "Crisler Arena" },
  { date: "2026-01-27", opponent: "Nebraska", location: "home", result: "W", teamScore: 75, oppScore: 72, conference: true, oppRank: 5, arena: "Crisler Arena" },
  { date: "2026-01-30", opponent: "Michigan State", location: "away", result: "W", teamScore: 83, oppScore: 71, conference: true, oppRank: 7, arena: "Breslin Events Center" },
  { date: "2026-02-05", opponent: "Penn State", location: "home", result: "W", teamScore: 110, oppScore: 69, conference: true, arena: "Crisler Arena" },
  { date: "2026-02-08", opponent: "Ohio State", location: "away", result: "W", teamScore: 82, oppScore: 61, conference: true, arena: "Value City Arena" },
  { date: "2026-02-11", opponent: "Northwestern", location: "away", result: "W", teamScore: 87, oppScore: 75, conference: true, arena: "Welsh-Ryan Arena" },
  { date: "2026-02-14", opponent: "UCLA", location: "home", result: "W", teamScore: 86, oppScore: 56, conference: true, arena: "Crisler Arena" },
  { date: "2026-02-17", opponent: "Purdue", location: "away", result: "W", teamScore: 91, oppScore: 80, conference: true, oppRank: 7, arena: "Mackey Arena" },
  { date: "2026-02-21", opponent: "Duke", location: "neutral", result: undefined, teamScore: undefined, oppScore: undefined, conference: false, oppRank: 3, arena: "Capital One Arena" },
  { date: "2026-02-24", opponent: "Minnesota", location: "home", result: undefined, teamScore: undefined, oppScore: undefined, conference: true, arena: "Crisler Arena" },
  { date: "2026-02-27", opponent: "Illinois", location: "away", result: undefined, teamScore: undefined, oppScore: undefined, conference: true, oppRank: 10, arena: "State Farm Center" },
  { date: "2026-03-05", opponent: "Iowa", location: "away", result: undefined, teamScore: undefined, oppScore: undefined, conference: true, arena: "Carver-Hawkeye Arena" },
  { date: "2026-03-08", opponent: "Michigan State", location: "home", result: undefined, teamScore: undefined, oppScore: undefined, conference: true, oppRank: 15, arena: "Crisler Arena" },
];

export const ROSTER: Player[] = [
  { name: "Yaxel Lendeborg", number: 23, position: "F", year: "SR", ppg: 14.4, rpg: 7.5, apg: 3.2, height: "6-9", hometown: "Pennsauken, NJ" },
  { name: "Morez Johnson Jr.", number: 21, position: "F", year: "SO", ppg: 13.5, rpg: 7.3, apg: 1.2, height: "6-9", hometown: "Riverdale, IL" },
  { name: "Aday Mara", number: 15, position: "C", year: "JR", ppg: 11.2, rpg: 7.1, apg: 2.5, height: "7-3", hometown: "Zaragoza, Spain" },
  { name: "Elliot Cadeau", number: 3, position: "G", year: "JR", ppg: 10.1, rpg: 2.7, apg: 5.5, height: "6-1", hometown: "West Orange, NJ" },
  { name: "Trey McKenney", number: 1, position: "G", year: "FR", ppg: 10.0, rpg: 2.7, apg: 1.0, height: "6-4", hometown: "Flint, MI" },
  { name: "Nimari Burnett", number: 4, position: "G", year: "SR", ppg: 9.0, rpg: 2.3, apg: 1.3, height: "6-4", hometown: "Chicago, IL" },
  { name: "L.J. Cason", number: 2, position: "G", year: "SO", ppg: 8.2, rpg: 1.8, apg: 2.4, height: "6-2", hometown: "Lakeland, FL" },
  { name: "Roddy Gayle Jr.", number: 11, position: "G", year: "SR", ppg: 7.5, rpg: 3.2, apg: 1.6, height: "6-4", hometown: "Niagara Falls, NY" },
  { name: "Will Tschetter", number: 42, position: "F", year: "SR", ppg: 4.7, rpg: 1.8, apg: 0.7, height: "6-8", hometown: "Stewartville, MN" },
  { name: "Winters Grady", number: 10, position: "G", year: "FR", ppg: 2.9, rpg: 1.1, apg: 0.2, height: "6-6", hometown: "Tualatin, OR" },
];

export const TEAM_STATS = {
  ppg: 90.5,
  oppPpg: 69.2,
  fgPct: 0.487,
  threePct: 0.372,
  ftPct: 0.781,
  rpg: 38.4,
  apg: 18.7,
  spg: 8.2,
  bpg: 5.1,
  topg: 11.3,
  offEfficiency: 124.8,
  defEfficiency: 95.3,
  tempo: 72.6,
  sos: 8.2, // strength of schedule
};

export const TOURNAMENT = {
  projectedSeed: 1,
  projectedRegion: "Midwest",
  oddsToWinTitle: "12%",
  oddsToFinalFour: "32%",
  oddsToEliteEight: "55%",
  netRanking: 2,
  kenpomRanking: 2,
  quadRecord: { q1: "8-1", q2: "5-0", q3: "4-0", q4: "8-0" },
};

export const NEWS = [
  { title: "Michigan crushes Purdue 91-80 at Mackey Arena", date: "2026-02-17", summary: "Wolverines dominated from start to finish in hostile territory, led by Lendeborg's 22 points." },
  { title: "#2 Michigan faces #3 Duke in marquee matchup tonight", date: "2026-02-21", summary: "The Wolverines take on the Blue Devils at Capital One Arena in the ACC/Big Ten Challenge." },
  { title: "Dusty May named midseason Coach of the Year candidate", date: "2026-02-15", summary: "Second-year coach has transformed Michigan into a national title contender." },
  { title: "Aday Mara's growth: From raw talent to dominant force", date: "2026-02-13", summary: "The 7-3 center from Spain is averaging a double-double in conference play." },
  { title: "Michigan locks up #1 seed projection after Nebraska win", date: "2026-01-28", summary: "Bracketology experts slot the Wolverines as a top seed after beating #5 Nebraska at home." },
  { title: "Trey McKenney emerging as one of nation's best freshmen", date: "2026-02-10", summary: "The Flint native is averaging 10 PPG and has become a key piece of the rotation." },
];
