pipeline {
    agent any
    
    environment {
        DEPLOY_PATH = '/var/www/my-demo-app'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo '📦 Checking out code from GitHub...'
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo '🔨 Building the application...'
                sh '''
                    echo "================================"
                    echo "Building application..."
                    echo "Build Number: ${BUILD_NUMBER}"
                    echo "Build Time: $(date)"
                    echo "Git Branch: ${GIT_BRANCH}"
                    echo "Git Commit: ${GIT_COMMIT}"
                    echo "================================"
                    
                    # Create build info JSON file
                    cat > build-info.json << EOF
{
  "buildNumber": "${BUILD_NUMBER}",
  "deployTime": "$(date '+%Y-%m-%d %H:%M:%S')",
  "version": "1.0.${BUILD_NUMBER}",
  "gitCommit": "${GIT_COMMIT}",
  "gitBranch": "${GIT_BRANCH}"
}
EOF
                    
                    echo "Build info created:"
                    cat build-info.json
                '''
            }
        }
        
        stage('Test') {
            steps {
                echo '✅ Running tests...'
                sh '''
                    echo "Running HTML validation..."
                    if [ -f "index.html" ]; then
                        echo "✓ index.html found"
                    else
                        echo "✗ index.html not found"
                        exit 1
                    fi
                    
                    if [ -f "style.css" ]; then
                        echo "✓ style.css found"
                    else
                        echo "✗ style.css not found"
                        exit 1
                    fi
                    
                    if [ -f "app.js" ]; then
                        echo "✓ app.js found"
                    else
                        echo "✗ app.js not found"
                        exit 1
                    fi
                    
                    echo "All tests passed!"
                '''
            }
        }
        
        stage('Deploy') {
            steps {
                echo '🚀 Deploying to web server...'
                sh '''
                    echo "================================"
                    echo "Deployment started at $(date)"
                    echo "Deploying to: ${DEPLOY_PATH}"
                    echo "================================"
                    
                    # Create deployment directory if it doesn't exist
                    sudo mkdir -p ${DEPLOY_PATH}
                    
                    # Copy files to web server directory
                    sudo cp -r index.html style.css app.js build-info.json ${DEPLOY_PATH}/
                    
                    # Set proper permissions
                    sudo chown -R www-data:www-data ${DEPLOY_PATH}
                    sudo chmod -R 755 ${DEPLOY_PATH}
                    
                    echo "Files deployed:"
                    ls -la ${DEPLOY_PATH}/
                    
                    echo "================================"
                    echo "✅ Deployment completed successfully!"
                    echo "Access the app at: http://10.20.3.16/"
                    echo "================================"
                '''
            }
        }
    }
    
    post {
        success {
            echo '✨ Pipeline completed successfully!'
            echo '🌐 Application is live at: http://10.20.3.16/'
        }
        failure {
            echo '❌ Pipeline failed! Check the logs above.'
        }
    }
}
