import TextBoxPage from '../../support/PageObjects/elementspages/textBoxPage';

describe('Tests Elements', () => {
    const textBoxPage = new TextBoxPage();
    let testData;

    beforeEach(() => {
        cy.fixture('fixturesElements/textBoxData').then((data) => {
            testData = data;
        });

        textBoxPage.visit();
    });

    it('deve preencher o formulário e enviar', () => {
        textBoxPage.fillFullName(testData.fullName);
        textBoxPage.fillEmail(testData.email);
        textBoxPage.fillCurrentAddress(testData.currentAddress);
        textBoxPage.fillPermanentAddress(testData.permanentAddress);
        textBoxPage.submitForm();

        textBoxPage.verifyOutput(
            testData.fullName,
            testData.email,
            testData.currentAddress,
            testData.permanentAddress
        );
    });
});
