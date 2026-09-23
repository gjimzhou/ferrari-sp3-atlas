#!/usr/bin/env python3
"""Audit canonical source URLs without treating common anti-bot responses as link rot."""
import argparse
import json
import socket
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
USER_AGENT = "SP3-Atlas-Link-Audit/1.0 (+https://github.com/gjimzhou/ferrari-sp3-atlas)"
PROTECTED = {401, 403, 429}
BROKEN = {404, 410}


def probe(source, timeout):
    url = source["url"]
    request = urllib.request.Request(url, method="HEAD", headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            status = response.getcode()
    except urllib.error.HTTPError as exc:
        status = exc.code
        if status in {405, 501}:
            fallback = urllib.request.Request(
                url,
                method="GET",
                headers={"User-Agent": USER_AGENT, "Range": "bytes=0-0"},
            )
            try:
                with urllib.request.urlopen(fallback, timeout=timeout) as response:
                    status = response.getcode()
            except urllib.error.HTTPError as fallback_exc:
                status = fallback_exc.code
            except (urllib.error.URLError, socket.timeout) as fallback_exc:
                return {**source, "state": "error", "error": str(fallback_exc)}
    except (urllib.error.URLError, socket.timeout) as exc:
        return {**source, "state": "error", "error": str(exc)}

    if status in BROKEN:
        state = "broken"
    elif status in PROTECTED:
        state = "protected"
    elif 200 <= status < 400:
        state = "ok"
    else:
        state = "http_error"
    return {**source, "state": state, "status": status}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--workers", type=int, default=12)
    parser.add_argument("--timeout", type=float, default=12.0)
    parser.add_argument("--output", default="link-audit.json")
    args = parser.parse_args()

    sources = json.loads((ROOT / "data/sources.json").read_text())
    results = []
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = [pool.submit(probe, source, args.timeout) for source in sources]
        for future in as_completed(futures):
            results.append(future.result())

    results.sort(key=lambda item: item["id"])
    counts = {}
    for item in results:
        counts[item["state"]] = counts.get(item["state"], 0) + 1
    report = {"summary": counts, "results": results}
    Path(args.output).write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n")

    print("Link audit:", ", ".join(f"{key}={value}" for key, value in sorted(counts.items())))
    for item in results:
        if item["state"] in {"broken", "error", "http_error"}:
            print(f"{item['state']:>10}  {item['id']}  {item['url']}  {item.get('status', item.get('error', ''))}")

    raise SystemExit(1 if counts.get("broken", 0) else 0)


if __name__ == "__main__":
    main()
