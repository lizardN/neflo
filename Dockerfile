FROM pull ghcr.io/puppeteer/puppeteer:19.7.2

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true 
    PUPPETEER_EXECUTABLE_PATH = /usr/bin/chromium-browser



WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . .
CMD [ "node", "server.js" ]