import React from "react";
import aboutImg from "../assets/gallery-3.jpg";

export default function AboutSection() {
  return (
    <section
      className="relative z-10 -mt-40 md:-mt-52 mb-[-40px] md:mb-[-60px]
                 flex justify-center"
    >
      {/* gold rails */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-[#C9A349] -z-10" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-[#C9A349] -z-10" />

      {/* floating card */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-md overflow-hidden">
        {/* Left image */}
        <div className="h-[420px] md:h-[520px]">
          <img
            src={aboutImg}
            alt="Maxims Banquet"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right dark content */}
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
            Maxims Banquet and Events is a premier event venue offering a unique
            and luxurious setting for weddings, parties, and corporate events.
            Our stunning ballrooms and exceptional service create unforgettable
            experiences.
          </p>

          <a
            href="#"
            className="inline-flex w-auto max-w-max mx-auto items-center justify-center
                       bg-[#C9A349] hover:bg-[#b8923e] text-white
                       font-semibold uppercase tracking-wide
                       px-6 py-2.5 rounded-md shadow-md transition-all duration-300"
          >
            Read Full Story
          </a>
        </div>
      </div>
    </section>
  );
}
