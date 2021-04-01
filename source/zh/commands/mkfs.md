# mkfs - 用于在设备上创建Linux文件系统

mkfs命令 用于在设备上（通常为硬盘）创建Linux文件系统。mkfs本身并不执行建立文件系统的工作，而是去调用相关的程序来执行。

在磁盘分区上创建ext2、ext3、ext4、ms-dos、vfat文件系统，默认情况下会创建ext2。mkfs用于在设备上构建Linux文件系统，通常是硬盘分区。文件要么是设备名称(例如/dev/hda1，/dev/sdb2)，要么是包含文件系统的常规文件。成功返回0，失败返回1。

实际上，mkfs只是Linux下可用的各种文件系统构建器(mkfs.fstype)的前端，在可能/sbin、/sbin/fs、/sbin/fs.d、/etc/fs、/etc/fs等多个目录中搜索特定于文件系统的生成器(编译时定义了精确的列表，但至少包含/sbin和/sbin/fs)，最后在PATH环境变量中列出的目录中搜索。

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
mkfs  [-V]  [-t fstype]  [fs-options]  filesys  [blocks]
```

## 选项

``` bash
-t                  # 指定文件系统类型，默认ext2
fs-options          # 传递给真正的文件系统构建器的特定选项。虽然没有保证，但大多数文件系统构建器都支持下列选项
-l filename         # 从指定文件中读取坏块列表
-c                  # 创建文件系统之前进行坏道检测
-v                  # 显示详细执行过程

-V                  # 显示命令版本信息
```
## 举例
在/dev/hda5上建一个msdos的档案系统，同时检查是否有坏轨存在，并且将过程详细列出来：
``` bash
mkfs -V -t msdos -c /dev/hda5
mkfs -t ext3 /dev/sda6    #将sda6分区格式化为ext3格式
mkfs -t ext2 /dev/sda7    #将sda7分区格式化为ext2格式
```
