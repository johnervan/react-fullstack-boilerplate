FROM node:12.13.1-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./app-service/package.json /usr/src/app/
RUN npm install --production && npm cache clean --force 
COPY ./app-service/ /usr/src/app
ENV NODE_ENV prod
ENV PORT 80
EXPOSE 80

CMD [ "npm", "start" ]`