FROM nginx:1.24-alpine
COPY / /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
