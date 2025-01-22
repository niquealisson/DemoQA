const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const { verifyDownloadTask } = require('cy-verify-downloads');
const fs = require('fs'); // Importando o módulo fs para verificar a existência do arquivo

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/',
    setupNodeEvents(on, config) {
      // Registra a task para fazer o download
      on('task', {
        downloadFile,
        
        // Task para verificar o download
        verifyDownloadTask,

        // Task para verificar a existência de um arquivo
        isFileExist(fileName) {
          // Retorna se o arquivo existe no caminho especificado
          return fs.existsSync(fileName);
        },
      });
    },
    chromeWebSecurity: false,
    downloadsFolder: 'cypress/downloads',
  },
});
