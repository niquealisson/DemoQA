
class CheckBoxPage {
    visit() {
        cy.visit('/checkbox'); 
    }

    expandTree() {
        cy.get('button.rct-collapse.rct-collapse-btn').click();
        cy.get('button.rct-option.rct-option-expand-all').click();
    }

    checkHomeBox() {
        cy.get('#tree-node-home').check({ force: true });
    }

    verifySelections() {
        cy.get('#result')
            .should('contain.text', 'You have selected :') 
            .and('contain.text', 'home')
            .and('contain.text', 'desktop')
            .and('contain.text', 'notes')
            .and('contain.text', 'commands')
            .and('contain.text', 'documents')
            .and('contain.text', 'workspace')
            .and('contain.text', 'react')
            .and('contain.text', 'angular')
            .and('contain.text', 'veu')
            .and('contain.text', 'office')
            .and('contain.text', 'public')
            .and('contain.text', 'private')
            .and('contain.text', 'classified')
            .and('contain.text', 'general')
            .and('contain.text', 'downloads')
            .and('contain.text', 'wordFile')
            .and('contain.text', 'excelFile');
    }
}

export default CheckBoxPage;
