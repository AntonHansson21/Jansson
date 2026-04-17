"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, Timer, Tag } from "lucide-react";
import { staggerContainer, cardReveal, fadeUp } from "@/lib/motion";

const features = [
  {
    icon: BadgeCheck,
    title: "Behöriga och ansvariga",
    desc: "Vi är certifierade elinstallatörer och arbetar enligt elsäkerhetslagen. Det innebär att vi inte bara får utföra jobbet — vi ansvarar också juridiskt för att det är rätt gjort.",
  },
  {
    icon: Timer,
    title: "Personlig kontakt",
    desc: "När du ringer Regmyr & Jansson pratar du med Erik eller Jonas — inte en bokningscentral. Du vet vem som kommer, och vi vet vad vi lovat.",
  },
  {
    icon: Tag,
    title: "Vi arbetar lokalt",
    desc: "Vi bor och jobbar i Skåne. Korta avstånd betyder snabbare respons och att vi faktiskt känner till förutsättningarna i området.",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-24 px-5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14"
        >
          <p className="font-body text-yellow text-sm tracking-widest uppercase mb-3">
            Varför välja oss
          </p>
          <h2
            className="font-heading font-700 text-charcoal leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Vad som skiljer oss åt
          </h2>
          <div className="mt-4 w-12 h-1 bg-yellow" />
        </motion.div>

        {/* Feature blocks */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={cardReveal}
                className="relative p-8 border border-charcoal/10 rounded-lg group hover:border-yellow transition-colors duration-300"
              >
                <div className="absolute top-0 left-8 w-12 h-0.5 bg-yellow" />
                <div className="w-12 h-12 rounded bg-yellow/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-yellow" />
                </div>
                <h3 className="font-heading font-700 text-charcoal text-2xl mb-3">
                  {f.title}
                </h3>
                <p className="font-body text-charcoal/60 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
