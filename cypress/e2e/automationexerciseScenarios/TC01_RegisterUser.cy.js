describe('User Registration', () => {
    it('Should register a new user', () => {
    // Visit the automationexercise site
     cy.visit('https://www.automationexercise.com');
  
      // go to signup page
      cy.get('#header div ul li').eq(3).click();
      cy.get('input[data-qa=\'signup-name\']').type('Hema');
      cy.get('input[data-qa=\'signup-email\']').type('hema.karki@1012.com');
  
      cy.get('button[data-qa=\'signup-button\']').click();
  
      cy.get('.login-form').should('contain', 'Enter Account Information');
      
      cy.get('#id_gender2').click();

      cy.get('#name').should('value', 'Hema');

      cy.get('input[name=\'email_address\']').should('value', 'hema.karki@1012.com');

      cy.get('input[type=\'password\']').type('Hema@123');

      cy.get('input[data-qa=\'first_name\']').type('Hema');

      cy.get('input[data-qa=\'last_name\']').type('Karki');

      cy.get('input[data-qa=\'address\']').type('SydneyCBD');

      cy.get('select[data-qa="country"]').select('Australia').should('have.value','Australia');

      cy.get('input[data-qa=\'state\']').type('NSW');

      cy.get('input[data-qa=\'city\']').type('Sydney');

      cy.get('input[data-qa=\'zipcode\']').type('2000');

      cy.get('input[data-qa=\'mobile_number\']').type('0400000000');

      cy.get('button[data-qa=\'create-account\']').click();

      cy.get('h2[data-qa=\'account-created\'] b ').should('contain', 'Account Created');

      cy.get('a[data-qa=\'continue-button\']').click();

      cy.get('#header div ul li').eq(9).should('contain',' Logged in as Hema');

      cy.get('#header div ul li').eq(4).click();
      cy.get('h2[data-qa=\'account-deleted\'] b').should('contain', 'Account Deleted!');

    });
  });