# gzexe - 用来压缩可执行文件

gzexe命令 用来压缩可执行文件，压缩后的文件仍然为可执行文件，在执行时进行自动解压缩。当您去执行被压缩过的执行文件时，该文件会自动解压然后继续执行，和使用一般的执行文件相同。这个命令也可以看成是gunzip命令的一个扩展。


压缩可执行文件，在执行程序的时候可以自动实现解压。


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
gzexe  file
```

## 选项

``` bash
-d                               # 解压

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例
压缩ls指令
``` bash
[sogrey@bogon 文档]$ ll
总用量 12
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rwx------. 1 sogrey sogrey  90 3月   7 12:08 run.sh
[sogrey@bogon 文档]$ gzexe run.sh # 压缩，原来的指令文件变为run.sh~
run.sh:	  7.8%
[sogrey@bogon 文档]$ ll
总用量 16
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rwx------. 1 sogrey sogrey 909 3月   9 00:19 run.sh
-rwx------. 1 sogrey sogrey  90 3月   7 12:08 run.sh~
[sogrey@bogon 文档]$ 
```
解压ls指令
``` bash
[sogrey@bogon 文档]$ ll
总用量 16
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rwx------. 1 sogrey sogrey 909 3月   9 00:19 run.sh
[sogrey@bogon 文档]$ gzexe -d run.sh  # 解压
[sogrey@bogon 文档]$ ll # 解压之后，原来的压缩包变为run.sh~
总用量 20
-rw-------. 1 sogrey sogrey 415 3月   8 23:50 file1.txt
-rw-------. 1 sogrey sogrey 576 3月   8 23:51 file2.txt
-rwx------. 1 sogrey sogrey  90 3月   9 00:23 run.sh
-rwx------. 1 sogrey sogrey  90 3月   7 12:08 run.sh~
[sogrey@bogon 文档]$ 
```