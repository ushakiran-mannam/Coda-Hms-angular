
// Triggers
properties([pipelineTriggers([githubPush()])])

pipeline {
    agent {
        node {
            label 'aws_node_two'
        }
    }

    stages {

        stage('Build') {
            steps {
                sh "pwd"
                sh "npm install"
            }
        }    
    }
}

