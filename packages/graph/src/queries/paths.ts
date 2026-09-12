import type { Pool } from "pg";
import { cypher } from "../client.js";

// SRS.md FR-4 — question-gen walks graph paths of 1-3 hops with distractors from sibling
// nodes. ADR-1's revisit trigger is traversals beyond 4 hops at 200k+ nodes.
export async function findPaths(_pool: Pool, _fromNodeId: string, _maxHops: 1 | 2 | 3) {
  throw new Error("TODO: implement path-walking query (SRS.md FR-4)");
}

// SRS.md FR-8 — propagation walks PREREQUISITE_OF edges, depth-capped
// (packages/config PROPAGATION_MAX_DEPTH).
export async function findLinkedNodes(_pool: Pool, _nodeId: string, _maxDepth: number) {
  throw new Error("TODO: implement propagation traversal (SRS.md FR-8)");
}
