import ButtonPage from '../../support/PageObjects/elementspages/buttonPage';

describe('Tests Buttons', () => {
    const buttonPage = new ButtonPage();
    let buttonData;

    beforeEach(() => {
        // Carrega os dados do arquivo JSON
        cy.fixture('fixturesElements/buttonData').then((data) => {
            buttonData = data;
        });

        // Visita a página
        buttonPage.visit();
    });

    it('clicar duas vezes no botão', () => {
        // Realiza o duplo clique
        buttonPage.button().dblclick();

        // Verifica a mensagem
        buttonPage.verifimsg(buttonData.msg);
    });

    it('clicar com o botão direito', () => {
        // Realiza o clique com o botão direito do mouse
        buttonPage.buttonRight().rightclick();

        buttonPage.verifimsgright(buttonData.msgRight);
    });


    it('clicar no botão dinamico', () => {
        // Realiza o clique com o botão direito do mouse
        buttonPage.buttonDinamic().click();

        buttonPage.verifimsgdinamic(buttonData.msgdinamic);
    });
});
