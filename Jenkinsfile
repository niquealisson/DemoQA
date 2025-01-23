pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Grant Permissions') {
            steps {
                sh 'chmod +x ./node_modules/.bin/cypress'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm run cypress:run'
            }
        }
    }
}
