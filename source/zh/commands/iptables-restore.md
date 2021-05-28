# iptables-restore - 还原iptables表的配置

iptables-restore指令将之前备份的iptables信息还原，这个指令需要配置shell重定向功能。

iptables-restore命令 用来还原iptables-save命令所备份的iptables配置。

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
iptables-restore  [选项]  <  iptables.bak
```

## 选项

``` bash
-c, --counters  # 还原所有数据包和字节的计数器
-n, --noflush   # 不删除之前的iptables配置
```
## 举例
还原iptables
``` bash
[root@localhost ~]$ iptables-restore < iptables.bak
```
iptables.bak是iptables-save命令所备份的文件。
