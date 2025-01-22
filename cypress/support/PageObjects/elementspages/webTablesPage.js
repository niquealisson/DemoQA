class WebPage {
    visit() {
        cy.visit('/webtables');
    }

    clickAddNewRecordButton() {
        cy.get('#addNewRecordButton').click();
    }

    fillForm(firstName, lastName, userEmail, age, salary, department) {
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#userEmail').type(userEmail);
        cy.get('#age').type(age);
        cy.get('#salary').type(salary);
        cy.get('#department').type(department);
    }

    submitForm() {
        cy.get('#submit').click();
    }

    checkRecordExists(firstName, lastName, userEmail) {
        cy.get('.rt-tbody .rt-td').contains(firstName).should('exist');
        cy.get('.rt-tbody .rt-td').contains(lastName).should('exist');
        cy.get('.rt-tbody .rt-td').contains(userEmail).should('exist');
    }

    deleteRecordByEmail(userEmail) {
        cy.get('.rt-tbody .rt-tr')
            .contains(userEmail)
            .parents('.rt-tr')
            .find('span[id^="delete-record-"]')
            .click();
    }

    checkRecordDeleted(firstName, lastName, userEmail) {
        cy.get('.rt-tbody .rt-td').contains(firstName).should('not.exist');
        cy.get('.rt-tbody .rt-td').contains(lastName).should('not.exist');
        cy.get('.rt-tbody .rt-td').contains(userEmail).should('not.exist');
    }
}

export default WebPage;