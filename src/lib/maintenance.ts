export type MaintenancePlan = {
  name: string;
  monthlyPrice: number;
  commitmentMonths: number;
  noticeMonths: number;
  included: string[];
  notIncluded: string[];
};

export const MAINTENANCE: MaintenancePlan = {
  name: "Sérénité",
  monthlyPrice: 39,
  commitmentMonths: 12,
  noticeMonths: 1,
  included: [
    "Hébergement et mise en ligne de votre site",
    "Votre nom de domaine (.fr ou .com), renouvelé chaque année",
    "Petites modifications chaque mois : horaires, carte, prix, photos",
    "Sauvegardes, sécurité et mises à jour",
    "Une personne qui répond, sous 48 h ouvrées",
  ],
  notIncluded: [
    "Nouvelles pages ou refonte du site : sur devis",
    "Séance photo professionnelle",
    "Adresse email pro (contact@votresite.fr)",
  ],
};

export function commitmentLabel(plan: MaintenancePlan): string {
  return plan.commitmentMonths > 0 ? `Engagement ${plan.commitmentMonths} mois` : "Sans engagement";
}
