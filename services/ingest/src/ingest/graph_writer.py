"""Writes canonicalized nodes/edges into the Apache AGE graph and queues new
facts for human review (SRS.md FR-2, FR-3 — approval is a hard gate).

This is the Python-side counterpart to packages/graph — kept separate per
ADR-6 (pipeline and app deploy independently, share types not runtime code).
"""


def write(facts: list[dict]) -> None:
    raise NotImplementedError("TODO: write to AGE graph, queue for review (FR-2, FR-3)")
