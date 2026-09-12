"""Source fetching. Delegates to a source adapter (see ingest.adapters) per
SRS.md §7 — "a new exam means a new adapter, not a new pipeline."
"""

from ingest.adapters.base import SourceAdapter


def fetch(adapter: SourceAdapter) -> list[dict]:
    raise NotImplementedError("TODO: call adapter.fetch() and return raw documents")
