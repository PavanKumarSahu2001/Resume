# Stage 1: build (we already built with Vite, so this stage is kept for reproducibility)
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: serve with nginx (production)
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Single-page app routing support
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]