import { z } from "zod";

// Mirrors SRS.md §12 — ATTEMPT. Append-only per FR-10: never updated, never deleted.
export const AttemptSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  questionId: z.string().uuid(),
  nodeId: z.string().uuid(),
  chosenIndex: z.number().int().nonnegative(),
  correct: z.boolean(),
  latencyMs: z.number().int().nonnegative(),
  answeredAt: z.coerce.date(),
});

export type Attempt = z.infer<typeof AttemptSchema>;
