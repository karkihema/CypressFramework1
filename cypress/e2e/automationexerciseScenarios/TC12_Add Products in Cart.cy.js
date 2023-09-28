describe('Add Products in Cart', () => {
    it('Should add products in Cart', () => {
     // Visit the automationexercise site
      cy.visit('https://www.automationexercise.com');
      // All products page
      cy.get('#header div ul li').eq(1).should('contain','Products').click();
      cy.get('h2[class=\'title text-center\']').should('contain', 'All Products');
      cy.get('.col-sm-4').should('be.visible');
      cy.get('ul[class=\'nav nav-pills nav-justified\'] li a').eq(0).trigger('mouseover');
      cy.get('a[data-product-id=\'1\']').eq(0).click();
      cy.get('.modal-footer button').click();
      cy.get('ul[class=\'nav nav-pills nav-justified\'] li a').eq(1).trigger('mouseover');
      cy.get('a[data-product-id=\'2\']').eq(0).click();
      cy.get('a u').should('contain','View Cart').click();
      cy.get('#cart_info_table tbody tr:nth-child(1) td:nth-child(2) a').should('contain', 'Blue Top');
      cy.get('#cart_info_table tbody tr:nth-child(2) td:nth-child(2) a').should('contain', 'Men Tshirt');
      cy.get('#cart_info_table tbody tr:nth-child(1) td:nth-child(3) p').should('contain', 'Rs. 500');
      cy.get('#cart_info_table tbody tr:nth-child(2) td:nth-child(3) p').should('contain', 'Rs. 400');
      cy.get('#cart_info_table tbody tr:nth-child(1) td:nth-child(4) button').should('contain', '1');
      cy.get('#cart_info_table tbody tr:nth-child(2) td:nth-child(4) button').should('contain','1');
      cy.get('#cart_info_table tbody tr:nth-child(1) td:nth-child(5) p').should('contain', 'Rs. 500');
      cy.get('#cart_info_table tbody tr:nth-child(2) td:nth-child(5) p').should('contain', 'Rs. 400');
    });
});