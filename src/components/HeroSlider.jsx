import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/gallery-6.jpg";
import img2 from "../assets/gallery-2.jpg";
import img3 from "../assets/gallery-3.jpg";

const slides = [
  {
    id: 1,
    image: img1,
    title: "Unforgettable Moments",
    subtitle: "Make your event stand out",
    cta: { label: "Get Started", href: "#" },
  },
  {
    id: 2,
    image: img2,
    title: "Elegant Spaces",
    subtitle: "Perfect for weddings and parties",
    cta: { label: "View Halls", href: "#" },
  },
  {
    id: 3,
    image: img3,
    title: "Luxury & Comfort",
    subtitle: "Make every moment unforgettable",
    cta: { label: "Book Now", href: "#" },
  },
];

export default function HeroSlider() {
  return (
    <section className="relative z-10 mb-40">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        speed={800}
        className="w-full h-[90vh]"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div
              className="relative w-full h-[90vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  {s.title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl mb-6">
                  {s.subtitle}
                </p>
                <a
                  href={s.cta.href}
                  className="inline-blocdk bg-[#C9A349] hover:bg-[#b8923e] text-white 
                             font-semibold uppercase tracking-wide 
                             px-6 py-2 rounded-md shadow-md transition-all"
                >
                  {s.cta.label}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </section>
  );
}
