FROM node:14-alpine

WORKDIR /app

#  add libraries; sudo so non-root user added downstream can get sudo
RUN apk add --no-cache sudo;

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]