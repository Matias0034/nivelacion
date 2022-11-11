FROM node

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install && npm install typescript -g

COPY . .

EXPOSE 8080

RUN tsc

CMD ["npm", "start"]