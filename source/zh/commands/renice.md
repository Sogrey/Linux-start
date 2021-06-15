# renice - 修改正在运行的进程的调度优先级
renice命令 可以修改正在运行的进程的调度优先级。预设是以程序识别码指定程序调整其优先权，您亦可以指定程序群组或用户名称调整优先权等级，并修改所有隶属于该程序群组或用户的程序的优先权。只有系统管理者可以改变其他用户程序的优先权，也仅有系统管理者可以设置负数等级。

renice指令可以重新调整程序运行的优先级，可以通过进程id、用户id、组id来修改优先级。修改组的等级，影响组内所有用户的所有进程优先级；修改用户等级，影响该用户的所有进程优先级。除了超级用户之外，其他用户只能改变他们拥有的进程的优先级，并且只能在0到PRIO_MAX(20)范围内单调地增加他们的“nice value”。(这防止了凌驾于行政法规之上。)超级用户可以更改任何进程的优先级，并将优先级设置为PRIO_MIN(-20)~PRIO_MAX。

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
renice  -n  N  –u  username
renice  -n  N  –g  gid
renice  -n  N  –p  pid
```

## 选项

``` bash
-h, --help                  # 显示帮助文档
-v, --version               # 显示命令版本
-n, --priority              # 优先级
-u, --user=name             # 设置指定用户的优先级
-g, --pgrp=gid              # 设置组的优先级
-p, --pid=PID               # 设置指定进程的优先级
```
## 举例

通过pid修改指令wc优先级
``` bash
[root@localhost ~]$ ps -ao "%p%y%x%c%n"                # 查看进程优先级
  PID TTY          TIME COMMAND          NI
 8321 pts/0    00:00:00 wc               19
 8451 pts/0    00:00:00 ps                0
[root@localhost ~]$ renice -n 15 -p 8364               # 重设wc进程的优先级，变为15
 8364: old priority 19, new priority 15
```
修改用户root的优先级
``` bash
[root@localhost ~]$ renice -n 0 -u root                # 修改用户root的优先级为0
0: old priority -11, new priority 0
[root@localhost ~]$ ps -ao "%p%y%x%c%n"                # 查看进程优先级，当前进程都是root用户的，优先级都是0
  PID TTY          TIME COMMAND          NI
 8321 pts/0    00:00:00 wc                0
 8364 pts/0    00:00:00 wc                0
 8458 pts/0    00:00:00 ps                0
```