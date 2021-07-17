# sshd - openssh软件套件中的服务器守护进程

sshd命令 是openssh软件套件中的服务器守护进程。

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
sshd  [OPTION]
```

## 选项

``` bash
-4       # 强制使用IPv4地址；
-6       # 强制使用IPv6地址；
-D       # 以后台守护进程方式运行服务器；
-d       # 调试模式；
-e       # 将错误发送到标准错误设备，而不是将其发送到系统日志；
-f       # 指定服务器的配置文件；
-g       # 指定客户端登录时的过期时间，如果在此期限内，用户没有正确认证，则服务器断开次客户端的连接；
-h       # 指定读取主机key文件；
-i       # ssh以inetd方式运行；
-o       # 指定ssh的配置选项；
-p       # 静默模式，没有任何信息写入日志；
-t       # 测试模式。
```



