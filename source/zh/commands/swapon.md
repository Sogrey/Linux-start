# swapon - 激活Linux系统中交换空间
swapon命令 用于激活Linux系统中交换空间，Linux系统的内存管理必须使用交换区来建立虚拟内存。

在指定的设备上启用交换分区，使用的设备或文件由专用文件参数提供。它可以是”-L label”或”-U UUID”，以指示一个设备的标签或UUID。对swapon的调用通常发生在系统引导脚本中，使所有交换设备都可用，因此分页和交换活动交叉在多个设备和文件之间。

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
swapon  -s  [-h]  [-V]
swapon  [-f]  [-p priority]  [-v]  specialfile...
swapon  -a  [-e]  [-f]  [-v]
```

## 选项

``` bash
-v, --verbose              # 执行的时候显示详细信息
-a, --all                  # 打开所有的交换分区。除具有“noauto”选项的设备外，所有标记为“/etc/fstab”中“swap”的设备都是可用的。已经用作交换的设备将被悄悄跳过。
-e, --ifexists             # 跳过不存在的设备
-f,  --fixpgsz             # 如果交换空间的页大小与当前运行的内核不匹配，则重新初始化(exec/sbin/mkswap)。mkswap(2)初始化整个设备，不检查是否存在错误块。
-L label                   # 启动指定label的交换分区，为此，需要访问/proc/分区。
-p                         # 设置优先权0~32767，数字越大，优先权越高。将“pri=value”添加到与“swapon -a”一起使用的“/etc/fstab”选项字段中。
-s, --summary              # 按设备显示交换用途摘要，等价于“cat /proc/swaps “
-U uuid                    # 启动指定uuid的交换分区

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 说明
您不应该在有漏洞的文件上使用swapon。交换NFS可能无法工作。swapon会自动检测并用旧的软件挂起数据重写交换空间签名(例如S1SUSPEND，S2SUSPEND，.)。问题是，如果我们不这样做，那么我们将在下一次尝试取消挂起时数据损坏。
## 举例
启动sdb4
``` bash
[root@localhost ~]$ swap     #创建交换分区
Setting up swapspace version 1, size = 16380 KiB
LABEL=wj, UUID=aec14728-0f33-4676-8bef-612ea1bdf985
[root@localhost ~]$ swapon /dev/sdb4      #启用交换分区
[root@localhost ~]$ swapon -s /dev/sdb4   #查看信息
Filename             Type       Size   Used   Priority
/dev/sdb4               partition 16376  0       -1
[root@localhost ~]$
```
以标签的形式启动
``` bash
[root@localhost ~]$ blkid -c /dev/null   #找到交换分区的UUID
/dev/sda1: UUID="059facc9-c58e-42d0-b8f5-7644c4574888" TYPE="ext4"
/dev/sda2: UUID="z3WRza-EIUl-dib9-7CGq-zRYt-DMdL-jT2ld9" TYPE="LVM2_member"
/dev/mapper/VolGroup-lv_root: UUID="9ad51e8e-3700-45a8-a195-531a95ff717d" TYPE="ext4"
/dev/mapper/VolGroup-lv_swap: UUID="2ebcaf57-3c6a-45be-8f34-3326d1fa1762" TYPE="swap" 
[root@localhost ~]$ free    #查看
             total       used       free     shared    buffers     cached
Mem:       1659316    1601620      57696          0     261664    1075780
-/+ buffers/cache:     264176    1395140
Swap:            0          0          0
[root@localhost ~]$ swapon -U 2ebcaf57-3c6a-45be-8f34-3326d1fa1762   #启动交换分区
[root@localhost ~]$ free    #查看
             total       used       free     shared    buffers     cached
Mem:       1659316    1604132      55184          0     261684    1075780
-/+ buffers/cache:     266668    1392648
Swap:      2940920          0    2940920
[root@localhost ~]$  
```
