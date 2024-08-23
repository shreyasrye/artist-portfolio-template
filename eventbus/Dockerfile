FROM node:14
RUN npm install -g pm2
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["pm2-runtime", "index.js"]
