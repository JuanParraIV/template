#!/bin/bash
echo -e "\n${LGREEN}Creando Dockerfile ${NC}"
echo "FROM node:16-alpine AS builder" >> client/Dockerfile
echo "WORKDIR /usr/src/app" >> client/Dockerfile
echo "COPY package*.json ./" >> client/Dockerfile
echo "RUN npm install" >> client/Dockerfile
echo "COPY . ." >> client/Dockerfile
echo "EXPOSE 3000" >> client/Dockerfile
echo 'CMD ["node", "server.js"]' >> client/Dockerfile