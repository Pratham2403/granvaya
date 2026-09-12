import { z } from "zod";

// Mirrors SRS.md §12 — USER_NODE_STATE. Per ADR-3, one row per (student, node); derived and
// rebuildable from ATTEMPT — never the source of truth itself.
export const UserNodeStateSchema = z.object({
  userId: z.string().uuid(),
  nodeId: z.string().uuid(),
  mastery: z.number().min(0).max(1),
  stability: z.number().nonnegative(),
  difficulty: z.number(),
  lastSeen: z.coerce.date(),
  nextDue: z.coerce.date(),
});

export type UserNodeState = z.infer<typeof UserNodeStateSchema>;
