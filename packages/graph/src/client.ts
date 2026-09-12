import { Pool, type PoolClient } from "pg";

const GRAPH_NAME = "granvaya";

// ADR-1: Apache AGE inside the same PostgreSQL instance. This is the ONLY place in the
// codebase that opens an AGE session or issues Cypher (SRS.md §14 rule 2, §11 `graph`).
export function createGraphPool(connectionString: string): Pool {
  return new Pool({ connectionString });
}

async function withAgeSession<T>(pool: Pool, fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await pool.connect();
  try {
    await client.query("LOAD 'age'");
    await client.query('SET search_path = ag_catalog, "$user", public');
    return await fn(client);
  } finally {
    client.release();
  }
}

// Runs a Cypher query against the graph via ag_catalog.cypher(). `returnColumns` names the
// agtype columns the query returns, matching the `AS (...)` clause AGE requires.
export async function cypher<T = unknown>(
  pool: Pool,
  query: string,
  returnColumns: string[],
  params: Record<string, unknown> = {},
): Promise<T[]> {
  return withAgeSession(pool, async (client) => {
    const paramsLiteral = JSON.stringify(params).replace(/'/g, "''");
    const columnsClause = returnColumns.map((c) => `${c} agtype`).join(", ");
    const sql = `SELECT * FROM cypher('${GRAPH_NAME}', $$ ${query} $$, '${paramsLiteral}') AS (${columnsClause})`;
    const result = await client.query(sql);
    return result.rows as T[];
  });
}
