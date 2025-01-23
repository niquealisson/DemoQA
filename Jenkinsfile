pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Garantir permissão para o Cypress
                sh 'chmod +x ./node_modules/.bin/cypress'
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npm run cypress:run'
            }
        }
        stage('Run Download and Upload Test') {
            steps {
                sh 'npm run DownloadUpload'
            }
        }
    }
}
