import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import field from "@/assets/field.jpg";
import { products } from "@/data/products";
import { PageHero, ProductCard } from "@/components/site/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Athang Enterprises" },
      { name: "description", content: "Explore fresh produce, fruits, Indian spices and other agricultural commodities traded by Athang Enterprises." },
      { property: "og:title", content: "Products We Trade — Athang Enterprises" },
      { property: "og:description", content: "Agricultural produce, spices and commodities for B2B buyers." },
    ],
  }),
  component: ProductsPage,
});

<<<<<<< HEAD
const filters = ["All", "Fresh Produce", "Vegetables", "Fruits", "Spices", "Cotton", "Engineering Products", "Other Products"] as const;
=======
const filters = ["All", "Fresh Produce", "Vegetables", "Fruits", "Spices", "Cotton","Engineering Products","Other Products"] as const;
>>>>>>> aa599d7 (Save local changes)

function ProductsPage() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = products.filter((p) =>
    f === "All" ? true : f === "Vegetables" ? p.sub === "Vegetables" : f === "Fresh Produce" ? p.category === "Fresh Produce" || p.category === "Fruits" : p.category === f,
  );
  return (
    <>
      <PageHero eyebrow="Our range" title="Products We Trade" subtitle="Explore our range of agricultural produce, spices and other commodities." image={field} />
      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2" role="tablist">
          {filters.map((x) => (
            <button key={x} role="tab" aria-selected={f === x} onClick={() => setF(x)} className={cn("rounded-sm border px-4 py-2 text-sm font-medium transition-colors", f === x ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary hover:text-primary")}>{x}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => <ProductCard key={p.slug} p={p} detailed />)}
        </div>
      </section>
    </>
  );
}
