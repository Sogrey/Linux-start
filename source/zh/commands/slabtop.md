# slabtop - 实时显示内核slab内存缓存信息

slabtop命令 以实时的方式显示内核“slab”缓冲区的细节信息。

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
slabtop  [OPTION]
```

## 选项

``` bash
-d n, --delay=n                  # 设置显示的时间间隔
-s S, --sort=S                   # 设置排序规则。a，以活动对象数目排序；b，以每个slab对象数目排序；c，以缓存大小排序；l，以slab数量排序；v，以多动的slab排序；n，以名字排序；o，以对象数目排序；p，以每slab的页数排序；u，以缓存利用率排序
-o, --once                       # 只显示一次，之后退出

--help                           # 显示帮助文档
-V, --version                    # 显示命令版本信息
```
## 扩展
内核的模块在分配资源的时候，为了提高效率和资源的利用率，都是透过slab来分配的。通过slab的信息，再配合源码能粗粗了解系统的运行情况，比如说什么资源有没有不正常的多，或者什么资源有没有泄漏。linux系统透过/proc/slabinfo来向用户暴露slab的使用情况。

Linux 所使用的 slab 分配器的基础是 Jeff Bonwick 为 SunOS 操作系统首次引入的一种算法。Jeff 的分配器是围绕对象缓存进行的。在内核中，会为有限的对象集（例如文件描述符和其他常见结构）分配大量内存。Jeff 发现对内核中普通对象进行初始化所需的时间超过了对其进行分配和释放所需的时间。因此他的结论是不应该将内存释放回一个全局的内存池，而是将内存保持为针对特定目而初始化的状态。Linux slab 分配器使用了这种思想和其他一些思想来构建一个在空间和时间上都具有高效性的内存分配器。

保存着监视系统中所有活动的 slab 缓存的信息的文件为/proc/slabinfo。
## 举例
显示slab信息
``` bash
[root@localhost ntop-4.0.1]$ slabtop -d 5             # 每5s显示一次
Active / Total Objects (% used)    : 434059 / 438446 (99.0%)
 Active / Total Slabs (% used)      : 23317 / 23318 (100.0%)
 Active / Total Caches (% used)     : 104 / 200 (52.0%)
 Active / Total Size (% used)       : 87844.50K / 88275.36K (99.5%)
 Minimum / Average / Maximum Object : 0.01K / 0.20K / 4096.00K 

  OBJS ACTIVE  USE OBJ SIZE  SLABS OBJ/SLAB CACHE SIZE NAME         
120321 120297  99%    0.13K   4149   29     16596K dentry
 64722  64605  99%    0.05K    966   67 3864K buffer_head
 50178  50170  99%    0.63K   8363        6     33452K ext4_inode_cache
 47870  47846  99%    0.38K   4787   10     19148K proc_inode_cache
…
```
显示slab信息，并且排序
``` bash
[root@localhost ntop-4.0.1]$ slabtop -d 10 -s n       # 按名字排序，每10s显示一次
Active / Total Objects (% used)    : 433100 / 438274 (98.8%)
 Active / Total Slabs (% used)      : 23307 / 23307 (100.0%)
 Active / Total Caches (% used)     : 104 / 200 (52.0%)
 Active / Total Size (% used)       : 87750.19K / 88220.52K (99.5%)
 Minimum / Average / Maximum Object : 0.01K / 0.20K / 4096.00K 

  OBJS ACTIVE  USE OBJ SIZE  SLABS OBJ/SLAB CACHE SIZE NAME 
   290    261  90%    0.02K   2  145         8K Acpi-Namespace
  1564   1501  95%    0.04K     17 92        68K Acpi-Operand
     0      0   0%    0.03K 0  113         0K Acpi-Parse
     0      0   0%    0.05K 0  78         0K Acpi-ParseExt
     0      0   0%    0.04K 0  84         0K Acpi-State
     0      0   0%    0.56K 0        7         0K PING
     7      2  28%    0.56K 1        7         4K RAW
     5      4  80%    0.75K 1        5         4K RAWv6
…
```
