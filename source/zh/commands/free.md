# free - 显示内存的使用情况

free命令 可以显示当前系统未使用的和已使用的内存数目，还可以显示被内核使用的内存缓冲区。

free指令用来显示内存的使用情况，显示系统中可用和已使用的物理和交换内存的总量，以及内核使用的缓冲区。应该忽略共享内存列；它已经过时了。
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
free  [OPTION]
```

## 选项

``` bash
-b     # 显示内存使用情况，单位byte
-k     # 显示内存使用情况，单位KB
-m     # 显示内存使用情况，单位MB
-o     # 不显示缓冲区调节行
-t     # 显示内存总和
-s     # 按照指定的时间间隔显示内存使用情况
-l     # 显示详细的低内存和高内存提高统计数据
-V     # 显示命令的版本并退出
```
## 举例
以kb为单位显示
``` bash
[sogrey@bogon ~]$  free –k # 以kb为单位显示
              total        used        free      shared  buff/cache   available
Mem:        4380708      819580     2827380       12040      733748     3320896
Swap:       4587516           0     4587516
[sogrey@bogon ~]$ 
```
以MB为单位显示
``` bash
[sogrey@bogon ~]$ free -m –t  # 以MB为单位显示，同时显示总和
              total        used        free      shared  buff/cache   available
Mem:           4278         801        2760          11         716        3242
Swap:          4479           0        4479
[sogrey@bogon ~]$ 
```
