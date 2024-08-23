FROM node:16
RUN npm install -g pm2
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3004
CMD ["pm2-runtime", "index.js", "-i", "5", "--name", "download-service", "--time"]