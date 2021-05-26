# arp - arp 命令用于显示和修改 IP 到 MAC 转换表

arp 命令 是 Address Resolution Protocol，地址解析协议，是通过解析网络层地址来找寻数据链路层地址的一个网络协议包中极其重要的网络传输协议。而该命令可以显示和修改 arp 协议解析表中的缓冲数据。

这个核心协议模块实现RFC826中定义的 Address Resolution Protocol [译注：即TCP/IP的第三层到第一层的地址转换协议]，用于在直接相连的网络中换第二层硬件地址和 Ipv4 协议地址之间的转换。 用户除非想对其进行配置，否则一般不会直接操作这个模块。

实际上，它提供对核心中其它协议的服务。

用户进程可以使用 packet(7) 的 sockets，收到 ARP 包（译注：一译分组）。 还有一种机制是使用 netlink(7) sockets，在用户空间管理 ARP 缓存的机制。我们也可以通过 ioctl (2) 控制任意 PF_INET socket上的 ARP 表

ARP 模块维护一个硬件地址到协议地址映射的缓存。这个缓存有大小限制，所以不常用的和旧的记录（Entry）将被垃圾收集器清除（garbage-collected），垃圾收集器永远不能删除标为永久的记录。我们可以使用ioctls直接操纵缓冲， 并且其性状可以用下面定义的 sysctl 调节。

如果在限定的时间（见下面的sysctl）内，一条现存映射没有肯定反馈时， 则认为相邻层的缓存记录失效。 为了再次向目标发送数据，ARP将首先试着询问本地arp进程 app_solicit 次，获取更新了的 MAC（介质访问控制）地址。 如果失败，并且旧的MAC地址是已知的，则发送 ucast_solicit 次的 unicast probe。如果仍然失败，则将向网络广播一个新的ARP请求,此时要 有待发送数据的队列

如果 Linux 接到一个地址请求，而且该地址指向 Linux 转发的地址，并且接收接口打开了代理 arp 时，Linux 将自动添加一条非永久的代理 arp 记录；如果存在拒绝到目标的路由，则不添加代理 arp 记录。

arp指令用来管理系统的arp缓冲区，可以显示、删除、添加静态mac地址。ARP以各种方式操纵内核的ARP缓存。主要选项是清除地址映射项并手动设置。为了调试目的，ARP程序还允许对ARP缓存进行完全转储。

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
arp  [-evn]  [-H type]  [-i if]  -a  [hostname]
arp  [-v]  [-i if]  -d  hostname  [pub]
arp  [-v]  [-H type]  [-i if]  -s  hostname  hw_ addr  [temp]
arp  [-v]  [-H type]  [-i if]  -s  hostname  hw_ addr  [netmask nm]  pub
arp  [-v]  [-H type]  [-i if]  -Ds  hostname  ifa  [netmask nm]  pub
arp  [-vnD]  [-H type]  [-i if]  -f  [filename]
```

## 选项

``` bash
-H type
--hw-type type
-t type                         # 在设置或读取ARP缓存时，这个可选参数告诉ARP应该检查哪类条目。此参数的默认值为ether(即IEEE 802.3 10 Mbps以太网的硬件代码0x01)。其他可能的值有，如ARCnet(Arcnet)、PROnet(PRINET)、AX.25(Axis 25)和Net/ROM(Netrom)。
-a [hostname], --all [hostname] # 显示本机的arp缓冲区内容
-d hostname, --delete hostname  # 从缓冲区删除指定的地址类型
-D, -use-device                 # 使用指定接口的mac地址
-e                              # 使用Linux风格显示
-i if, --device if              # 显示指定设备的arp缓冲区
-s hostname hw_addr             # 设置指定主机的mac地址映射
-f filename ,  --file filename  # 类似于-s选项，只是这次地址信息是从filename设置的。数据文件的名称通常是“/etc/ether”，但这不是正式的。如果没有指定文件名“/etc/ether”作为默认值。该文件的格式很简单；它只包含带有硬件地址和由空格分隔的主机名的ASCII文本行。此外，还可以使用pub、temp和netmask标志。
-n, --numeric                   # 使用数字方式显示
-v, --verbose                   # 显示执行过程

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
在所有需要主机名的地方，人们也可以用虚线小数点表示法输入IP地址。作为兼容性的特例，主机名和硬件地址的顺序可以交换。ARP缓存中的每个完整条目都将被标记为C标志。永久条目用M标记，已发布的条目带有P标志。
## 举例

添加静态映射
``` bash
[root@localhost ~]$ arp -i eth0 -s 192.168.1.6 ff:ee:ee:ee:ee:ee  #将目标ip地址映射固定mac
[root@localhost ~]$ arp –a                                        #查看arp缓冲区
? (10.0.2.2) at 52:54:00:12:35:02 [ether] on eth0
? (192.168.1.6) at ff:ee:ee:ee:ee:ee [ether] PERM on eth0
```
以数字方式显示
``` bash
[root@localhost ~]$ arp -vn
Address                  HWtype  HWaddress           Flags Mask            Iface
10.0.2.2                 ether   52:54:00:12:35:02   C                     eth0
192.168.1.6              ether   ff:ee:ee:ee:ee:ee   CM                    eth0
Entries: 2 Skipped: 0 Found: 2
```