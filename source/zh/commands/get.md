# get - 登录ftp服务器之后从服务器获取文件

使用lftp登录ftp服务器之后，可以使用get指令从服务器获取文件。

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
get  [-E]  [-a]  [-c]  [-O base]  rfile  [-o lfile]
```

## 选项

``` bash
-o     # 指定输出文件的名字，不指定则使用原来的名字
-c     # 如果失败，持续获取
-E     # 获取之后，删除源文件
-a     # 使用ascii模式
-O     # 指定输出文件存放的目录
```
## 举例

获取文件，指定存储的名字
``` bash
[root@localhost ~]$ lftp 192.168.1.8         #登录ftp服务器
lftp 192.168.1.8:~> ls
drwxr-xr-x    2 0        0            4096 Aug 14 06:38 pub
lftp 192.168.1.8:/> cd pub/                 #切换目录
lftp 192.168.1.8:/pub> ls                  #查看文件
-rwxrwxrwx    1 0        0        2375494044 Aug 14 06:38 1.zip
-rw-r--r--    1 0        0               0 Aug 14 03:38 test.c
lftp 192.168.1.8:/pub> get test.c -o testtt.c    #获取文件，存储名字为testtt.c
lftp 192.168.1.8:/pub> quit                      #退出
[root@localhost ~]$ ls                           #查看内容，已经获取到文件。文件存储在当前目录
1   11.c  1.zip  2.c.bz2  4.c  6.c~  rec000012.c.bz2  testtt.c
1.  1.c   2.c    3.c      5.c  col   res.zip
```
获取文件，指定存储位置
``` bash
[root@localhost ~]$ lftp 192.168.1.8         #登录服务器
lftp 192.168.1.8:~> cd pub/                    #切换目录
lftp 192.168.1.8:/pub> get  -O / test.c       #获取文件，指定存储位置到根目录
lftp 192.168.1.8:/pub> quit                   #退出
[root@localhost ~]$ ls /                      #查看更目录，已经得到文件
bak   dev   lib         misc  opt   sbin     sys     usr     wj
bin   etc   lost+found  mnt   proc  selinux  test.c  var
boot  home  media       net   root  srv      tmp     admin
```
    

 


