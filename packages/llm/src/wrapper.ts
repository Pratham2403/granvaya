import type { LlmCallOptions, LlmCallResult } from "./types.js";

// SRS.md §14 rule 3 — this is the sole path to any LLM in the codebase, including scripts.
// Structured extraction (ingest) and generation (question-gen) are the only call sites.
export async function callLlm<T>(
  _prompt: string,
  _options: LlmCallOptions,
): Promise<LlmCallResult<T>> {
  throw new Error("TODO: implement provider routing, retry, timeout, cost logging (ADR-5)");
}
