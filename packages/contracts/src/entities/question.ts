import { z } from "zod";

// Mirrors SRS.md §12 — QUESTION. FR-3: status starts at "draft" and requires human sign-off to reach "approved".
export const QuestionStatusSchema = z.enum(["draft", "approved", "retired"]);
export type QuestionStatus = z.infer<typeof QuestionStatusSchema>;

export const QuestionOptionsSchema = z.array(z.string()).min(2);

export const QuestionSchema = z.object({
  id: z.string().uuid(),
  nodeId: z.string().uuid(),
  sourcePathIds: z.array(z.string().uuid()),
  stem: z.string(),
  options: QuestionOptionsSchema,
  correctIndex: z.number().int().nonnegative(),
  explanation: z.string(),
  status: QuestionStatusSchema,
});

export type Question = z.infer<typeof QuestionSchema>;
