// src/components/HomeSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Default images (replace with yours or pass via props)
import hero1 from "../assets/gallery-6.jpg";
import hero2 from "../assets/gallery-2.jpg";
import hero3 from "../assets/gallery-3.jpg";
import aboutImg from "../assets/gallery-2.jpg";
import statementBg from "../assets/gallery-3.jpg";

/**
 * Props (all optional)
 * slides: [{image, title, subtitle, cta:{label, href}}]
 * aboutImage: string
 * statementImage: string
 */
export default function HomeSection({
  slides = [
    {
      image: hero1,
      title: "Unforgettable Moments",
      subtitle: "Make your event stand out",
      cta: { label: "Get Started", href: "#" },
    },
    {
      image: hero2,
      title: "Elegant Spaces",
      subtitle: "Perfect for weddings and parties",
      cta: { label: "View Halls", href: "#" },
    },
    {
      image: hero3,
      title: "Luxury & Comfort",
      subtitle: "Make every moment unforgettable",
      cta: { label: "Book Now", href: "#" },
    },
  ],
  aboutImage = aboutImg,
  statementImage = statementBg,
}) {
  return (
    <section className="relative">
      {/* ===== HERO SLIDER ===== */}
      <div className="relative z-10 mb-40">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          speed={800}
          effect="slide"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="w-full h-[90vh]"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
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
                  {s.cta?.label && (
                    <a
                      href={s.cta.href || "#"}
                      className="inline-flex w-auto max-w-max items-center justify-center
                                 bg-[#C9A349] hover:bg-[#b8923e] text-white
                                 font-semibold uppercase tracking-wide
                                 px-6 py-2 rounded-md shadow-md transition-all"
                    >
                      {s.cta.label}
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>

      {/* ===== ABOUT (RAISED CARD + GOLD RAILS) ===== */}
      <div
        className="relative z-10 -mt-20 md:-mt-52 mb-[-40px] md:mb-[-60px]
                   flex justify-center"
      >
        {/* gold rails behind */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-[#C9A349] -z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-[#C9A349] -z-10" />

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-md overflow-hidden">
          {/* image */}
          <div className="h-[420px] md:h-[520px]">
            <img
              src={aboutImage}
              alt="Maxims Banquet"
              className="w-full h-full object-cover"
            />
          </div>
          {/* text panel */}
          <div className="bg-[#2E2A25] text-white flex flex-col justify-center px-8 md:px-14 py-10 md:py-12 text-center">
            <div className="mb-3">
              <p className="text-[#C9A349] uppercase tracking-[0.2em] text-sm font-semibold">
                About Us
              </p>
              <div className="w-16 h-[2px] bg-[#C9A349] mx-auto mt-2" />
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#f7f6f4] mb-5">
              Maxims is for All
            </h2>

            <p className="text-gray-200 leading-relaxed max-w-xl mx-auto mb-8">
              Maxims Banquet and Events is a premier event venue offering a
              unique and luxurious setting for weddings, parties, and corporate
              events. Our stunning ballrooms and exceptional service create
              unforgettable experiences.
            </p>

            <a
              href="#"
              className="inline-flex w-auto max-w-max mx-auto items-center justify-center
                         bg-[#C9A349] hover:bg-[#b8923e] text-white
                         font-semibold uppercase tracking-wide
                         px-6 py-2.5 rounded-md shadow-md transition-all"
            >
              Read Full Story
            </a>
          </div>
        </div>
      </div>

      {/* ===== STATEMENT OVERLAY (GLASS CARD) ===== */}
      <div
        className="relative z-10 w-full h-[80vh] bg-center bg-cover"
        style={{ backgroundImage: `url(${statementImage})` }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex justify-center items-center px-4">
          <div
            className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/25
                          px-8 py-6 md:px-12 md:py-8 max-w-4xl text-center shadow-lg"
          >
            <h2 className="text-[#d7b461] text-3xl md:text-5xl font-semibold mb-3">
              Where Every Event Becomes a Grand Memory
            </h2>
            <p className="text-white/90 text-base md:text-lg">
              We turn celebrations into unforgettable experiences. Let us handle
              your big day, the Maxims way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
