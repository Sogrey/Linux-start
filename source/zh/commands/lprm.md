# lprm - 删除打印队列中的打印任务
lprm命令 用于删除打印队列中的打印任务。尚未完成的打印机任务会被放在打印机贮列之中，这个命令可用来将常未送到打印机的任务取消。

lprm指令用来删除当前打印队列上的任务，如果没有指定，那么就删除当前打印任务。您可以指定一个或多个职务ID编号来取消这些职务，或者使用选项”-”取消所有作业。

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
lprm  [ -E ]  [ -U username ]  [ -h server[:port] ]  [ -P destination[/instance]]  [ - ]  [ job ID(s) ]
```

## 选项

``` bash
-E             # 使用加密模式
-P             # 指定打印机
-h             # 指定远程服务器
-U             # 设置别名
```
## 举例
删除打印任务
``` bash
[root@localhost /]$ lpq        #查看当前打印队列
printer01 已准备就绪，正在打印
顺序    所有者   作业     文件                         总大小
1st     root    4       4.c                             1024 字节
active  root    2       5.c                             1024 字节
2nd     root    3       P1                              1024 字节
[root@localhost /]$ lprm 3        #删除3号任务
You have new mail in /var/spool/mail/root
[root@localhost /]$ lpq           #查看打印队列，3号任务已经删除
printer01 已准备就绪，正在打印
顺序    所有者   作业     文件                         总大小
1st     root    4       4.c                             1024 字节
active  root    2       5.c                             1024 字节
[root@localhost /]#  
```

