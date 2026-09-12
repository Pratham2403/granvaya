import type PgBoss from "pg-boss";

// SRS.md §11 `ingest` runs nightly, in Python, as a separate deployable. This worker's job
// is only to trigger it on schedule (or on demand) — never to run ingestion logic itself,
// per §14 rule 4 (apps/jobs must not absorb services/ingest's responsibilities).
const QUEUE = "ingestion-trigger";

export async function registerIngestionTrigger(boss: PgBoss) {
  await boss.work(QUEUE, async () => {
    throw new Error("TODO: trigger services/ingest run (SRS.md §11)");
  });
}
