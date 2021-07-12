# bg - 将前台终端作业移动到后台运行
bg指令用来将挂起的进程在后台执行。
## 主要用途
- 用于将作业放到后台运行，使前台可以执行其他任务。该命令的运行效果与在指令后面添加符号&的效果是相同的，都是将其放到系统后台执行。
- 若后台任务中只有一个，则使用该命令时可以省略任务号。

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
bg  [jobs]
```

## 选项
无
## 举例
后台运行
``` bash
[root@localhost ~]$ find / -name passwd        #执行查找指令，ctrl+z挂起任务
find: 探测到文件系统循环；“/var/named/chroot/var/named” 是与 “/var/named” 相同的文件系统循环的一部分。
^Z
[1]+  Stopped                 find / -name passwd
You have new mail in /var/spool/mail/root
[root@localhost ~]$ bg                 #任务在后台执行，结果任然会输出
[1]+ find / -name passwd &
[root@localhost ~]$ /usr/bin/passwd
/etc/passwd
/etc/squid/passwd
/etc/pam.d/passwd
```
