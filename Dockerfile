# syntax=docker/dockerfile:1.7
FROM --platform=$BUILDPLATFORM node:22.18.0-alpine3.22 AS build
WORKDIR /app

# 若依赖含原生扩展，可加编译工具（按需启用）
# RUN apk add --no-cache --virtual .build-deps python3 make g++

# Node 22 使用 Corepack 管理 Yarn
RUN apk add --no-cache libc6-compat && corepack enable && corepack prepare yarn@stable --activate

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
