export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-6xl font-extrabold tracking-tighter sm:text-8xl">
            ATAR<span className="text-primary">.</span>
          </p>
          <p className="mt-2 text-ink-muted">Des sites qui donnent envie de pousser la porte.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-ink-muted md:items-end">
          <a href="#devis" className="font-semibold text-ink-foreground hover:text-primary">Demander un devis →</a>
          <span>© {new Date().getFullYear()} ATAR · Création de sites internet</span>
        </div>
      </div>
    </footer>
  );
}
