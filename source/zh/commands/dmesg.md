# dmesg - 显示Linux系统启动信息

dmesg命令 被用于检查和控制内核的环形缓冲区。kernel会将开机信息存储在ring buffer中。您若是开机时来不及查看信息，可利用dmesg来查看。开机信息保存在/var/log/dmesg文件里。

dmesg指令用来打印和控制内核的输出信息，这些信息保存早ring buffer中。
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
dmesg  [-c]  [-r]  [-n level]  [-s bufsize]
```

## 选项

``` bash
-c  # 打印之后清除缓冲区
-r  # 打印raw信息
-s  # 设置缓冲区大小，默认16392
-n  # 指定记录信息的等级
```
## 举例
查看开机内核输出信息
``` bash
[sogrey@bogon ~]$ sudo dmesg -c # 查看信息，之后删除缓冲区内容
...
[  220.943025] [monitor_netdev] Deleting route 127.0.0.0/8, curr comm: kworker/u2:0, curr pid: 6, parent comm: kthreadd, parent pid: 2
[  220.943032] [monitor_netdev] Deleting route 0.0.0.0/32, curr comm: kworker/u2:0, curr pid: 6, parent comm: kthreadd, parent pid: 2
[  220.943034] [monitor_netdev] Deleting route 127.255.255.255/32, curr comm: kworker/u2:0, curr pid: 6, parent comm: kthreadd, parent pid: 2
[  220.943035] [monitor_netdev] Deleting route 127.0.0.0/32, curr comm: kworker/u2:0, curr pid: 6, parent comm: kthreadd, parent pid: 2
[  224.895993] print_netdev_status: 2 callbacks suppressed
[  224.895996] [monitor_netdev] devname : lo, status : down, pid : 685, cmd : kworker/u2:3, ppid : 2, parent cmd : kthreadd
[  224.900318] [monitor_netdev] Deleting route 127.0.0.0/8, curr comm: kworker/u2:3, curr pid: 685, parent comm: kthreadd, parent pid: 2
[  224.900326] [monitor_netdev] Deleting route 0.0.0.0/32, curr comm: kworker/u2:3, curr pid: 685, parent comm: kthreadd, parent pid: 2
[  224.900328] [monitor_netdev] Deleting route 127.255.255.255/32, curr comm: kworker/u2:3, curr pid: 685, parent comm: kthreadd, parent pid: 2
[  224.900330] [monitor_netdev] Deleting route 127.0.0.0/32, curr comm: kworker/u2:3, curr pid: 685, parent comm: kthreadd, parent pid: 2
[sogrey@bogon ~]$ 
```
打印raw信息
``` bash
[sogrey@bogon ~]$ sudo dmesg -r
<4>[  280.842432] print_netdev_status: 2 callbacks suppressed
<4>[  280.842435] [monitor_netdev] devname : lo, status : up, pid : 14497, cmd : (ostnamed), ppid : 1, parent cmd : systemd
<4>[  280.842453] [monitor_netdev] Insert table=255 127.0.0.1/32, curr comm: (ostnamed), curr pid: 14497, parent comm: systemd, parent pid: 1
<4>[  280.842460] [monitor_netdev] Insert table=255 127.0.0.0/8, curr comm: (ostnamed), curr pid: 14497, parent comm: systemd, parent pid: 1
<4>[  280.842465] [monitor_netdev] Insert table=255 127.0.0.0/32, curr comm: (ostnamed), curr pid: 14497, parent comm: systemd, parent pid: 1
<4>[  280.842468] [monitor_netdev] Insert table=255 127.255.255.255/32, curr comm: (ostnamed), curr pid: 14497, parent comm: systemd, parent pid: 1
<4>[  311.036619] print_netdev_status: 5 callbacks suppressed
<4>[  311.036624] [monitor_netdev] devname : lo, status : down, pid : 6, cmd : kworker/u2:0, ppid : 2, parent cmd : kthreadd
<4>[  311.041683] [monitor_netdev] Deleting route 127.0.0.0/8, curr comm: kworker/u2:0, curr pid: 6, parent comm: kthreadd, parent pid: 2
<4>[  311.041691] [monitor_netdev] Deleting route 0.0.0.0/32, curr comm: kworker/u2:0, curr pid: 6, parent comm: kthreadd, parent pid: 2
<4>[  311.041693] [monitor_netdev] Deleting route 127.255.255.255/32, curr comm: kworker/u2:0, curr pid: 6, parent comm: kthreadd, parent pid: 2
<4>[  311.041694] [monitor_netdev] Deleting route 127.0.0.0/32, curr comm: kworker/u2:0, curr pid: 6, parent comm: kthreadd, parent pid: 2
[sogrey@bogon ~]$ 
```

