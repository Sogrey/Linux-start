# traceroute - 显示数据包到主机间的路径

traceroute命令 用于追踪数据包在网络上的传输时的全部路径，它默认发送的数据包大小是40字节。

通过traceroute我们可以知道信息从你的计算机到互联网另一端的主机是走的什么路径。当然每次数据包由某一同样的出发点（source）到达某一同样的目的地(destination)走的路径可能会不一样，但基本上来说大部分时候所走的路由是相同的。

traceroute通过发送小的数据包到目的设备直到其返回，来测量其需要多长时间。一条路径上的每个设备traceroute要测3次。输出结果中包括每次测试的时间(ms)和设备的名称（如有的话）及其ip地址。

traceroute指令输出到目标主机的路由包。Traceroute跟踪从IP网络到给定主机的路由数据包。它利用IP协议的生存时间(TTL)字段，并试图在通往主机的路径上从每个网关激发ICMP TIME_SUBERS响应。

traceroute6等价于“traceroute -6”

唯一需要的参数是目标主机的名称或IP地址。探测数据包的总大小(IPv 4默认为60字节，IPv 6为80字节)是一个可选参数。在某些情况下，可以忽略指定的大小或将其增加到最小值。

该程序试图跟踪IP数据包将遵循的路由到某些Internet主机，方法是使用一个小的ttl(生命时间)启动探测包，然后从网关侦听ICMP“时间超过”的答复。我们以1开头，然后增加1，直到我们得到一个ICMP“端口不可达”(或TCP重置)，这意味着我们到达了“主机”，或者达到了最大值(默认为30跳)。在每个ttl设置处发送三个探针(默认情况下)，并打印一行，显示每个探针的ttl、网关地址和往返时间。在请求时，可以在地址之后添加其他信息。如果探测答案来自不同的网关，则将打印每个响应系统的地址。如果在5.0秒(默认)内没有响应，则会为该探针打印一个“*”(星号)。

追踪结束后，可以打印一些附加注释：！h、！n或！P(主机、网络或协议不可达)、！s(源路由失败)、！F(所需碎片化)、！X(管理上禁止通信)、！v(主机优先级冲突)、！C(有效的优先截止)，或！<num>(ICMP不可达代码<num>)。如果几乎所有的探测器都导致某种无法到达的情况，Traceroute就会放弃并退出。

我们不希望目标主机处理UDP探测包，因此目标端口被设置为一个不太可能的值(您可以使用-p标志更改它)。ICMP或TCP跟踪不存在这样的问题(对于TCP，我们使用半开放技术，这样可以防止目标主机上的应用程序看到我们的探测)。

在现代网络环境下，由于防火墙的广泛应用，传统的traceroute方法并不总是适用的。这样的防火墙过滤“不太可能”的UDP端口，甚至ICMP回音。为了解决这个问题，还实现了一些额外的跟踪方法

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
traceroute [-46dFITUnreAV]  
           [-f first_ttl]  
           [-g gate,…]  
           [-i device]  
           [-m max_ttl]  
           [-p port]  
           [-s src_addr]
           [-q nqueries]  
           [-N squeries]  
           [-t tos]  
           [-l flow_label]  
           [-w waittime]  
           [-z sendwait]
           [-UL]  
           [-P proto]  
           [--sport=port]  
           [-M method]  
           [-O mod_options]  
           [--mtu]  
           [--back]  
           host  
           [packet_len]
```

## 选项

``` bash
-4, -6       # 显式强制IPv4或IPv6跟踪。默认情况下，程序将尝试解析给定的名称，并自动选择适当的协议。如果解析主机名同时返回ipv4和ipv6地址，traceroute将使用ipv4。
-I           # 使用ICMP进行路由探测
-T           # 使用TCP协议的SYN进行路由探测
-d           # 是能socket调试功能
-f first_ttl # 指定第一个数据包的TTL，默认是1
-F           # 不使用碎片
-g gateway   # 告诉Traceroute将IP源路由选项添加到传出数据包，该数据包通知网络通过指定网关路由数据包(大多数路由器出于安全原因禁用了源路由)。通常，允许多个网关(逗号分隔)。对于IPv 6，num，addr，addr.允许使用，其中num是路由标头类型(默认为类型2)。注意，0类型的路由头现在已不再推荐使用(Rfc 5095)
-i interface # 指定网络接口
-m max_ttl   # 指定最大ttl，默认30
-N squeries  # 指定同时发送的探测数据包的数量。同时发送几个探针可以大大加快示踪速度。默认值为16。
-n           # 使用ip地址，不使用hostname
-p port      # 指定UDP端口

