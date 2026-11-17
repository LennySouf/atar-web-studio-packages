import { z } from "zod";

export const ACTIVITIES = [
  "Restaurant / bar",
  "Boulangerie / pâtisserie",
  "Commerce / boutique",
  "Beauté / bien-être",
  "Artisan / BTP",
  "Cabinet / profession libérale",
  "Autre entreprise",
] as const;

export const FORMULES = ["Essentiel", "Vitrine", "Sur mesure", "Je ne sais pas encore"] as const;

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v ? v : null));

export const quoteSchema = z.object({
  name: z.string().trim().min(1, "Indiquez votre nom").max(120),
  company: optionalText(160),
  activity: z.enum(ACTIVITIES, { errorMap: () => ({ message: "Choisissez votre activité" }) }),
  email: z.string().trim().email("Adresse email invalide").max(255),
  phone: optionalText(40),
  formule: z.enum(FORMULES, { errorMap: () => ({ message: "Choisissez une formule" }) }),
  message: optionalText(2000),
});

export type QuoteInput = z.input<typeof quoteSchema>;
