import { betterAuth } from "better-auth";
import { Pool } from "pg";

// ADR-4 — self-hosted, MIT-licensed, sessions live in our own Postgres (not a vendor's).
// TODO: confirm the DPDP-required consent capture happens on sign-up before wiring this
// into production (SRS.md §15).
export const auth = betterAuth({
  database: new Pool({ connectionString: process.env.DATABASE_URL }),
  emailAndPassword: {
    enabled: true,
  },
});
