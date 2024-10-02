FROM node:alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build:css

# ----------------------------
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html/dist/
COPY ./src/index.html ./src/cards.json ./src/script.js ./images /usr/share/nginx/html/


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
