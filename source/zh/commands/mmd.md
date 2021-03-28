# mmd - 在ms-dos系统中创建目录

在ms-dos系统中创建目录。

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
mmd  目录
```

## 选项

无

## 举例
在ms-dos文件系统中创建目录
``` bash
[sogrey@bogon 文档]$ pwd
/home/sogrey/文档

[root@localhost test]$ mount /dev/sdb4 /media/test
[root@localhost test]$ cd /media/test  #切换到ms-dos
[root@localhost test]$ mmd mydir       #创建目录
[root@localhost test]$ ls              #查看是否创建成功
 mydir
```
