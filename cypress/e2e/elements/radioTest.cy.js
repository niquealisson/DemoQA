// cypress/e2e/checkBoxTest.cy.js
import RadioPage from '../../support/PageObjects/elementspages/radioPage';

describe('Radio Button Tests', () => {
    const radioPage = new RadioPage();

    beforeEach(() => {
        radioPage.visit();
    });

    it('deve selecionar o botão de opção "Yes"', () => {
        cy.fixture('fixturesElements/radioData').then((data) => {
            radioPage.selectYesRadio();
            radioPage.verifySelection(data.yes); 
        });
    });

    it('deve selecionar o botão de opção "Impressionante"', () => {
        cy.fixture('fixturesElements/radioData').then((data) => {
            radioPage.selectImpressiveRadio();
            radioPage.verifySelection(data.impressive); 
        });
    });

    it('não deve selecionar o botão de opção "Não" porque ele está desabilitado', () => {
        cy.fixture('fixturesElements/radioData').then((data) => {

            cy.get('#noRadio').should('be.disabled');
    

            radioPage.selectNoRadio();
        });
    });
    
});
