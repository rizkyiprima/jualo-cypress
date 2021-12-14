/// <reference types="cypress" />


it('google test', function(){

    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Jualo{enter}')
    
    cy.contains('Gambar').click();
    
})


it.only('login test', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click(); 
    
})
