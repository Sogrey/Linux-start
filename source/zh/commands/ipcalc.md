# ipcalc - 简单的IP地址计算器

ipcalc命令 是一个简单的ip地址计算器，可以完成简单的IP地址计算任务。

ipcalc提供了一种计算主机IP信息的简单方法。各种选项指定ipcalc应该在标准输出上显示什么信息。可以指定多个选项。必须始终指定要操作的IP地址。大多数操作还需要一个网络掩码或CIDR前缀。

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
ipcalc  [OPTION]... <IP address>[/prefix]  [netmask]
```

## 选项

``` bash
-c, --check                  # 检测ip地址
-4                           # 指定ipv4
-6                           # 指定ipv6
-b, --broadcast              # 显示指定ip的广播地址和网络掩码
-h, --hostname               # 显示指定ip的主机名
-m, --netmask                # 计算给定地址的掩码
-p, --prefix                 # 显示给定掩码或者ip的前缀
-n, --network                # 显示给定ip和掩码的网络地址
-s, --slient                 # 不显示任何错误信息
```
## 举例

计算网络地址
``` bash
[root@localhost ~]$ ipcalc -n  192.168.1.9/24
NETWORK=192.168.1.0
```
计算广播地址
``` bash
[root@localhost ~]$ ipcalc -b  192.168.1.9/24
BROADCAST=192.168.1.255
```
计算子网掩码
``` bash
[root@localhost ~]$ ipcalc -4 -m  192.168.1.9
NETMASK=255.255.255.0
```