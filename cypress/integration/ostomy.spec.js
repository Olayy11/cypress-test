/// <reference types="Cypress" />

context('Ostomy page', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    // it('Banner with link is present', () => {
    //   cy.get(".c-banner.c-banner--gradient-1").contains("Introducing")
    //   cy.get(".c-banner__link").contains("Expore now")
    // })
    // it('Filter is present', () => {
    //   cy.get("form.facet__list").should('be.visible')
    // })
    // it('Filter checkbox can be ticked', () => {
    //   cy.get('label[for="AllowSamplingFacet:True"]').click()
    //   cy.get('.facet__list__deselect__wrapper .facet__list__deselect').should('be.visible')
    //   cy.get('.facet__list__deselect__wrapper').contains('Remove filters')
    // })
    //it('Label Free sample is present', () => {
        // expect(cy.get('.product__list').find('.product__spot--blue'))
       // cy.get(".product__spot--blue").should('have.css', 'background', '#00b0ca')
      it('Olka test', () => {
                // here you need to add selector witch contain string with needed number
            cy.get('.product__result')
                .invoke('text')
                .then((text) => {
                    // countOfElements[0] will contain number from string
                    let countOfElements = text.match(/\d+/g).map(Number);
                    // instead of h4 you need to add selector of counted products on the page
                    expect('article[itemscope="itemscope"]').to.have.lengthOf(countOfElements[1])
                })
        })
  

     // })





   

})