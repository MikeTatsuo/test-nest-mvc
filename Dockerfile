FROM node:18.13-alpine3.17 as dependencies

WORKDIR /deps
COPY . .
RUN npm i -g npm@latest
# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
RUN npm install


FROM node:18.13-alpine3.17 as builder

WORKDIR /build
COPY --from=dependencies /deps .
RUN npm i -g npm@latest
RUN npm run build


FROM node:18.13-alpine3.17

WORKDIR /app
COPY . .
COPY --from=builder /build .

# Installs latest Chromium (100) package.
RUN apk add --no-cache \
  chromium \
  nss \
  freetype \
  harfbuzz \
  ca-certificates \
  ttf-freefont

RUN npm i -g npm@latest

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
