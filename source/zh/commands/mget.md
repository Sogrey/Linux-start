# mget - 登录mftp服务器之后从服务器获取文件

使用lftp登录mftp服务器之后，可以使用mget指令从服务器获取文件。mget指令可以使用通配符，而get指令则不可以。

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
mget  [-E]  [-a]  [-c]  [-d]  [-O base]  rfile
```

## 选项

``` bash
-d        # 创建与文件名字相同的目录，将文件存放于此
-c        # 如果失败，持续获取
-E        # 获取之后，删除源文件
-a        # 使用ascii模式
-O        # 指定输出文件存放的目录
```
## 举例

使用通配符获取文件
``` bash
[root@localhost ~]$ lftp 192.168.1.8      #登录服务器
lftp 192.168.1.8:~> cd pub/               #切换目录
lftp 192.168.1.8:/pub> ls                 #查看内容
-rwxrwxrwx    1 0        0        2375494044 Aug 14 06:38 1.zip
-rw-r--r--    1 0        0               0 Oct 02 01:19 11c
-rw-r--r--    1 0        0               0 Oct 02 01:19 22c
drwxr-xr-x    2 0        0            4096 Oct 02 01:12 testftp
lftp 192.168.1.8:/pub> mget *c            #获取名字包含c的文件
Total 2 files transferred
lftp 192.168.1.8:/pub> quit               #退出
You have new mail in /var/spool/mail/root
[root@localhost ~]$ ls                    #查看内容，已经获取到文件
1   11c   1.zip  2.c.bz2  4.c  6.c~  rec000012.c.bz2
1.  11.c  22c    3.c      5.c  col   res.zip
```
    
