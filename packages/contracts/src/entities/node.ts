import { z } from "zod";

// Mirrors SRS.md §12 — NODE. Concept/Event/Entity layer, per §7 exam-agnostic by construction.
export const NodeTypeSchema = z.enum(["concept", "event", "entity"]);
export type NodeType = z.infer<typeof NodeTypeSchema>;

export const NodeSchema = z.object({
  id: z.string().uuid(),
  type: NodeTypeSchema,
  canonicalName: z.string(),
  aliases: z.array(z.string()),
  examTags: z.array(z.string()),
  embedding: z.array(z.number()).optional(),
  baseImportance: z.number().min(0).max(1),
});

export type Node = z.infer<typeof NodeSchema>;
