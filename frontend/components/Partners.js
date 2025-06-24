"use client";
import React from "react";

export default function Partners() {
  const logos = [
    "https://via.placeholder.com/150x50?text=Partner+1",
    "https://via.placeholder.com/150x50?text=Partner+2",
    "https://via.placeholder.com/150x50?text=Partner+3",
    "https://via.placeholder.com/150x50?text=Partner+4",
    "https://via.placeholder.com/150x50?text=Partner+5",
    "https://via.placeholder.com/150x50?text=Partner+6",
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logos.map((src, idx) => (
            <img key={idx} src={src} alt={`Partner ${idx + 1}`} className="h-12 w-auto mx-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}