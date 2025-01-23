pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx cypress install --force'  // Forçar a instalação do Cypress
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
        stage('Run Download and Upload Test') {
            steps {
                sh 'npm run DownloadUpload'
            }
        }
    }
}
