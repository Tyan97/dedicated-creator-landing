"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center py-5">
          <a href="/" className="text-xl font-semibold tracking-tight">
            Use Case Studio
          </a>

          <div className="hidden md:flex items-center gap-8 text-[15px]">
            <a href="/product-videos" className="text-gray-600 hover:text-gray-900 transition-colors">Product-In-Use Videos</a>
            <a href="/social-management" className="text-gray-600 hover:text-gray-900 transition-colors">Social Management</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a>
            <a href="/#packages" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          </div>

          <button className="px-6 py-2.5 bg-gray-900 text-white text-[14px] font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105">
            Apply
          </button>
        </div>
      </div>
    </nav>
  );
}
