# ifdown - 禁用指定的网络接口

ifdown命令 用于禁用指定的网络接口。

ifdown指令用来关闭网络接口设备，设备必须是定义在“/etc/sysconfig/network-scripts/ifcfg-ethX”或者“/etc/sysconfig/network”的文件。

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
ifdown interface
```

## 选项

无

## 举例
关闭网卡
``` bash
[root@localhost ~]$ ifdown eth0   #关闭eth0
设备状态：3 (断开连接)
```
