// Placeholder feature-flag surface. No provider wired yet — flat defaults only.
export type FeatureFlags = {
  ingestionEnabled: boolean;
  questionGenEnabled: boolean;
};

const DEFAULT_FLAGS: FeatureFlags = {
  ingestionEnabled: false,
  questionGenEnabled: false,
};

// TODO: back this with PostHog feature flags (or similar) once wired.
export function getFlags(): FeatureFlags {
  return DEFAULT_FLAGS;
}
