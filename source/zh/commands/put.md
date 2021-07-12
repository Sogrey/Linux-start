# put - 登录ftp服务器之后将文件上传到服务器
使用lftp登录ftp服务器之后，可以使用put指令将文件上传到服务器。

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
put  [-E]  [-a]  [-c]  [-O base]  lfile  [-o rfile]
```

## 选项

``` bash
-o       # 指定输出文件的名字，不指定则使用原来的名字
-c       # 如果失败，持续获取
-E       # 获取之后，删除源文件
-a       # 使用ascii模式
-O       # 指定输出文件存放的目录
```
## 举例

上传文件
``` bash
[root@localhost ~]$ lftp 192.168.1.8       #登录服务器
lftp 192.168.1.8:~> cd pub/                  #切换目录
lftp 192.168.1.8:/pub> put 3.c              #上传文件
65 bytes transferred
lftp 192.168.1.8:/pub> ls                   #查看内容，已经上传成功
-rwxrwxrwx    1 0        0        2375494044 Aug 14 06:38 1.zip
-rw-r--r--    1 0        0               0 Oct 02 01:19 11c
-rw-r--r--    1 0        0               0 Oct 02 01:19 22c
-rw-------    1 14       50             65 Oct 02 01:48 3.c
drwxr-xr-x    2 0        0            4096 Oct 02 01:12 testftp
lftp 192.168.1.8:/pub>
```

