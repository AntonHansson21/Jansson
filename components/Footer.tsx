import { Zap, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-yellow rounded-sm flex items-center justify-center">
                <Zap size={15} className="text-charcoal" fill="currentColor" />
              </div>
              <span className="font-heading font-700 text-white text-lg tracking-tight">
                R&amp;J <span className="text-yellow">EL</span>
              </span>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
              Behöriga elinstallatörer för hem och företag i Skåne. Två namn på dörren — ett ansvar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-600 text-white text-lg mb-4 tracking-wide">
              Tjänster
            </h4>
            <ul className="space-y-2 font-body text-white/40 text-sm">
              {[
                "Elinstallation",
                "Felsökning",
                "Säkringsarbeten",
                "Belysning",
                "Företagsel",
                "Renovering & tillbyggnad",
              ].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-600 text-white text-lg mb-4 tracking-wide">
              Kontakt
            </h4>
            <div className="space-y-3 font-body text-sm">
              <a
                href="tel:+46704128391"
                className="flex items-center gap-2 text-white/50 hover:text-yellow transition-colors"
              >
                <Phone size={15} />
                070-412 83 91
              </a>
              <a
                href="mailto:info@regmyrjansson.se"
                className="flex items-center gap-2 text-white/50 hover:text-yellow transition-colors"
              >
                <Mail size={15} />
                info@regmyrjansson.se
              </a>
              <p className="text-white/30 text-xs mt-2">
                Vardagar 07:00 – 17:00
              </p>
              <p className="text-white/30 text-xs">
                Org.nr: 556XXX-XXXX
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-white/25 text-xs">
            © 2025 Regmyr &amp; Jansson El AB. Alla rättigheter förbehållna.
          </p>
          <p className="font-body text-white/20 text-xs">
            Elarbeten i Skåne utförda med yrkesheder.
          </p>
        </div>
      </div>
    </footer>
  );
}
