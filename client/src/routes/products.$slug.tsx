import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProduct, ON_REQUEST, products } from "@/data/products";
import { ProductCard } from "@/components/site/ui";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Product"} — Athang Enterprises` },
      { name: "description", content: loaderData?.description ?? "Product details" },
      { property: "og:title", content: `${loaderData?.name ?? "Product"} — Athang Enterprises` },
      { property: "og:description", content: loaderData?.description ?? "Product details" },
    ],
  }),
  component: ProductDetail,
});

function ProductDetail() {
  const p = Route.useLoaderData();
  const rows = [["Available forms / variants", ON_REQUEST], ["Quality information", ON_REQUEST], ["Packaging", ON_REQUEST], ["Minimum order quantity", ON_REQUEST]];
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);
  return (
    <>
      <section className="container-x py-12 md:py-20">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> All products</Link>
        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <img src={p.image} alt={p.name} width={816} height={816} className="aspect-square w-full rounded-md object-cover" />
          <div>
            <p className="eyebrow text-earth">{p.category}</p>
            <h1 className="mt-3 text-4xl font-medium text-forest md:text-6xl">{p.name}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{p.description}</p>
            <dl className="mt-8 divide-y border-y">
              {rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-4 text-sm">
                  <dt className="font-medium text-foreground">{k}</dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <Link to="/contact" search={{ product: p.name }} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-forest sm:w-auto">Request Quote <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="bg-cream py-16">
          <div className="container-x">
            <h2 className="text-3xl font-medium text-forest">Related Products</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{related.map((r) => <ProductCard key={r.slug} p={r} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}
