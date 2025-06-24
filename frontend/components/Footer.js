"use client";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  // Submit newsletter request to backend or log to console
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      console.log("Subscribed:", email);
    } catch (err) {
      console.error("Newsletter request failed", err);
    } finally {
      setEmail("");
    }
  };

  return (
    <footer className="bg-white text-gray-800 text-sm">
      <div className="border-t">        <div className="container mx-auto px-6 py-8 space-y-8 md:space-y-0 md:flex md:justify-between md:items-start">
          {/* Subscribe */}
          <div className="md:w-1/3">
            <img src="/logo.svg" alt="MKY Logo" className="h-20 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
            <p className="mb-4">Get our latest insights delivered to your inbox.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div className="md:w-1/3 flex justify-center md:justify-end space-x-4 md:self-end">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4V14.8c0-2.2 0-5-3-5s-3.5 2.4-3.5 4.8V24h-4V8z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .593 0 1.326v21.348C0 23.406.597 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.406 24 22.674V1.326C24 .593 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.966 2.966 0 0 0-2.084-2.087C19.679 3.5 12 3.5 12 3.5s-7.679 0-9.414.6A2.966 2.966 0 0 0 .502 6.186 31.094 31.094 0 0 0 0 12a31.09 31.09 0 0 0 .502 5.814 2.966 2.966 0 0 0 2.084 2.087c1.735.6 9.414.6 9.414.6s7.679 0 9.414-.6a2.966 2.966 0 0 0 2.084-2.087A31.09 31.09 0 0 0 24 12a31.094 31.094 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>      {/* Bottom bar */}
      <div className="bg-gray-100 mt-8 border-t">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Links à gauche */}
            <div className="mb-4 md:mb-0">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <li><a href="/contact" className="hover:underline">Contact us</a></li>
                <li><a href="#" className="hover:underline">Scam warning</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Privacy policy</a></li>
                <li><a href="#" className="hover:underline">Cookie preferences</a></li>
                <li><a href="#" className="hover:underline">Terms of use</a></li>
              </ul>
            </div>
            {/* Copyright à droite */}
            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Consulting Firm. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}