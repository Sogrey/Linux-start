# resize2fs - 调整ext2\ext3\ext4文件系统的大小

调整ext2\ext3\ext4文件系统的大小，它可以放大或者缩小没有挂载的文件系统的大小。如果文件系统已经挂载，它可以扩大文件系统的大小，前提是内核支持在线调整大小。

size参数指定所请求的文件系统的新大小。如果没有指定任何单元，那么size参数的单位应该是文件系统的文件系统块大小。size参数可以由下列单位编号之一后缀：“s”、“K”、“M”或“G”，分别用于512字节扇区、千字节、兆字节或千兆字节。文件系统的大小可能永远不会大于分区的大小。如果未指定Size参数，则它将默认为分区的大小。

resize2fs程序不操作分区的大小。如果希望扩大文件系统，必须首先确保可以扩展基础分区的大小。如果您使用逻辑卷管理器LVM(8)，可以使用fdisk(8)删除分区并以更大的大小重新创建它，或者使用lvexport(8)。在重新创建分区时，请确保使用与以前相同的启动磁盘圆柱来创建分区！否则，调整大小操作肯定无法工作，您可能会丢失整个文件系统。运行fdisk(8)后，运行resize2fs来调整ext 2文件系统的大小，以使用新扩大的分区中的所有空间。

如果希望缩小ext2分区，请首先使用resize2fs缩小文件系统的大小。然后可以使用fdisk(8)缩小分区的大小。缩小分区大小时，请确保不使其小于ext2文件系统的新大小。



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
resize2fs  [选项]  device  [size]
resize2fs  [ -fFpPM ]  [ -d debug-flags ]  [ -S RAID-stride ]  device  [ size ]
```

## 选项

``` bash
-d debug-flags         # 打开各种resize2fs调试特性，如果它们已经编译成二进制文件的话。调试标志应该通过从以下列表中添加所需功能的数量来计算：
                       # 2，调试块重定位。
                       # 4，调试iNode重定位。
                       # 8，调试移动inode表。
-f                     # 强制执行，覆盖一些通常强制执行的安全检查。
-F                     # 执行之前，刷新文件系统的缓冲区
-M                     # 将文件系统缩小到最小值
-p                     # 显示已经完成任务的百分比
-P                     # 显示文件系统的最小值
-S RAID-stride         # resize2fs程序将启发式地确定在创建文件系统时指定的RAID步长。此选项允许用户显式地指定RAID步长设置，以便由resize2fs代替。
```
## 举例
显示sda1最小值
``` bash
[root@localhost ~]$ resize2fs -P /dev/sda1
resize2fs 1.41.12 (17-May-2010)
Estimated minimum size of the filesystem: 37540
```
设置sdb4为1k
``` bash
[root@localhost ~]$ resize2fs /dev/sdb4 1k
resize2fs 1.41.12 (17-May-2010)
resize2fs: New size smaller than minimum (373)  #小于最小值，失败
```