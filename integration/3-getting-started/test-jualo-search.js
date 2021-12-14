/// <reference types="cypress" />


it('jualo test', function(){

    cy.visit('https://jualo.com')
    cy.get('.js-searchbo').type('avanza{enter}')
    
    
})
