# sub-web-modify
[本项目](https://suburl.v1.mk)重制[原项目](https://github.com/CareyWang/sub-web)CSS样式，解决大部分布局细节问题，增加“暗黑模式”，默认自动切换亮/暗模式（点击“太阳/月亮”图标可手动切换），增加“高级功能”点击显示/隐藏，添加短链接选择/自定义功能，增加近百条远程配置，新增[sub-web聚合API](https://github.com/youshandefeiyang/sub-web-api)，增加从短链接中获取订阅信息并返回至前端界面，增加上传自定义远程配置/JS进阶排序节点/JS进阶筛选节点等功能，感兴趣的朋友可以自建API服务，增加URL传参设置自定义后端<br/>
## 效果预览：
![avatar](https://raw.githubusercontent.com/youshandefeiyang/webcdn/main/sub-web-modify.GIF)
### 使用方法：
建议使用Docker一键部署:
```
docker run -d --restart unless-stopped --privileged=true -p 8090:80 --name sub-web-modify youshandefeiyang/sub-web-modify
```
访问地址举例:
```
http://192.168.10.1:8090/?backend=https://api.v1.mk
```
