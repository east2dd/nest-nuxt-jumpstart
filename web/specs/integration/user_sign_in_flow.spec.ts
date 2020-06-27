describe('Signing in with form.', () => {
  const email: string = 'admin@test.com'
  const password: string = '123123'

  context('login form submission', () => {
    beforeEach(() => {
      cy.visit('/account/login')
    })

    it('should redirect to dashboard on success', () => {
      cy.get('input[name=email]').type(email)
      cy.get('input[name=password]').type(password)
      cy.get('form').submit()

      cy.location('pathname', { timeout: 10000 }).should('equal', '/dashboard')
    })

    context('When email and password does not match', () => {
      it('should display errors on login with invalid email or password', () => {
        cy.get('input[name=email]').type('aaa@bbb.')
        cy.get('input[name=password]').type('111111')
        cy.get('form').submit()

        cy.location('pathname', { timeout: 10000 }).should(
          'equal',
          '/account/login'
        )
        cy.get('.alert-danger').should('be.visible')
      })
    })
  })

  context('visit pages on unauthorized', () => {
    it('redirect to login page on visit /dashboard', () => {
      cy.visit('/dashboard')
      cy.location('pathname').should('equal', '/account/login')
    })
  })
})
