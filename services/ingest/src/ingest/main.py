"""Nightly ingestion entrypoint (SRS.md §11, §13 "Nightly ingestion" sequence).

Complete failure here must stay invisible to students (NFR-10) — the web app
just keeps serving yesterday's content. This module is triggered by
jobs/src/workers/ingestionTrigger.ts, not by anything in apps/web.
"""

def run() -> None:
    raise NotImplementedError("TODO: wire fetch -> extract -> canonicalize -> graph_writer")


if __name__ == "__main__":
    run()
