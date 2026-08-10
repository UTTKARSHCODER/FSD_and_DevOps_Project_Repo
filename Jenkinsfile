pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Pull your HTML page and test scripts from your Git repository
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'pip install --upgrade pip selenium pytest'
            }
        }

        stage('Run UI Tests') {
            steps {
                // Execute pytest and generate a report
                sh 'pytest test_register.py --junitxml=junit-report.xml'
            }
        }
    }

    post {
        always {
            // Publish test results back to Jenkins dashboard
            junit 'junit-report.xml'
        }
    }
}