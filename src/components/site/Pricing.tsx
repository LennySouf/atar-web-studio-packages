import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OFFERS, formatPrice, type Offer } from "@/lib/offers";
import { cn } from "@/lib/utils";

type Props = { onChoose: (offer: Offer) => void };

export function Pricing({ onChoose }: Props) {
  return (
    <section id="tarifs" className="scroll-mt-20 border-y border-foreground/10 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="eyebrow text-primary">Tarifs</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.02] sm:text-5xl">
            Trois formules, <span className="font-accent">zéro surprise.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Prix de départ, ajustés selon votre projet après notre échange.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {OFFERS.map((o) => (
            <article
              key={o.id}
              className={cn(
                "relative flex flex-col rounded-2xl border p-7",
                o.featured
                  ? "border-foreground bg-ink text-ink-foreground shadow-[var(--shadow-lift)] lg:-translate-y-3"
                  : "border-foreground/15 bg-card",
              )}
            >
              {o.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-highlight px-3 py-1 text-xs font-bold text-foreground">
                  Le plus choisi
                </span>
              )}
              <h3 className="text-2xl font-bold">{o.name}</h3>
              <p className={cn("mt-1 text-sm", o.featured ? "text-ink-muted" : "text-muted-foreground")}>{o.tagline}</p>
              <p className="mt-6">
                <span className={cn("text-sm", o.featured ? "text-ink-muted" : "text-muted-foreground")}>à partir de</span>
                <span className="block font-display text-5xl font-extrabold tracking-tighter">{formatPrice(o.priceFrom)}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {o.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={o.featured ? "hero" : "line"}
                size="lg"
                className="mt-8 h-12 w-full"
                onClick={() => onChoose(o)}
              >
                Choisir {o.name}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
