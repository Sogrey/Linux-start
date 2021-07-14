# apachectl - Apache服务器前端控制工具

apachectl命令 是Apache的Web服务器前端控制工具，用以启动、关闭和重新启动Web服务器进程。

apachectl指令是apache http服务器的前端控制程序，可以协助控制apache服务的守护进程httpd。
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
apachectl  cmd
```

## 选项

``` bash
start           # 启动apache httpd守护进程
restart         # 重启apache httpd守护进程
stop            # 停止apache httpd守护进程
status          # 显示apache服务的简要信息
graceful        # 优雅的重启apache服务，它和restart不一样，不会中断当前已经打开的http连接，不会立刻关闭日志
graceful-stop   # 优雅的停止apache服务，它和stop不一样，不会中断当前已经打开的http连接，不会立刻关闭日志
configtest      # 运行apache配置语法检测
```
## 举例

运行apache配置文件测试
``` bash
[root@localhost ~]$ apachectl configtest #配置文件检测，没有错误
httpd: Could not reliably determine the server's fully qualified domain name, using localhost.localdomain for ServerName
Syntax OK
```
重启服务
``` bash
[root@localhost ~]$ apachectl restart   #重启
```
    


