import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Boxes, Check, Handshake, Headset, Layers, Quote, Truck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import field from "@/assets/field.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { featured, products, getProduct } from "@/data/products";
import { BtnLink, ProductCard, SectionHeading } from "@/components/site/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Athang Enterprises — Agricultural Products & Spices Trading" },
      { name: "description", content: "B2B supplier of fresh produce, fruits and Indian spices through trusted sourcing and dependable supply." },
      { property: "og:title", content: "Athang Enterprises — Agricultural Products & Spices Trading" },
      { property: "og:description", content: "Quality products. Trusted trade. Stronger partnerships." },
    ],
  }),
  component: Home,
});

const categories = [
  { name: "Fresh Produce", desc: "Ginger, Garlic, Onion, Tomato, Pomegranate, Guava", img: getProduct("onion")!.image },
  { name: "Spices", desc: "Turmeric, Chilli, Cloves, Black Pepper, Cumin, Coriander", img: getProduct("turmeric")!.image },
  { name: "Other Products", desc: "Seasonal and specialty agricultural commodities", img: getProduct("other-commodities")!.image },
];

const why = [
  { icon: Award, t: "Quality Focus", d: "Carefully sourced agricultural products meeting consistent quality expectations." },
  { icon: Truck, t: "Reliable Supply", d: "Focused on dependable procurement and B2B supply." },
  { icon: Layers, t: "Wide Product Range", d: "Fresh produce, spices and other agricultural commodities." },
  { icon: Headset, t: "Professional Service", d: "Clear communication and responsive business support." },
  { icon: Handshake, t: "Strong Partnerships", d: "Building long-term relationships with buyers and dealers." },
  { icon: Boxes, t: "Flexible Requirements", d: "Support for different product and quantity requirements." },
];

const steps = [
  ["01", "Source", "Products are sourced from trusted agricultural supply networks."],
  ["02", "Select", "Products are checked and selected according to required specifications."],
  ["03", "Supply", "Orders are prepared and supplied according to buyer requirements."],
  ["04", "Partner", "Build long-term relationships with dealers and B2B buyers."],
];

const testimonials = [
  { who: "B2B Buyer", q: "Communication was clear from enquiry to dispatch, and the products matched what we discussed." },
  { who: "Wholesale Partner", q: "A dependable team to work with for spices. Responsive and professional throughout." },
  { who: "Dealer Partner", q: "The range of produce and spices makes it easy to source multiple items from one partner." },
];

const faqs = [
  ["What products does Athang Enterprises supply?", "We trade fresh produce such as ginger, garlic, onion and tomato, fruits such as pomegranate and guava, and Indian spices including turmeric, red chilli, cloves, black pepper, cumin, coriander, cardamom and cinnamon."],
  ["Do you supply wholesale quantities?", "Yes. We focus on B2B and wholesale requirements. Share your expected quantity in an enquiry and our team will respond."],
  ["Can I request a quotation?", "Yes. Use the Request Quote or Contact form with product details and quantities, and we will get back to you."],
  ["How can I become a dealer?", "Fill in the Become a Dealer enquiry form with your business details. Our team will contact you to discuss the partnership."],
  ["Do you supply outside the local market?", "Supply locations are discussed on a case-by-case basis. Please mention your location in your enquiry."],
  ["Can product specifications be customized?", "Specifications such as grade, form and packaging can be discussed according to your requirements."],
];

