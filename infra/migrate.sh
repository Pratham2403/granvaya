#!/usr/bin/env bash
# Migration runner. Wraps drizzle-kit so CI/deploy has one stable entrypoint
# regardless of how packages/db's tooling evolves.
set -euo pipefail

pnpm --filter @granvaya/db db:migrate
