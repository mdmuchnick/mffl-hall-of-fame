/* MFFL commissioner recaps — Marc's own season-ending write-ups, kept
   separate from league.ts (which only holds data derived automatically
   from the season archive) same as hallOfFame.ts.

   Source: recaps.json, one array of entries per year. Most years hold a
   single "season-recap" (or, for 2005, "commissioner-note") entry. 2003 is
   the exception — 11 in-season "weekly-report" entries survive instead of
   an end-of-season wrap-up. Per Marc (2026-09-02), the season page only
   shows END-OF-SEASON recaps, so weekly-report entries are excluded and
   2003 has no recap section. */
import raw from "./recaps.json";

interface RecapEntry {
  kind: string;
  label: string;
  text: string;
}

const recaps = raw as Record<string, RecapEntry[]>;

export interface SeasonRecap {
  label: string;
  paragraphs: string[];
}

export function recapForYear(year: number): SeasonRecap | null {
  const entries = recaps[String(year)];
  if (!entries) return null;
  const entry = entries.find((e) => e.kind !== "weekly-report");
  if (!entry) return null;
  // Source text uses a single newline per paragraph/section-break, not a
  // blank line — confirmed against the raw recap JSON (2026-09-02).
  const paragraphs = entry.text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (paragraphs.length === 0) return null;
  return { label: entry.label, paragraphs };
}
