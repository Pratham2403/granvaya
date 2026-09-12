"""Pluggable source-adapter interface (SRS.md §7).

Every content source (PIB, NCERT, gazettes, past-paper banks, internal notes)
implements this. Adding a new exam or a new source is a new adapter, not a
change to fetch/extract/canonicalize/graph_writer.
"""

from abc import ABC, abstractmethod


class SourceAdapter(ABC):
    @abstractmethod
    def fetch(self) -> list[dict]:
        """Return raw documents from this source."""
        raise NotImplementedError
