import { describe, expect, it } from "vitest";
import { quoteSchema } from "./quote-schema";

const valid = {
  name: "Julie Martin",
  activity: "Restaurant / bar",
  email: "julie@example.com",
  formule: "Vitrine",
};

describe("demande de devis", () => {
  it("accepte une demande avec nom, activité, email et formule", () => {
    expect(quoteSchema.safeParse(valid).success).toBe(true);
  });

  it("refuse une demande sans email valide", () => {
    expect(quoteSchema.safeParse({ ...valid, email: "pas-un-email" }).success).toBe(false);
  });
});
