import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MAINTENANCE, commitmentLabel } from "@/lib/maintenance";
import { OFFERS, formatPrice } from "@/lib/offers";

type Props = { onChoose: () => void };

export function Maintenance({ onChoose }: Props) {
  const plan = MAINTENANCE;
  const lowest = Math.min(...OFFERS.map((o) => o.priceFrom));
  const steps = [
    {
      n: "1",
      title: "La création",
      price: `dès ${formatPrice(lowest)}`,
      when: "payée une seule fois",
      text: "Je conçois votre site, j'écris les textes avec vous et je le mets en ligne. Acompte de 30 % au démarrage, le reste à la livraison.",
    },
    {
      n: "2",
      title: `L'abonnement ${plan.name}`,
      price: `${formatPrice(plan.monthlyPrice)} / mois`,
      when: "à partir de la mise en ligne",
      text: "Votre site reste en ligne, à jour et à votre adresse. Vous n'avez rien d'autre à payer pour qu'il fonctionne.",
    },
  ];

  return (
    <section id="abonnement" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="eyebrow text-primary">Après la mise en ligne</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.02] sm:text-5xl">
            Deux frais, <span className="font-accent">c'est tout.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un site, ce n'est pas qu'une création : il faut un nom de domaine, un hébergement et quelqu'un qui le garde à
            jour. Tout ça est réuni dans un seul abonnement.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <ol className="space-y-5">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5 rounded-2xl border border-foreground/15 bg-card p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-1 font-display text-2xl font-extrabold tracking-tight">
                    {s.price} <span className="text-sm font-medium text-muted-foreground">— {s.when}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
            <li className="rounded-2xl border border-dashed border-foreground/25 p-6 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Et si vous arrêtez ?</strong> Après {plan.commitmentMonths} mois,
              l'abonnement se résilie avec {plan.noticeMonths} mois de préavis. Votre nom de domaine vous appartient : je
              vous le transfère gratuitement.
            </li>
          </ol>

          <article className="flex flex-col rounded-2xl border border-foreground bg-ink p-7 text-ink-foreground shadow-[var(--shadow-lift)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-bold">Abonnement {plan.name}</h3>
              <span className="rounded-full bg-highlight px-3 py-1 text-xs font-bold text-foreground">
                {commitmentLabel(plan)}
              </span>
            </div>
            <p className="mt-6">
              <span className="font-display text-6xl font-extrabold tracking-tighter">{formatPrice(plan.monthlyPrice)}</span>
              <span className="ml-1 text-ink-muted">/ mois</span>
            </p>
            <p className="mt-1 text-sm text-ink-muted">Prélevé automatiquement chaque mois, sans frais cachés.</p>

            <p className="eyebrow mt-8 text-ink-muted">Inclus</p>
            <ul className="mt-3 space-y-3">
              {plan.included.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-8 text-ink-muted">En option, sur devis</p>
            <ul className="mt-3 flex-1 space-y-3">
              {plan.notIncluded.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-ink-muted">
                  <Minus className="mt-0.5 size-4 shrink-0" /> {f}
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="mt-8 h-12 w-full" onClick={onChoose}>
              Demander mon devis
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
