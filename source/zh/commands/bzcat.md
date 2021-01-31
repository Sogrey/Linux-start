# bzcat - 解压缩指定的.bz2文件
bzcat命令 解压缩指定的.bz2文件，并显示解压缩后的文件内容。保留原压缩文件，并且不生成解压缩后的文件。


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
bzcat  [-s]  文件
```

## 选项

``` bash
-s   # 降低程序运行时内存使用
```
## 举例

解压文件到标准输出
``` bash
[root@localhost weijie]$ cat 2.c
123
23
212
[root@localhost weijie]$ bzcat -s 2.c.bz2 #将文件解压到标准输出
123
23
212
```