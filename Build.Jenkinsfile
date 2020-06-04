// pipeline code for building angular application
// def dockerPublisherName = "rahulraju"
// def dockerRepoName = "sample-ng-app"


//def gitRepoName = "https://github.com/lRAHULl/sample-ng-app.git"
//def gitBranch = "master"

// Custom-Image name
// def customLocalImage = "sample-ng-app-image"

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
                sh "ls"
            }
        }    
    }
}

