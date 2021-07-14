FROM node:14-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY index.js ./
COPY src/ ./src/

USER node
EXPOSE 3000
CMD ["npm", "start"]

