FROM node:14

# 환경변수설정
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# node 이미지에 vim이 없어 설치해준다.
RUN apt-get update && apt-get install apt-file -y && apt-file update && apt-get install vim -y

# npm global install은 DockerFile로
#RUN npm install -g ngrok
RUN npm install -g typescript

ENTRYPOINT [ "/bin/bash" ]
#ENTRYPOINT [ "/bin/sh" ]
#CMD [ "npm", "install" ]