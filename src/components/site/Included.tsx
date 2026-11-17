import { Smartphone, Search, Palette, CalendarCheck, Globe, PencilLine } from "lucide-react";

const ITEMS = [
  { icon: Palette, title: "Un design à votre image", text: "Vos couleurs, vos photos, votre ambiance. Pas un modèle vu partout." },
  { icon: Smartphone, title: "Parfait sur téléphone", text: "La majorité de vos clients vous cherchent depuis leur mobile." },
  { icon: Search, title: "Trouvé sur Google", text: "Optimisé pour apparaître quand on cherche votre métier dans votre ville." },
  { icon: CalendarCheck, title: "Réservations & commandes", text: "Table, rendez-vous, click & collect : vos clients passent à l'action." },
  { icon: Globe, title: "Nom de domaine & mise en ligne", text: "On s'occupe de tout le technique, vous n'avez rien à gérer." },
  { icon: PencilLine, title: "Facile à mettre à jour", text: "Changez un horaire, un plat ou un prix en deux minutes." },
];

export function Included() {
  return (
    <section id="inclus" className="scroll-mt-20 bg-ink py-20 text-ink-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="eyebrow text-primary">Ce qui est inclus</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.02] sm:text-5xl">
            Un site qui travaille <span className="font-accent text-highlight">pour vous</span>, même quand vous êtes fermé.
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-foreground/15 bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-ink p-7 transition-colors hover:bg-ink-foreground/5">
              <Icon className="size-7 text-primary" strokeWidth={1.75} />
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
