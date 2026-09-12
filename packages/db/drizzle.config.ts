import { defineConfig } from "drizzle-kit";

// Stage 0 has not defined the relational tables yet (SRS.md §12) — this config
// wires the tool; `src/schema/*` are still placeholders.
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema/index.ts",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
});
