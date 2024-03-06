/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('tamara moura')
        cy.get('[type="email"]').type('tamaramoura@teste.com')
        cy.get('[type="tel"]').type('51 12345678')
        cy.get('[type="submit"]').click()
        })

    })