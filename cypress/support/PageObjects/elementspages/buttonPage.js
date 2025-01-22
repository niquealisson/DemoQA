class ButtonPage {
    visit() {
        cy.visit('buttons');
    }

    button() {
        return cy.get('#doubleClickBtn').should('be.visible');
    }

    buttonRight() {
        return cy.get('#rightClickBtn').should('be.visible');
    }

    verifimsg(message) {
        cy.get('#doubleClickMessage')
            .should('be.visible')
            .and('have.text', message);
    }

    verifimsgright(message) {
        cy.get('#rightClickMessage')
            .should('be.visible')
            .and('have.text', message);
    }

    buttonDinamic() {
        return cy.get('button.btn.btn-primary').eq(2)
    }

    verifimsgdinamic(message) {
        cy.get('#dynamicClickMessage')
            .should('be.visible')
            .and('have.text', message);
    }

}

export default ButtonPage;
