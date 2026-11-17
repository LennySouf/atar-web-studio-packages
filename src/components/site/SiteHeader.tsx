import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#exemples", label: "Exemples" },
  { href: "#inclus", label: "Ce qui est inclus" },
  { href: "#methode", label: "Méthode" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#abonnement", label: "Abonnement" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-baseline gap-1 font-display text-2xl font-extrabold tracking-tighter">
          ATAR<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ink" size="sm" className="hidden h-10 px-5 sm:inline-flex">
            <a href="#devis">Demander un devis</a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-foreground/15 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-foreground/10 bg-background px-5 pb-6 pt-2 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-foreground/10 py-4 font-display text-xl font-semibold"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="hero" size="xl" className="mt-5 w-full">
            <a href="#devis" onClick={() => setOpen(false)}>Demander un devis</a>
          </Button>
        </nav>
      )}
    </header>
  );
}
