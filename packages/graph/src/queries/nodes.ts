import type { Pool } from "pg";
import type { Node } from "@granvaya/contracts";
import { cypher } from "../client.js";

export async function getNodeById(pool: Pool, nodeId: string): Promise<Node | null> {
  const rows = await cypher<{ n: unknown }>(
    pool,
    "MATCH (n {id: $nodeId}) RETURN n",
    ["n"],
    { nodeId },
  );
  if (rows.length === 0) return null;
  throw new Error("TODO: map agtype vertex payload onto the Node contract (SRS.md §12)");
}
