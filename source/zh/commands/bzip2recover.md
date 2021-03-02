# bzip2recover - 恢复被破坏的.bz2压缩包中的文件

bzip2recover命令 可用于恢复被破坏的“.bz2”压缩包中的文件。

修复损坏的bzip2文件，bzip2以区块的方式来压缩，每一个区块都可以当做一个单位，当区块损坏之后，可以使用bzip2recover修复。

bzip2是以区块的方式来压缩文件，每个区块视为独立的单位。因此，当某一区块损坏时，便可利用bzip2recover，试着将文件中的区块隔开来，以便解压缩正常的区块。通常只适用在压缩文件很大的情况。


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
bzip2recover  file
```

## 选项

无

## 举例

``` bash
[sogrey@bogon 文档]$ bzip2recover 2.c.bz2
bzip2recover 1.0.5: extracts blocks from damaged .bz2 files.
bzip2recover: searching for block boundaries ...
   block 1 runs from 80 to 273
bzip2recover: splitting into blocks
   writing block 1 to `rec000012.c.bz2' ...
bzip2recover: finished
```
