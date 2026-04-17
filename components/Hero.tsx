"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ChevronDown } from "lucide-react";
import { staggerContainer, wordReveal, EASE } from "@/lib/motion";

const headline = ["Två", "elektriker.", "Ett", "ansvar."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-charcoal/60 pointer-events-none" />

      {/* Yellow accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-24 pb-20">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="font-body text-yellow text-sm font-500 tracking-widest uppercase mb-6"
        >
          Regmyr &amp; Jansson El AB
        </motion.p>

        {/* Animated headline */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="font-heading font-800 text-white leading-none mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              variants={wordReveal}
              className={`inline-block mr-[0.25em] ${
                word === "ansvar." ? "text-yellow" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
          className="font-body text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
        >
          Regmyr &amp; Jansson är ett nystartat elföretag i Skåne — certifierade,
          lokala och med en direkt linje till den som faktiskt utför jobbet.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="tel:+46704128391"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 bg-yellow text-charcoal font-body font-600 text-base px-7 py-4 rounded min-h-[52px] transition-colors hover:bg-yellow/90"
          >
            <Phone size={18} />
            Ring oss
          </motion.a>
          <motion.a
            href="mailto:info@regmyrjansson.se"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-body font-500 text-base px-7 py-4 rounded min-h-[52px] border border-white/20 hover:border-yellow hover:text-yellow transition-colors"
          >
            <Mail size={18} />
            Skicka e-post
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 flex gap-10 border-t border-white/10 pt-8"
        >
          {[
            { value: "2", label: "Grundare" },
            { value: "Skåne", label: "Verksamhetsområde" },
            { value: "100%", label: "Behöriga" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-heading font-700 text-yellow text-3xl leading-none">
                {s.value}
              </div>
              <div className="font-body text-white/40 text-xs mt-1 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="font-body text-white/30 text-xs tracking-widest uppercase">
          Scrolla
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
