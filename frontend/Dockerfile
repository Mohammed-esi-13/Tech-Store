# ---- Stage 1: Build the Vite app ----
FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
# Vite only inlines VITE_* vars at build time, so the API URL must be an
# ARG here (see docker-compose.yml). Defaults to local backend.
ARG VITE_API_URL=http://localhost:5000
ENV VITE_API_URL=$VITE_API_URL
RUN pnpm run build

# ---- Stage 2: Serve with Nginx ----
FROM nginx:alpine AS runner
RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
