# mkswap - 建立和设置SWAP交换分区

mkswap命令 用于在一个文件或者设备上建立交换分区。在建立完之后要使用sawpon命令开始使用这个交换区。最后一个选择性参数指定了交换区的大小，但是这个参数是为了向后兼容设置的，没有使用的必要，一般都将整个文件或者设备作为交换区。

在Linux设备或者文件中创建交换分区，创建完成之后必须使用swapon来使用它。一般在“/etc/fstab”中有一个交换分区列表，这样开机的时候就可以使用它。

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
mkswap  [-c]  [-f]  [-p PSZ]  [-L label]  [-U uuid]  device  [size]
```
参数device通常是一个磁盘分区(类似于/dev/sdb7)，但也可以是一个文件。Linux内核不查看分区ID，但是许多安装脚本将假定十六进制类型82(Linux_SWAP)的分区是交换分区。(警告：Solaris也使用此类型。小心不要关闭Solaris分区。)

参数size是多余的，但为了向后兼容性而保留

PSZ参数指定要使用的页大小。指定它几乎是不必要的(甚至是不明智的)，但是某些旧的libc版本是关于页面大小的，所以mkswap有可能弄错了它。症状是后续Swapon失败了，因为没有找到交换签名。PSZ的典型值为4096或8192。
## 选项

``` bash
-c            # 创建交换分区之前，检测坏块。如果有，那么打印出数量。
-f            # 强制执行。如果没有此选项，mkswap将拒绝擦除带有分区表的设备上的第一个块或整个磁盘上的第一个块(例如/dec/sda)。
-p            # 设置页大小，默认4096。一般是不需要指定这个参数的
-L label      # 指定一个label，方便swapon使用。只适用于新的风格交换区域
-v1           # 创建v1版本的swap分区，2.5内核之后只支持这种的
-U uuid       # 指定uuid，默认情况会生成uuid
```
## 说明
交换头不触及第一个块。引导加载程序或磁盘标签可以在那里，但不建议安装。建议的设置是为Linux交换区域使用单独的分区。mkswap和许多其他类似mkfs的实用程序一样，擦除了第一块，这样就可以删除磁盘上的旧系统。mkswap拒绝擦除带有磁盘标签的设备上的第一个块，或者整个磁盘。

交换区域的最大有用大小取决于体系结构和内核版本，在i386、PPC、m68k、ARM、sparc上为1 GiB、MIPS上为512 MiB、alpha上为128 GiB、sparc64上为3 TiB。对于2.3.3以后的内核来说，没有这样的限制。请注意，在2.1.117之前，内核为每个页面分配了一个字节，而现在它分配了两个字节，因此使用中的交换区域2 GIB可能需要2个MIB内核内存。

目前，Linux允许32个交换区域(这是Linux2.4.10之前的8个)。使用中的区域可以在文件“/proc/swaps”中看到(自2.1.25以来)。mkswap拒绝10页以下的区域。如果您不知道您的机器使用的页面大小，您可能可以使用“cat /proc/cpuinfo”查找它。

若要设置交换文件，必须在使用mkswap初始化该文件之前创建该文件，例如使用以下命令：
``` bash
# dd if=/dev/zero of=swapfile bs=1024 count=65536
```
注意，交换文件不能包含任何漏洞(因此，使用cp(1)创建该文件是不可接受的)

 
## 举例
创建交换分区，指定页大小2048
``` bash
[root@bogon ~]$ mkswap -p 2048 /dev/sdb4    #这里指定页大小2048，取代了系统默认的4096
Using user-specified page size 2048, instead of the system value 4096
Setting up swapspace version 1, size = 16382 KiB
no label, UUID=42f07b0e-0adb-47b6-a906-1209efabb981
```
创建交换分区，指定页大小4096，指定label
``` bash
[root@bogon ~]$ mkswap -p 4096 -L wj /dev/sdb4   #笔者当前的系统，不能使用2048大小的页
Setting up swapspace version 1, size = 16380 KiB
LABEL=wj, UUID=c458a15d-50ee-4e10-a49b-b59add4879d5
```
使用交换分区
``` bash
[root@bogon ~]$ swapon /dev/sdb4        #使用指定的分区
[root@bogon ~]$ swapon –s               #查看分区使用情况
Filename       Type       Size     Used   Priority
/dev/dm-1      partition  2940920  0      -1
/dev/sdb4      partition  16376    0      -2
```