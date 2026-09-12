// SRS.md §5 NFR-4 — the target window for scheduling accuracy. Not tunable per-call;
// changes here affect the entire scheduling model and must go through packages/core's
// versioned-parameter + offline-replay process (§11 core failure mode).
export const TARGET_RECALL_MIN = 0.85;
export const TARGET_RECALL_MAX = 0.95;

// SRS.md §11 — propagation runs along prerequisite edges, depth-capped.
export const PROPAGATION_MAX_DEPTH = 3;

// SRS.md §4 FR-9 — session size is not user-configurable in v1 (§2: system-decided daily set).
export const DEFAULT_SESSION_SIZE = 20;
