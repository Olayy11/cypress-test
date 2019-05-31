
        // let olka = cy.get('.product__result-header').invoke('text');
        // let olka = cy.get('h2.product__result-header').invoke('text');
        // cy.get('h2.product__result-header').should('contain', 'Stomiprodukter (3)')


        

        // cy.log(`OLKA VARIABLE IS ${olka}`);

        // var vasia = 5;
        // cy.get('.product__list article').should('have.length', vasia)



      //   it('Olka test', () => {
      //         // here you need to add selector witch contain string with needed number
      //     cy.get('.product__result-header')
      //         .invoke('text')
      //         .then((text) => {
      //             // countOfElements[0] will contain number from string
      //             let countOfElements = text.match(/\d+/g).map(Number);
      //             // instead of h4 you need to add selector of counted products on the page
      //             expect('product__list article4').to.have.lengthOf(countOfElements[0])
      //         })
      // })
      //  cy.get('li[aria-selected=false]').find('.awesomplete>ul>li').contains('bio')
      <reference types="Cypress" />

context('Milestone page', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Filter is present', () => {
      cy.get(".facets-sidebar.facet").should('be.visible')
    })
//cy.url().should("include","/Account/login")

})
