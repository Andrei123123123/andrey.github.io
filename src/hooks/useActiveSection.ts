import { useEffect, useState } from "react";

export function useActiveSection(ids: string[], offset = 120) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) return;

    const calc = () => {
      // Pick the section whose top is closest to (and not below) the offset line.
      const line = offset;
      let current = ids[0];
      let bestDelta = -Infinity; // we want the largest top that is still ≤ line (i.e. closest to line from above)

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        // Allow a small tolerance so a section that just snapped under the sticky header is detected.
        if (top - 1 <= line) {
          if (top > bestDelta) {
            bestDelta = top;
            current = id;
          }
        }
      }

      // Bottom of page → last
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    calc();
    window.addEventListener("scroll", calc, { passive: true });
    window.addEventListener("resize", calc);
    return () => {
      window.removeEventListener("scroll", calc);
      window.removeEventListener("resize", calc);
    };
  }, [ids, offset]);

  return active;
}
