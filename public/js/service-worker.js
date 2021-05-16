if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // 注册一个service worker，这个例子中worker的路径是根目录中的，所以这个worker可以缓存这个项目中任意文件。如果目录是‘/js/sw.js‘，那么只能缓存目录'/js'下的文件
    // 参数registration存储了本次注册的一些相关信息
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      // registration.scope 返回的是这个service worker的作用域
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}