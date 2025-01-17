FROM node:lts-alpine AS builder
ARG VCS_REF
ARG BUILD_DATE
ARG GIT_USER
LABEL org.opencontainers.image.source=$VCS_REF \
      org.opencontainers.image.created=$BUILD_DATE \
      org.opencontainers.image.authors=$GIT_USER 
RUN apk --no-cache add tzdata
RUN apk add bash 
RUN apk add curl
ENV TZ=America/Bogota
ENV PORT 5000
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
EXPOSE 5000
USER node
CMD ["npm", "run", "dev"]
HEALTHCHECK NONE
