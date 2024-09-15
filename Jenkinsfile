pipeline {
    agent any
    tools {
        jdk 'jdk17'
        nodejs 'node18'
    } //tools
    environment {
        JENKINS_API_TOKEN = credentials('JENKINS_API_TOKEN')
        DOCKER_HUB_LOGIN = credentials('docker')
        DOCKER_ARGS = '-u root:root -v $HOME/.npm:/.npm'
    } //environment
    stages {
      stage('clean workspace') {
        steps {
          cleanWs()
        }
      } //clean workspace
      stage('Checkout from Gitea') {
        steps {
          script {
            git branch: 'main', url: 'https://github.com/JuanParraIV/template.git', credentialsId: 'github-account'
            dir('automation'){
              git branch: 'main', url: 'http://192.168.50.143:3001/jotamario/automationScritps.git', credentialsId: 'gitea-account'
            }
          }
        }
      } //Checkout from Gitea'
      stage("Sonarqube Analysis") {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh '''$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=template \
                    -Dsonar.projectKey=template'''
                }
            }
        } //Sonarqube Analysis
        stage("Quality Gate") {
            steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'sonar-token'
                }
            }
        }// Quality Gate
      stage('Install Dependencies') {
        steps {
          sh "npm install"
        }
      } //Install Dependencies
      stage('OWASP FS SCAN') {
            steps {
                dependencyCheck additionalArguments: '--scan ./ --disableYarnAudit --disableNodeAudit', odcInstallation: 'DP-Check'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
      }
      stage('TRIVY FS SCAN') {
            steps {
                sh "trivy fs . > trivyfs.txt"
            }
      }
      stage('docker build') {
        steps {
          sh 'chmod +x automation/*'
          sh 'automation/auto_docker.sh build'
        }
      } //docker build
      stage('docker push') {
        steps {
          sh 'automation/auto_docker.sh push'
        }
      } //docker push
      stage("Trivy Image Scan") {
             steps {
                 script {
	                sh './automation/auto_security.sh trivy'
                 }
             }
        }
      stage('docker clean') {
        steps {
          sh 'automation/auto_docker.sh clean'
        }
      } //docker clean
      stage('obtain script variables') {
        steps {
          script {
            // Capturamos la salida del script bash
            def output = sh(script: 'bash ./automation/auto_getenv.sh', returnStdout: true).trim()
            
            // Opcionalmente imprimimos la salida para depuración
            echo output
            // Extraemos las variables que nos interesan desde la salida del script
            def versionMatcher = output =~ /VERSION\s*\|\s*(\S+)/
            def repositoryMatcher = output =~ /REPOSITORY\s*\|\s*(\S+)/
            def registryMatcher = output =~ /REGISTRY\s*\|\s*(\S+)/
            // Asignamos las variables capturadas al entorno de Jenkins
            if (versionMatcher) {
                env.VERSION = versionMatcher[0][1]
            }
            if (repositoryMatcher) {
                env.REPOSITORY = repositoryMatcher[0][1]
            }
            if (registryMatcher) {
                env.REGISTRY = registryMatcher[0][1]
            }
            // Verificamos que se hayan asignado las variables correctamente
            echo "VERSION: ${env.VERSION}"
            echo "REPOSITORY: ${env.REPOSITORY}"
            echo "REGISTRY: ${env.REGISTRY}"
          }
        }
      }
      stage('Trigger CD Pipeline') {
        steps {
          script {
            // Usamos las variables capturadas para el curl
            sh """
            curl -v -k --user admin:${JENKINS_API_TOKEN} \
            -X POST -H 'cache-control: no-cache' \
            -H 'content-type: application/x-www-form-urlencoded' \
            --data 'VERSION=${env.VERSION}&REPOSITORY=${env.REPOSITORY}&REGISTRY=${env.REGISTRY}' \
            'http://192.168.49.2:31831//job/Template-CD/buildWithParameters?token=gitops-token'
            """
          }
        }
      } // Trigger CD Pipeline
    } //stages
} //pipeline
