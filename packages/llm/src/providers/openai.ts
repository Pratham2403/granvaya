import type { ProviderAdapter } from "./base.js";

// TODO: implement once the openai SDK dependency is added. Not wired in this scaffold.
export const openaiAdapter: ProviderAdapter = {
  async complete() {
    throw new Error("TODO: implement OpenAI provider adapter");
  },
};
