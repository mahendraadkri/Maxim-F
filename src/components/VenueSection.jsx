import React, { useState } from "react";

// Sample data — replace images with your paths
const DEFAULT_VENUES = [
  {
    name: "Outdoor",
    details: { capacity: "500", area: "6328", dimension: "96’×65’" },
    images: ["/images/venue-outdoor-1.jpg", "/images/venue-outdoor-2.jpg"],
  },
  {
    name: "Hall A",
    details: { capacity: "300", area: "4200", dimension: "80’×52’" },
    images: ["/images/venue-hall-a-1.jpg", "/images/venue-hall-a-2.jpg"],
  },
  {
    name: "Hall B",
    details: { capacity: "250", area: "3600", dimension: "72’×50’" },
    images: ["/images/venue-hall-b-1.jpg", "/images/venue-hall-b-2.jpg"],
  },
];

export default function VenueSection({
  titleSmall = "OUR VENUE",
  title = "Choose the best suites for yourself",
  venues = DEFAULT_VENUES,
}) {
  const [active, setActive] = useState(0);       // which accordion is open
  const [imgIdx, setImgIdx] = useState(0);       // which image is shown for active

  const current = venues[active];
  const images = current.images ?? [];

  const goPrev = () =>
    setImgIdx((p) => (p === 0 ? images.length - 1 : p - 1));
  const goNext = () =>
    setImgIdx((p) => (p + 1) % images.length);

  // reset image index when venue changes
  const onOpen = (i) => {
    setActive((prev) => (prev === i ? prev : i));
    setImgIdx(0);
  };

  return (
    <section className="w-full bg-[#222220] text-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <div className="text-[#D5B668] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
            {titleSmall}
          </div>
          <h2 className="mt-3 text-[#D5B668]/95 text-3xl md:text-5xl font-serif font-semibold">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* LEFT: Image slider */}
          <div className="md:col-span-7">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black/20">
              {images.length > 0 ? (
                <img
                  key={images[imgIdx]}
                  src={images[imgIdx]}
                  alt={`${current.name} view`}
                  className="w-full h-[320px] md:h-[440px] object-cover"
                />
              ) : (
                <div className="w-full h-[320px] md:h-[440px] grid place-items-center text-white/70">
                  No image
                </div>
              )}

              {/* arrows */}
              {images.length > 1 && (
                <>
                  <button
                    aria-label="Previous image"
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2
                               w-9 h-9 grid place-items-center rounded-full
                               bg-black/40 hover:bg-black/60 backdrop-blur text-white"
                  >
                    ‹
                  </button>
                  <button
                    aria-label="Next image"
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2
                               w-9 h-9 grid place-items-center rounded-full
                               bg-black/40 hover:bg-black/60 backdrop-blur text-white"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>

          {/* RIGHT: Accordion */}
          <div className="md:col-span-5">
            <div className="rounded-lg overflow-hidden bg-white text-[#0d0d0d]">
              {venues.map((v, i) => {
                const open = i === active;
                return (
                  <div key={v.name} className="border-b last:border-b-0">
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left
                                 font-serif text-xl md:text-2xl text-[#0c3a67]"
                      onClick={() => onOpen(i)}
                    >
                      <span>{v.name}</span>
                      <span
                        className={`transition-transform ${
                          open ? "rotate-180" : "rotate-0"
                        } text-[#0c3a67]`}
                      >
                        ▾
                      </span>
                    </button>

                    {open && (
                      <div className="px-5 pb-6 text-[15px] leading-7">
                        <p>
                          <strong>Capacity:</strong> {v.details.capacity}
                        </p>
                        <p>
                          <strong>Area sq. ft.:</strong> {v.details.area}
                        </p>
                        <p>
                          <strong>Dimension:</strong> {v.details.dimension}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
