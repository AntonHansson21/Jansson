"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Search,
  ShieldCheck,
  Lightbulb,
  Building2,
  Wrench,
} from "lucide-react";
import { staggerContainer, cardReveal, fadeUp, EASE } from "@/lib/motion";

const services = [
  {
    icon: Zap,
    title: "Elinstallation",
    desc: "Nyinstallation och uppgradering av elsystem i villor, lägenheter och lokaler. Allt enligt gällande regler.",
  },
  {
    icon: Search,
    title: "Felsökning",
    desc: "Snabb och noggrann felsökning av elanläggningar. Vi hittar problemet och åtgärdar det effektivt.",
  },
  {
    icon: ShieldCheck,
    title: "Säkringsarbeten",
    desc: "Byte av proppskåp, installation av jordfelsbrytare och uppgradering av äldre elcentraler.",
  },
  {
    icon: Lightbulb,
    title: "Belysning",
    desc: "Infällda spottar, utomhusbelysning, LED-konvertering och smart hembelysning.",
  },
  {
    icon: Building2,
    title: "Företagsel",
    desc: "Elarbeten för kontor, butiker och industrilokaler. Vi hanterar allt från planering till driftsättning.",
  },
  {
    icon: Wrench,
    title: "Renovering & tillbyggnad",
    desc: "Elektriska arbeten vid om- och tillbyggnader. Vi samordnar med din byggherre och följer projektet.",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tjanster" className="bg-charcoal-mid py-24 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14"
        >
          <p className="font-body text-yellow text-sm tracking-widest uppercase mb-3">
            Vad vi gör
          </p>
          <h2
            className="font-heading font-700 text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Våra tjänster
          </h2>
          <div className="mt-4 w-12 h-1 bg-yellow" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={cardReveal}
                className="group bg-charcoal-mid hover:bg-charcoal-light transition-colors duration-300 p-8"
              >
                <div className="w-11 h-11 rounded bg-yellow/10 flex items-center justify-center mb-5 group-hover:bg-yellow/20 transition-colors">
                  <Icon size={22} className="text-yellow" />
                </div>
                <h3 className="font-heading font-700 text-white text-2xl mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
