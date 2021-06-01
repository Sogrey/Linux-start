# ifconfig - 配置和显示Linux系统网卡的网络参数

ifconfig命令 被用于配置和显示Linux内核中网络接口的网络参数。用ifconfig命令配置的网卡信息，在网卡重启后机器重启后，配置就不存在。要想将上述的配置信息永远的存的电脑里，那就要修改网卡的配置文件了。

ifconfig指令用来配置网络接口参数，同时还可以显示当前内核网络接口的工作状态。如果没有提供参数，则ifconfig将显示当前活动接口的状态。如果给定单个接口参数，则只显示给定接口的状态；如果给定单个“-a”参数，则显示所有接口的状态，即使是关闭的接口也是如此。否则，它会配置一个接口。

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
ifconfig  [interface | up | down]
```

## 选项

``` bash
interface

接口的名称。这通常是一个驱动程序名，后面跟着一个单元号，例如用于第一个以太网接口的eth0。

up

此标志将导致激活接口。如果将地址分配给接口，则会隐式指定该地址。

down

此标志导致关闭此接口的驱动程序。

[-]arp

启用或禁用在此接口上使用ARP协议。

[-]promisc

启用或禁用接口的混杂模式。如果选中，网络上的所有数据包都将由接口接收。

[-]allmulti

启用或禁用所有多播模式。如果选中，则接口将接收网络上的所有多播数据包。

metric N

此参数设置接口度量。它在GNU/Linux下不可用

mtu N

此参数设置接口的最大传输单元(MTU)。

dstaddr addr

为点对点链路(如PPP)设置远程IP地址.这个关键字现在已经过时了；使用pointopoint关键字代替。

netmask addr

设置此接口的IP网络掩码。此值默认为通常的A、B或C类网络掩码(从接口IP地址派生)，但可以设置为任何值。

add addr/prefixlen

向接口添加IPv 6地址

del addr/prefixlen

从接口中删除IPv 6地址

tunnel ::aa.bb.cc.dd

创建一个新的SIT(IPv6-in-IPv4)设备，通过隧道到达给定的目的地。

irq addr

设置此设备使用的中断行。并非所有设备都可以动态更改其IRQ设置。

io_addr addr

为该设备设置I/O空间中的起始地址

mem_start addr

设置此设备使用的共享内存的起始地址。只有少数几个设备需要这个

media type

设置设备要使用的物理端口或介质类型。并非所有设备都可以更改此设置，以及那些可以更改其支持的值的设备。典型的类型值是10 base 2(细以太网)、10 base T(双绞线10 Mbps以太网)、AUI(外收发信机)等。驱动的特殊介质类型可以用来告诉驱动对媒体进行自动感知。同样，并不是所有的驱动都能做到这一点。

[-]broadcast [addr]

如果地址参数给定，则为该接口设置协议广播地址。否则，设置(或清除)接口的IFF_BROADCAST标志。

[-]pointopoint [addr]

这个关键字启用了接口的点对点模式，这意味着它是两台机器之间的直接链接，没有其他人监听它。如果地址参数也给出了，就像过时的dstaddr关键字一样，设置链接另一端的协议地址。否则，设置或清除接口的IFF_POINTOPOINT标志。

hw class address

如果设备驱动程序支持此操作，则设置此接口的硬件地址。关键字后面必须跟着硬件类的名称和相当于硬件地址的可打印的ASCII。目前支持的硬件类包括ether (以太网)、ax25(AMPRAX.25)、ARCnet和netrom(AMPR NET/ROM)。

multicast

在接口上设置多播标志。这通常不应该需要，因为驱动程序本身设置正确的标志。

address

要分配给此接口的IP地址。

txqueuelen length

