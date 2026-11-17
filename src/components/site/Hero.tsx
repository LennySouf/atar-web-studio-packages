import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrowserFrame } from "./BrowserFrame";
import { EXAMPLES } from "@/lib/examples";

const TRADES = [
  "Restaurants",
  "Boulangeries",
  "Salons de coiffure",
  "Boutiques",
  "Artisans",
  "Cafés",
  "Cabinets",
  "Instituts de beauté",
  "Traiteurs",
  "PME",
];

export function Hero() {
  const a = EXAMPLES[0]!;
  const b = EXAMPLES[2]!;
  const c = EXAMPLES[4]!;
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.05fr_1fr] md:items-center md:pb-24 md:pt-20">
        <div>
          <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-3 py-1.5 text-foreground/70">
            <span className="size-1.5 rounded-full bg-primary" /> Création de sites pour pros
          </p>
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
            Votre commerce mérite un site qui{" "}
            <span className="font-accent text-primary">donne envie</span> de{" "}
            <span className="marker">pousser la porte.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Restaurants, commerçants, artisans, entreprises : ATAR crée votre site, beau, rapide et
            prêt à attirer des clients. Regardez ce que ça pourrait donner pour vous.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href="#exemples">
                Voir les exemples <ArrowDown />
              </a>
            </Button>
            <Button asChild variant="line" size="xl">
              <a href="#devis">
                Demander un devis <ArrowRight />
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            À partir de <strong className="text-foreground">320 €</strong> · mise en ligne en 7 jours
          </p>
        </div>

        <div className="relative mx-auto h-[340px] w-full max-w-[520px] sm:h-[440px]">
          <BrowserFrame
            src={b.image}
            alt={`Exemple de site pour ${b.trade}`}
            url="ateliermeche.fr"
            className="absolute left-0 top-6 w-[62%] -rotate-6"
          />
          <BrowserFrame
            src={c.image}
            alt={`Exemple de site pour ${c.trade}`}
            url="boisetbati.fr"
            className="absolute right-0 top-0 w-[58%] rotate-[5deg]"
          />
          <BrowserFrame
            src={a.image}
            alt={`Exemple de site pour ${a.trade}`}
            url="lecomptoir-bistrot.fr"
            eager
            className="absolute bottom-0 left-1/2 w-[78%] -translate-x-1/2 animate-float shadow-[var(--shadow-lift)]"
          />
          <div className="absolute -left-2 bottom-8 z-10 rotate-[-8deg] rounded-full bg-highlight px-4 py-2 font-display text-sm font-bold shadow-[var(--shadow-card)] sm:-left-6">
            Ça pourrait être le vôtre ✦
          </div>
        </div>
      </div>

      <div className="relative border-y border-foreground/15 bg-ink py-4 text-ink-foreground">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...TRADES, ...TRADES].map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-xl font-semibold">
              {t} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
