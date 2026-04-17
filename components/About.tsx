"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/motion";

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
              Lokal kompetens
              <br />
              sedan 1994.
            </h2>
            <div className="w-12 h-1 bg-yellow mb-8" />
            <div className="space-y-4 font-body text-white/60 text-base leading-relaxed">
              <p>
                Regmyr &amp; Jansson El AB grundades i Dalarna och har sedan
                starten byggt ett solitt rykte som en pålitlig, certifierad
                elentreprenör för både privatpersoner och företag.
              </p>
              <p>
                Vi är stolta över att vara en lokal aktör med djup kunskap om
                regionens behov. Vår personal är auktoriserad och håller sig
                ständigt uppdaterad på gällande normer och regelverk.
              </p>
              <p>
                Hos oss får du alltid ett fast pris i förväg, snabb respons och
                ett arbete som håller — på riktigt.
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
              {/* Large display number */}
              <span
                className="font-heading font-800 text-yellow/10 leading-none block"
                style={{ fontSize: "clamp(8rem, 20vw, 16rem)" }}
              >
                30
              </span>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-heading font-700 text-yellow text-5xl leading-none">
                  30+
                </span>
                <span className="font-body text-white/50 text-base mt-2 tracking-widest uppercase">
                  Års erfarenhet
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
