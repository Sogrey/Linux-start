# route - 显示并设置Linux中静态路由表

route命令 用来显示并设置Linux内核中的网络路由表，route命令设置的路由主要是静态路由。要实现两个不同的子网之间的通信，需要一台连接两个网络的路由器，或者同时位于两个网络的网关来实现。

在Linux系统中设置路由通常是为了解决以下问题：该Linux系统在一个局域网中，局域网中有一个网关，能够让机器访问Internet，那么就需要将这台机器的ip地址设置为Linux机器的默认路由。要注意的是，直接在命令行下执行route命令来添加路由，不会永久保存，当网卡重启或者机器重启之后，该路由就失效了；可以在/etc/rc.local中添加route命令来保证该路由设置永久有效。

route指令用于显示或者修改IP路由表。它的主要用途是在使用ifconfig(8)程序配置接口后，通过接口设置到特定主机或网络的静态路由。当使用add或del选项时，路由将修改路由表。如果没有这些选项，路由将显示路由表的当前内容。

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
route  [-CFvnee]
route  [-v]  [-A family]  add  [-net|-host]  target  [netmask Nm]  
       [gw Gw]  [metric N]  [mssM]  [window W] 
       [irtt I]  [reject]  [mod] [dyn]  [reinstate]  [[dev] If]
route  [-v]  [-A family]  del  [-net|-host]  target  [gw  Gw]  
       [netmask  Nm]  [metric  N]  [[dev] If]
route  [-V]  [--version]  [-h]  [--help]
```

## 选项

``` bash
-A family                # 指定使用的地址类型
-F                       # 操作内核FIB
-C                       # 管理内核路由缓存
-v                       # 显示详细过程
-n                       # 以数字的方式显示路由表中的主机
-e                       # 使用netstat的输出格式显示路由表
-net                     # 指定一个网络路由
-host                    # 指定一个主机路由
add                      # 增加一个路由
del                      # 删除一个路由
target                   # 指定目标网络或者主机
netmask mask             # 添加一个路由时，使用这个子网掩码
gw ip                    # 指定数据包通过的网关IP地址
metric                   # 指定路由表的metric字段
window                   # 指定路由表的TCP连接串口
irtt I                   # 将此路由上的TCP连接的初始往返时间(Irtt)设置为I毫秒(1-12000)。这通常只在AX.25网络上使用。如果省略，则使用rfc 1122默认的300 ms。
reject                   # 安装阻塞路由，这将迫使路由查找失败。例如，这用于在使用默认路由之前屏蔽网络。这不是用来防火的
mod, dyn, reinstate      # 安装动态或修改的路由。这些标志用于诊断，通常仅由路由守护进程设置。
dev eth                  # 指定路由的网络接口

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 输出
内核路由表的输出组织在以下列中

| 输出列          | 说明                                                         |
| --------------- | ------------------------------------------------------------ |
| **Destination** | 目标网络或目标主机。                                         |
| **Gateway**     | 网关地址或“*”(如果没有设置)                                  |
| **Genmask**     | 目标网络的网络掩码；主机目的地为‘255.255.255.255’，默认路由为‘0.0.0.0’。 |
| **Flags**       | 可能的flag有**U**，路由已经起来**H**，目标是一个主机**G**，使用网关**R**，用于动态路由的恢复路由**D**，由守护进程动态安装或重定向**M**，从路由守护进程或重定向中修改**A**，由addrconf安装**C**，缓存项**!**，拒绝路由 |
| **Metric**      | 与目标的距离(通常以啤酒花计)。它不是最近的内核使用的，而是路由守护进程所需要的。 |
| **Ref**         | 引用此路由的次数。(不在Linux内核中使用。)                    |
| **Use**         | 查找路线的数量。根据-F和-C的使用情况，这将是路由缓存丢失(-F)或命中(-C)。 |
| **Iface**       | 用于此路由的数据包将发送到该接口。                           |
| **MSS**         | 此路由上TCP连接的默认最大分段大小                            |
| **Window**      | 此路由上TCP连接的默认窗口大小                                |
| **irtt**        | 初始RTT(往返时间)。内核使用它来猜测最佳的TCP协议参数，而无需等待(可能是缓慢的)答案。 |
| **HH**          | 引用缓存路由的硬件头缓存的ARP条目和缓存路由的数量。如果缓存路由的接口不需要硬件地址(例如lo)，则为-1。 |
| **Arp**         | 缓存路由的硬件地址是否最新。                                 |

 

## 举例

``` bash
route add -net 127.0.0.0 
# 添加正常的回送条目，使用net掩码255.0.0.0(A级Net，从目标地址确定)并与“lo”设备相关联(假设此设备使用ifconfig(8)正确设置)。
# 10.x.x.x.通过“eth0”将路由添加到网络192.56.76.x。这里没有必要使用C类网络掩码修饰符，因为192.*是一个C类IP地址。这里可以省略“dev”这个词。

route add default gw mango-gw
# 添加默认路由(如果没有其他路由匹配，则使用该路由)。使用此路径的所有数据包将通过“芒果-GW”传送。实际用于该路线的设备取决于我们如何到达“mango-gw”，“ mango-gw”的静态路径必须在此之前设置。

route add ipx4 sl0
# 通过SIP接口将路由添加到“IPX 4”主机(假设“IPX 4”是SILIP主机)。

route add -net 192.57.66.0 netmask 255.255.255.0 gw ipx4
# 此命令添加网络“192.57.66.x”，通过前一条路由传送到SILIP接口。

route add -net 224.0.0.0 netmask 240.0.0.0 dev eth0
# 。这将所有D类(多播)IP路由设置为通过“eth0”。这是具有多播内核的正确的正常配置行。

route add -net 10.0.0.0 netmask 255.0.0.0 reject
# 这为专用网络“10.x.x.x.”安装了一个拒绝路由。
```

显示本机路由表
``` bash
[root@localhost ~]$ route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
255.255.255.255 -               255.255.255.255 !H    0      -        0 -
224.0.0.0       -               255.255.255.0   !     0      -        0 -
```
以netstat格式显示
``` bash
[root@localhost ~]$ route -e
Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
255.255.255.255 -               255.255.255.255 !H        - -          - -
224.0.0.0       -               255.255.255.0   !         - -          - -
```
添加一个路由
``` bash
[root@localhost ~]$ route add -net 111.13.0.0/24 dev eth0   #指定网段使用设备eth0访问
[root@localhost ~]$ route     #查看路由表
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
255.255.255.255 -               255.255.255.255 !H    0      -        0 -
111.13.0.0      *               255.255.255.0   U     0      0        0 eth0
224.0.0.0       -               255.255.255.0   !     0      -        0 -
172.16.0.0      *               255.255.0.0     U     0      0        0 eth0
```
删除一个路由
``` bash
[root@localhost ~]$ route del -net 111.13.0.0/24 #删除指定地址id路由
[root@localhost ~]$ route   #查看路由
Kernel IP routing table     
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
255.255.255.255 -               255.255.255.255 !H    0      -        0 -
224.0.0.0       -               255.255.255.0   !     0      -        0 -
172.16.0.0      *               255.255.0.0     U     0      0        0 eth0
```
 
