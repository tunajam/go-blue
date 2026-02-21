"use client";

import { TEAM, SCHEDULE, ROSTER, TEAM_STATS, TOURNAMENT, NEWS } from "@/data/michigan";
import {
  Trophy,
  Basketball,
  Users,
  ChartBar,
  Newspaper,
  Timer,
  Star,
  MapPin,
  TrendUp,
  ShieldCheck,
  Target,
  Lightning,
  CalendarBlank,
  ArrowRight,
  Crown,
} from "@phosphor-icons/react";

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatDay(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short" });
}

function daysUntil(dateStr: string) {
  const now = new Date();
  const target = new Date(dateStr + "T12:00:00");
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

const nextGame = SCHEDULE.find((g) => !g.result);
const marchMadnessStart = "2026-03-17";
const daysToMarchMadness = daysUntil(marchMadnessStart);
const daysToNextGame = nextGame ? daysUntil(nextGame.date) : 0;
const completedGames = SCHEDULE.filter((g) => g.result);
const upcomingGames = SCHEDULE.filter((g) => !g.result);
const avgMargin =
  completedGames.reduce((sum, g) => sum + ((g.teamScore ?? 0) - (g.oppScore ?? 0)), 0) /
  completedGames.length;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#001529] text-white">
      {/* Header */}
      <header className="bg-[#00274C] border-b-4 border-[#FFCB05] sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFCB05] rounded-lg flex items-center justify-center font-black text-[#00274C] text-xl">
              M
            </div>
            <div>
              <h1 className="font-black text-lg leading-tight">MICHIGAN</h1>
              <p className="text-[#FFCB05] text-xs font-semibold tracking-wider">WOLVERINES BASKETBALL</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#FFCB05]/20 text-[#FFCB05] px-2 py-0.5 rounded text-xs font-bold">
              #{TEAM.apRanking} AP
            </span>
            <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-bold">
              {TEAM.streak}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* Hero: Record + Countdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Season Record */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#00274C] to-[#003A70] rounded-2xl p-6 border border-[#FFCB05]/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#FFCB05] text-sm font-semibold flex items-center gap-1">
                  <Trophy weight="fill" size={16} /> SEASON RECORD
                </p>
                <div className="mt-2">
                  <span className="text-7xl font-black tracking-tight">{TEAM.overallRecord.wins}</span>
                  <span className="text-7xl font-black text-white/30">-</span>
                  <span className="text-7xl font-black text-white/60">{TEAM.overallRecord.losses}</span>
                </div>
                <p className="text-white/50 text-sm mt-1">
                  {TEAM.conferenceRecord.wins}-{TEAM.conferenceRecord.losses} {TEAM.conference}
                </p>
              </div>
              <div className="text-right space-y-2">
                <div className="bg-[#FFCB05]/10 rounded-lg px-3 py-2">
                  <p className="text-[#FFCB05] text-xs">AVG MARGIN</p>
                  <p className="text-2xl font-bold text-[#FFCB05]">+{avgMargin.toFixed(1)}</p>
                </div>
                <div className="bg-white/5 rounded-lg px-3 py-2">
                  <p className="text-white/40 text-xs">PPG</p>
                  <p className="text-2xl font-bold">{TEAM_STATS.ppg}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="space-y-4">
            {nextGame && (
              <div className="bg-gradient-to-br from-[#FFCB05] to-[#E6B800] rounded-2xl p-5 text-[#00274C]">
                <p className="text-xs font-bold opacity-70 flex items-center gap-1">
                  <Timer weight="bold" size={14} /> {daysToNextGame === 0 ? "GAME DAY" : "NEXT GAME"}
                </p>
                {daysToNextGame === 0 ? (
                  <p className="text-3xl font-black mt-1">🏀 TODAY!</p>
                ) : (
                  <p className="text-5xl font-black mt-1">
                    {daysToNextGame} <span className="text-lg">DAYS</span>
                  </p>
                )}
                <p className="text-sm font-bold mt-1">
                  vs {nextGame.oppRank ? `#${nextGame.oppRank} ` : ""}
                  {nextGame.opponent}
                </p>
                <p className="text-xs opacity-70">
                  {formatDay(nextGame.date)}, {formatDate(nextGame.date)} • {nextGame.arena}
                </p>
              </div>
            )}
            <div className="bg-[#00274C] rounded-2xl p-5 border border-[#FFCB05]/20">
              <p className="text-xs font-semibold text-[#FFCB05] flex items-center gap-1">
                <Crown weight="fill" size={14} /> MARCH MADNESS
              </p>
              <p className="text-4xl font-black mt-1">
                {daysToMarchMadness} <span className="text-sm text-white/50">DAYS</span>
              </p>
              <p className="text-xs text-white/40">Selection Sunday: Mar 15</p>
            </div>
          </div>
        </div>

        {/* Tournament Projections */}
        <div className="bg-[#00274C] rounded-2xl p-6 border border-[#FFCB05]/20">
          <h2 className="text-[#FFCB05] font-bold text-sm flex items-center gap-2 mb-4">
            <Target weight="fill" size={18} /> TOURNAMENT PROJECTIONS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-3xl font-black text-[#FFCB05]">#{TOURNAMENT.projectedSeed}</p>
              <p className="text-xs text-white/50 mt-1">PROJECTED SEED</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xl font-black">{TOURNAMENT.projectedRegion}</p>
              <p className="text-xs text-white/50 mt-1">REGION</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-3xl font-black text-green-400">{TOURNAMENT.oddsToWinTitle}</p>
              <p className="text-xs text-white/50 mt-1">TITLE ODDS</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-3xl font-black">{TOURNAMENT.oddsToFinalFour}</p>
              <p className="text-xs text-white/50 mt-1">FINAL FOUR</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
            {Object.entries(TOURNAMENT.quadRecord).map(([quad, record]) => (
              <div key={quad} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                <span className="text-xs text-white/40 uppercase">{quad}</span>
                <span className="text-sm font-bold">{record}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="bg-[#00274C] rounded-2xl p-6 border border-[#FFCB05]/20">
          <h2 className="text-[#FFCB05] font-bold text-sm flex items-center gap-2 mb-4">
            <ChartBar weight="fill" size={18} /> TEAM STATS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "OFF EFF", value: TEAM_STATS.offEfficiency, icon: <Lightning weight="fill" size={16} className="text-[#FFCB05]" />, color: "text-[#FFCB05]" },
              { label: "DEF EFF", value: TEAM_STATS.defEfficiency, icon: <ShieldCheck weight="fill" size={16} className="text-green-400" />, color: "text-green-400" },
              { label: "TEMPO", value: TEAM_STATS.tempo, icon: <TrendUp weight="fill" size={16} className="text-blue-400" />, color: "text-blue-400" },
              { label: "OPP PPG", value: TEAM_STATS.oppPpg, icon: <ShieldCheck weight="fill" size={16} className="text-green-400" />, color: "text-green-400" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-white/40 flex items-center gap-1">{s.icon} {s.label}</p>
                <p className={`text-3xl font-black mt-1 ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-3">
            {[
              { label: "FG%", value: (TEAM_STATS.fgPct * 100).toFixed(1) + "%" },
              { label: "3PT%", value: (TEAM_STATS.threePct * 100).toFixed(1) + "%" },
              { label: "FT%", value: (TEAM_STATS.ftPct * 100).toFixed(1) + "%" },
              { label: "RPG", value: TEAM_STATS.rpg },
              { label: "APG", value: TEAM_STATS.apg },
              { label: "SPG", value: TEAM_STATS.spg },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 rounded-lg p-3 text-center">
                <p className="text-xs text-white/40">{s.label}</p>
                <p className="text-lg font-bold">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Roster */}
        <div className="bg-[#00274C] rounded-2xl p-6 border border-[#FFCB05]/20">
          <h2 className="text-[#FFCB05] font-bold text-sm flex items-center gap-2 mb-4">
            <Users weight="fill" size={18} /> KEY PLAYERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ROSTER.map((player, i) => (
              <div
                key={player.name}
                className={`flex items-center gap-4 bg-white/5 rounded-xl p-4 ${i === 0 ? "border border-[#FFCB05]/30" : ""}`}
              >
                <div className="w-12 h-12 bg-[#FFCB05]/20 rounded-full flex items-center justify-center text-[#FFCB05] font-black text-lg shrink-0">
                  {player.number}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate">
                    {player.name}
                    {i === 0 && <Star weight="fill" size={12} className="inline ml-1 text-[#FFCB05]" />}
                  </p>
                  <p className="text-xs text-white/40">
                    {player.position} • {player.year} • {player.height}
                  </p>
                </div>
                <div className="flex gap-3 text-center shrink-0">
                  <div>
                    <p className="text-sm font-bold">{player.ppg}</p>
                    <p className="text-[10px] text-white/30">PPG</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{player.rpg}</p>
                    <p className="text-[10px] text-white/30">RPG</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{player.apg}</p>
                    <p className="text-[10px] text-white/30">APG</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-[#00274C] rounded-2xl p-6 border border-[#FFCB05]/20">
          <h2 className="text-[#FFCB05] font-bold text-sm flex items-center gap-2 mb-4">
            <CalendarBlank weight="fill" size={18} /> SCHEDULE & RESULTS
          </h2>

          {/* Upcoming */}
          {upcomingGames.length > 0 && (
            <div className="mb-6">
              <p className="text-xs text-white/40 font-semibold mb-2 uppercase">Upcoming</p>
              <div className="space-y-2">
                {upcomingGames.map((game) => (
                  <div
                    key={game.date}
                    className={`flex items-center gap-3 rounded-xl p-3 ${
                      game === nextGame
                        ? "bg-[#FFCB05]/10 border border-[#FFCB05]/30"
                        : "bg-white/5"
                    }`}
                  >
                    <div className="w-16 text-center shrink-0">
                      <p className="text-xs text-white/40">{formatDay(game.date)}</p>
                      <p className="text-sm font-bold">{formatDate(game.date)}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate">
                        {game.location === "away" ? "@ " : ""}
                        {game.oppRank ? `#${game.oppRank} ` : ""}
                        {game.opponent}
                        {game.location === "neutral" ? " (N)" : ""}
                      </p>
                      <p className="text-xs text-white/30 flex items-center gap-1">
                        <MapPin size={10} /> {game.arena}
                      </p>
                    </div>
                    {game === nextGame && (
                      <span className="bg-[#FFCB05] text-[#00274C] text-xs font-black px-2 py-1 rounded">
                        {daysToNextGame === 0 ? "TODAY" : "NEXT"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Completed */}
          <p className="text-xs text-white/40 font-semibold mb-2 uppercase">Results</p>
          <div className="space-y-1.5">
            {[...completedGames].reverse().map((game) => (
              <div key={game.date} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                <div className="w-16 text-center shrink-0">
                  <p className="text-xs text-white/30">{formatDay(game.date)}</p>
                  <p className="text-xs font-medium text-white/50">{formatDate(game.date)}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">
                    {game.location === "away" ? "@ " : ""}
                    {game.oppRank ? `#${game.oppRank} ` : ""}
                    {game.opponent}
                    {game.location === "neutral" ? " (N)" : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-xs font-black px-1.5 py-0.5 rounded ${
                      game.result === "W"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {game.result}
                  </span>
                  <span className="text-sm font-bold">
                    {game.teamScore}-{game.oppScore}
                  </span>
                  {game.ot && <span className="text-[10px] text-white/30">OT</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News */}
        <div className="bg-[#00274C] rounded-2xl p-6 border border-[#FFCB05]/20">
          <h2 className="text-[#FFCB05] font-bold text-sm flex items-center gap-2 mb-4">
            <Newspaper weight="fill" size={18} /> LATEST NEWS
          </h2>
          <div className="space-y-3">
            {NEWS.map((article) => (
              <div key={article.title} className="bg-white/5 rounded-xl p-4 group cursor-pointer hover:bg-white/10 transition">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-bold text-sm">{article.title}</p>
                    <p className="text-xs text-white/40 mt-1">{article.summary}</p>
                  </div>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-[#FFCB05] transition shrink-0 mt-1" />
                </div>
                <p className="text-[10px] text-white/30 mt-2">{formatDate(article.date)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-white/20 text-xs">
          <p>GO BLUE! 〽️ Hail to the Victors</p>
          <p className="mt-1">Built with 💛💙 for Hunter</p>
        </footer>
      </main>
    </div>
  );
}
