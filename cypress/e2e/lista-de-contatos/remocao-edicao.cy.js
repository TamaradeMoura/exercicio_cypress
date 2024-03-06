/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve deletar o contato salvo', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        })


    it('Deve editar um contato salvo', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('daiane borba')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('daianeborba@teste.com')
        cy.get('[type="tel"]').clear() 
        cy.get('[type="tel"]').type('1112345678') 
        cy.get('.alterar').click()
    })
    })