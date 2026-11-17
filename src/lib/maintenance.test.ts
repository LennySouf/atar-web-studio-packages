import { describe, expect, it } from "vitest";
import { MAINTENANCE, commitmentLabel } from "./maintenance";

describe("abonnement de maintenance ATAR", () => {
  it("coûte 39 € par mois", () => {
    expect(MAINTENANCE.monthlyPrice).toBe(39);
  });

  it("engage le client 12 mois", () => {
    expect(MAINTENANCE.commitmentMonths).toBe(12);
    expect(commitmentLabel(MAINTENANCE)).toBe("Engagement 12 mois");
  });

  it("inclut le nom de domaine", () => {
    expect(MAINTENANCE.included.some((i) => i.includes("nom de domaine"))).toBe(true);
  });
});
