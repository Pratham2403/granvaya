import type { Attempt, UserNodeState } from "@granvaya/contracts";

// SRS.md FR-6 / §11 `core` — pure function, no I/O. This is the moat's logic; the actual
// update rule is undetermined (needs real attempt data to calibrate against NFR-4's
// 85-95% predicted-recall band) so it is left unimplemented rather than guessed.
export function updateMastery(
  _state: UserNodeState,
  _attempt: Attempt,
): UserNodeState["mastery"] {
  throw new Error("TODO: implement mastery update rule (SRS.md FR-6)");
}
