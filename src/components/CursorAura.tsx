"use client";
import { useEffect, useState } from "react";

export default function CursorAura() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  if (!isClient) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "400px",
        height: "400px",
        pointerEvents: "none",
        zIndex: 9999,
        background: "radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 60%)",
        transform: `translate(calc(${position.x}px - 200px), calc(${position.y}px - 200px))`,
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
    />
  );
}
