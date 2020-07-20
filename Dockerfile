FROM node:14

# 환경변수설정
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

#ENTRYPOINT [ "/bin/bash" ]
#ENTRYPOINT [ "/bin/sh" ]
#CMD [ "npm", "init" ]