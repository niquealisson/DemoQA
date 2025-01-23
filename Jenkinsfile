pipeline {
    agent any

    tools {
        nodejs "nodejs21"
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install' // Instala as dependências listadas no package.json
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npm run cypress:run' // Executa todos os testes configurados no Cypress
            }
        }
        stage('Run Download and Upload Test') {
            steps {
                sh 'npm run DownloadUpload' // Executa o teste específico de download/upload
            }
        }
    }
}
