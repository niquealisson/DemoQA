import downloadUpload from "../../support/PageObjects/elementspages/downloadUpload";

describe('Teste de Download e Upload ', () => {
    const DownloadUploadPage = new downloadUpload();
    let Upload; // Variável declarada no escopo do describe

    beforeEach(() => {
        DownloadUploadPage.visit(); 
        // Carrega os dados do arquivo JSON
        cy.fixture('fixturesElements/downloadUpload').then((data) => {
            Upload = data;
        });
    });

    it('Deve fazer o upload de um arquivo', () => {
        const filename = Upload.arquivo.split('/').pop();

        DownloadUploadPage.getButtonUpload() 
            .selectFile(Upload.arquivo); 
        
        DownloadUploadPage.getVerificationUpload(filename); 
    });


    it('Deve fazer o Download de um arquivo', () => {
        const filename = Upload.arquivo.split('/').pop();
        DownloadUploadPage.getButtonDownload()
        cy.verifyDownload(filename);
    });
});
