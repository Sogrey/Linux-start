# squidclient - squid服务器的客户端管理工具

squidclient命令 使用squid服务器的客户端管理工具，它可以查看squid服务器的详细运行信息和管理squid服务器。

## 适用范围

<!-- <div class="svg linux">Linux</div> -->
<div class="svg redhat">RedHat</div>
<div class="svg rhel">RHEL</div>
<div class="svg ubuntu">Ubuntu</div>
<div class="svg centos">CentOS</div>
<div class="svg debian">Debian</div>
<div class="svg deepin">Deepin</div>
<div class="svg suse">SUSE</div>
<div class="svg opensuse">openSUSE</div>
<div class="svg fedora">Fedora</div>
<div class="svg linuxmint">Linux Mint</div>
<!-- <div class="svg mxlinux">MX Linux</div> -->
<div class="svg alpinelinux">Alpine Linux</div>
<div class="svg archlinux">Arch Linux</div>

## 语法

``` bash
squidclient  [OPTION] [参数]
```
参数：

URL：指定操作缓存中的URL。
## 选项

``` bash
-a        # 不包含“accept:header”；
-r        # 强制缓存重新加载URL；
-s        # 安静模式，不输出信息到标准输出设备；
-h        # 从指定主机获取url
-l        # 指定一个本地ip地址进行绑定；
-p        # 端口号，默认为3128；
-m        # 指定发送请求的方法；
-u        # 代理认证用户名。
```




