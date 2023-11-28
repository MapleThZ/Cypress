describe("Stack Home Page", () => {
  it("goto localhost", () => {
    cy.visit("http://localhost:3000/");
    cy.screenshot();

    // cy.get('a[href*="test-page"]', { timeout: 10000 }).click();
    cy.get("#testPage").click();
    cy.screenshot();

    cy.get("#insertName").type("fake@email.com {enter}");
    cy.screenshot();
    cy.get("#insertName").type("fake1@email.com {enter}");
    cy.screenshot();
    cy.get("#insertName").type("fake2@email.com {enter}");
    cy.screenshot();
    cy.get("#insertName").type("fake3@email.com {enter}");
    cy.screenshot();

    cy.get("#insertName").type("fake4@email.com");
    cy.get("#btnSave").click();
    cy.screenshot();
    cy.get("#insertName").type("fake5@email.com");
    cy.get("#btnSave").click();
    cy.screenshot();
    cy.get("#insertName").type("fake6@email.com");
    cy.get("#btnSave").click();
    cy.screenshot();
    cy.get("#insertName").type("fake7@email.com");
    cy.get("#btnSave").click();
    cy.screenshot();

    // .should("have.value", "fake@email.com");
    // cy.get("#APjFqb").type("{enter}");
  });

  // it("goto test page", () => {
  //   cy.get(".testPage").click();
  // });

  // it("insert name", () => {
  //   cy.get(".insertName").type("fake@email.com {enter}");
  //   cy.get(".insertName").type("fake1@email.com {enter}");
  //   cy.get(".insertName").type("fake2@email.com {enter}");
  //   cy.get(".insertName").type("fake3@email.com {enter}");
  // });
});
