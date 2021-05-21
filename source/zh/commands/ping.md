# ping - 测试主机之间网络的连通性

ping命令 用来测试主机之间网络的连通性。执行ping指令会使用ICMP传输协议，发出要求回应的信息，若远端主机的网络功能没有问题，就会回应该信息，因而得知该主机运作正常。

ping指令可以发送ICMP请求到目标地址，如果网络功能正常，目标主机会给出回应信息。ping使用ICMP协议强制发送ECHO_REQUEST报文到目标主机，从主机或网关获取ICMP ECHO_RESPONSE。ECHO_REQUESTt数据报(‘pings’)有一个IP和ICMP报头，后面跟着一个timeval结构体，然后是用于填充数据包的任意数量的“pad”字节。

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
ping  [选项]  destination
```

## 选项

``` bash
-a

可听的ping

-A

自适应平包间隔适应往返时间，因此有效地不超过一个(或多个，如果设置了预加载)未回答的探针在网络中存在。对于非超级用户，最小间隔为200毫秒。在RTT低的网络上，这种模式实质上等同于flood模式。

-b

允许ping广播地址

-B

不允许ping更改探针的源地址。当ping启动时，该地址绑定到选定的地址。

-c count

指定ping的次数

-d

在所使用的套接字上设置SO_DEBUG选项。实际上，linux内核不使用这个套接字选项。

-F flow label

在回送请求数据包上分配和设置20位flow label。(只有平6)。如果值为零，内核将分配随机flow label。

-f

极限检测，不等收到回复就发送下一个请求，只有超级管理员才可以使用

-i interval

指定发送的时间间隔

-I interface address

将源地址设置为指定的接口地址。参数可以是数字IP地址或设备名称。当选择ipv 6链路本地地址时，此选项是必需的。

-l preload

如果指定了预加载preload，ping将发送许多未等待回复的数据包。只有超级用户才能选择超过3的预加载

-L

抑制组播数据包的回送。此标志仅适用于ping目标为多播地址的情况

-n

用数字方式显示

-p pattern

您可以指定多达16个“PAD”字节来填充您发送的数据包。这对于诊断网络中与数据相关的问题很有用

-Q tos

在ICMP数据报中设置与服务相关的比特的质量。TOS可以是十进制数，也可以是十六进制数。传统上(RFC 1349)，它们被解释为：0表示保留(当前被重新定义为拥塞控制)，1-4表示服务类型，5-7表示优先级。服务类型的可能设置是：最低成本：0x02，可靠性：0x04，吞吐量：0x08，低延迟：0x10。不能同时设置多个TOS位。特殊优先级的可能设置范围从优先级(0x20)到净控制(0xe0)。

-q

不显示执行过程

-r

忽略正常的路由表

-R

记录路由

-s packetsize

指定数据包的大小

-S sndbuf

设置套接字发送缓冲区sndbuf。如果没有指定，则选择它来缓冲不超过一个数据包

-t ttl

指定数据包的生存期TTL

-T timestamp option

设置特殊的ip时间戳选项。可以是tsonly (only timestamps), tsandaddr (timestamps and addresses) or  tsprespec  host1  [host2 [host3 [host4]]] (timestamp prespecified hops)

-M hint

选择路径MTU发现策略，可以是do（禁止碎片，即使是本地的）、want（当数据包大小较大时，在本地发现pmtu）、don’t（不设置DF标志）

-U

打印完整的user-to-user延迟

-w deadline

在ping退出之前指定一个超时(以秒为单位)，而不管发送或接收了多少数据包。

-W timeout

等待响应的时间，以秒为单位。该选项只影响任何响应的超时，否则ping将等待两个RTT

-v

显示详细执行过程

-V

