# findfs - 标签或UUID查找文件系统
findfs命令 依据卷标（Label）和UUID查找文件系统所对应的设备文件。findfs命令会搜索整个磁盘，看是否有匹配的标签或者UUID没有，如果有则打印到标注输出上。findfs命令也是e2fsprogs项目的一部分。

查找指定卷标或者UUID的文件系统对应的设备文件。findfs将搜索系统中的磁盘，寻找具有标签匹配标签或与UUID相等的文件系统。如果找到文件系统，文件系统的设备名称将打印在stdout上。

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
findfs  LABEL=label
findfs  UUID=uuid
```

## 选项
无
## 举例
查找指定UUID的文件系统的设备
``` bash
[root@localhost ~]# findfs UUID=059facc9-c58e-42d0-b8f5-7644c4574888
/dev/sda1
You have new mail in /var/spool/mail/root
```
查找指定LABEL的文件系统的设备
``` bash
[root@localhost ~]$ findfs LABEL=wj
/dev/sdb4
```