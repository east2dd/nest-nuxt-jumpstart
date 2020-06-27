describe('As a user, I can visit view apartment page', () => {
  const email = 'verified@test.com'
  const password = '123123'
  const apartmentId = 1

  beforeEach(() => {
    cy.visit('/account/login')
    cy.get('input[name=email]').type(email)
    cy.get('input[name=password]').type(password)
    cy.get('form').submit()

    cy.location('pathname', { timeout: 10000 }).should('equal', '/dashboard')
    cy.visit(`/apartments/${apartmentId}`)
  })

  context('When I visit view apartment page', () => {
    it('Then I should see view apartment title', () => {
      cy.get('h2')
        .contains('Apartment')
        .should('be.visible')
    })

    it('Then I should see buttons', () => {
      cy.get('button')
        .contains('Back')
        .should('be.visible')
    })
  })
})