const showcase = ["ginger", "garlic", "onion", "pomegranate", "turmeric", "red-chilli", "cloves", "cardamom"].map((s) => getProduct(s)!);

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="Indian spices and fresh produce in jute sacks" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-x relative flex min-h-[88vh] flex-col justify-center py-24">
          <p className="eyebrow text-gold animate-fade-up">Agricultural Products & Spices Trading</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[1.05] text-forest-foreground md:text-7xl animate-fade-up">
            Quality Products. <span className="italic text-gold">Trusted Trade.</span> Stronger Partnerships.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-forest-foreground/80 animate-fade-up">
            Athang Enterprises connects quality agricultural products and spices with reliable B2B buyers through trusted sourcing, consistent supply and professional service.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-up">
            <BtnLink to="/products" variant="gold">Explore Products <ArrowRight className="h-4 w-4" /></BtnLink>
            <BtnLink to="/dealer" variant="ghostLight">Become a Dealer</BtnLink>
          </div>
          <ul className="mt-14 grid max-w-3xl grid-cols-2 gap-4 border-t border-forest-foreground/20 pt-8 md:grid-cols-4">
            {["Quality Sourcing", "Reliable Supply", "B2B Trading", "Trusted Partnerships"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-forest-foreground/90"><Check className="h-4 w-4 text-gold" />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="What we trade" title="Our Product Range" subtitle="Quality agricultural products and spices sourced for reliable B2B supply." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((c) => (
            <article key={c.name} className="group relative overflow-hidden rounded-md">
              <img src={c.img} alt={c.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-3xl font-medium text-forest-foreground">{c.name}</h3>
                <p className="mt-2 text-sm text-forest-foreground/80">{c.desc}</p>
                <Link to="/products" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">Explore Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Featured" title="Featured Products" subtitle="Prices are shared on enquiry, based on your product, grade and quantity." />
            <BtnLink to="/products" variant="outline">View All Products</BtnLink>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading eyebrow="Why us" title="Why Choose Athang Enterprises?" />
          <img src={warehouse} alt="Sacks of produce ready for supply" loading="lazy" className="mt-10 aspect-[4/3] w-full rounded-md object-cover" />
        </div>
        <div className="grid gap-px self-start overflow-hidden rounded-md border bg-border sm:grid-cols-2">
          {why.map(({ icon: I, t, d }) => (
            <div key={t} className="bg-card p-7 transition-colors hover:bg-cream">
              <I className="h-7 w-7 text-earth" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-medium text-forest">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-forest-gradient py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Process" title="How We Work" light />
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            <span className="absolute left-5 top-0 h-full w-px bg-forest-foreground/20 md:left-0 md:top-5 md:h-px md:w-full" aria-hidden />
            {steps.map(([n, t, d]) => (
              <li key={n} className="relative pl-16 md:pl-0 md:pt-16">
                <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-gold font-display text-sm font-semibold text-gold-foreground">{n}</span>
                <h3 className="text-2xl font-medium text-forest-foreground">{t}</h3>
                <p className="mt-2 text-sm text-forest-foreground/75">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {showcase.map((p) => <img key={p.slug} src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full object-cover" />)}
        </div>
        <div className="absolute inset-0 grid place-items-center bg-forest/65 p-6">
          <h2 className="max-w-3xl text-center text-3xl font-medium text-forest-foreground md:text-5xl">From Farm-Sourced Products to <span className="italic text-gold">Trusted Business Partnerships</span></h2>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="Partner voices" title="What Partners Say" center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.who} className="rounded-md border bg-card p-8 shadow-card">
              <Quote className="h-7 w-7 text-gold" />
              <blockquote className="mt-5 font-display text-lg text-forest">“{t.q}”</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-earth">— {t.who}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">Sample testimonials shown for demonstration.</p>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={field} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-x relative py-24">
          <h2 className="max-w-2xl text-4xl font-medium text-forest-foreground md:text-5xl">Looking for a Reliable Agricultural Trading Partner?</h2>
          <p className="mt-5 max-w-xl text-lg text-forest-foreground/80">Partner with Athang Enterprises for quality agricultural products, spices and dependable B2B supply.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BtnLink to="/dealer" variant="gold">Become a Dealer</BtnLink>
            <BtnLink to="/contact" variant="ghostLight">Contact Us</BtnLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-12 py-24 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" subtitle={`Currently trading ${products.length - 1}+ products across produce, fruits and spices.`} />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`f${i}`}>
              <AccordionTrigger className="text-left font-display text-lg font-medium text-forest hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
