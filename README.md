# sub-web-modify
[最美订阅转换](https://submod.vercel.app)基于项目[CareyWang/sub-web](https://github.com/CareyWang/sub-web)，重制CSS样式，增加“高级功能”点击显示/隐藏，新增fakeloader过渡动画、bootstrap框架【解决当手机浏览器切换电脑UI时，远程配置添加过多后，布局乱的问题】和layui【网站弹窗】，解决重新载入网页依然保留上次订阅的问题，添加短链接选择/自定义功能，增加近百条远程配置！<br/>**PS:默认把layui弹窗给删了，如果需要加，请在public/index.html中按顺序引入layui.css、layui.all.js、laybox.js即可，路径自己找找！**
## 效果预览：
![avatar](https://cdn.jsdelivr.net/gh/limr95/webcdn@2.8/3.gif)
### 食用方法【以Linux为例】：
1.安装 [node](https://blog.csdn.net/achabuhecha/article/details/111400068) 和 [yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) 和 [git](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)

2.终端执行 `cd /home && git clone https://github.com/limr95/sub-web-modify.git && chmod -R 755 sub-web-modify && cd sub-web-modify && yarn install && yarn build`

3.build成功后，服务器自行配置ngnix并指定默认目录为/home/sub-web-modify/dist

4.如需进一步修改前端，请在/home/sub-web-modify下执行 `yarn serve` 进行调试即可
