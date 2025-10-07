import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/gallery-6.jpg";
import img2 from "../assets/gallery-2.jpg";
import img3 from "../assets/gallery-3.jpg";

const slides = [
  {
    id: 1,
    image: img1,
    title: "Elegant Spaces",
    subtitle: "Perfect for weddings and parties",
    button: "View Halls",
  },
  {
    id: 2,
    image: img2,
    title: "Celebrate in Style",
    subtitle: "Memorable events start here",
    button: "Explore Venues",
  },
  {
    id: 3,
    image: img3,
    title: "Luxury & Comfort",
    subtitle: "Make every moment unforgettable",
    button: "Book Now",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goNext = () => setCurrent((p) => (p + 1) % slides.length);
  const goPrev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));

  useEffect(() => {
    timerRef.current = setInterval(goNext, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, 4000);
  };

  return (
    <div
      className="relative w-full h-[90vh] overflow-hidden"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={resetTimer}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 md:px-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
            <button className="bg-[#C9A349] hover:bg-[#b8923e] text-white px-6 py-3 rounded-lg font-semibold transition-all">
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      {/* Nav arrows */}
      <button
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl"
        onClick={() => {
          goPrev();
          resetTimer();
        }}
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl"
        onClick={() => {
          goNext();
          resetTimer();
        }}
      >
        ›
      </button>
    </div>
  );
}
