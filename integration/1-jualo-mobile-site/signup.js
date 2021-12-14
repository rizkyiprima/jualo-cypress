/// <reference types="cypress" />


it('jualo signup', function(){

  

    cy.viewport('iphone-6+')
    cy.visit('https://www.jualo.com/?mobile=1')
    cy.get('#signinModalBtn').click();
    cy.get('#signupModalBtn2').click();
    cy.get('#user_name').type('rizkyi')
    cy.get('#user_phone').type('081804798788')
    cy.get('#user_type_id').select('1')
    cy.get('#submitRegistrationModal .jualo_input[name="user[email]"]').type("jualoantis@mailinator.com")
    cy.get('#submitRegistrationModal .jualo_input[name="user[password]"]').type("rizkyi123")
    cy.get('#submitRegistrationModal .jualo_input[name="user[password_confirmation]"]').type("rizkyi123")
    
    cy.get('iframe')
            .first()
            .its('0.contentDocument.body')
            .should('not.be.undefined')
            .and('not.be.empty')
            .then(cy.wrap)
            .find('#recaptcha-anchor')
            .should('be.visible')
            .click();

    cy.wait(10000);
    cy.get('.jualo_checkbox[name="term_check"]').type('checkbox')
    cy.get('#registrationBtn').click({force: true});


     
})
