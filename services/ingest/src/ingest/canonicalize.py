"""Entity canonicalization and temporal conflict resolution (SRS.md §11, ADR-7).

Matches extracted candidates against existing graph nodes via pgvector
embeddings; on contradiction, closes the superseded edge (valid_to) and opens
a new one rather than deleting it.
"""


def canonicalize(candidates: list[dict]) -> list[dict]:
    raise NotImplementedError("TODO: dedup against existing nodes via embeddings (ADR-7)")
