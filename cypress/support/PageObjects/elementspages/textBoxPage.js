class TextBoxPage {
    visit() {
        cy.visit('text-box');
    }

    fillFullName(name) {
        cy.get('#userName').type(name);
    }

    fillEmail(email) {
        cy.get('#userEmail').type(email);
    }

    fillCurrentAddress(address) {
        cy.get('#currentAddress').type(address);
    }

    fillPermanentAddress(address) {
        cy.get('#permanentAddress').type(address);
    }

    submitForm() {
        cy.get('#submit').click();
    }

    verifyOutput(name, email, currentAddress, permanentAddress) {
        cy.get('#output').should('be.visible').and('contain', name);
        cy.get('#output').should('contain', email);
        cy.get('#output').should('contain', currentAddress);
        cy.get('#output').should('contain', permanentAddress);
    }
}

export default TextBoxPage;
