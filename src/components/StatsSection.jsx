import React, { useEffect, useRef, useState } from "react";

const DEFAULT_ITEMS = [
  { value: 412, l1: "Weddings", l2: "Planned" },
  { value: 165, l1: "Staff", l2: "Members" },
  { value: 12,  l1: "Years", l2: "of Experience" },
  { value: 1821,l1: "Happy", l2: "Clients" },
];

export default function StatsSection({ items = DEFAULT_ITEMS }) {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

  // Observe when section enters viewport
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStartCount(true)),
      { threshold: 0.3 }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full bg-[#FBF7E8] py-14 md:py-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10">
        {items.map((it, i) => (
          <StatCard key={i} value={it.value} l1={it.l1} l2={it.l2} start={startCount} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ value, l1, l2, start }) {
  const [display, setDisplay] = useState(0);

  // Smooth count-up
  useEffect(() => {
    if (!start) return;
    let frame;
    const duration = 1200; // ms
    const from = 0;
    const to = value;
    const startTs = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (ts) => {
      const p = Math.min(1, (ts - startTs) / duration);
      setDisplay(Math.round(from + (to - from) * easeOutCubic(p)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-5xl md:text-6xl font-serif font-semibold text-black">
        {display.toLocaleString()}
      </div>
      <div className="mt-3 text-base md:text-lg font-semibold text-black">{l1}</div>
      <div className="text-sm md:text-base text-black/70">{l2}</div>
      <div className="mt-3 h-[2px] w-10 bg-[#C9A349]" />
    </div>
  );
}