-t tos

对于IPv 4，设置服务类型(TOS)和优先级值。有用的值是16(低延迟)和8(高吞吐量)。注意，为了使用一些TOS优先级值，您必须是超级用户。对于IPv 6，设置流量控制值。

-w waittime

指定等待应答的时间，默认5s

-q nqueries

设置每个跳的探测数据包数。默认为3

-r

忽略正常的路由表

-s

指定发送数据包的ip地址

-z

探测之间的最小时间间隔(默认为0)。如果值大于10，则它指定一个以毫秒为单位的数字，否则为秒数(浮点值也允许)。当某些路由器对icmp消息使用速率限制时非常有用。

-e

显示ICMP扩展(Rfc 4884)。一般形式是类/类型：后面是十六进制转储。MPLS(Rfc 4950)以一种形式显示出来“MPLS:L=label,E=exp_use,S=stack_bottom,T=TTL”

-A

在路由注册表中执行路径查找，并在相应地址之后直接打印结果。

高级选项

 

--sport=port

选择要使用的源端口

-M method

对traceroute操作使用指定的方法。默认的传统UDP方法有名称Default，ICMP(-I)和TCP(-T)分别有ICMP和TCP。特定于方法的选项可以通过-O传递。

-O option

指定一些特定于方法的选项。几个选项用逗号分隔(或在cmdline上使用多个-O)。每种方法都可能有自己的特定选项，或者许多方法根本没有它们

-U

使用UDP对特定的目标端口进行跟踪(而不是增加每个探针的端口)。默认端口为53(DNS)

-UL

使用UDPLITE追踪

-P protocol

使用指定协议的原始数据包进行跟踪。默认协议为253(Rfc 3692)。

--mtu

沿着被追踪的路径发现MTU

--back

打印后跳数时，它似乎与前进方向不同。在假定远程跳发送初始ttl设置为64、128或255(这似乎是一种常见的做法)的情况下，猜测了这个数字。它以“-NUM”的形式打印为否定值。

--help                           # 显示帮助文档
-V, --version                    # 显示命令版本信息
```
## 可用的方法method
通常，特定的traceroute方法可能必须由-M名称来选择，但是大多数方法都有它们简单的命令行开关(如果存在，您可以在方法名称之后看到它们)。

``` bash
default

传统的、古老的追踪方法。默认使用。

探测包是具有所谓“不可能”目标端口的UDP数据报。第一个探针的“不可能”端口是33434，然后每个下一个探针的端口增加一个。由于预期端口未使用，目标主机通常返回“ICMP不可访问端口”作为最终响应。(但是，没有人知道当某些应用程序侦听这样的端口时会发生什么)。

这个方法普通用户就可以使用。

icmp       -I

目前最常用的方法是使用ICMP回波数据包作为探针。如果您可以ping(8)目标主机，则icmp跟踪也适用。

tcp        -T

众所周知的现代方法，旨在绕过防火墙。使用常量目标端口(默认为80，http)。

如果网络路径中存在一些过滤器，那么很可能任何“不太可能”的UDP端口(对于默认方法而言)或甚至ICMP回波(对于ICMP)都会被过滤，并且整个跟踪只会在这样的防火墙上停止。要绕过网络过滤器，我们必须只使用允许的协议/端口组合。如果我们追踪一些，比如说，邮件服务器，那么更有可能“-T –p 25”可以到达它，即使-我不能。

