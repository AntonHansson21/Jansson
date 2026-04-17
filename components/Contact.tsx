"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";
import { fadeUp, staggerContainer, cardReveal, EASE } from "@/lib/motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kontakt" className="bg-charcoal-mid py-24 px-5" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14"
        >
          <p className="font-body text-yellow text-sm tracking-widest uppercase mb-3">
            Kontakta oss
          </p>
          <h2
            className="font-heading font-700 text-white leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Hör av dig
          </h2>
          <p className="font-body text-white/50 text-base max-w-md mx-auto">
            Berätta vad du behöver hjälp med — vi återkommer snabbt med ett
            ärligt svar och ett fast pris. Inga formulär, ingen krångel.
          </p>
          <div className="mt-6 mx-auto w-12 h-1 bg-yellow" />
        </motion.div>

        {/* Contact buttons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
        >
          <motion.a
            href="tel:+46704128391"
            variants={cardReveal}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center justify-center gap-4 bg-yellow text-charcoal font-body font-600 text-lg px-10 py-6 rounded min-h-[80px] hover:bg-yellow/90 transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center group-hover:bg-charcoal/20 transition-colors">
              <Phone size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs font-400 tracking-widest uppercase opacity-70 mb-0.5">
                Telefon
              </div>
              <div>070-412 83 91</div>
            </div>
          </motion.a>

          <motion.a
            href="mailto:info@regmyrjansson.se"
            variants={cardReveal}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center justify-center gap-4 bg-charcoal-light text-white font-body font-500 text-lg px-10 py-6 rounded min-h-[80px] border border-white/10 hover:border-yellow hover:text-yellow transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow/10 transition-colors">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs font-400 tracking-widest uppercase opacity-50 mb-0.5">
                E-post
              </div>
              <div>info@regmyrjansson.se</div>
            </div>
          </motion.a>
        </motion.div>

        {/* Opening hours */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="inline-flex items-center gap-3 bg-charcoal border border-white/5 rounded-full px-6 py-3"
        >
          <Clock size={16} className="text-yellow" />
          <span className="font-body text-white/50 text-sm">
            Vi svarar vardagar <span className="text-white">07:00 – 17:00</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
