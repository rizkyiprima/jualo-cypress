it('jualo login fb', function(){

  

    cy.viewport('iphone-6+')
    cy.visit('https://www.jualo.com/?mobile=1')
    cy.get('#signinModalBtn').click();
    cy.get('#loginModal > .padding_content > .full_height > .social_block > .soc_buttons > .facebook_login > #fbpopup1 > span').click();
   

     
})