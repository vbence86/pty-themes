pipeline {
  agent {
    docker {
      image 'node:10-alpine'
    }
  }
  environment {
    CI = 'true' 
  }
  stages {
    stage('Setup') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') { 
      steps {
        sh 'npm test'
      }
    }
    stage('Bundle') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Publish') { 
      steps {
        sh 'npm publish'
        sh 'echo "@TODO: UPLOAD BUNDLES TO TARGET CDN"'
      }
    }
  }
}