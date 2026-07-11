# Build React + Vite app
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm clean-install

COPY . .

RUN npm run build


# Serve React + Vite app
FROM nginx:stable-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
