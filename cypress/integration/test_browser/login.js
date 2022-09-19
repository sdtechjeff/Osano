describe('Login', () => {
  context('verify different login actions', () => {
      beforeEach(() => {
        cy.visit('https://accounts.craigslist.org/login?rp=%2Flogin%2Fhome&rt=L')
      })

      it('login through guest account', () => {
        cy.get('#inputEmailHandle').type('test_user@gmail.com')
        // cy.get('#onetime').should('have.text', 'E-mail a login link').click()
        // cy.get('#GuestUserName').should('be.visible')
      })

      it('login through email', () => {
        cy.get('#inputEmailHandle').type('test_user@gmail.com')
        cy.get('#inputPassword').type('test_password')
        cy.get('#login').should('have.text', 'Log in').click()
        // cy.get('#ProfileUserName').should('be.visible')
      })

      it('forgot password', () => {
        cy.get('.accountform-helplink-tiny').should('have.text', 'Forgot password?').click()
      })

      it('create an account', () => {
        cy.get('#emailAddress').type('test_user@gmail.com')
        // cy.get('#create').should('have.text', 'Create account').click()
      })

      it('can log out', () => {
        // todo - imagine steps to log out once user is logged since no real login functionality takes place
      })
    })
  }
)
