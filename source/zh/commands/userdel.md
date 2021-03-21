# userdel - 用于删除给定的用户以及与用户相关的文件
userdel命令 用于删除给定的用户，以及与用户相关的文件。若不加选项，则仅删除用户帐号，而不删除相关文件。

删除用户，如果没有附加选项，仅删除用户，不删除相关文件。

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
userdel  [-r]  user
```

## 选项

``` bash
-r                               # 删除用户的同时，删除其相关文件

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

userdel命令很简单，比如我们现在有个用户linuxde，其家目录位于/var目录中，现在我们来删除这个用户：
``` bash
userdel linuxde       # 删除用户linuxde，但不删除其家目录及文件；
userdel -r linuxde    # 删除用户linuxde，其家目录及文件一并删除；
```
请不要轻易用-r选项；他会删除用户的同时删除用户所有的文件和目录，切记如果用户目录下有重要的文件，在删除前请备份。

其实也有最简单的办法，但这种办法有点不安全，也就是直接在/etc/passwd中删除您想要删除用户的记录；但最好不要这样做，/etc/passwd是极为重要的文件，可能您一不小心会操作失误。


不使用选项，删除用户
``` bash
[sogrey@bogon ~]$ tail -n 2 /etc/passwd
userTmp:x:1001:1001::/home/userTmp:/bin/bash
user02:x:600:1002:test user:/home/other:/bin/bash
[sogrey@bogon ~]$ sudo userdel userTmp #删除用户
[sogrey@bogon ~]$ ls /home/ #相关文件还存在
lost+found  other  sogrey  userTmp
[sogrey@bogon ~]$ 
```
删除用户所有信息
``` bash
[sogrey@bogon ~]$ sudo userdel -r userTmp #删除用户，使用-r
[sogrey@bogon ~]$ ls /home/ #相关文件也删除
lost+found  other  sogrey
```
