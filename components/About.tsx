"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeLeft, fadeRight } from "@/lib/motion";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="om-oss" className="bg-charcoal py-24 px-5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="font-body text-yellow text-sm tracking-widest uppercase mb-3">
              Om oss
            </p>
            <h2
              className="font-heading font-700 text-white leading-none mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Lokal kompetens.
              <br />
              Egna namn på dörren.
            </h2>
            <div className="w-12 h-1 bg-yellow mb-8" />
            <div className="space-y-4 font-body text-white/60 text-base leading-relaxed">
              <p>
                Regmyr &amp; Jansson startade vi, Alexander Jansson och Vilmer Regmyr,
                efter år som anställda elektriker hos Bravida i Skåne. Vi ville
                bygga något eget - ett bolag där vi kan stå för varje jobb med
                våra egna namn.
              </p>
              <p>
                Som behöriga elinstallatörer tar vi fullt ansvar för det vi
                utför. Inget mellanting mellan dig och den som gör jobbet - du
                vet alltid vem du pratar med och vem som dyker upp.
              </p>
              <p>
                Det finns inga undermontörer, inga vikarier och ingen
                callcenter. Bara två elektriker som vill göra ett bra jobb och
                bygga ett rykte som håller.
              </p>
            </div>
          </motion.div>

          {/* Right: decorative accent */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center justify-center"
          >
            <div className="relative select-none">
              {/* Large display text */}
              <span
                className="font-heading font-800 text-yellow/10 leading-none block"
                style={{ fontSize: "clamp(8rem, 20vw, 16rem)" }}
              >
                2
              </span>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-heading font-700 text-yellow text-5xl leading-none">
                  2 st
                </span>
                <span className="font-body text-white/50 text-base mt-2 tracking-widest uppercase">
                  Behöriga installatörer
                </span>
              </div>
              {/* Decorative lines */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-yellow/30" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-yellow/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
