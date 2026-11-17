import { describe, expect, it } from "vitest";
import { OFFERS } from "./offers";

describe("formules ATAR", () => {
  it("propose exactement trois formules", () => {
    expect(OFFERS).toHaveLength(3);
  });

  it("affiche les prix « à partir de » 320 €, 850 € et 1 590 €", () => {
    expect(OFFERS.map((o) => o.priceFrom)).toEqual([320, 850, 1590]);
  });
});
