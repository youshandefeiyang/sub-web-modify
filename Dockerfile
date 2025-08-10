# syntax=docker/dockerfile:1.7
FROM --platform=$BUILDPLATFORM node:22.18.0-alpine3.22 AS build
WORKDIR /app

# 为 Git 依赖安装必要工具；并启用 Corepack 固定 Yarn
RUN apk add --no-cache git openssh-client ca-certificates libc6-compat \
  && corepack enable \
  && corepack prepare yarn@stable --activate

# 先拷贝依赖清单，利用缓存
COPY package.json yarn.lock ./
RUN yarn --version && node -v && yarn install --immutable

# 再拷贝源码并构建
COPY . .
RUN yarn build

FROM --platform=$TARGETPLATFORM nginx:1.24-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
