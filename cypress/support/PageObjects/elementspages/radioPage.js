class RadioPage {
    visit() {
        cy.visit('/radio-button'); 
    }

    selectYesRadio() {
        cy.get('#yesRadio').click({ force: true });
    }

    selectImpressiveRadio() {
        cy.get('#impressiveRadio').click({ force: true });
    }

    selectNoRadio() {
        cy.get('#noRadio').check({ force: true }); 
    }

    verifySelection(expectedSelection) {
        cy.get('.text-success').should('contain.text', expectedSelection);
    }
}

export default RadioPage;
