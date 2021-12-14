/// <reference types="cypress" />

it('jualo signup', function(){
    cy.viewport(1440,900)
    cy.visit('https://www.jualo.com/')
    
    cy.get('#dropdown').trigger('onmouseover').should('be.visible')
    cy.wait(4000)

    cy.get('#dropdown ,.account-not-signin main-header__account active').trigger('onmouseover').should('be.visible')
    cy.wait(4000)
    cy.get('.main-header__account').should('be.visible')
    cy.get('.account-dropdown')
   

    


    // cy.get('#signupModal').should('be.visible')
    // cy.contains('.account-not-signin main-header__account, account-dropdown')
    // cy.get('.account-dropdown__sign-in').click();
    // cy.get('.account-dropdown').find('.account-dropdown__sign-in').should('be.visible')
    // cy.get('button button--orange').click();



    // cy.get('#signupModal .account-dropdown__sign-in').click();
    /*
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
    */

     
})
