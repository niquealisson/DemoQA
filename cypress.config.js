const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const { verifyDownloadTask } = require('cy-verify-downloads');
const fs = require('fs');
const cypressSplit = require('cypress-split');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/',
    setupNodeEvents(on, config) {
      // Configura o cypress-split
      cypressSplit(on, config);

      // Adiciona as tasks personalizadas
      on('task', {
        downloadFile,
        verifyDownloadTask,

        // Task para verificar a existência de um arquivo
        isFileExist(fileName) {
          // Retorna se o arquivo existe no caminho especificado
          return fs.existsSync(fileName);
        },
      });

      // Retorna a configuração atualizada
      return config;
    },
    chromeWebSecurity: false,
    downloadsFolder: 'cypress/downloads',
  },
});
