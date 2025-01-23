const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const { verifyDownloadTask } = require("cy-verify-downloads");
const fs = require("fs");
const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  projectId: "k4uzi7",
  e2e: {
    baseUrl: "https://demoqa.com/",
    setupNodeEvents(on, config) {
      // Configuração do cypress-split
      cypressSplit(on, config);
      // Tasks personalizadas
      on("task", {
        downloadFile,
        verifyDownloadTask,
        // Verifica se o arquivo existe
        isFileExist(fileName) {
          return fs.existsSync(fileName);
        },
      });
      // Retorna a configuração atualizada
      return config;
    },
    chromeWebSecurity: false,
    downloadsFolder: "cypress/downloads",
  },
});
