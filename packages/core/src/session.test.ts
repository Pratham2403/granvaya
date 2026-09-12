import { describe, expect, it } from "vitest";
import type { UserNodeState } from "@granvaya/contracts";
import { selectDueNodes } from "./session.js";

function state(nodeId: string, nextDue: Date): UserNodeState {
  return {
    userId: "00000000-0000-0000-0000-000000000001",
    nodeId,
    mastery: 0.5,
    stability: 1,
    difficulty: 0,
    lastSeen: new Date("2026-01-01T00:00:00Z"),
    nextDue,
  };
}

describe("selectDueNodes", () => {
  const now = new Date("2026-09-06T06:00:00Z");

  it("excludes nodes not yet due", () => {
    const notDue = state("a", new Date("2026-09-07T00:00:00Z"));
    expect(selectDueNodes([notDue], now, 20)).toEqual([]);
  });

  it("returns due nodes ordered oldest-due-first, capped at the limit", () => {
    const late = state("late", new Date("2026-09-01T00:00:00Z"));
    const soon = state("soon", new Date("2026-09-05T00:00:00Z"));
    const notDue = state("future", new Date("2026-09-10T00:00:00Z"));

    const result = selectDueNodes([notDue, soon, late], now, 1);

    expect(result.map((s) => s.nodeId)).toEqual(["late"]);
  });
});
