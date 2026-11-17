const STEPS = [
  { n: "01", title: "On fait connaissance", text: "Un échange de 20 minutes pour comprendre votre activité, vos clients et vos envies." },
  { n: "02", title: "Je vous montre une maquette", text: "Vous voyez votre futur site avant de valider. On ajuste ensemble jusqu'à ce qu'il vous plaise." },
  { n: "03", title: "Votre site est en ligne", text: "Mise en ligne, nom de domaine, Google : tout est prêt. Vous n'avez plus qu'à partager le lien." },
];

export function Process() {
  return (
    <section id="methode" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 md:py-28">
      <p className="eyebrow text-primary">La méthode</p>
      <h2 className="mt-3 max-w-2xl text-4xl font-extrabold leading-[1.02] sm:text-5xl">
        Simple, rapide, <span className="font-accent">sans jargon.</span>
      </h2>
      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {STEPS.map((s) => (
          <li key={s.n} className="border-t-2 border-foreground pt-6">
            <span className="font-display text-6xl font-extrabold text-primary">{s.n}</span>
            <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
