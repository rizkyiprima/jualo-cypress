describe('Login with valid credentials', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.viewport('iphone-6+')
    cy.visit('https://www.jualo.com/?mobile=1')
    cy.get('#signinModalBtn').click();
    cy.get('#loginModal').should('be.visible')
  })

  it('can login with valid credentials', () => {
    cy.get('#submitLoginModal input[name="user[email]"]').type("yufen@jualo.com");
    cy.get('#submitLoginModal input[name="user[password]"]').type("secret123");
    cy.get('#loginBtn').click()
    cy.get('head meta[name="guest"]').should(
      'have.attr',
      'content',
      'false'
    )
  })
})