// cypress/support/PageObjects/elementspages/linksPage.js

class LinksPage {
    visit() {
        cy.visit('https://demoqa.com/links'); // URL da página de Links
    }

    checkSimpleLinkAttributes(target, href) {
        cy.get('#simpleLink')
            .should('have.attr', 'target', target)
            .and('have.attr', 'href', href);
    }

    checkDynamicLinkAttributes(target, href) {
        cy.get('#dynamicLink')
            .should('have.attr', 'target', target)
            .and('have.attr', 'href', href);
    }

    clickLink(linkId) {
        cy.get(`#${linkId}`).click();
    }

    VerifyAPIResponse(message) {
        cy.get('#linkResponse').contains(message);
    }
}

export default LinksPage;
