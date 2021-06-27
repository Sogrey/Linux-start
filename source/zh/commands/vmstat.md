# vmstat - 显示虚拟内存状态
vmstat命令 的含义为显示虚拟内存状态（“Viryual Memor Statics”），但是它可以报告关于进程、内存、I/O等系统整体运行状态。
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
vmstat  [-a]  [-n]  [-t]  [-S unit]  [delay [ count]]
vmstat  [-s]  [-n]  [-S unit]
vmstat  [-m]  [-n]  [delay [ count]]
vmstat  [-d]  [-n]  [delay [ count]]
vmstat  [-p disk partition]  [-n]  [delay [ count]]
vmstat  [-f]
vmstat  [-V]
```

## 选项

``` bash
-a           # 显示使用和非使用的虚拟内存状态
-f           # 显示开机之后fork的使用情况
-t           # 增加时间戳到输出
-m           # 显示slab信息
-n           # 显示一次头信息，而不是间隔性的显示
-d           # 显示磁盘使用情况      
-w           # -w增大了大内存的字段宽度。
-p           # -p后面跟着一些分区名称以进行详细统计(所需的2.5.70或更高内核)
-S           # 设置容量单位。可是k、K、m、M，分别代表1000，1024，1000000，1048576字节
-V           # 显示版本信息
```
## 字段说明

Procs（进程）

- r: 运行队列中进程数量，这个值也可以判断是否需要增加CPU。（长期大于1）
- b: 等待IO的进程数量。

Memory（内存）

- swpd: 使用虚拟内存大小，如果swpd的值不为0，但是SI，SO的值长期为0，这种情况不会影响系统性能。
- free: 空闲物理内存大小。
- buff: 用作缓冲的内存大小。
- cache: 用作缓存的内存大小，如果cache的值大的时候，说明cache处的文件数多，如果频繁访问到的文件都能被cache处，那么磁盘的读IO bi会非常小。

Swap

- si: 每秒从交换区写到内存的大小，由磁盘调入内存。
- so: 每秒写入交换区的内存大小，由内存调入磁盘。

注意：内存够用的时候，这2个值都是0，如果这2个值长期大于0时，系统性能会受到影响，磁盘IO和CPU资源都会被消耗。有些朋友看到空闲内存（free）很少的或接近于0时，就认为内存不够用了，不能光看这一点，还要结合si和so，如果free很少，但是si和so也很少（大多时候是0），那么不用担心，系统性能这时不会受到影响的。

IO（现在的Linux版本块的大小为1kb）

- bi: 每秒读取的块数
- bo: 每秒写入的块数

注意：随机磁盘读写的时候，这2个值越大（如超出1024k)，能看到CPU在IO等待的值也会越大。

system（系统）

- in: 每秒中断数，包括时钟中断。
- cs: 每秒上下文切换数。

注意：上面2个值越大，会看到由内核消耗的CPU时间会越大。

CPU（以百分比表示）

- us: 用户进程执行时间百分比(user time)

us的值比较高时，说明用户进程消耗的CPU时间多，但是如果长期超50%的使用，那么我们就该考虑优化程序算法或者进行加速。

- sy: 内核系统进程执行时间百分比(system time)

sy的值高时，说明系统内核消耗的CPU资源多，这并不是良性表现，我们应该检查原因。

- wa: IO等待时间百分比

wa的值高时，说明IO等待比较严重，这可能由于磁盘大量作随机访问造成，也有可能磁盘出现瓶颈（块操作）。

- id: 空闲时间百分比

## 说明
vmstat不需要特殊权限。这些报告旨在帮助识别系统瓶颈。Linux vmstat并不将自己视为一个正在运行的进程。所有Linux块当前为1024字节。旧内核可以将块报告为512字节、2048字节或4096字节。因为prps 3.1.9，vmstat允许您在默认模式下选择单位(k，K，m，M)默认为K(1024字节)。vmstat使用slabinfo 1.1修补程序
## 举例

显示虚拟内存使用情况
``` bash
[sogrey@bogon ~]$  vmstat -a
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free  inact active   si   so    bi    bo   in   cs us sy id wa st
 4  0      0 2840808 514380 818456    0    0  1246   179  976 1025 56 16 28  0  0
[sogrey@bogon ~]$ 
```
显示开机后fork使用状况
``` bash
[sogrey@bogon ~]$  vmstat -f
        24517 forks
[sogrey@bogon ~]$ 
```
显示磁盘信息
``` bash
[sogrey@bogon ~]$  vmstat -d
disk- ------------reads------------ ------------writes----------- -----IO------
       total merged sectors      ms  total merged sectors      ms    cur    sec
sda    16869   5501 1319134   38545   3545  11458  192064   33931      0     33
sr0        0      0       0       0      0      0       0       0      0      0
dm-0   20997      0 1227338   27533  13413      0  180064  435921      0     15
dm-1      94      0    4456      27      0      0       0       0      0      0
dm-2     884      0   27970   24174   1424      0   11856    3590      0     23
[sogrey@bogon ~]$ 
```