FROM node:20-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4002

CMD ["npm", "start"]
# mongodb+srv://tapashbariflo_db_user:yuYD21YBP1bziUSx@cluster1.ynrsg2p.mongodb.net/chatApp?retryWrites=true&w=majority&appName=Cluster1