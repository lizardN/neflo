FROM ghcr.io/puppeteer/puppeteer:19.7.2

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

RUN mkdir /app && chown node:node /app
WORKDIR /app


USER node
COPY --chown=node:node package.json package-lock.json* ./
RUN npm install

COPY --chown=node:node . .
CMD [ "node", "server.js" ]
