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
import { staggerContainer, cardReveal, fadeUp } from "@/lib/motion";

const services = [
  {
    icon: Zap,
    title: "Elinstallation",
    desc: "Vi installerar el i villor, lägenheter och lokaler — från grunden eller som komplettering till befintlig anläggning. Allt utförs enligt gällande regelverk av behörig elinstallatör.",
  },
  {
    icon: Search,
    title: "Felsökning",
    desc: "Något fungerar inte som det ska? Vi går metodiskt igenom anläggningen, hittar felet och åtgärdar det. Inga vilda gissningar — bara ett ordentligt jobb.",
  },
  {
    icon: ShieldCheck,
    title: "Säkringsarbeten",
    desc: "Byte av elcentral, installation av jordfelsbrytare eller uppgradering av ett gammalt proppskåp. Vi ser till att din anläggning är säker och uppfyller dagens krav.",
  },
  {
    icon: Lightbulb,
    title: "Belysning",
    desc: "Infällda spottar, utomhusbelysning, nya armaturer eller LED-konvertering. Vi hjälper dig med allt från planering till färdig installation.",
  },
  {
    icon: Building2,
    title: "Företagsel",
    desc: "El för kontor, butiker och verksamhetslokaler. Vi hanterar allt från nyinstallation till ombyggnation och ser till att arbetet stör verksamheten så lite som möjligt.",
  },
  {
    icon: Wrench,
    title: "Renovering & tillbyggnad",
    desc: "Bygger du om eller till? Vi sköter elarbetena och samordnar med övriga hantverkare. Du får en elinstallatör som är med hela vägen — inte en som dyker upp i slutet.",
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
