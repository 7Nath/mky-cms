"use client";
import React from "react";

export default function AboutSection() {


  return (
    <section className="bg-white">
      <div className="w-full grid md:grid-cols-2 gap-0 items-stretch min-h-[400px] p-0 m-0">
        {/* Left: Text */}
        <div className="bg-gradient-to-r from-mkyviolet-dark via-mkyviolet to-mkyviolet-light flex flex-col justify-center px-6 py-8 h-full w-full" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h2 
              className="text-7xl font-normal mb-10 mt-4 text-white drop-shadow-md"
              style={{ fontFamily: 'SF Pro, Arial, sans-serif' }}
            >
              Connecting Strategic Opportunities and Influential Networks
            </h2>
            <p className="text-gray-100 mb-6 font-normal mx-auto text-3xl leading-10" style={{ fontFamily: 'SF Pro, Arial, sans-serif', maxWidth: '900px', minWidth: 0, textAlign: 'left' }}>
              Our firm operates at the strategic intersection of investment opportunities and influential networks across the Democratic Republic of Congo, Africa, and Europe. With deep-rooted connections at senior governmental and industry levels, we provide discerning private investors, institutional funds, private equity groups, and sovereign wealth funds privileged access to high-potential projects across key sectors such as infrastructure, natural resources, energy, agriculture, finance, and sustainability. Our expertise lies in navigating complex regulatory frameworks and facilitating strategic engagements, ensuring our clients confidently pursue transformative opportunities in dynamic markets.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {/* ...existing stats or content... */}
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="relative w-full h-full min-h-[300px] p-0 m-0" style={{ minHeight: '350px' }}>
          <img
            src="/bridge-modern.jpg"
            alt="bridge modern, symbole of connexion"
            className="absolute inset-0 w-full h-full object-cover rounded-none"
            style={{ objectFit: 'cover', height: '100%', width: '100%', right: 0, left: 0, margin: 0, padding: 0 }}
          />
        </div>
      </div>
    </section>
  );
}