pipeline {
  agent {
    // Imagem Docker com todas as dependências necessárias para Cypress
    docker {
      image 'cypress/browsers:node-18.14.1-chrome-110.0.5481.96-1-ff-109.0-edge-110.0.1587.41-1'
    }
  }

  stages {
    // Primeira etapa: instalar dependências Node.js e Cypress
    stage('build') {
      steps {
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'npm ci'
        sh 'npm run cy:verify'
      }
    }

    // Segunda etapa: executar os testes end-to-end com Cypress
    stage('cypress tests') {
      steps {
        // Clona o repositório e executa os testes
        dir('TESTS') {
          git branch: 'main',
              url: 'https://github.com/niquealisson/DemoQA.git' // Atualize para o seu repositório público
        }
        sh 'NO_COLOR=1 cd TESTS && npm run cypress run'
      }
    }
  }
}
