tools { 
    nodejs "NodeJS"  // Ensure 'NodeJS' is the name of the NodeJS installation in Jenkins
}

stages {
    stage('Clean Workspace') {
        steps {
            script {
                // Enable ANSI color for this stage
                ansiColor('xterm') {
                    // Remove node_modules directory to ensure a clean installation
                    bat 'IF EXIST node_modules RMDIR /S /Q node_modules'
                }
            }
        }
    }

    stage('Verify Workspace and Package.json') {
        steps {
            script {
                // Enable ANSI color for this stage
                ansiColor('xterm') {
                    // Print the current directory and package.json to verify correct workspace
                    bat 'cd'
                    bat 'dir'
                    bat 'type package.json'
                }
            }
        }
    }

    stage('Install Dependencies') {
        steps {
            script {
                // Enable ANSI color for this stage
                ansiColor('xterm') {
                    // Install dependencies
                    bat 'npm install'
                    // Verify installed Cypress version
                    bat 'npx cypress --version'
                }
            }
        }
    }

    stage('Run Cypress Tests') {
        steps {
            script {
                // Enable ANSI color for this stage
                ansiColor('xterm') {
                    // Run Cypress tests
                    bat 'npx cypress run
                }
            }
        }
    }
}

post {
    always {
        // Archive test results, etc.
        archiveArtifacts artifacts: 'cypress/screenshots/**'
        archiveArtifacts artifacts: 'cypress/videos/**'
    }
}