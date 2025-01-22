import LinksPage from '../../support/PageObjects/elementspages/linksPage';

describe('Tests Links', () => {
    const linksPage = new LinksPage();

    beforeEach(() => {
        linksPage.visit();
    });

    it('Deve clicar nos dois primeiros links e verificar as novas abas', () => {
        cy.fixture('fixturesElements/linksData').then((linksData) => {
            linksPage.checkSimpleLinkAttributes(linksData.simpleLink.target, linksData.simpleLink.href);
            linksPage.checkDynamicLinkAttributes(linksData.dynamicLink.target, linksData.dynamicLink.href);
        });
    });

    it.only('Deve clicar nos links que disparam chamadas de API e verificar as respostas', () => {
        cy.fixture('fixturesElements/linksData').then((linksData) => {
            const links = ['created', 'no-content', 'moved', 'bad-request', 'unauthorized', 'forbidden', 'invalid-url'];
    
            // Itera sobre cada link e clica, verificando a resposta
            links.forEach((link) => {
                linksPage.clickLink(link); // Clica no link
                //linksPage.VerifyAPIResponse(messages);
            });
        });
    });
});
