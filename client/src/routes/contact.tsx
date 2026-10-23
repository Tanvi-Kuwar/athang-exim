import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import field from "@/assets/field.jpg";
import { Field, inputCls, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { product?: string | undefined } => ({ product: typeof s["product"] === "string" ? s["product"] : undefined }),
  head: () => ({
    meta: [
      { title: "Contact — Athang Enterprises" },
      { name: "description", content: "Contact Athang Enterprises for quotes and enquiries on agricultural products and spices." },
      { property: "og:title", content: "Contact Athang Enterprises" },
      { property: "og:description", content: "Let's build a business partnership." },
    ],
  }),
  component: Contact,
});

// PLACEHOLDER CONTACT INFO — replace with real company details
const info = [
  { i: Phone, t: "Phone", v: "+91 XXXXX XXXXX" },
  { i: Mail, t: "Email", v: "info@example.com" },
  { i: MapPin, t: "Address", v: "Business address to be updated" },
  { i: Clock, t: "Business Hours", v: "To be updated" },
];

function Contact() {
  const { product } = Route.useSearch();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      if (!API_URL) {
        throw new Error("VITE_API_URL is not configured");
      }

      const response = await fetch(`${API_URL}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit enquiry");
      }

      setState("done");
      form.reset();
    } catch (error) {
        console.error("Enquiry submission failed:", error);
        alert(
          error instanceof Error
            ? error.message
            : "Unknown error occurred"
        );
        setState("idle");
      }
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Build a Business Partnership" image={field} />
      <section className="container-x -mt-10 relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {info.map(({ i: I, t, v }) => (
          <div key={t} className="rounded-md bg-card p-6 shadow-card">
            <I className="h-6 w-6 text-earth" strokeWidth={1.5} />
            <p className="eyebrow mt-4 text-muted-foreground">{t}</p>
            <p className="mt-1 font-medium text-forest">{v}</p>
          </div>
        ))}
      </section>
      <section className="container-x grid gap-10 py-20 lg:grid-cols-2">
        <div className="rounded-md border bg-card p-6 md:p-10">
          <h2 className="text-3xl font-medium text-forest">Send an Enquiry</h2>
          {state === "done" ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
              <p className="mt-5 font-display text-2xl text-forest">Thank you. Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Name"><input name="name" required className={inputCls} /></Field>
              <Field label="Company"><input name="company" className={inputCls} /></Field>
              <Field label="Email"><input name="email" type="email" required className={inputCls} /></Field>
              <Field label="Phone"><input name="phone" type="tel" className={inputCls} /></Field>
              <Field label="Subject" className="sm:col-span-2"><input name="subject" className={inputCls} defaultValue={product ? `Quote request: ${product}` : ""} /></Field>
              <Field label="Message" className="sm:col-span-2"><textarea name="message" rows={5} required className={inputCls} /></Field>
              <button disabled={state === "loading"} className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:bg-forest disabled:opacity-70 sm:col-span-2">
                {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />} Send Enquiry
              </button>
            </form>
          )}
        </div>
        <div>
          <h2 className="text-3xl font-medium text-forest">Our Location</h2>
          <div className="mt-6 grid aspect-[4/3] place-items-center rounded-md border border-dashed bg-muted">
            <div className="text-center text-muted-foreground">
              <MapPin className="mx-auto h-10 w-10 text-earth" strokeWidth={1.25} />
              <p className="mt-3 text-sm">Map will be added once the business address is confirmed.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
