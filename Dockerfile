FROM node:16 AS build

WORKDIR /cochrane_kwinton_ui_garden

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /cochrane_kwinton_ui_garden/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]