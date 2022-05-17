/// <reference types="Cypress"/>

beforeEach(() => {
    cy.visit('https://gomarket.com.do/')
})

describe ('Validation home page elements', function(){

    it ('Vaidation header elements', function(){
        cy.get('.site-logo').should('be.visible')
        cy.get('.search-box > .input-group > #keywords').should('be.visible')
        cy.get('.toolbar-item.hidden-on-mobile > :nth-child(1) > div > .text-label').should('be.visible')
        cy.get('.toolbar > .cart > :nth-child(1) > div > .text-label').should('be.visible')
    })

    it ('Validation menu elements', function(){
        cy.get('[data-turbolinks="false"] > .fa').should('be.visible')
        cy.get('.navbar').should('be.visible')
    })

    it('Validation body elements', function(){
        cy.get('.col-12 > img').should('be.visible')
        cy.get('[data-id="1035"] > .block > :nth-child(1) > .col-md-12 > .card > .card-body > .products-carousel > .row > .col-12 > .c-wrap > .owl-stage-outer > .owl-stage').should('be.visible')
        cy.get('[data-id="1030"] > .block > :nth-child(1) > .col-md-12 > .card > .card-body').should('be.visible')
        cy.get('[data-id="1031"] > .block > :nth-child(1) > .col-12 > .card > .card-body').should('be.visible')
        cy.get('[data-id="1032"] > .block > .row > :nth-child(1) > a > img').should('be.visible')
        cy.get('[data-id="1032"] > .block > .row > :nth-child(2) > a > img').should('be.visible')
        cy.get('[data-id="1033"] > .block > :nth-child(1) > .col-md-12 > .card > .card-body > .products-carousel > .row > .col-12').should('be.visible')
        cy.get('[data-id="1036"] > .block > :nth-child(1) > .col-12 > .card > .card-body').should('be.visible')
        cy.get('.col-12 > a > img').should('be.visible')
        cy.get('[data-id="1035"] > .block > :nth-child(1) > .col-md-12 > .card > .card-body > .products-carousel > .row > .col-12').should('be.visible')
    })

    it ('Validation footer elements', function(){
        cy.get('.site-footer').should('be.visible')
        cy.get('.footer-copyright').should('be.visible')
        cy.get('.seals').should('be.visible')
        cy.get('.widget > .row > .col-12').should('be.visible')
        cy.get('.col-4 > .widget').should('be.visible')
        cy.get(':nth-child(2) > .widget').should('be.visible')
        cy.get('.footer-copyright > a > img').should('be.visible')

    })

})