import PgBoss from "pg-boss";
import { loadEnv } from "@granvaya/config";
import { registerIngestionTrigger } from "./workers/ingestionTrigger.js";
import { registerQuestionGeneration } from "./workers/questionGeneration.js";
import { registerSchedulerMaintenance } from "./workers/schedulerMaintenance.js";
import { registerBackups } from "./workers/backups.js";

// SRS.md §8 — the pg-boss queue lives in the same Postgres instance. No Redis.
async function main() {
  const env = loadEnv();
  const boss = new PgBoss(env.DATABASE_URL);

  boss.on("error", (error) => console.error("pg-boss error", error));

  await boss.start();

  await registerIngestionTrigger(boss);
  await registerQuestionGeneration(boss);
  await registerSchedulerMaintenance(boss);
  await registerBackups(boss);
}

main().catch((error) => {
  console.error("jobs worker failed to start", error);
  process.exit(1);
});
