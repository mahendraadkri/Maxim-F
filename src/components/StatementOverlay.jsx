import React from "react";
import bgImg from "../assets/gallery-2.jpg";

export default function StatementOverlay() {
  return (
    <section
      className="relative w-full h-[80vh] bg-center bg-cover z-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/25
                        px-8 py-6 md:px-12 md:py-8 max-w-4xl text-center shadow-lg">
          <h2 className="text-[#d7b461] text-3xl md:text-5xl font-semibold mb-3">
            Where Every Event Becomes a Grand Memory
          </h2>
          <p className="text-white/90 text-base md:text-lg">
            We turn celebrations into unforgettable experiences. Let us handle your big day, the Maxims way.
          </p>
        </div>
      </div>
    </section>
  );
}
