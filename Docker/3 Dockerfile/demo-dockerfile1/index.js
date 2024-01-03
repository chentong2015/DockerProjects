// 如何在另外一个环境中运行如下的程序 ?
// 1. 安装操作系统
// 2. 安装JS的运行环境(NodeJs)
// 3. 复制应用程序，依赖包，配置文件
// 4. 执行启动命令来运行应用程序
//    > node index.js

// 将程序所需的环境依赖封装到Dockerfile中，一键运行
// 无需在另外一个OS中重新配置复杂的环境
console.log("Hello Docker")