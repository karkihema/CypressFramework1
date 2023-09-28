describe('User Login', () => {
    it('Should login a new user', () => {
      // Visit the automationexercise site
      cy.visit('https://www.automationexercise.com');
      // Visit the Login page
      cy.get('#header div ul li').eq(3).click();
      //Enter Login Credentials
      cy.get('input[data-qa=\'login-email\']').type('hema.karki@456.com');
      cy.get('input[data-qa=\'login-password\']').type('Hema@123');
      cy.get('button[data-qa=\'login-button\']').click();
      cy.get('#header div ul li').eq(9).should('contain',' Logged in as Hema');
      cy.get('#header div ul li').eq(4).click();
      cy.get('h2[data-qa=\'account-deleted\'] b').should('contain', 'Account Deleted!');
    });
  });