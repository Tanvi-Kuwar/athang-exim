import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import hero from "@/assets/hero.jpg";
import field from "@/assets/field.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { getProduct } from "@/data/products";
import { PageHero } from "@/components/site/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Athang Enterprises" },
      { name: "description", content: "Images of produce, spices, agriculture and supply at Athang Enterprises." },
      { property: "og:title", content: "Gallery — Athang Enterprises" },
      { property: "og:description", content: "Produce, spices, fields and supply." },
    ],
  }),
  component: Gallery,
});

const g = (s: string) => getProduct(s)!.image;
const items = [
  { src: hero, cat: "Spices", alt: "Spice market" },
  { src: g("ginger"), cat: "Products", alt: "Ginger" },
  { src: field, cat: "Agriculture", alt: "Agricultural fields" },
  { src: g("turmeric"), cat: "Spices", alt: "Turmeric" },
  { src: warehouse, cat: "Supply", alt: "Warehouse supply" },
  { src: g("garlic"), cat: "Products", alt: "Garlic" },
  { src: g("red-chilli"), cat: "Spices", alt: "Red chilli" },
  { src: g("other-commodities"), cat: "Packaging", alt: "Product packaging in jute bags" },
  { src: g("onion"), cat: "Products", alt: "Onion" },
  { src: g("pomegranate"), cat: "Products", alt: "Pomegranate" },
  { src: g("cloves"), cat: "Spices", alt: "Cloves" },
  { src: g("tomato"), cat: "Products", alt: "Tomato" },
  { src: g("black-pepper"), cat: "Spices", alt: "Black pepper" },
  { src: g("guava"), cat: "Products", alt: "Guava" },
  { src: warehouse, cat: "Business", alt: "Trade operations" },
];
const cats = ["All", "Products", "Agriculture", "Spices", "Packaging", "Supply", "Business"];

function Gallery() {
  const [c, setC] = useState("All");
  const [open, setOpen] = useState<(typeof items)[number] | null>(null);
  const list = items.filter((i) => c === "All" || i.cat === c);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Products, Fields & Supply" image={hero} />
      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2">
          {cats.map((x) => (
            <button key={x} onClick={() => setC(x)} className={cn("rounded-sm border px-4 py-2 text-sm font-medium transition-colors", c === x ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary hover:text-primary")}>{x}</button>
          ))}
        </div>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {list.map((i, idx) => (
            <button key={idx} onClick={() => setOpen(i)} className="group relative mb-4 block w-full overflow-hidden rounded-md">
              <img src={i.src} alt={i.alt} loading="lazy" className={cn("w-full object-cover transition-transform duration-700 group-hover:scale-105", idx % 3 === 0 ? "aspect-[3/4]" : idx % 3 === 1 ? "aspect-square" : "aspect-[4/3]")} />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-forest/80 to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-left"><span className="eyebrow block text-gold">{i.cat}</span><span className="font-display text-lg text-forest-foreground">{i.alt}</span></span>
              </span>
            </button>
          ))}
        </div>
      </section>
      {open && (
        <div role="dialog" aria-modal className="fixed inset-0 z-[60] grid place-items-center bg-forest/95 p-4" onClick={() => setOpen(null)}>
          <button aria-label="Close" className="absolute right-5 top-5 text-forest-foreground"><X className="h-7 w-7" /></button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <img src={open.src} alt={open.alt} className="max-h-[80vh] w-auto rounded-md" />
            <figcaption className="mt-3 text-center text-sm text-forest-foreground/80">{open.alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
