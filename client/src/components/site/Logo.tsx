import { Link } from "@tanstack/react-router";
import mark from "@/assets/logo-mark.png";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Athang Enterprises home">
      <span className={cn("grid h-10 w-10 place-items-center rounded-sm", inverted ? "bg-cream" : "bg-transparent")}>
        <img src={mark} alt="" width={40} height={40} className="h-9 w-9 object-contain" />
      </span>
      <span className="leading-none">
        <span className={cn("block font-display text-xl font-semibold", inverted ? "text-forest-foreground" : "text-forest")}>Athang</span>
        <span className={cn("eyebrow block !text-[0.6rem] !tracking-[0.3em]", inverted ? "text-gold" : "text-earth")}>Enterprises</span>
      </span>
    </Link>
  );
}
