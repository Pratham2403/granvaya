import type PgBoss from "pg-boss";

// SRS.md FR-4 / §11 `question-gen` — walks graph paths, builds MCQs, submits to the human
// review queue (FR-3 hard gate). Runs on a schedule and on demand after graph changes.
const QUEUE = "question-generation";

export async function registerQuestionGeneration(boss: PgBoss) {
  await boss.work(QUEUE, async () => {
    throw new Error("TODO: implement offline question generation (SRS.md FR-4)");
  });
}
