describe('Search Product', () => {
    it('Should search Product', () => {
      // Visit the automationexercise site
      cy.visit('https://www.automationexercise.com');
      // All products page
      cy.get('#header div ul li').eq(1).should('contain','Products').click();
      cy.get('h2[class=\'title text-center\']').should('contain', 'All Products');
      cy.get('.col-sm-4').should('be.visible');
      cy.get('input#search_product').type('Winter Top');
      cy.get('button#submit_search').click();
      cy.get('.product-overlay div p').should('contain', 'Winter Top');
    });
  });
  