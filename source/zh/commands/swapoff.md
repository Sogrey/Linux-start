# swapoff - 关闭指定的交换空间

swapoff命令 用于关闭指定的交换空间（包括交换文件和交换分区）。swapoff实际上为swapon的符号连接，可用来关闭系统的交换区。

关闭交换分区，同时可以刷新交换分区的缓存。关闭交换分区后，使用free指令查看内存，swap数值会减少。

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
swapoff  [-v]  specialfile...
swapoff  -a  [-v]
```

## 选项

``` bash
-v, --verbose             # 执行的时候显示详细信息
-a, --all                 # 关闭所有的交换分区

-V, --version             # 显示版本信息
-h, --help                # 显示帮助文档
```
## 举例
关闭所有的交换分区
``` bash
[root@bogon ~]$ swapoff –a   #关闭所有交换分区
[root@bogon ~]$ free     #查看内存使用状态
        total       used       free     shared    buffers   cached
Mem:    1659316     678908     980408     0       85608     369308
-/+ buffers/cache:     223992    1435324
Swap:            0          0          0          #swap分区不使用
```
