import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QA = [
  { q: "Je n'y connais rien en informatique, c'est un problème ?", a: "Pas du tout. Je m'occupe de tout, du nom de domaine à la mise en ligne. Vous validez, c'est tout." },
  { q: "Combien de temps faut-il pour avoir mon site ?", a: "Comptez environ 7 jours pour la formule Essentiel, et 2 à 4 semaines pour les sites plus complets." },
  { q: "Est-ce que je pourrai modifier mon site moi-même ?", a: "Oui, les informations du quotidien (horaires, carte, prix, photos) restent faciles à changer. Je peux aussi le faire pour vous." },
  { q: "Et si je n'ai pas de belles photos ?", a: "On trouve une solution ensemble : sélection d'images adaptées ou conseils simples pour photographier votre lieu et vos produits." },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <p className="eyebrow text-primary">Questions fréquentes</p>
      <h2 className="mt-3 text-4xl font-extrabold leading-[1.02] sm:text-5xl">Vous vous demandez peut-être…</h2>
      <Accordion type="single" collapsible className="mt-10">
        {QA.map((item, i) => (
          <AccordionItem key={i} value={`q${i}`} className="border-foreground/15">
            <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
