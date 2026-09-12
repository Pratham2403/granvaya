import { z } from "zod";

// Single source of truth for required env vars — see .env.example at repo root.
const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.string().url(),
  LLM_PROVIDER_DEFAULT: z.string().min(1).optional(),
  OPENAI_API_KEY: z.string().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),
  POSTHOG_KEY: z.string().optional(),
  POSTHOG_HOST: z.string().url().optional(),
});

export type Env = z.infer<typeof EnvSchema>;

let cached: Env | undefined;

// TODO: call this once at process startup in each deployable (apps/web, jobs); not called implicitly.
export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  if (!cached) {
    cached = EnvSchema.parse(source);
  }
  return cached;
}
