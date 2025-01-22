class downloadUpload {
    visit() {
        cy.visit('/upload-download'); 
    }

    getButtonUpload() {
        return cy.get('#uploadFile'); // Retorna o elemento
    }

    getButtonDownload() {
        cy.get('#downloadButton', { timeout: 10000 }).should('be.visible').click();
    }

    getVerificationUpload(filename) {
        // Verifica se o nome do arquivo está visível
        cy.get('#uploadedFilePath').should('contain', filename);
    }
}

export default downloadUpload;
