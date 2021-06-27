# uname - 打印系统信息


## 主要用途
- 打印机器和操作系统的信息。
- 当没有选项时，默认启用 -s 选项。
- 如果给出多个选项或 -a 选项时，输出信息按以下字段排序：内核名称 主机名称 内核release 内核版本 机器名称 处理器 硬件平台 操作系统。

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
uname  [OPTION]
```

## 选项

``` bash
-a, --all                   # 显示所有的信息
-s, --kernel-name           # 显示内核名字
-n, --nodename              # 显示主机名
-r, --kernel-release        # 显示内核发型版本号
-v, --kernel-version        # 显示内核版本
-m, --machine               # 显示计算机硬件架构名字
-p, --processor             # 显示cpu类型
-i, --hardware-platform     # 显示硬件平台
-o, --operating-system      # 显示操作系统

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例


显示系统所有信息
``` bash
[sogrey@bogon ~]$ uname --all
Linux bogon 3.10.0-862.14.1.0.h209.eulerosv2r7.x86_64 #1 SMP Tue Feb 12 00:00:00 UTC 2019 x86_64 x86_64 x86_64 GNU/Linux
[sogrey@bogon ~]$ uname -s
Linux
[sogrey@bogon ~]$ uname -n
bogon
[sogrey@bogon ~]$ 
```