import webTablesPage from '../../support/PageObjects/elementspages/webTablesPage';

describe('Web Tables', () => {
    const webPage = new webTablesPage();
    let testData;

    before(() => {
        cy.fixture('fixturesElements/testData').then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        webPage.visit();
    });

    it('Deve preencher e submeter o formulário com sucesso', () => {
        webPage.clickAddNewRecordButton();
        webPage.fillForm(testData.firstName, testData.lastName, testData.userEmail, testData.age, testData.salary, testData.department);
        webPage.submitForm();
        webPage.checkRecordExists(testData.firstName, testData.lastName, testData.userEmail);
        webPage.deleteRecordByEmail(testData.userEmail);
        webPage.checkRecordDeleted(testData.firstName, testData.lastName, testData.userEmail);
    });
});
