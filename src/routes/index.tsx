import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Examples } from "@/components/site/Examples";
import { Included } from "@/components/site/Included";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { Maintenance } from "@/components/site/Maintenance";
import { Faq } from "@/components/site/Faq";
import { QuoteForm, type QuotePrefill } from "@/components/site/QuoteForm";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "ATAR — Création de sites pour commerçants, restaurants et entreprises";
const DESCRIPTION =
  "ATAR crée des sites internet beaux et efficaces pour restaurants, commerçants, artisans et entreprises. Découvrez des exemples et demandez votre devis, dès 320 €.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [prefill, setPrefill] = useState<QuotePrefill | null>(null);

  const goToForm = (next: Omit<QuotePrefill, "nonce">) => {
    setPrefill({ ...next, nonce: Date.now() });
    requestAnimationFrame(() => document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Examples onChoose={(ex) => goToForm({ formule: ex.formule, activity: ex.activity })} />
        <Included />
        <Process />
        <Pricing onChoose={(o) => goToForm({ formule: o.name })} />
        <Maintenance onChoose={() => goToForm({})} />
        <Faq />
        <QuoteForm prefill={prefill} />
      </main>
      <SiteFooter />
    </div>
  );
}
