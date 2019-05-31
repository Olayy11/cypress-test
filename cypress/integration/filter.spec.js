///<reference types="Cypress" />
import * as global from "../static_content/global.js";
import * as filter from "../static_content/filter.js";

context('Marketplace page', () => {
    beforeEach(() => {
      cy.visit('/')
      global.loader()
     .should('not.exist')
    })
    it('Filter is present', () => {
      filter.fasetSidebar()
      .should('be.visible')
    })
    it('Country can be chosen', () => {
      filter.chooseCountry()
      .select('Denmark')
      .should('have.value', 'DK')
      .contains('Denmark')
    })
    it('Technology tag can be chosen in filter', () => {
      filter.sectionTechnology()
      .should('be.visible')
      filter.nameTags()
      contains('Technology')
      filter.nameTags()
      .contains('GIS & GPS').click()
     })
    it('Usey tag can be chosen in filter', () => {
      filter.sectionUse()
      .should('be.visible')
      filter.titleTags()
      .contains('Use')
      filter.nameTag()
      .contains('City Surveillance').click()
    })
    it('Selected tag is shown below search field', () => {
      filter.nameTag()
      .contains('City Surveillance').click()
      filter.tagsSearch()
      .find('.SFSearch__filtertagLabel')
      .contains('City Surveillance')
    })
    it('Clear ALL is shown below search field', () => {
      filter.nameTag()
      .contains('City Surveillance').click()
      filter.tagsSearch()
      .find('.SFSearch__filtertag--clear')
      .contains('Clear all')
    })
})
