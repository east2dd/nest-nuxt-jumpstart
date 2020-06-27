describe('User signup flow', () => {
  interface UserData {
    firstName: string
    lastName: string
    email: string
    password: string
    passwordConfirmation: string
  }

  const submitSignUpForm = (cy: Cypress.cy & EventEmitter, data: UserData) => {
    cy.get('input[name=first-name]').type(data.firstName)
    cy.get('input[name=last-name]').type(data.lastName)
    cy.get('input[name=email]').type(data.email)
    cy.get('input[name=password]').type(data.password)
    cy.get('input[name=password_confirmation]').type(data.passwordConfirmation)
    cy.get('form').submit()
  }

  beforeEach(() => {
    cy.visit('/')
  })

  context('When I register a new user', () => {
    beforeEach(() => {
      cy.visit('/account/register')
      cy.contains('h5', 'Register')
    })

    it('Then I should see dashboard on success', () => {
      const user: UserData = {
        firstName: 'new',
        lastName: 'user',
        email: 'newuser@test.com',
        password: '123123',
        passwordConfirmation: '123123'
      }

      submitSignUpForm(cy, user)

      cy.location('pathname', { timeout: 10000 }).should('equal', '/dashboard')
    })

    it('Then I should see warning alert with same email address', () => {
      const user: UserData = {
        firstName: 'new',
        lastName: 'user',
        email: 'newuser@test.com',
        password: '123123',
        passwordConfirmation: '123123'
      }

      submitSignUpForm(cy, user)

      cy.location('pathname').should('equal', '/account/register')
      cy.get('.alert').should('be.visible')
      cy.get('.alert').contains(
        'The email address is already in use by another account'
      )
    })

    it('Then I should see warning alert again with weak password', () => {
      const user: UserData = {
        firstName: 'new',
        lastName: 'user1',
        email: 'newuser1@test.com',
        password: '123',
        passwordConfirmation: '123'
      }

      submitSignUpForm(cy, user)

      cy.location('pathname').should('equal', '/account/register')
      cy.get('.alert').should('be.visible')
      cy.get('.alert').contains('Password should be at least 6 characters')
    })

    it('Then I should see warning alert with invalid email address', () => {
      const user: UserData = {
        firstName: 'new',
        lastName: 'user2',
        email: 'newuser2',
        password: '123123',
        passwordConfirmation: '123123'
      }

      submitSignUpForm(cy, user)

      cy.location('pathname').should('equal', '/account/register')
      cy.get('.alert').should('be.visible')
      cy.get('.alert').contains('The email address is badly formatted')
    })
  })
})
