
##### Stage 1
FROM node:latest as builder
LABEL author="Wojciech Ponikiewski"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --prod

##### Stage 2
FROM nginx:alpine as runtime
VOLUME /var/cache/nginx
COPY --from=node /app/dist/app-frontend /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf