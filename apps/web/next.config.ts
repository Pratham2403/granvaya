import type { NextConfig } from "next";

// SRS.md §14 rule 4 — this app must never import from services/. Enforced by convention
// (separate deployable, separate language for services/ingest) rather than by tooling here.
const nextConfig: NextConfig = {};

export default nextConfig;
