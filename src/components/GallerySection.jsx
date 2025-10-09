import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

// Replace with your real images or pass as props
import g1 from "../assets/gallery-7.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-2.jpg";
import g5 from "../assets/gallery-7.jpg";
import g6 from "../assets/gallery-6.jpg";

export default function GallerySection({
  titleSmall = "GALLERY",
  title = "Captured the moments we lived for",
  images = [g1, g2, g3, g4, g5, g6],
  onSeeMore = () => {},
}) {
  return (
    <section className="relative w-full bg-[#C9A349] py-14 md:py-20">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-10">
        <div className="text-white/85 uppercase tracking-[0.22em] text-xs md:text-sm font-semibold">
          {titleSmall}
        </div>
        <h2 className="mt-2 text-white text-3xl md:text-5xl font-serif font-semibold">
          {title}
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides
          loop
          grabCursor
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,      // no tilt
            stretch: -40,   // overlap amount
            depth: 160,     // z-depth
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="gallery-swiper"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx} className="!w-[240px] !h-[160px] md:!w-[420px] md:!h-[280px]">
            {/* Card */}
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Subtle top “frame” highlight like your sample */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[62%] md:w-[54%] h-[6px] rounded-b-xl bg-white/70 mix-blend-overlay"></div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={onSeeMore}
          className="px-6 py-2 rounded-md bg-transparent border border-white/70 text-white
                     hover:bg-white/10 transition-colors text-sm font-semibold tracking-wide"
        >
          SEE MORE
        </button>
      </div>

      {/* Local styles to highlight the active card */}
      <style>{`
        .gallery-swiper .swiper-slide {
          transition: transform 300ms ease, box-shadow 300ms ease, opacity 300ms ease;
          opacity: 0.75;
        }
        .gallery-swiper .swiper-slide-active {
          transform: scale(1.035);
          opacity: 1;
        }
        .gallery-swiper .swiper-slide-active .relative {
          box-shadow: 0 18px 40px rgba(0,0,0,0.45);
          outline: 3px solid rgba(255,255,255,0.85);
          outline-offset: -6px;
          border-radius: 16px;
        }
        @media (max-width: 768px){
          .gallery-swiper .swiper-slide-active .relative {
            outline-width: 2px;
            border-radius: 12px;
          }
        }
      `}</style>
    </section>
  );
}
