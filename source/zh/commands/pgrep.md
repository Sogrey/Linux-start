# pgrep - 根据用户给出的信息在当前运行进程中查找并列出符合条件的进程ID（PID）

pgrep命令 以名称为依据从运行进程队列中查找进程，并显示查找到的进程id。每一个进程ID以一个十进制数表示，通过一个分割字符串和下一个ID分开，默认的分割字符串是一个新行。对于每个属性选项，用户可以在命令行上指定一个以逗号分割的可能值的集合。

pgrep指令可以按名字或者其他属性搜索指定的进程，显示出进程的id到标准输出。

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
pgrep  [-flvx]  [-d delimiter]  [-n|-o]  [-P ppid,...]  [-g pgrp,...]  [-s sid,...]  [-u euid,...]  [-U uid,...]  [-G gid,...]  [-t term,...]  [pattern]
```

## 选项

``` bash
-d delimiter       # 设置用于分隔输出中每个进程ID的字符串(默认为换行符)。(仅限于pgrep)
-f                 # 查找完成的文件名
-g pgrp            # 只匹配列出的进程组ID中的进程。进程组0被转换为pgrep或pkill自己的进程组。
-G gid             # 只匹配实际组ID列出的进程。可以使用数值或符号值。
-l                 # 列出进程的名字和id
-n                 # 选择最近执行的进程
-o                 # 选择最早的进程
-P ppid            # 选择父pid匹配的进程
-s sid             # 只匹配进程会话ID列出的进程。会话ID 0被转换为pgrep或pkill自己的会话ID。
-t term            # 查找符合终端号的进程
-u euid            # 只匹配其有效用户ID列出的进程。
-U uid             # 只匹配实际用户ID列出的进程。可以使用数值或符号值。
-v                 # 查找不符合条件的进程
-x                 # 只匹配其名称(如果-f指定了命令行)与模式完全匹配的进程。

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例
查看指定进程信息
``` bash
[sogrey@bogon ~]$ pgrep -l bash
10101 bash
[sogrey@bogon ~]$ 
```
查看某个终端的进程
``` bash
[sogrey@bogon 文档]$ pgrep -l -t tty1   #显示tty1下的进程id和进程名字
7734 Xorg
```