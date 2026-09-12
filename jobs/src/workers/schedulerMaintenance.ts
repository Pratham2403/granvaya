import type PgBoss from "pg-boss";

// Periodic housekeeping for the memory-model schedule — e.g. recomputing next_due for
// stale rows, detecting parameter drift. Not specced in detail yet; see SRS.md §18
// Open Question #5 (graph/scheduling health metrics still need a definition).
const QUEUE = "scheduler-maintenance";

export async function registerSchedulerMaintenance(boss: PgBoss) {
  await boss.work(QUEUE, async () => {
    throw new Error("TODO: implement scheduler maintenance sweep");
  });
}