显示版本
```
## ICMP报文
没有选项的IP报头是20个字节。ICMP echo_Request数据包包含另外8字节的ICMP报头，后面跟着任意数量的数据。当给定一个数据包大小时，这表明了这个额外数据块的大小(缺省值为56)。因此，在ICMP ECHO_REPLY类型的IP数据包中接收的数据量总是比请求的数据空间(ICMP报头)多8个字节。

如果数据空间至少是结构体timeval的大小，Timeval ping使用这个空间的起始字节来包含它在计算往返时间时使用的时间戳。如果数据空间较短，则不提供往返时间。
## 重复和损坏的数据包
ping将报告重复和损坏的数据包。重复的数据包不应该发生，似乎是由不适当的链路级重传引起的.重复可能在许多情况下发生，很少(如果有的话)是一个好的迹象，尽管低水平的重复可能并不总是引起恐慌。损坏的数据包显然是引起警报的严重原因，并且经常表示ping数据包路径(网络中或主机中)的某个硬件出现故障。
## 尝试不同的数据模式
(内部)网络层不应根据数据部分中包含的数据对分组进行不同的处理。不幸的是，依赖于数据的问题已经被人们知道潜入网络，并且在很长一段时间内没有被发现。在许多情况下，会出现问题的特定模式是没有足够的“转换”的东西，例如所有的1或所有的零，或者在边缘的一个模式，例如几乎所有的零。仅仅指定命令行上所有零的数据模式(例如)并不一定足够，因为感兴趣的模式是在数据链接级别上，而且您键入的内容与控制器发送的内容之间的关系可能很复杂。

这意味着，如果您有一个数据依赖的问题，您可能需要做大量的测试才能找到它。如果幸运的话，您可能会设法找到一个文件，该文件要么无法通过您的网络发送，要么需要比其他类似长度的文件更长的传输时间。然后，您可以检查这个文件是否有重复的模式，可以使用ping的-p选项进行测试。
## TTL
IP数据包的TTL值表示数据包在被丢弃之前可以通过的最大IP路由器数。在当前的实践中，您可以期望Internet中的每个路由器将TTL字段减少一个。TCP/IP规范规定，TCP数据包的TTL字段应该设置为60，但许多系统使用较小的值(4.3BSD使用30，4.2使用15)。该字段的最大可能值为255，大多数Unix系统将ICMP ECHO_REQUEST数据包的TTL字段设置为255。这就是为什么您会发现您可以“ping”一些主机，但不能通过telnet(1)或ftp(1)到达它们。

在正常操作中，ping从它接收的数据包打印ttl值。当远程系统收到ping数据包时，它可以在响应中使用ttl字段执行以下三项任务之一。

1）不改变它；这是Berkeley Unix系统在4.3BSDTahoe发布之前所做的事情。在这种情况下，接收到的数据包中的TTL值将为255减去往返路径中的路由器数量。

2）将其设置为255；这是目前BerkeleyUnix系统所做的。在这种情况下，接收到的数据包中的TTL值将为255减去从远程系统到ping主机的路径中的路由器数量。

3）将其设置为其他值。有些机器对ICMP数据包使用的值与它们对TCP数据包使用的值相同，例如30或60。其他人可能会使用完全狂野的价值观。

## 举例
ping广播地址
``` bash
[root@localhost ~]$ ping  192.168.1.255
Do you want to ping broadcast? Then -b
[root@localhost ~]$ ping -b 192.168.1.255   #只有使用-b选项才能ping广播地址
WARNING: pinging broadcast address
PING 192.168.1.255 (192.168.1.255) 56(84) bytes of data.
64 bytes from 192.168.1.8: icmp_seq=1 ttl=64 time=0.219 ms
64 bytes from 192.168.1.8: icmp_seq=2 ttl=64 time=0.282 ms
64 bytes from 192.168.1.8: icmp_seq=3 ttl=64 time=0.215 ms
64 bytes from 192.168.1.8: icmp_seq=4 ttl=64 time=0.268 ms
^C
--- 192.168.1.255 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3684ms
rtt min/avg/max/mdev = 0.215/0.246/0.282/0.029 ms
```
测试目标地址是否畅通
``` bash
[root@localhost ~]$ ping -c 4 192.168.1.8  #指定发送数据包的次数
PING 192.168.1.8 (192.168.1.8) 56(84) bytes of data.
64 bytes from 192.168.1.8: icmp_seq=1 ttl=64 time=0.427 ms
64 bytes from 192.168.1.8: icmp_seq=2 ttl=64 time=0.196 ms
64 bytes from 192.168.1.8: icmp_seq=3 ttl=64 time=0.220 ms
64 bytes from 192.168.1.8: icmp_seq=4 ttl=64 time=0.329 ms 

--- 192.168.1.8 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3002ms
rtt min/avg/max/mdev = 0.196/0.293/0.427/0.092 ms
```