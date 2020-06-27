describe('As a user, I can create a new apartment', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    const email: string = 'verified@test.com'
    const password: string = '123123'

    cy.visit('/account/login')

    cy.get('input[name=email]').type(email)
    cy.get('input[name=password]').type(password)
    cy.get('form').submit()

    cy.location('pathname').should('eq', '/dashboard')

    cy.visit('/apartments')
  })

  context('When I click new apartment button on apartments list page', () => {
    it('Then I should see new apartment page', () => {
      cy.get('button.btn')
        .contains('New apartment')
        .click()

      cy.location('pathname').should('eq', '/apartments/new')
    })
  })
})
