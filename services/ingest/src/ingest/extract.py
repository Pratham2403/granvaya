"""Entity/edge extraction from raw documents (SRS.md FR-1).

Calls the LLM wrapper's Python-side equivalent. Per §14 rule 3, only ingest and
question-gen are permitted to call an LLM at all, and only in the cold path
(ADR-2).
"""


def extract(documents: list[dict]) -> list[dict]:
    raise NotImplementedError("TODO: extract entities, events, people and edges (FR-1)")
