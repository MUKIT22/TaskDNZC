# TaskDNZC

## Dockerized Static React and Node.js Application

This repository contains a Dockerized setup for a Static React frontend and Node.js backend application.

## Getting Started

Follow these steps to set up and run the application locally:

### Clone the Repository

git clone <repository_url>
cd <repository_directory>

### Set Up Environment Variables

1. Create a directory named `env` in the project root.
2. Inside the `env` directory, create two files: `backend.env` and `mongo.env`.

## Inside backend.env copy-paste the following variables

MONGODB_USERNAME=mukit<br />
MONGODB_PASSWORD=pass<br />
MONGODB_NAME=goals-dev<br />

## inside mongo.env copy-paste the following variables

MONGO_INITDB_ROOT_USERNAME=mukit<br />
MONGO_INITDB_ROOT_PASSWORD=pass<br />

### Finally Run the Application:

docker-compose up -d <br />
This command starts the Docker containers defined in the docker-compose.yml file.<br />

### Access the Application
The frontend can be accessed at http://localhost:80.<br />
Backend endpoints:<br />
http://localhost/api/<br />
http://localhost/api/goals<br />


### Scalability:

The Docker image can be pushed to any container registry like Docker Hub or ECR. Using a container orchestration tool like Kubernetes, we can scale it. For example, we can create a deployment.yml file and then use this command to manually scale pods:<br /> kubectl scale deployment my-app --replicas=5<br />. Additionally, we can use HPA (Horizontal Pod Autoscaler), and along with the metrics server, the pods can scale based on load.

### Security:

Official Docker images were used, and the containers were not run as root users. Passwords were handled using environment variables. For best practices, we can leverage cloud services like AWS Secrets Manager to handle secrets.