pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
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
