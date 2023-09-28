describe('Verify Product Quantity', () => {
    it('Should verify product quantity', () => {
     // Visit the automationexercise site
      cy.visit('https://www.automationexercise.com');
      cy.get('ul[class=\'nav nav-pills nav-justified\'] li a').eq(0).click();
      cy.get('img[alt=\'ecommerce website products\']').should('be.visible');
      cy.get('.product-information h2').should('contain', 'Blue Top');
      cy.get('.product-information p').should('contain', 'Category: Women > Tops');
      cy.get('#quantity').clear().type('4');
      cy.get('button[class=\'btn btn-default cart\']').click();
      cy.get('a u').should('contain','View Cart').click();
      cy.get('#cart_info_table tbody tr:nth-child(1) td:nth-child(2) a').should('contain', 'Blue Top');
      cy.get('#cart_info_table tbody tr:nth-child(1) td:nth-child(3) p').should('contain', 'Rs. 500');
      cy.get('#cart_info_table tbody tr:nth-child(1) td:nth-child(4) button').should('contain', '4');
      cy.get('#cart_info_table tbody tr:nth-child(1) td:nth-child(5) p').should('contain', 'Rs. 2000');
    });
});