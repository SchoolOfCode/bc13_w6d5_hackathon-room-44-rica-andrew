describe("visit URL", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("add new todo", () => {
  it("type task", () => {
    cy.get(':nth-child(1) > input')
      .click()
      .type('to be deleted')
      .should('have.value', 'to be deleted')
  });
  it('add date', () => {
    cy.get(':nth-child(2) > input')
      .not('[type="text"]')
      .click()
      .type('2023-11-05')
      .should('have.value', '2023-11-05')
  });
  it('click create', () => {
    cy.get('#new-todo > button')
      .click()
  })
  it('added to DOM', () => {
    cy.get('#todos')
      .should('contain.text','to be deleted')
  })
});

describe("add second todo", () => {
  it("type task", () => {
    cy.get(':nth-child(1) > input')
      .click()
      .type('new todo item')
      .should('have.value', 'new todo item')
  });
  it('add date', () => {
    cy.get(':nth-child(2) > input')
      .not('[type="text"]')
      .click()
      .type('2023-11-05')
      .should('have.value', '2023-11-05')
  });
  it('click create', () => {
    cy.get('#new-todo > button')
      .click()
  })
  it('added to DOM', () => {
    cy.get('#todos')
      .should('contain.text','new todo item')
  })
});

describe('deletes item', () => {
  it('click delete', () => {
    cy.get(':nth-child(5) > button')
    .wait(500)
    .click()
  });
});

describe('reload page', () => {
  it('reload', () => {
    cy.reload();
    cy.get('#todos')
      .should('contain.text','new todo item')
  });
});
/*
describe("add new todo using date window", () => {
  it("type task", () => {
    cy.get(':nth-child(1) > input')
      .click()
      .type('Made with the date window')
      .should('have.value', 'Made with the date window')
  });
  it('add date', () => {
    cy.get(':nth-child(2) > input')
  });
  it('click create', () => {
    cy.get('#new-todo > button')
      .click()
  })
  it('added to DOM', () => {
    cy.get('#todos')
      .should('contain.text','Made with the date window')
  })
});
*/
