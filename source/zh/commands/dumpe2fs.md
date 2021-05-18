# dumpe2fs - 显示ext2、ext3、ext4文件系统的超级快和块组信息



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
dumpe2fs  [ -bfhixV ]  [ -o superblock=superblock ]  [ -o blocksize=blocksize ]  device
```

## 选项

``` bash
-b                             # 显示文件系统中保留的损坏块
-o superblock=superblock       # 检查文件系统时，使用指定大小的超级块。此选项通常不需要，除非文件系统向导正在检查严重损坏的文件系统的剩余部分。
-o blocksize=blocksize         # 检查文件系统时，指定块大小。此选项通常不需要，除非文件系统向导正在检查严重损坏的文件系统的剩余部分。
-f                             # 强制执行
-h                             # 只显示超级块信息，而不显示任何块组描述符详细信息
-i                             # 显示从e2image获得的文件系统信息，使用设备作为image文件的路径名。
-x                             # 以十六进制显示文件系统信息
-V                             # 显示命令版本信息，并且退出
```
## 举例
显示sdb4的组块信息
``` bash
[root@localhost ~]$ dumpe2fs /dev/sdb4
dumpe2fs 1.41.12 (17-May-2010)
Filesystem volume name:   <none>
Last mounted on:          <not available>
Filesystem UUID:          e2a0cb30-f3ca-47de-92b8-780296960d93
Filesystem magic number:  0xEF53
Filesystem revision #:    1 (dynamic)
... 

Group 0: (Blocks 1-8192)
  主 superblock at 1, Group descriptors at 2-2
  保留的GDT块位于 3-65
  Block bitmap at 66 (+65), Inode bitmap at 67 (+66)
  Inode表位于 68-323 (+67)
  7855 free blocks, 2037 free inodes, 2 directories
  可用块数: 338-8192
  可用inode数: 12-2048
Group 1: (Blocks 8193-16383)
...
```