这种方法使用了众所周知的“半开放技术”，它可以防止目标主机上的应用程序看到我们的探测。通常，发送TCP syn。对于未被监听的端口，我们接收TCP重置，一切都完成了。对于活动侦听端口，我们接收TCP syn ack，但通过TCP重置(而不是预期的TCP ack)应答，这样即使应用程序从未注意到，远程TCP会话也会被删除。

这个方法有以下的一些选项，默认的是syn、sysctl

syn,ack,fin,rst,psh,urg,ece,cwr，在任意组合中为探测包设置指定的tcp标志。

flags=num，将TCP标头中的标志字段设置为num。

ecn，发送带有TCP标志ECA和CWR的syn数据包(用于显式拥塞通知，rfc 3168)

sack,timestamps,window_scaling，在传出探测包中使用相应的tcp标头选项。

sysctl，对上面的TCP头选项和ecn使用当前sysctl(“/proc/sys/net/*”)设置。默认情况下始终设置，如果没有其他指定的话

mss=num，对maxseg tcp报头选项使用num值(当syn)

tcpconn

TCP方法的初始实现，简单使用CONNECT(2)调用，完成TCP会话的完全打开

udp       -U

使用带有常量目标端口的UDP数据报(默认为53，DNS)。也打算绕过防火墙。

注意，与TCP方法不同的是，目标主机上的相应应用程序总是接收我们的探测(带有随机数据)，而且大多数都很容易被它们混淆。但是，大多数情况下，它不会响应我们的数据包，因此我们永远不会看到跟踪中的最后一跳。(幸运的是，似乎至少DNS服务器会以愤怒的方式回复)。

此方法不需要特权。

udplite   -UL

对探针使用udplite数据报(具有固定的目标端口，默认为53)，此方法不需要特权。选项：

coverage=num，设置udplite范围num。

raw       -P proto

发送协议原始数据包。选项：

protocol=proto，使用IP协议Proto(默认253)
```
## 说明
为了加速工作，通常同时发送几个探测器。另一方面，它制造了一个“包裹风暴”，特别是在回复方向。路由器可以节流ICMP响应的速率，有些应答可能会丢失。为了避免这种情况，减少同步探测的数量，甚至将其设置为1(类似于最初的traceroute实现)，即-N1。

最终(目标)主机可以丢弃一些同时进行的探测，甚至可能只回答最新的探测。它可以导致额外的“看上去像过期”啤酒花接近最后一跳。我们使用智能算法来自动检测这种情况，但如果在您的情况下它无法帮助，只需使用-N1。

为了获得更好的稳定性，您可以通过-z选项来减缓程序的工作速度，例如，在探测之间使用“-z 0.5”进行半秒暂停。

如果有些跳对每种方法都没有任何报告，那么获得某些信息的最后机会是使用“ping -R”命令(ipv4，并且仅对最近的8跳)。
## 举例
追踪到baidu的路由信息
``` bash
[root@localhost ~]$ ping www.baidu.com -c 1            #ping目标，得到ip地址
PING www.a.shifen.com (111.13.100.91) 56(84) bytes of data. 

[root@localhost ~]$ traceroute -n www.baidu.com        #追踪路由
traceroute to www.baidu.com (111.13.100.92), 30 hops max, 60 byte packets
 1  192.168.1.1  4.124 ms  3.936 ms  3.882 ms
 2  10.46.80.1  8.917 ms  9.238 ms  9.233 ms
 3  183.203.226.201  12.855 ms  12.788 ms  12.802 ms
 4  221.180.30.197  12.792 ms 221.180.30.45  12.776 ms  12.762 ms
 5  221.183.47.225  13.526 ms  13.363 ms  13.259 ms
 6  221.183.37.249  26.798 ms  23.556 ms  26.832 ms
 7  * * *
 8  111.13.98.101  20.569 ms  20.460 ms 111.13.98.93  24.463 ms
 9  111.13.98.93  27.215 ms 111.13.98.101  20.895 ms 111.13.112.53  26.946 ms
10  111.13.108.5  24.136 ms 111.13.112.57  23.754 ms 111.13.112.61  23.712 ms
```
