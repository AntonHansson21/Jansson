"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { slideDown } from "@/lib/motion";

const links = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-charcoal/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div className="w-7 h-7 bg-yellow rounded-sm flex items-center justify-center">
            <Zap size={15} className="text-charcoal" fill="currentColor" />
          </div>
          <span className="font-heading font-700 text-white text-lg tracking-tight leading-none">
            R&amp;J <span className="text-yellow">EL</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLink(l.href)}
                className="text-sm font-body font-500 text-white/70 hover:text-yellow transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="tel:+46704128391"
              className="ml-2 px-4 py-2 bg-yellow text-charcoal text-sm font-body font-600 rounded hover:bg-yellow/90 transition-colors duration-200"
            >
              Ring oss
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          aria-label="Meny"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={slideDown}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-charcoal-mid border-t border-white/5"
          >
            <ul className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleLink(l.href)}
                    className="w-full text-left py-3 text-base font-body text-white/80 hover:text-yellow transition-colors border-b border-white/5"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="tel:+46704128391"
                  className="block w-full text-center py-3 bg-yellow text-charcoal font-body font-600 rounded"
                >
                  Ring oss - 070-412 83 91
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
