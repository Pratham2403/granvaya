import type { Edge, UserNodeState } from "@granvaya/contracts";

// SRS.md FR-8 — update linked nodes along PREREQUISITE_OF edges when an answer is recorded,
// depth-capped (packages/config PROPAGATION_MAX_DEPTH). The propagation coefficient itself
// is Open Question #4 in docs/SRS.md §18 — a guess until there is real attempt data.
export function propagate(
  _states: UserNodeState[],
  _edges: Edge[],
  _updatedNodeId: string,
  _maxDepth: number,
): UserNodeState[] {
  throw new Error("TODO: implement depth-capped propagation (SRS.md FR-8)");
}
