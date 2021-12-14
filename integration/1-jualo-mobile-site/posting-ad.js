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
      cy.get('.pasang-iklan-btn').click();
      cy.get('.button-barang-jasa > span > p').click();
      
      cy.get('.input-upload')
      cy.wait(10000)
      cy.get('.milan-input[name="ad[detail_attributes][name]"]').type("test murah meriah cypress desember")
      cy.wait(10000)
      cy.get('#create_ad_one').click();

      cy.get('.ad-categories__name').click();
      cy.get('.main-categories-ad > [data-slug="mobil"]').click();
      cy.get('[data-slug="mobil-bekas-dan-baru"]').click();
      cy.get('[data-value="340"]').click();
      cy.get('.row > :nth-child(2) > label').click();
      cy.get('#attributes_50').select('Accord')
      cy.get('#attributes_933').select('2021')
      cy.get('#attributes_935').select('Manual')
      cy.get('#attributes_939').type('1400')
      cy.get('#attributes_943').select('0-5000')
      cy.get('#attributes_947').select('Bensin')
      cy.get('#attributes_949').select('Hitam')
      cy.get('#ad_detail_attributes_description').type('murah meriah jakarta barat afsfhshfkahdsjkfhdsjkfhsjkagh')
      cy.get('#ad_price').type(100000)
      cy.get('.form-ad__bid > .field-content > :nth-child(1) > :nth-child(3)').click();
      cy.get('#state_id').select('1');
      cy.get('#city_id').select('630');
      cy.get('#create_ad_two').click();
      cy.get('.agreement-ad-checkbox > :nth-child(2)').click();
      cy.get('#submit_button').click();
    
    })
  })