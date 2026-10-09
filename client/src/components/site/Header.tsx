import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/dealer", label: "Become a Dealer" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 border-b transition-all", scrolled ? "border-border bg-background/95 shadow-card backdrop-blur" : "border-transparent bg-background")}>
      <div className="container-x flex h-18 items-center justify-between gap-6 py-3">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="text-sm font-medium text-muted-foreground transition-colors hover:text-forest" activeProps={{ className: "!text-forest font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest sm:inline-flex">Get a Quote</Link>
          <button className="grid h-10 w-10 place-items-center rounded-sm border lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container-x flex flex-col py-3" aria-label="Mobile">
            {navItems.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }} className="border-b py-3 text-base font-medium" activeProps={{ className: "text-primary" }}>{n.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 rounded-sm bg-primary py-3 text-center font-semibold text-primary-foreground">Get a Quote</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
