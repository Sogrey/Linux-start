# tload - 显示系统负载状况
tload命令 以图形化的方式输出当前系统的平均负载到指定的终端。假设不给予终端机编号，则会在执行tload指令的终端机显示负载情形。

tload指令以字符的方式显示当前系统的平均负载情况。

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
tload  [-V]  [-s scale]  [ -d delay ]  [tty]
```

## 选项

``` bash
-d          # 显示更新时间间隔
-s          # 显示图表的垂直刻度单位
-V          # 显示版本信息
```
## 举例

``` bash
[sogrey@bogon ~]$ tload -d 5 -s 1 
 2.63, 1.79, 1.24
 2.60, 1.82, 1.25                                                               -----                 
```

