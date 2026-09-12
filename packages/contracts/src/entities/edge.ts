import { z } from "zod";

// Mirrors SRS.md §12 — EDGE. Per ADR-7, facts are superseded (validTo closes), never deleted.
export const EdgeTypeSchema = z.enum([
  "PREREQUISITE_OF",
  "TRIGGERED",
  "ILLUSTRATES",
  "SUPERSEDES",
]);
export type EdgeType = z.infer<typeof EdgeTypeSchema>;

export const EdgeSchema = z.object({
  id: z.string().uuid(),
  fromNode: z.string().uuid(),
  toNode: z.string().uuid(),
  type: EdgeTypeSchema,
  weight: z.number(),
  validFrom: z.coerce.date(),
  validTo: z.coerce.date().nullable(),
  ingestedAt: z.coerce.date(),
  sourceUrl: z.string().url(),
  verifiedBy: z.string(),
});

export type Edge = z.infer<typeof EdgeSchema>;