设置设备的传输队列的长度。对于具有高延迟(调制解调器链路，ISDN)的较慢设备，将其设置为小值是有用的，以防止快速批量传输过多地干扰诸如telnet之类的交互通信。
```
## 地址族
如果接口名称之后的第一个参数被识别为受支持地址族的名称，则该地址族用于解码和显示所有协议地址。目前支持的地址族包括Internet(TCP/IP，默认值)、inet6(IPv 6)、Axis25(AMPR分组无线电)、ddp(AppleTalk相位2)、IPX(Novell IPX)和netrom(AMPR分组无线电)。在IPv4虚线小数表示法中提供的所有数字都可以是十进制、八进制或十六进制，正如ISO C标准所指定的那样(即，前导0x或0x表示十六进制；否则，前导“0”表示八进制；否则，该数字被解释为十进制)。使用十六进制和八进制数字是不符合RFC的，因此它的使用是不鼓励的，可能会消失。
## 举例
查看当前网络状态
``` bash
[root@localhost ~]$ ifconfig        #没有任何参数选项，显示当前所有网络状态
eth0      Link encap:Ethernet  HWaddr 08:00:27:14:33:57 
          inet6 addr: fe80::a00:27ff:fe14:3357/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:107276 errors:0 dropped:0 overruns:0 frame:0
          TX packets:72251 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:83580745 (79.7 MiB)  TX bytes:5842218 (5.5 MiB) 

lo        Link encap:Local Loopback 
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:7347 errors:0 dropped:0 overruns:0 frame:0
          TX packets:7347 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:786270 (767.8 KiB)  TX bytes:786270 (767.8 KiB)
```
查看指定网卡的状态
``` bash
[root@localhost ~]$ ifconfig eth0      #显示指定网卡状态
eth0      Link encap:Ethernet  HWaddr 08:00:27:14:33:57 
          inet6 addr: fe80::a00:27ff:fe14:3357/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:107276 errors:0 dropped:0 overruns:0 frame:0
          TX packets:72251 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:83580745 (79.7 MiB)  TX bytes:5842218 (5.5 MiB)
```
3）启动网卡
``` bash
[root@localhost ~]$ ifconfig eth0 down        #关闭eth0
[root@localhost ~]$ ifconfig eth0 up          #开启eth0
[root@localhost ~]$ ifconfig eth0             #查看eth0，已经分配ip
eth0      Link encap:Ethernet  HWaddr 08:00:27:14:33:57 
          inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe14:3357/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:107280 errors:0 dropped:0 overruns:0 frame:0
          TX packets:72262 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:83582067 (79.7 MiB)  TX bytes:5843588 (5.5 MiB)
```
**其他**

启动关闭指定网卡：
``` bash
ifconfig eth0 up
ifconfig eth0 down
```
ifconfig eth0 up为启动网卡eth0，ifconfig eth0 down为关闭网卡eth0。ssh登陆linux服务器操作要小心，关闭了就不能开启了，除非你有多网卡。

为网卡配置和删除IPv6地址：
``` bash
ifconfig eth0 add 33ffe:3240:800:1005::2/64    #为网卡eth0配置IPv6地址
ifconfig eth0 del 33ffe:3240:800:1005::2/64    #为网卡eth0删除IPv6地址
```
用ifconfig修改MAC地址：
``` bash
ifconfig eth0 hw ether 00:AA:BB:CC:dd:EE
```
配置IP地址：
``` bash
[root@localhost ~]$ ifconfig eth0 192.168.2.10
[root@localhost ~]$ ifconfig eth0 192.168.2.10 netmask 255.255.255.0
[root@localhost ~]$ ifconfig eth0 192.168.2.10 netmask 255.255.255.0 broadcast 192.168.2.255
```
启用和关闭arp协议：
``` bash
ifconfig eth0 arp    #开启网卡eth0 的arp协议
ifconfig eth0 -arp   #关闭网卡eth0 的arp协议
```
设置最大传输单元：
``` bash
ifconfig eth0 mtu 1500    #设置能通过的最大数据包大小为 1500 bytes
```