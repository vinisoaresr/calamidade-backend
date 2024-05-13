# sample
## Getting Started
Create .env on root path project

``` bash
# NodeJS
NODE_ENV="development"
SLS_DEBUG=*

# API
PORT=3001
LOG_LEVEL="debug"
ENVIRONMENT="dev"

# Devops
HEALTH_BUILD="local"
HEALTH_RELEASE="local"

# AWS
AWS_ACCOUNT_REGION="local"

# Only useged on deployment Serverless Framework
AWS_VPC_SECURITY_GROUP_LAMBDA="local"
AWS_VPC_SUBNET_NAT_1="local"
AWS_VPC_SUBNET_NAT_2="local"
AWS_VPC_SUBNET_NAT_3="local"

AWS_DEPLOYMENT_BUCKET="local"

# Inject variables
## Database envs
### tunnel: ssh -N -L localhost:9090:obi-tec-rds-pg-dev.cwq07qc9qqnj.us-east-1.rds.amazonaws.com:5432 ubuntu@34.227.68.128 -i obi-bastion-dev.pem
DATABASE_URL="postgresql://name-of-user:pwd-of-user@localhost:9090/name-of-db-dev?schema=public"
DATABASE_SHADOW_URL="postgresql://name-of-user:pwd-of-user@localhost:9090/name-of-db-dev-shadow?schema=public"
DATABASE_PRISMA_BINARY_TARGETS='["native"]'
```
