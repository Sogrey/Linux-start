# ftp - 用来登录远程ftp服务器

ftp指令可以用来登录远程ftp服务器。
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
ftp  [选项]  [host]
```

## 选项

``` bash
-A                 # 活动模式，对于不支持密码连接的服务器，可以用来传输文件
-P                 # 被动模式，允许在有防火墙的服务器中使用
-i                 # 关闭互动模式
-n                 # 不使用自动登录
-g                 # 关闭本地主机文件名称支持特殊字符的扩展性
-v                 # 显示详细过程
-d                 # 使能调试
```
## 举例

登录ftp服务器
``` bash
[root@localhost ~]$ ftp 192.168.1.8            #登录
Connected to 192.168.1.8 (192.168.1.8).
220 (vsFTPd 2.2.2)
Name (192.168.1.8:root): ftp                   #用户名
331 Please specify the password.
Password:                                      #密码
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls                                        #查看内容
227 Entering Passive Mode (192,168,1,8,44,30).
150 Here comes the directory listing.
drwxr-xr-x    2 0        0            4096 Aug 14 06:38 pub
226 Directory send OK.
ftp>
```



