# ifup - 激活指定的网络接口

ifup命令 用于激活指定的网络接口。

ifup指令用来启动网络接口设备，设备必须是定义在“/etc/sysconfig/network-scripts/ifcfg-ethX”或者“/etc/sysconfig/network”的文件。这些脚本通常使用一个参数：配置的名称(例如eth0)。在引导序列中，使用“boot”的第二个参数调用它们，以便在引导过程中不想打开的设备(ONBOOT=no)此时可以被忽略。

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
ifup interface
```
## 选项

无
## 举例
激活网卡
``` bash
[root@localhost ~]$ ifup eth0   #激活网卡eth0
活跃连接状态：激活中
活跃连接路径：/org/freedesktop/NetworkManager/ActiveConnection/2
状态：激活的
连接被激活
```
