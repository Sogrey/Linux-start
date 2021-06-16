# df - 显示磁盘的相关信息
df命令 用于显示磁盘分区上的可使用的磁盘空间。默认显示单位为KB。可以利用该命令来获取硬盘被占用了多少空间，目前还剩下多少空间等信息。

显示磁盘分区上的磁盘使用状况，可以显示出文件系统名称、大小、挂载点等信息。df显示包含每个文件名参数的文件系统上可用的磁盘空间。如果不给出文件名，则显示所有当前挂载的文件系统上可用的空间。默认情况下，磁盘空间显示在1K的块中，除非设置了环境变量POSIXLY_RIDER，在这种情况下使用512个字节块。

如果参数是包含已挂载文件系统的磁盘设备节点的绝对文件名，df将显示该文件系统上的可用空间，而不是包含设备节点的文件系统(始终是根文件系统)。这样做的各种系统都需要非常不可移植的文件系统结构知识。

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
df  [OPTION]...  [FILE]...
```

## 选项

``` bash
-a, --all                 # 显示所有的文件系统，包含虚拟文件系统
[file]                    # 显示指定文件所在的文件系统信息
-B, --block-size=SIZE     # 设置显示时的块大小
--direct                  # 显示文件的统计信息，而不是挂载点
--total                   # 产生一个总和
-h, --human-readable      # 以更加易读的方式来显示
-H, --si                  # 以更加易读的方式显示，但是使用1000为一个单位，而不是1024
-i, --inodes              # 显示inode信息
-k                        # 等价于”--block-size=1k”
-l, --local               # 显示本地文件系统
--no-sync                 # 在获取使用信息之前，不唤醒同步
--sync                    # 在获取信息之前唤醒同步
-P, --portability         # 使用POSIX输出格式
-t, --type=TYPE           # 显示指定类型的文件系统信息
-T, --print-type          # 显示文件系统类型
-x, --exclude-type=TYPE   # 不显示指定的文件系统

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```

该指令显示的值的单位是“--block-size”、“DF_BLOCK_SIZE”、“BLOCK_SIZE”，、BLOCKSIZE”这是四个值中第一个可用的值。 除了第一个值是用户设定的，其他3个都是环境变量。如果这四个值没有可用的，那么默认是1024（如果设置了POSIXLY_CORRECT，那么就是512）。

显示的单位可能是：KB，1000；K，1024；MB，100*100；M，1024*1024。

## 举例
使用“-h”选项，以方便阅读的方式显示文件系统信息
``` bash
[sogrey@bogon /]$ df -h
文件系统                  容量  已用  可用 已用% 挂载点
/dev/mapper/euleros-root   49G  4.9G   42G   11% /
devtmpfs                  2.1G     0  2.1G    0% /dev
tmpfs                     2.1G     0  2.1G    0% /dev/shm
tmpfs                     2.1G   18M  2.1G    1% /run
tmpfs                     2.1G     0  2.1G    0% /sys/fs/cgroup
/dev/sda1                 976M  151M  759M   17% /boot
/dev/mapper/euleros-home  362G  197M  343G    1% /home
tmpfs                     428M   28K  428M    1% /run/user/1000
/dev/sr0                   59M   59M     0  100% /run/media/sogrey/VBox_GAs_6.1.22
[sogrey@bogon /]$ 
```
使用“-T”选项，显示出文件系统的类型
``` bash
[sogrey@bogon /]$ df -T
文件系统                 类型         1K-块    已用      可用 已用% 挂载点
/dev/mapper/euleros-root ext4      51343840 5033576  43672440   11% /
devtmpfs                 devtmpfs   2172124       0   2172124    0% /dev
tmpfs                    tmpfs      2190360       0   2190360    0% /dev/shm
tmpfs                    tmpfs      2190360   17840   2172520    1% /run
tmpfs                    tmpfs      2190360       0   2190360    0% /sys/fs/cgroup
/dev/sda1                ext4        999320  154068    776440   17% /boot
/dev/mapper/euleros-home ext4     379160352  201128 359629176    1% /home
tmpfs                    tmpfs       438076      28    438048    1% /run/user/1000
/dev/sr0                 iso9660      59590   59590         0  100% /run/media/sogrey/VBox_GAs_6.1.22
[sogrey@bogon /]$ 
```
使用“-B”选项，指定显示时的块大小是2048kb。注意结果可以和上面对比一下
``` bash
[sogrey@bogon /]$ df -B 2048
文件系统                     2K-块    已用      可用 已用% 挂载点
/dev/mapper/euleros-root  25671920 2516868  21836140   11% /
devtmpfs                   1086062       0   1086062    0% /dev
tmpfs                      1095180       0   1095180    0% /dev/shm
tmpfs                      1095180    8920   1086260    1% /run
tmpfs                      1095180       0   1095180    0% /sys/fs/cgroup
/dev/sda1                   499660   77034    388220   17% /boot
/dev/mapper/euleros-home 189580176  100564 179814588    1% /home
tmpfs                       219038      14    219024    1% /run/user/1000
/dev/sr0                     29795   29795         0  100% /run/media/sogrey/VBox_GAs_6.1.22
[sogrey@bogon /]$ 
```
使用“-t”选项，指定显示“ext4”类型的文件系统信息
``` bash
[sogrey@bogon /]$ df -t ext4
文件系统                     1K-块    已用      可用 已用% 挂载点
/dev/mapper/euleros-root  51343840 5033872  43672144   11% /
/dev/sda1                   999320  154068    776440   17% /boot
/dev/mapper/euleros-home 379160352  201128 359629176    1% /home
[sogrey@bogon /]$ 
```