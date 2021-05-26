# arping - 通过发送ARP协议报文测试网络

arping命令 是用于发送arp请求到一个相邻主机的工具，arping使用arp数据包，通过ping命令检查设备上的硬件地址。能够测试一个ip地址是否是在网络上已经被使用，并能够获取更多设备信息。功能类似于ping。

arping指令用于发送arp请求到一个相邻的主机，在指定网卡上发送arp请求指定地址，源地址使用-s指定。该指令可以直径ping MAC地址，找出哪些地址被哪些电脑使用了。

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
arping  [-AbDfhqUV]  [-c count]  [-w deadling]  [-s source]  -I  interface  destnation
```

## 选项

``` bash
-A                         # 与-U相同，但是发送的是ARP RELAY报文
-b                         # 只发送物理层的广播报文
-c count                   # 指定发送测试数据包的次数
-D                         # 重复地址检测模式
-f                         # 如果目的主机有回应，立刻停止发送测试数据包
-h                         # 显示帮助信息
-I interface               # 指定网络设备接口
-q                         # 静默模式
-s source                  # 指定发送测试包的源地址
-U                         # 更新邻居主机arp缓存
-V                         # 显示版本信息
-w                         # 指定超时时间
```
## 举例
向邻居主机发送请求
``` bash
[root@localhost ~]$ arping -I eth0 192.168.1.8                #指定网卡，向目标ip发送请求
ARPING 192.168.1.8 from 192.168.1.9 eth0
Unicast reply from 192.168.1.8 [98:01:A7:9F:5E:9D]  0.817ms   #可以看到目标ip的mac地址
Unicast reply from 192.168.1.8 [98:01:A7:9F:5E:9D]  0.749ms
Unicast reply from 192.168.1.8 [98:01:A7:9F:5E:9D]  0.741ms
Unicast reply from 192.168.1.8 [98:01:A7:9F:5E:9D]  0.787ms
```
