"use client";

import { useEffect, useRef } from "react";

const TRAIL_COUNT = 10;

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>(
    Array.from({ length: TRAIL_COUNT }, () => null)
  );
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const trailPos = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
  );
  const isHovering = useRef(false);
  const rafId = useRef(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(tick);
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hovering =
        target.classList.contains("interactive") ||
        target.closest(".interactive") !== null;

      if (hovering !== isHovering.current) {
        isHovering.current = hovering;
        const dot = dotRef.current;
        if (!dot) return;
        if (hovering) {
          dot.style.width = "50px";
          dot.style.height = "50px";
          dot.style.marginLeft = "-25px";
          dot.style.marginTop = "-25px";
          dot.style.background = "rgba(91, 104, 214, 0.2)";
          dot.style.border = "2px solid #5b68d6";
        } else {
          dot.style.width = "20px";
          dot.style.height = "20px";
          dot.style.marginLeft = "-10px";
          dot.style.marginTop = "-10px";
          dot.style.background = "#5b68d6";
          dot.style.border = "none";
        }
      }
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    function tick() {
      rafId.current = 0;

      const m = mouse.current;
      const p = pos.current;

      p.x += (m.x - p.x) * 0.18;
      p.y += (m.y - p.y) * 0.18;

      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate(${p.x}px, ${p.y}px)`;
      }

      let prevX = p.x;
      let prevY = p.y;

      for (let i = 0; i < TRAIL_COUNT; i++) {
        const el = trailRefs.current[i];
        if (!el) continue;
        const t = trailPos.current[i];
        t.x += (prevX - t.x) * 0.22;
        t.y += (prevY - t.y) * 0.22;
        el.style.transform = `translate(${t.x}px, ${t.y}px)`;

        const ratio = 1 - i / TRAIL_COUNT;
        el.style.opacity = String(0.35 * ratio);
        const size = 6 + 4 * ratio;
        el.style.width = size + "px";
        el.style.height = size + "px";
        el.style.marginLeft = -size / 2 + "px";
        el.style.marginTop = -size / 2 + "px";

        prevX = t.x;
        prevY = t.y;
      }

      const dx = m.x - p.x;
      const dy = m.y - p.y;
      if (dx * dx + dy * dy > 0.25) {
        rafId.current = requestAnimationFrame(tick);
      }
    }

    rafId.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
      }}
    >
      {/* Main cursor dot */}
      <div
        ref={dotRef}
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          marginLeft: "-10px",
          marginTop: "-10px",
          background: "#5b68d6",
          borderRadius: "50%",
          willChange: "transform",
          transition:
            "width 0.25s ease, height 0.25s ease, margin 0.25s ease, background 0.25s ease, border 0.25s ease",
        }}
      />

      {/* Trail elements */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          style={{
            position: "absolute",
            width: "8px",
            height: "8px",
            marginLeft: "-4px",
            marginTop: "-4px",
            background: "#5b68d6",
            borderRadius: "50%",
            opacity: 0.35,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
