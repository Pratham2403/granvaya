import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema/index.js";

// One pooled connection per deployable (apps/web, jobs). Per SRS.md §11, connection
// exhaustion at evening peak is the web app's known failure mode — pool sizing belongs
// in the caller's env config, not hardcoded here.
export function createDbClient(connectionString: string) {
  const pool = new Pool({ connectionString });
  return drizzle(pool, { schema });
}

export type DbClient = ReturnType<typeof createDbClient>;
