# mknod - 创建字符设备文件和块设备文件

mknod命令 用于创建Linux中的字符设备文件和块设备文件。

创建块设备或者字符设备文件。

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
mknod  [选项]  设备名  设备类型  主设备号  次设备号
```

## 选项

``` bash
--help                           # 显示帮助文档
--version                        # 显示命令版本信息

-m, --mode=MODE                  # 设置权限
-Z, --context=CTX                # 设置SELinux的安全上下文
设备类型                          # b，块设备；c，字符设备；u，没有缓冲的字符设备；p，fifo设备
设备号                            # 只能是十进制和八进制，如果是0x开头，那么还是十进制。对于b、c、u设备，必须给出设备号，对于p设备，必须忽略设备号
```
当类型为b、c或u时，必须同时指定主设备号和次设备号；当类型为p时，必须省略它们。如果主设备号或次设备号以0x或0x开头，则解释为十六进制；否则，如果以0开头为八进制，其他为十进制。
## 扩展知识
Linux的设备管理是和文件系统紧密结合的，各种设备都以文件的形式存放在/dev目录 下，称为设备文件。应用程序可以打开、关闭和读写这些设备文件，完成对设备的操作，就像操作普通的数据文件一样。

为了管理这些设备，系统为设备编了号，每 个设备号又分为主设备号和次设备号。主设备号用来区分不同种类的设备，而次设备号用来区分同一类型的多个设备。对于常用设备，Linux有约定俗成的编 号，如硬盘的主设备号是3。

Linux为所有的设备文件都提供了统一的操作函数接口，方法是使用数据结构struct file_operations。这个数据结构中包括许多操作函数的指针，如open()、close()、read()和write()等，但由于外设 的种类较多，操作方式各不相同。Struct file_operations结构体中的成员为一系列的接口函数，如用于读/写的read/write函数和用于控制的ioctl等。

打开一个文件就是调用这个文件file_operations中的open操作。不同类型的文件有不同的file_operations成员函数，如普通的磁盘数据文件， 接口函数完成磁盘数据块读写操作；而对于各种设备文件，则最终调用各自驱动程序中的I/O函数进行具体设备的操作。这样，应用程序根本不必考虑操作的是设 备还是普通文件，可一律当作文件处理，具有非常清晰统一的I/O接口。所以file_operations是文件层次的I/O接口
## 举例
创建块设备文件
``` bash
[root@bogon 文档]$ mknod /dev/sdb4 b 1 1      #创建一个设备
[root@bogon 文档]$ ls -l /dev/sdb4
brw-r--r-- 1 root root 1, 1 9月   7 08:21 /dev/sdb4
```

创建字符设备文件
``` bash
[root@bogon 文档]$ mknod /dev/ttywj c 2 1   #创建一个设备
[root@bogon 文档]$ ls -l /dev/ttywj
crw-r--r-- 1 root root 2, 1 9月   7 09:42 /dev/ttywj
```
