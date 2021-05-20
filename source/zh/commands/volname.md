# volname - 显示指定的ISO-9660格式的设备的卷名称

volname命令 用于显示指定的“ISO-9660”格式的设备的卷名称，通常这种格式的设备为光驱。

显示iso9660格式设备的卷标，一般情况下是CD-ROM。它还适用于包含iso-9660文件系统的普通文件。

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
volname  [device]
```

## 选项

``` bash
设备名      # 要显示卷标的设备，如果不指定，默认显示/dev/cdrom的卷标q
```
## 举例
不指定设备，显示默认设备的卷标
``` bash
[root@localhost ~]$ volname
VBOXADDITIONS_5.2.18_124319 
```
显示指定设备的卷标
``` bash
[root@localhost ~]$ volname /dev/sdb4  # 这个设备不是iso9660，因此没有结果                               

[root@localhost ~]$ volname /weijie/my.iso # 这个设备是iso9660格式
CDROM  
```