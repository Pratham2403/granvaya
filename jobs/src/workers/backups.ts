import type PgBoss from "pg-boss";

// SRS.md NFR-6 — attempt data durability is the moat; daily backup with separate retention.
const QUEUE = "backups";

export async function registerBackups(boss: PgBoss) {
  await boss.work(QUEUE, async () => {
    throw new Error("TODO: implement daily backup job (SRS.md NFR-6)");
  });
}
