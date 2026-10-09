import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className={cn("eyebrow", light ? "text-gold" : "text-earth")}>{eyebrow}</p>}
      <h2 className={cn("mt-3 text-3xl font-medium md:text-5xl", light ? "text-forest-foreground" : "text-forest")}>{title}</h2>
      {subtitle && <p className={cn("mt-4 text-base md:text-lg", light ? "text-forest-foreground/75" : "text-muted-foreground")}>{subtitle}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow: string; title: string; subtitle?: string; image: string }) {
  return (
    <section className="relative overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container-x relative py-24 md:py-32">
        <p className="eyebrow text-gold animate-fade-up">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium text-forest-foreground md:text-6xl animate-fade-up">{title}</h1>
        {subtitle && <p className="mt-5 max-w-xl text-lg text-forest-foreground/80 animate-fade-up">{subtitle}</p>}
      </div>
    </section>
  );
}

export function BtnLink({ to, children, variant = "primary", className, params }: { to: string; children: ReactNode; variant?: "primary" | "gold" | "outline" | "ghostLight"; className?: string; params?: Record<string, string> }) {
  const v = {
    primary: "bg-primary text-primary-foreground hover:bg-forest",
    gold: "bg-gold text-gold-foreground hover:brightness-105",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghostLight: "border border-forest-foreground/40 text-forest-foreground hover:bg-forest-foreground/10",
  }[variant];
  return (
    <Link to={to} params={params as never} className={cn("inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition-all", v, className)}>
      {children}
    </Link>
  );
}

export function ProductCard({ p, detailed = false }: { p: Product; detailed?: boolean }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border bg-card shadow-card">
      <Link to="/products/$slug" params={{ slug: p.slug }} className="block aspect-[4/3] overflow-hidden bg-muted">
        <img src={p.image} alt={p.name} loading="lazy" width={816} height={816} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow text-earth">{p.category}</p>
        <h3 className="mt-2 text-xl font-medium text-forest">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.short}</p>
        {detailed && <p className="mt-3 text-xs text-muted-foreground"><span className="font-semibold text-foreground">Specification:</span> Available on Request</p>}
        <p className="mt-4 text-sm font-semibold text-primary">Request Quote</p>
        <div className="mt-4 flex gap-2">
          <Link to="/products/$slug" params={{ slug: p.slug }} className="flex-1 rounded-sm border px-3 py-2 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary">View Details</Link>
          <Link to="/contact" search={{ product: p.name }} className="inline-flex flex-1 items-center justify-center gap-1 rounded-sm bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest">
            {detailed ? "Request Quote" : "Send Enquiry"} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export const inputCls = "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

export function Field({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}
