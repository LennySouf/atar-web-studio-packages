export type Offer = {
  id: "essentiel" | "vitrine" | "sur-mesure";
  name: string;
  priceFrom: number;
  tagline: string;
  features: string[];
  featured?: boolean;
};

export const OFFERS: Offer[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    priceFrom: 320,
    tagline: "Une page claire pour être trouvé et contacté.",
    features: [
      "Site une page, adapté au téléphone",
      "Horaires, adresse et plan Google Maps",
      "Bouton d'appel et formulaire de contact",
      "Mise en ligne sous 7 jours",
    ],
  },
  {
    id: "vitrine",
    name: "Vitrine",
    priceFrom: 850,
    tagline: "Le site complet qui donne envie de venir.",
    features: [
      "Jusqu'à 5 pages sur mesure",
      "Menu, carte ou prestations faciles à modifier",
      "Galerie photos et avis clients",
      "Bien placé sur Google dans votre ville",
    ],
    featured: true,
  },
  {
    id: "sur-mesure",
    name: "Sur mesure",
    priceFrom: 1590,
    tagline: "Réservations, commandes ou boutique en ligne.",
    features: [
      "Tout ce qui est dans Vitrine",
      "Réservation de table ou prise de rendez-vous",
      "Commande à emporter ou boutique en ligne",
      "Accompagnement et formation incluse",
    ],
  },
];

export function formatPrice(value: number): string {
  return `${new Intl.NumberFormat("fr-FR").format(value).replace(/\u202f|\u00a0/g, " ")} €`;
}
