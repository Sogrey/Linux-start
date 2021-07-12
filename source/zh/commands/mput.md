# mput - 登录ftp服务器之后将文件上传到服务器

使用lftp登录ftp服务器之后，可以使用put指令将文件上传到服务器。mput指令可以使用通配符，而put指令则不可以。

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
mput  [-c]  [-d] [-a]  [-E]  [-O base]  files
```

## 选项

``` bash
-d        # 穿件与文件名字一样的目录，存放文件
-c        # 如果失败，持续获取
-E        # 获取之后，删除源文件
-a        # 使用ascii模式
-O        # 指定输出文件存放的目录
```
## 举例

上传文件
``` bash
[root@localhost ~]$ lftp 192.168.1.8   #登录服务器
lftp 192.168.1.8:~> cd pub/            #切换工作目录
lftp 192.168.1.8:/pub> mput *.c        #上传所有c文件
mput: Access failed: 553 Could not create file. (3.c)
155 bytes transferred
Transfer of 1 of 4 files failed
lftp 192.168.1.8:/pub> ls              #查看内容，以上传成功
-rwxrwxrwx    1 0        0        2375494044 Aug 14 06:38 1.zip
-rw-------    1 14       50              0 Oct 02 01:52 11.c
-rw-r--r--    1 0        0               0 Oct 02 01:19 11c
-rw-r--r--    1 0        0               0 Oct 02 01:19 22c
-rw-------    1 14       50             65 Oct 02 01:48 3.c
-rw-------    1 14       50             52 Oct 02 01:52 4.c
-rw-------    1 14       50             38 Oct 02 01:52 5.c
drwxr-xr-x    2 0        0            4096 Oct 02 01:12 testftp
```
    

