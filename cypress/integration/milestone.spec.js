///<reference types="Cypress" />

context('Marketplace page', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('.loader__cube').should('have.length', 0)
    })
    it('Filter is present', () => {
      cy.get(".facets-sidebar.facet").should('be.visible')
    })
    it('Title with correct text is present', () => {
      cy.get(".SFSearch__header").contains('Find applications, hardware or services')
      })
    it('Subtitle is present', () => {
          cy.get(".SFSearch__subheader").contains('Marketplace includes applications and hardware')
    })
    it('Search field with submit/reset is present', () => {
      cy.get('input[name=search_term]').should('be.visible')
      cy.get('button[type=reset]').should('be.visible')
      cy.get('button[type=submit]').should('be.visible')
    })
    it('Items are shown in search page', () => {
      cy.get('.solutionFinder__results').should('be.visible')
      cy.get('.solutionResultItem').contains('Learn more')
    })
    it('Sort by is present', () => {
      cy.get('#sort-by').should('be.visible')
      cy.get('label[for=sort-by]').contains('Sort by')
    })
    it('Search result count is present', () => {
        cy.get('.SFSearch__result-count').contains('matches found')
    });
    it('Pagination is present', () => {
       cy.get('.pagination').should('be.visible')
       cy.get('input[type=number]').should('be.visible')
    });
    it('Each item consists Logo/photo/title/keywords/certification', () => {
     cy.get('.solutionResultItem__logoContainer').find('.solutionResultItem__logo').should('be.visible')
     cy.get('.solutionResultItem__header').find('.solutionResultItem__headline').should('be.visible')
     cy.get('.solutionResultItem__body').find('.keywords>li').should('be.visible')
     cy.get('.certification').find('.ms-icon.is-small').should('be.visible')
     cy.get('.certification').find('.certification__text').contains('Milestone')
   });
    it.only('User be able to type text to search filed and see search results for printed text under search', () => {
       cy.get('.SFSearch__searchInput').type('acc').should('have.value', 'acc')
       cy.get('.awesomplete > ul > li').should('be.visible').contains(/acc/i)

   
    });

})

