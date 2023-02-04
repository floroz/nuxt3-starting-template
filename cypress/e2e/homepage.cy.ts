describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.get("a").should("have.text", "Go To Tailwind");
  });
});
