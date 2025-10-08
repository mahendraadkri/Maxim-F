// src/components/FloatingSection.jsx
import React from "react";

export default function FloatingSection({
  children,
  withSideBars = false,
  className = "",
}) {
  return (
    <section
      className={`relative z-20 -mt-24 md:-mt-32 -mb-24 md:-mb-32 ${className}`}
    >
      {withSideBars && (
        <>
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-[#C9A349] -z-10" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-[#C9A349] -z-10" />
        </>
      )}
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
