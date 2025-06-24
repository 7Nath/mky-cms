"use client";
import React from "react";

export default function AboutSection() {
  const stats = [
    { label: "Years of Experience", value: "20+" },
    { label: "Global Offices", value: "15" },
    { label: "Experts", value: "200+" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Firm</h2>
          <p className="text-gray-700 mb-6">
            We provide strategic consulting services that help organizations grow and transform in a rapidly changing world.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-3xl font-bold text-blue-600">{s.value}</p>
                <p className="text-gray-700">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://source.unsplash.com/600x400/?business,team"
            alt="Our team"
            className="rounded-lg shadow-md object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>
    </section>
  );
}