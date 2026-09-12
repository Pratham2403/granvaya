// ADR-2: only ever called from services/ingest (via its own client) or jobs/ — never from
// apps/web's request path. ADR-5: provider and model are supplied per call, not fixed globally.

export type LlmProvider = "openai" | "anthropic";

export type LlmCallOptions = {
  provider: LlmProvider;
  model: string;
  timeoutMs?: number;
  maxRetries?: number;
};

export type LlmCallResult<T> = {
  data: T;
  provider: LlmProvider;
  model: string;
  costUsd: number;
  latencyMs: number;
};
