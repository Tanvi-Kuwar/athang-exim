import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  { title: "Company", links: [["About", "/about"], ["Products", "/products"], ["Gallery", "/gallery"], ["Catalogue", "/catalogue"]] },
  { title: "Business", links: [["Become a Dealer", "/dealer"], ["Request a Quote", "/contact"], ["Contact", "/contact"]] },
  { title: "Products", links: [["Ginger", "/products/ginger"], ["Garlic", "/products/garlic"], ["Onion", "/products/onion"], ["Pomegranate", "/products/pomegranate"], ["Turmeric", "/products/turmeric"], ["Chilli", "/products/red-chilli"], ["Spices", "/products"]] },
] as const;

export function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm text-forest-foreground/70">A trusted agricultural products and spices trading partner.</p>
          {/* PLACEHOLDER: replace # with real social profile URLs */}
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="#" aria-label="Social media (placeholder)" className="grid h-9 w-9 place-items-center rounded-sm border border-forest-foreground/20 transition-colors hover:border-gold hover:text-gold"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="eyebrow text-gold">{c.title}</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {c.links.map(([l, to]) => (
                <li key={l}><Link to={to as never} className="text-forest-foreground/75 transition-colors hover:text-gold">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-forest-foreground/10">
        <p className="container-x py-6 text-xs text-forest-foreground/60">© 2026 Athang Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
}
