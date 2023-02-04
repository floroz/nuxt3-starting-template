import BaseButton from "./base-button.vue";

describe("<BaseButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BaseButton).should("have.text", "Click");
  });
});
