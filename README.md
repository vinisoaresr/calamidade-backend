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
```
