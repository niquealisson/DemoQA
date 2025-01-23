pipeline {
   agent any

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm i'
           }
       }
       stage('e2e Tests 2') {
           steps {
               sh 'npm run cy:run'
           }
       }
   }
}
