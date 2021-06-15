# pkill - 可以按照进程名杀死进程

pkill命令 可以按照进程名杀死进程。pkill和killall应用方法差不多，也是直接杀死运行中的程序；如果您想杀掉单个进程，请用kill来杀掉。

pkill可以给指定的进程发送信息，它可以结束某个执行的进程或者目录登录的用户。

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
pkill  [-signal]  [-fvx]  [-n|-o]  [-P ppid,...]
       [-g pgrp,...]  [-s sid,...]  [-u euid,...]
       [-U uid,...]  [-G gid,...]  [-t term,...]  [pattern]
```

## 选项

``` bash
-f                      # 查找完成的文件名
-g pgrp                 # 只匹配列出的进程组ID中的进程。进程组0被转换为pgrep或pkill自己的进程组。
-G gid                  # 只匹配实际组ID列出的进程。可以使用数值或符号值。
-n                      # 选择最近执行的进程
-o                      # 选择最早的进程
-P ppid                 # 选择父pid匹配的进程
-s sid                  # 只匹配进程会话ID列出的进程。会话ID 0被转换为pgrep或pkill自己的会话ID。
-t term                 # 查找符合终端号的进程
-u euid                 # 只匹配其有效用户ID列出的进程。
-U uid                  # 只匹配实际用户ID列出的进程。可以使用数值或符号值。
-v                      # 查找不符合条件的进程
-x                      # 只匹配其名称(如果-f指定了命令行)与模式完全匹配的进程。
-signal                 # 要发送的信号 

--help                  # 显示帮助文档
--version               # 显示命令版本信息
```

## 返回值

- 0  一个或多个进程符合。
- 1  没有进程符合
- 2  命令的语法错误
- 3  致命错误：内存不足等。

## 举例

杀死wc进程

``` bash
[root@localhost ~]$ pkill -SIGKILL wc       #向wc发送KILL信号，杀死进程
[1]-  已杀死               nice -n 19 wc
You have new mail in /var/spool/mail/root
[root@localhost ~]$ ps                      #查看进程，wc已经杀死
  PID TTY          TIME CMD
 8266 pts/0    00:00:00 bash
 8554 pts/0    00:00:00 ps
```
