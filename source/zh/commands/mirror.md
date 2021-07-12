# mirror - 登录ftp服务器之后从服务器获取目录

使用lftp登录ftp服务器之后，可以使用mirror指令从服务器获取目录

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
mirror [OPTS] [source [target]]
```

## 选项

``` bash
-c    # 如果失败，持续获取
-n    # 只下载新文件
-r    # 不下载子目录
-p    # 下载时不设置权限
-L    # 将符号链接当做文件
```
## 举例

获取目录
``` bash
[root@localhost ~]$ lftp 192.168.1.8          #登录服务器
lftp 192.168.1.8:~> cd pub/                   #切换目录
lftp 192.168.1.8:/pub> mirror testftp/        #下载目录
Total: 1 directory, 2 files, 0 symlinks
New: 2 files, 0 symlinks
lftp 192.168.1.8:/pub> quit                   #退出
You have new mail in /var/spool/mail/root
[root@localhost ~]$ ls                        #查看内容，已经获取到目录
1   11c   1.zip  2.c.bz2  4.c  6.c~  rec000012.c.bz2  testftp
1.  11.c  22c    3.c      5.c  col   res.zip
[root@localhost ~]$
```
