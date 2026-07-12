import { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const glowRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const target = useRef({ x: -200, y: -200 });
  const raf = useRef(null);
  const lastUpdate = useRef(0);
  const idleTimer = useRef(null);
  const isIdle = useRef(false);

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (isIdle.current) {
        isIdle.current = false;
        raf.current = requestAnimationFrame(tick);
      }
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => { isIdle.current = true; }, 2000);
    };

    const tick = (now) => {
      if (isIdle.current) return;
      if (now - lastUpdate.current < 33) {
        raf.current = requestAnimationFrame(tick);
        return;
      }
      lastUpdate.current = now;
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 100}px, ${pos.current.y - 100}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      clearTimeout(idleTimer.current);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" />;
}
