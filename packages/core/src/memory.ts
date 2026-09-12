import type { Attempt, UserNodeState } from "@granvaya/contracts";

export type MemoryState = Pick<UserNodeState, "stability" | "difficulty">;

// SRS.md FR-7 / §17 — Retrievability, Stability, Difficulty (R/S/D). `now` is an explicit
// argument, never read from the system clock internally, so this stays replayable against
// historical attempts (§11 `core` failure mode) and testable without mocking time.
export function updateMemoryModel(
  _state: MemoryState,
  _attempt: Attempt,
  _now: Date,
): MemoryState {
  throw new Error("TODO: implement R/S/D update rule (SRS.md FR-7)");
}

// SRS.md NFR-4 — must land `nextDue` where predicted recall is between 85% and 95%.
export function computeNextDue(_stability: number, _now: Date): Date {
  throw new Error("TODO: implement next-due calculation against the target recall band (NFR-4)");
}
