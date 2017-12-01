1. 使用X-TAG封装点赞插件`<x-praise></x-praise>`。
2. 使用Gulp编译Koa2源代码并能监控源代码变化自动编译。
3. 使用Webpack配置上线版本、开发版本配置文件，并能监控文件的变化自动刷新浏览器。
4. 使用webpack能够对JS、CSS进行编译、压缩、打包、合并，并生成MD5。
5. 去掉System.js，利用Webpack进行文件引用，同时提取公共文件成独立JS包。
6. 将编译后的文件能够按照Chunk规律分发静态文件并编译进Swig。