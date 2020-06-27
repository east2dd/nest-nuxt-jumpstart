describe('As a user, I can visit dashboard page', () => {
  context('When I visit dashboard page without login', () => {
    beforeEach(() => {
      cy.visit('/dashboard')
    })

    it('Then I should see login page', () => {
      cy.location('pathname').should('equal', '/account/login')
    })
  })

  context('When I visit dashboard page with login', () => {
    beforeEach(() => {
      cy.visit('/account/login')
    })

    it('Then I should see dashboard page', () => {
      const email: string = 'verified@test.com'
      const password: string = '123123'

      cy.get('input[name=email]').type(email)
      cy.get('input[name=password]').type(password)
      cy.get('form').submit()

      cy.location('pathname').should('eq', '/dashboard')
      cy.get('.alert-danger').should('not.exist')
    })
  })

  context('And my email address is not verified', () => {
    beforeEach(() => {
      cy.visit('/account/login')
    })

    it('Then I should see email verification required warning', () => {
      const email: string = 'unverified@test.com'
      const password: string = '123123'

      cy.get('input[name=email]').type(email)
      cy.get('input[name=password]').type(password)
      cy.get('form').submit()

      cy.location('pathname').should('eq', '/dashboard')
      cy.get('.alert-danger').should('be.visible')
      cy.get('.alert-danger').contains('Your email address is not verified')

      cy.get('a')
        .contains('Verify Now')
        .click()

      cy.location('pathname').should('eq', '/profile')
    })
  })
})
