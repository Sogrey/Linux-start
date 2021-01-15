# cksum - 检查文件的crc是否正确

检查文件的crc是否正确，统计文件的字节数.

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
cksum  [选项]  file
```

## 选项

``` bash
--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

## 举例

``` bash
[sogrey@bogon 文档]$ ls
backup  demos
[sogrey@bogon 文档]$ cd demos
[sogrey@bogon demos]$ ls
test2.txt  test3.txt  test4.txt  test.c  test.txt
[sogrey@bogon demos]$ cksum test.c
# crc校验 字节数 文件名   
4294967295 0 test.c
[sogrey@bogon demos]$ cksum test.txt
# crc校验 字节数 文件名   
3701171500 250 test.txt
[sogrey@bogon demos]$ 
```
