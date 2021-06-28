# insmod - 将给定的模块加载到内核中

insmod命令 用于将给定的模块加载到内核中。Linux有许多功能是通过模块的方式，在需要时才载入kernel。如此可使kernel较为精简，进而提高效率，以及保有较大的弹性。这类可载入的模块，通常是设备驱动程序。

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
insmod [OPTION] [参数]
```
内核模块：指定要加载的内核模块文件。

## 选项

``` bash
-f             # 不检查目前kernel版本与模块编译时的kernel版本是否一致，强制将模块载入；
-k             # 将模块设置为自动卸除；
-m             # 输出模块的载入信息；
-o<模块名称>    # 指定模块的名称，可使用模块文件的文件名；
-p             # 测试模块是否能正确地载入kernel；
-s             # 将所有信息记录在系统记录文件中；
-v             # 执行时显示详细的信息；
-x             # 不要汇出模块的外部符号；
-X             # 汇出模块所有的外部符号，此为预设置。
```
## 举例
加载RAID1阵列级别模块，如下所示
``` bash
[root@localhost boot]$ insmod /lib/modules/2.6.
18-8.el5/kernel/drivers/md/raid1.ko  

[root@localhost boot]$ lsmod | grep raid1
raid1                  25153  0
```

从以上显示结果可知，RAID1模块已加载成功。只是在使用insmod命令加载模块时，需要使用绝对路径方能加载，且加载时无法自动解决依赖关系。