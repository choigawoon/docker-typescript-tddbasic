# docker-typescript-tddbasic
docker, typescript, mocha, chai initial setup


# Usage
## visual studio code
compose restart

## shell
docker-compose -f "docker-typescript-tddbasic\docker-compose.yml" down
docker-compose -f "docker-typescript-tddbasic\docker-compose.yml" up -d --build

docker-compose exec typescript-getstarted /bin/bash
> npm test