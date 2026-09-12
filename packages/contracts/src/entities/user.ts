import { z } from "zod";

// Mirrors SRS.md §12 — USER
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  createdAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;
