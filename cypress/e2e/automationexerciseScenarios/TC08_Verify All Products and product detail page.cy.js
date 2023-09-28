describe('Verify All products and products detail page', () => {
    it('Should see all products and products detail page', () => {
      // Visit the automationexercise site
      cy.visit('https://www.automationexercise.com');
      // All products page
      cy.get('#header div ul li').eq(1).should('contain','Products').click();
      cy.get('h2[class=\'title text-center\']').should('contain', 'All Products');
      cy.get('.col-sm-4').should('be.visible');
      cy.get('ul[class=\'nav nav-pills nav-justified\'] li a').eq(0).click();
      cy.get('img[alt=\'ecommerce website products\']').should('be.visible');
      cy.get('.product-information h2').should('contain', 'Blue Top');
      cy.get('.product-information p').should('contain', 'Category: Women > Tops');
      cy.get('span').should('contain', 'Rs. 500');
      cy.get('p b').should('contain', 'Availability');
      cy.get('p b').should('contain', 'Condition');
      cy.get('p b').should('contain', 'Brand');
    });
  });