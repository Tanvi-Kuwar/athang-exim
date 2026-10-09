import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { toast } from "sonner";
import { products, ON_REQUEST, type Category } from "@/data/products";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Product Catalogue — Athang Enterprises" },
      { name: "description", content: "Digital catalogue of agricultural products and spices from Athang Enterprises." },
      { property: "og:title", content: "Athang Enterprises — Product Catalogue" },
      { property: "og:description", content: "Explore our agricultural products and spices." },
    ],
  }),
  component: Catalogue,
});

const sections: Category[] = ["Fresh Produce", "Fruits", "Spices", "Other Products"];

function Catalogue() {
  return (
    <>
      <section className="border-b bg-cream">
        <div className="container-x flex flex-col justify-between gap-8 py-20 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-earth">Digital catalogue · 2026</p>
            <h1 className="mt-4 text-4xl font-medium text-forest md:text-6xl">Athang Enterprises — Product Catalogue</h1>
            <p className="mt-4 text-lg text-muted-foreground">Explore our agricultural products and spices.</p>
          </div>
          <button onClick={() => toast("Catalogue download will be available soon.")} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest">
            <Download className="h-4 w-4" /> Download Catalogue
          </button>
        </div>
      </section>
      <div className="container-x py-16">
        {sections.map((s, si) => (
          <section key={s} className="mb-16">
            <div className="flex items-baseline gap-4 border-b-2 border-forest pb-3">
              <span className="font-display text-sm text-gold">0{si + 1}</span>
              <h2 className="text-3xl font-medium text-forest">{s}</h2>
            </div>
            <div className="divide-y">
              {products.filter((p) => p.category === s).map((p) => (
                <article key={p.slug} className="grid gap-6 py-6 sm:grid-cols-[140px_1fr] md:grid-cols-[160px_1.2fr_1fr]">
                  <img src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full max-w-[160px] rounded-sm object-cover" />
                  <div>
                    <p className="eyebrow text-earth">{p.category}</p>
                    <h3 className="mt-1 text-2xl font-medium text-forest">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
                  </div>
                  <dl className="grid content-start gap-2 text-sm sm:col-start-2 md:col-start-auto">
                    {["Packaging", "Quantity", "Specification"].map((k) => (
                      <div key={k} className="flex justify-between gap-4 border-b border-dashed pb-2"><dt className="font-medium">{k}</dt><dd className="text-muted-foreground">{ON_REQUEST}</dd></div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </section>
        ))}
        <div className="flex flex-col items-start justify-between gap-6 rounded-md bg-forest-gradient p-10 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <FileText className="h-8 w-8 shrink-0 text-gold" />
            <div>
              <h2 className="text-2xl font-medium text-forest-foreground">Need a detailed catalogue?</h2>
              <p className="mt-1 text-forest-foreground/75">Request specifications and packaging details for the products you need.</p>
            </div>
          </div>
          <Link to="/contact" search={{ product: "Product Catalogue" }} className="rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground">Request Product Catalogue</Link>
        </div>
      </div>
    </>
  );
}
