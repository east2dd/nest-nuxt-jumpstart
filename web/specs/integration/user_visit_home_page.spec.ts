describe('As a user, I can visit home page', () => {
  context('When I visit home page', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Then I should see page title', () => {
      cy.title().should('eq', 'dashboard')
    })
  })
})
