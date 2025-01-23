pipeline {
  agent any // Usa qualquer nó configurado no Jenkins

  stages {
    stage('build') {
      steps {
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'npm ci'
        sh 'npm run cy:verify'
      }
    }

    stage('cypress tests') {
      steps {
        dir('TESTS') {
          git branch: 'main',
              url: 'https://github.com/niquealisson/DemoQA.git'
        }
        sh 'NO_COLOR=1 cd TESTS && npm run cypress run'
      }
    }
  }
}
