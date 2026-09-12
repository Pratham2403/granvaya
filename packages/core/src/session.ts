import type { UserNodeState } from "@granvaya/contracts";

// SRS.md FR-9 — session assembly is the hot path: zero LLM calls, zero graph traversal.
// Unlike mastery/memory/propagation, this needs no calibration to be correct today —
// it is a pure filter + sort over already-computed due dates, so it is implemented now.
export function selectDueNodes(
  states: UserNodeState[],
  now: Date,
  limit: number,
): UserNodeState[] {
  return states
    .filter((s) => s.nextDue.getTime() <= now.getTime())
    .sort((a, b) => a.nextDue.getTime() - b.nextDue.getTime())
    .slice(0, limit);
}
