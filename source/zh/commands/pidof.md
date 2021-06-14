# pidof - 查找指定名称的进程的进程号ID号

pidof命令 用于查找指定名称的进程的进程号id号。

pidof可以查找指定名称的进程的pid，将结果送到标准输出。pidof有两种返回值：0，找到至少一个进程；1，没有找到进程。pidof实际上与killall5相同；程序根据调用它的名称进行操作。

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
pidof  [OPTION] [name]
```

## 选项

``` bash
-s         # 一次只响应一个进程号
-c         # 只显示运行在root目录下的进程，这个选项只对root用户有效
-o         # 忽略指定进程号的进程
-x         # 同时显示在shell脚本运行中的相同名称
```
## 举例
查看指定进程的id
``` bash
[sogrey@bogon ~]$ pidof bash # 显示bash进程的id，有3个
10101 3141 3021
[sogrey@bogon ~]$ 
```
一次只显示一个进程
``` bash
[sogrey@bogon ~]$ pidof -s bash
10101
[sogrey@bogon ~]$ 
```