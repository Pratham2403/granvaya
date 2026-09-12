import type { ProviderAdapter } from "./base.js";

// TODO: implement once the @anthropic-ai/sdk dependency is added. Not wired in this scaffold.
export const anthropicAdapter: ProviderAdapter = {
  async complete() {
    throw new Error("TODO: implement Anthropic provider adapter");
  },
};
