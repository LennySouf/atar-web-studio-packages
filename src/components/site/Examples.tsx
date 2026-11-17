import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CATEGORIES, EXAMPLES, type Example, type ExampleCategory } from "@/lib/examples";
import { cn } from "@/lib/utils";
import { BrowserFrame } from "./BrowserFrame";

type Props = {
  onChoose: (example: Example) => void;
};

export function Examples({ onChoose }: Props) {
  const [filter, setFilter] = useState<ExampleCategory | "all">("all");
  const [selected, setSelected] = useState<Example | null>(null);
  const list = filter === "all" ? EXAMPLES : EXAMPLES.filter((e) => e.category === filter);

  return (
    <section id="exemples" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow text-primary">Exemples de créations</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.02] sm:text-5xl">
            Imaginez votre site, <span className="font-accent">en vrai.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Chaque site est pensé pour votre métier. Voici quelques idées de ce qu'on peut créer
            ensemble — touchez un exemple pour le voir en grand.
          </p>
        </div>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0" role="tablist" aria-label="Filtrer les exemples">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={filter === c.id}
              onClick={() => setFilter(c.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                filter === c.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/20 bg-card hover:border-foreground",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((ex, i) => (
          <button
            key={ex.slug}
            type="button"
            onClick={() => setSelected(ex)}
            className="group text-left"
            aria-label={`Voir l'exemple ${ex.name}, ${ex.trade}`}
          >
            <div
              className={cn(
                "transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-0",
                i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]",
              )}
            >
              <BrowserFrame src={ex.image} alt={`Site ${ex.name}`} url={`${ex.slug}.fr`} />
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-muted-foreground">{ex.trade}</p>
                <h3 className="mt-1 text-2xl font-bold">{ex.name}</h3>
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-foreground/20 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="size-5" />
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {ex.features.map((f) => (
                <span key={f} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  {f}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[92vh] w-[calc(100%-1.5rem)] max-w-4xl overflow-y-auto rounded-2xl border-foreground/15 bg-background p-0">
          {selected && (
            <div>
              <div className="bg-secondary p-3 sm:p-6">
                <BrowserFrame src={selected.image} alt={`Site ${selected.name} en grand`} url={`${selected.slug}.fr`} eager />
              </div>
              <div className="grid gap-6 p-6 sm:grid-cols-[1.3fr_1fr] sm:p-8">
                <div>
                  <p className="eyebrow text-primary">{selected.trade}</p>
                  <DialogTitle className="mt-2 font-display text-3xl font-extrabold">{selected.name}</DialogTitle>
                  <DialogDescription className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {selected.pitch}
                  </DialogDescription>
                </div>
                <div className="rounded-xl border border-foreground/10 bg-card p-5">
                  <ul className="space-y-2">
                    {selected.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium">
                        <Check className="size-4 text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground">Formule conseillée : {selected.formule}</p>
                  <Button
                    variant="hero"
                    size="lg"
                    className="mt-4 h-12 w-full"
                    onClick={() => {
                      onChoose(selected);
                      setSelected(null);
                    }}
                  >
                    Je veux un site comme ça
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
