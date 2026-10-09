import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import field from "@/assets/field.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Athang Enterprises" },
      { name: "description", content: "Athang Enterprises is an agricultural products and spices trading business connecting quality products with B2B buyers." },
      { property: "og:title", content: "About Athang Enterprises" },
      { property: "og:description", content: "Building trust through agricultural trade." },
    ],
  }),
  component: About,
});

const values = ["Quality", "Integrity", "Reliability", "Transparency", "Partnership", "Customer Focus"];

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Building Trust Through Agricultural Trade" image={field} />
      <section className="container-x grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Who we are" title="A focused agricultural trading business" />
          <p className="mt-6 text-lg text-muted-foreground">Athang Enterprises is an agricultural products and spices trading business focused on connecting quality products with reliable B2B buyers and business partners.</p>
          <p className="mt-4 text-muted-foreground">We work across fresh produce, fruits and Indian spices, with an emphasis on clear communication and dependable supply.</p>
        </div>
        <img src={warehouse} alt="Agricultural produce in storage" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />
      </section>
      <section className="bg-cream py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[["Our Mission", "To build dependable agricultural trade relationships through quality products, responsible sourcing and professional service."], ["Our Vision", "To grow into a trusted name in agricultural commodity trading through long-term partnerships and consistent service."]].map(([t, d]) => (
            <div key={t} className="rounded-md border-l-4 border-gold bg-card p-10 shadow-card">
              <p className="eyebrow text-earth">{t}</p>
              <p className="mt-4 font-display text-2xl text-forest">“{d}”</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-x py-24">
        <SectionHeading eyebrow="Values" title="Our Values" center />
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-border md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v} className="bg-card p-8">
              <span className="font-display text-sm text-gold">0{i + 1}</span>
              <h3 className="mt-2 text-2xl font-medium text-forest">{v}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-forest-gradient py-20">
        <div className="container-x flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6">
          {["Sourcing", "Quality", "Supply", "Partnership"].map((s, i, a) => (
            <div key={s} className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
              <span className="rounded-sm border border-gold/50 px-6 py-3 font-display text-2xl text-forest-foreground">{s}</span>
              {i < a.length - 1 && <ArrowRight className="h-5 w-5 rotate-90 text-gold md:rotate-0" />}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
