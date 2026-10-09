import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Handshake, Headset, Layers, Loader2, SlidersHorizontal, Truck } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";
import { Field, inputCls, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/dealer")({
  head: () => ({
    meta: [
      { title: "Become a Dealer — Athang Enterprises" },
      { name: "description", content: "Build a long-term business partnership with Athang Enterprises. Submit a dealer enquiry." },
      { property: "og:title", content: "Become a Dealer — Athang Enterprises" },
      { property: "og:description", content: "Dealer enquiry for agricultural products and spices." },
    ],
  }),
  component: Dealer,
});

const benefits = [
  { i: Layers, t: "Product Range" },
  { i: Truck, t: "Reliable Supply" },
  { i: Headset, t: "Business Support" },
  { i: Handshake, t: "Long-Term Partnership" },
  { i: SlidersHorizontal, t: "Flexible Requirements" },
];

function Dealer() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => setState("done"), 900); // frontend-only placeholder
  };
  return (
    <>
      <PageHero eyebrow="Partnership" title="Become a Dealer" subtitle="Build a long-term business partnership with Athang Enterprises." image={warehouse} />
      <section className="container-x py-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-border md:grid-cols-5">
          {benefits.map(({ i: I, t }) => (
            <div key={t} className="bg-card p-6 text-center"><I className="mx-auto h-7 w-7 text-earth" strokeWidth={1.5} /><p className="mt-3 font-display text-lg text-forest">{t}</p></div>
          ))}
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading eyebrow="Enquiry" title="Dealer Enquiry Form" subtitle="Please provide accurate business information so our team can understand your requirements." />
          </div>
          <div className="rounded-md bg-card p-6 shadow-card md:p-10">
            {state === "done" ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                <p className="mx-auto mt-5 max-w-md font-display text-2xl text-forest">Thank you for your interest. Our team will contact you regarding your dealer enquiry.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name"><input required className={inputCls} /></Field>
                <Field label="Company Name"><input required className={inputCls} /></Field>
                <Field label="Email"><input type="email" required className={inputCls} /></Field>
                <Field label="Phone Number"><input type="tel" required className={inputCls} /></Field>
                <Field label="City"><input className={inputCls} /></Field>
                <Field label="State"><input className={inputCls} /></Field>
                <Field label="Country"><input className={inputCls} /></Field>
                <Field label="Business Type">
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>Select</option>
                    <option>Wholesaler</option><option>Distributor</option><option>Retailer</option><option>Processor</option><option>Other</option>
                  </select>
                </Field>
                <Field label="Products Interested In"><input className={inputCls} placeholder="e.g. Turmeric, Ginger" /></Field>
                <Field label="Expected Quantity"><input className={inputCls} placeholder="e.g. per month" /></Field>
                <Field label="Message" className="sm:col-span-2"><textarea rows={4} className={inputCls} /></Field>
                <button disabled={state === "loading"} className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:bg-forest disabled:opacity-70 sm:col-span-2">
                  {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />} Submit Dealer Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
