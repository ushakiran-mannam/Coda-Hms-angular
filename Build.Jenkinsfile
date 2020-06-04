
// Triggers
properties([pipelineTriggers([githubPush()])])

pipeline {
    agent {
        node {
            label 'aws_node_two'
        }
    }
    environment {
      TOOL = tool name: 'nodejs', type:     'com.cloudbees.jenkins.plugins.customtools.CustomTool'
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

