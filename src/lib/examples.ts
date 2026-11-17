import restaurant from "@/assets/exemple-restaurant.jpg";
import boulangerie from "@/assets/exemple-boulangerie.jpg";
import coiffure from "@/assets/exemple-coiffure.jpg";
import artisan from "@/assets/exemple-artisan.jpg";
import boutique from "@/assets/exemple-boutique.jpg";
import cabinet from "@/assets/exemple-cabinet.jpg";

export type ExampleCategory = "food" | "commerce" | "entreprise";

export type Example = {
  slug: string;
  name: string;
  trade: string;
  category: ExampleCategory;
  image: string;
  pitch: string;
  features: string[];
  formule: "Essentiel" | "Vitrine" | "Sur mesure";
  activity: string;
};

export const CATEGORIES: { id: ExampleCategory | "all"; label: string }[] = [
  { id: "all", label: "Tout voir" },
  { id: "food", label: "Restaurants & food" },
  { id: "commerce", label: "Commerces" },
  { id: "entreprise", label: "Entreprises & artisans" },
];

export const EXAMPLES: Example[] = [
  {
    slug: "le-comptoir",
    name: "Le Comptoir",
    trade: "Bistrot de quartier",
    category: "food",
    image: restaurant,
    pitch: "Une ambiance chaleureuse qui donne faim avant même d'arriver, avec la carte du jour et la réservation en un clic.",
    features: ["Carte modifiable", "Réservation de table", "Photos des plats"],
    formule: "Sur mesure",
    activity: "Restaurant / bar",
  },
  {
    slug: "maison-ble",
    name: "Maison Blé",
    trade: "Boulangerie artisanale",
    category: "food",
    image: boulangerie,
    pitch: "Les produits du jour mis en valeur, les horaires toujours à jour et la commande à retirer en boutique.",
    features: ["Commande à emporter", "Produits & prix", "Horaires"],
    formule: "Sur mesure",
    activity: "Boulangerie / pâtisserie",
  },
  {
    slug: "atelier-meche",
    name: "Atelier Mèche",
    trade: "Salon de coiffure",
    category: "commerce",
    image: coiffure,
    pitch: "Un univers chic, la liste des prestations avec prix et un bouton de rendez-vous visible partout.",
    features: ["Prise de rendez-vous", "Tarifs clairs", "Galerie"],
    formule: "Vitrine",
    activity: "Beauté / bien-être",
  },
  {
    slug: "lin-et-lune",
    name: "Lin & Lune",
    trade: "Boutique de vêtements",
    category: "commerce",
    image: boutique,
    pitch: "Une vitrine élégante ouverte 24h/24 pour présenter la collection et vendre aussi en ligne.",
    features: ["Boutique en ligne", "Collections", "Livraison"],
    formule: "Sur mesure",
    activity: "Commerce / boutique",
  },
  {
    slug: "bois-et-bati",
    name: "Bois & Bâti",
    trade: "Menuisier – rénovation",
    category: "entreprise",
    image: artisan,
    pitch: "Des réalisations qui rassurent, des avis clients et une demande de devis simple pour remplir l'agenda.",
    features: ["Demande de devis", "Réalisations", "Avis clients"],
    formule: "Vitrine",
    activity: "Artisan / BTP",
  },
  {
    slug: "cabinet-delorme",
    name: "Cabinet Delorme",
    trade: "Expert-comptable",
    category: "entreprise",
    image: cabinet,
    pitch: "Une image sérieuse et moderne, des services bien expliqués et une prise de rendez-vous directe.",
    features: ["Services détaillés", "Équipe", "Rendez-vous"],
    formule: "Vitrine",
    activity: "Cabinet / profession libérale",
  },
];
