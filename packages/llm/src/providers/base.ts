// Internal per-provider adapter interface. callLlm() in wrapper.ts routes to one of these
// based on LlmCallOptions.provider — nothing outside this package should import a provider
// SDK directly.
export type ProviderAdapter = {
  complete(prompt: string, model: string): Promise<{ text: string; costUsd: number }>;
};
