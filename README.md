# sub-web-modify
本项目重制[原项目](https://suburl.v1.mk),进行一些小修改
## 效果预览：
![avatar](https://raw.githubusercontent.com/youshandefeiyang/webcdn/main/sub-web-modify.GIF)
### 使用方法：
建议使用Docker一键部署:
```
docker run -d --restart always -p 8090:80 --name sub-web-modify youshandefeiyang/sub-web-modify
```
或使用docker compose
```yaml
name: sub-web-modify
services:
    sub-web-modify:
        restart: always
        privileged: false
        ports:
            - 8090:80
        container_name: sub-web-modify
        image: youshandefeiyang/sub-web-modify
```
运行docker compose: `docker compose up -d`

访问地址举例:
```
http://192.168.10.1:8090/?backend=https://url.v1.mk
```
### 下载源码到本地，进行本地部署:
```
docker build -t subweb-local:latest .
docker run -d -p 58080:80 --restart always --name subweb subweb-local:latest
```
