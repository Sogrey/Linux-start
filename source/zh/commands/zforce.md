# zforce - 强制gzip格式的文件使用gz后缀名

这样可以防止gzip被压缩两次。


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
zforce   gzip格式文件
```

## 选项

无

## 举例

``` bash
[sogrey@bogon 文档]$ ll
总用量 16
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 1.c
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 2.c
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 3.c
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rw-------. 1 sogrey sogrey  12 3月   9 00:43 list.txt
-rwx------. 1 sogrey sogrey  90 3月   9 00:23 run.sh
[sogrey@bogon 文档]$ gzip file1.txt 
[sogrey@bogon 文档]$ ll
总用量 16
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 1.c
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 2.c
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 3.c
-rw-------. 1 sogrey sogrey 337 3月   8 23:50 file1.txt.gz
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rw-------. 1 sogrey sogrey  12 3月   9 00:43 list.txt
-rwx------. 1 sogrey sogrey  90 3月   9 00:23 run.sh
[sogrey@bogon 文档]$ zforce file1.txt.gz 
[sogrey@bogon 文档]$ ll
总用量 16
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 1.c
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 2.c
-rw-------. 1 sogrey sogrey   0 3月   9 00:44 3.c
-rw-------. 1 sogrey sogrey 337 3月   8 23:50 file1.txt.gz
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rw-------. 1 sogrey sogrey  12 3月   9 00:43 list.txt
-rwx------. 1 sogrey sogrey  90 3月   9 00:23 run.sh
[sogrey@bogon 文档]$ 
```
