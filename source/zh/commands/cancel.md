# cancel - 取消已存在的打印任务

cancel命令 用于取消已存在的打印任务。

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
cancel  [ -E ]  [ -U username ]  [ -a ]  [ -h hostname[:port] ]  [ -u username ]  [id ]  [ destination ]  [ destination-id ]
```
打印任务号：指定要取消的打印任务编号。
## 选项

``` bash
-E       # 使用加密模式
-a       # 取消所有打印任务
-h       # 指定远程服务器
-U       # 设置别名
-u       # 取消被指定用户拥有的打印任务
```
## 举例
取消打印任务
``` bash

[root@localhost /]$ lpq            # 查看打印队列
printer01 已准备就绪，正在打印
顺序    所有者   作业     文件                         总大小
1st     root    4       4.c                          1024 字节
active  root    2       5.c                          1024 字节
[root@localhost /]$ cancel 4         # 取消4号任务
You have new mail in /var/spool/mail/root
[root@localhost /]$ lpq              # 查看打印队列，4号任务已经取消
printer01 已准备就绪，正在打印
顺序    所有者   作业     文件                         总大小
active  root    2       5.c                          1024 字节
[root@localhost /]$  
```

