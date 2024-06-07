FROM ghcr.io/puppeteer/puppeteer:latest

WORKDIR /app

COPY . .

RUN mkdir /app/dist
RUN mkdir /app/files

RUN npm ci && npm run build

CMD ["node", "dist/server.js"]
