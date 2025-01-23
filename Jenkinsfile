pipeline {
    agent { label '{functional_node}' }  // Definir o agente principal

    stages {
        stage('TEST') {
            steps {
                // Usar docker dentro de steps
                script {
                    docker.image('cypress/base:20.9.0').inside {
                        // Comandos para rodar dentro do container Docker
                        git branch: 'development',
                            credentialsId: '{redacted}',
                            url: '{URL}'

                        sh 'ng serve'
                        sh 'npm i'
                        sh 'npm run cypress:run'
                    }
                }
            }
        }

        stage('Build and Deploy Docker') {
            steps {
                git branch: 'development',
                    credentialsId: '{redacted}',
                    url: '{URL}'

                sh 'cp -f /apps/jenkins/workspace/"${JOB_NAME}"/src/environments/environment.ts /apps/jenkins/workspace/"${JOB_NAME}"/src/environments/environment.prod.ts'
                sh 'docker build . -t {just_a_name}:latest'
                sh 'docker rm -vf $(docker ps -a -q --filter="name={just_a_name}")'
                sh 'docker run -d --restart unless-stopped -p 90:80 --name {just_a_name} {just_a_name}:latest'
                sh 'docker system prune -f'
            }
        }
    }
}
