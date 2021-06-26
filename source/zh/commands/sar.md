# sar - 系统运行状态统计工具

sar命令 是Linux下系统运行状态统计工具，它将指定的操作系统状态计数器显示到标准输出设备。sar工具将对系统当前的状态进行取样，然后通过计算数据和比例来表达系统的当前运行状态。它的特点是可以连续对系统取样，获得大量的取样数据。取样数据和分析的结果都可以存入文件，使用它时消耗的系统资源很小。

sar指令用来收集、报告、保存系统的活动信息。sar命令将操作系统中选定的累积活动计数器的内容写入标准输出。会计系统根据参数“interval”、“count”中的值，写入以秒为单位的指定间隔的指定次数的信息。如果参数“interval”设置为零，sar命令将显示自系统启动以来的平均统计信息。如果指定“count”参数而未指定“Interval“参数，则会连续生成报告。除了显示在屏幕上之外，还可以将收集到的数据保存在“-o”标志指定的文件中。如果省略了文件名，sar将使用标准的系统活动日数据文件“/var/log/sa/sadd”文件，其中dd参数指示当前日期。默认情况下，内核中的所有可用数据都保存在数据文件中。

sar命令提取并写入以前保存在文件中的标准输出记录。该文件可以是“-f”标志指定的文件，也可以是默认的标准系统活动日数据文件。

如果没有“-P”标志，sar命令将报告系统范围内(所有处理器中的全局统计)统计数据，这些统计数据是以百分比表示的值的平均值计算的，而以其他方式表示的和。如果给定“-P”标志，sar命令报告与指定处理器相关的活动。如果给出了“-P ALL”，sar命令会报告每个处理器的统计信息和所有处理器之间的全局统计信息。

可以使用标志选择有关特定系统活动的信息。没有指定任何标志，只选择CPU活动。指定-A标志等同于指定“-bBdqrRSvwWy -I SUM -I XALL -n ALL -u ALL -P ALL”。

sar命令的默认版本(CPU利用率报告)可能是用户开始系统活动调查的首批工具之一，因为它监视主要的系统资源。如果CPU利用率接近100%(使用“+ nice + system”)，则采样的工作负载是CPU限制的。

如果需要多个示例和多个报告，则可以方便地为sar命令指定一个输出文件。将sar命令作为后台进程运行。这方面的语法是：
```
sar -o datafile interval count >/dev/null 2>&1 &
```
所有数据以二进制形式捕获并保存到文件(数据文件)中。然后，可以使用sar命令使用-f选项选择性地显示数据。设置间隔和计数参数，以选择间隔秒间隔的计数记录。如果未设置Count参数，则将选择保存在文件中的所有记录。以这种方式收集数据对于描述一段时间内的系统使用情况和确定峰值使用时间非常有用。

注意：sar命令只报告本地活动。

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
sar  [OPTION]
```

## 选项

| 选项                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **-A**                                                       | 显示所有报告                                                 |
| **-b**                                                       | 显示IO状态以及传输速率，有一下值可以显示：**tps**，每秒发送给物理设备的传输总数。传输是对物理设备的I/O请求。多个逻辑请求可以组合成对设备的单个I/O请求。转移是不确定的大小。**rtps**，每秒向物理设备发出的读取请求总数。**wtps**，每秒向物理设备发出的写入请求总数。**bread/s**，每秒从设备读取的数据总量(以块为单位)，块大小512字节。**bwrtn/s**，每秒写入到设备的数据总量(以块为单位)。 |
| **-B**                                                       | 显示页信息：**pgpgin/s**，每秒从磁盘呼入系统的总字节数。注意：对于旧内核(2.2.x)，这个值是每秒许多块(而不是千字节)。**pgpgout/s**，系统每秒呼出到磁盘的千字节总数。注意：对于旧内核(2.2.x)，这个值是每秒若干块(而不是千字节)。**fault/s**，系统每秒产生的页面错误数(主要小错误)。这不是生成I/O的页面错误的计数，因为一些页面错误可以在没有I/O的情况下被解决。**majflt/s**，系统每秒发生的主要故障数，这些故障需要从磁盘加载内存页。**pgfree/s**，系统每秒放置在空闲列表上的页数**pgscank/s**，每秒被kswapd守护进程扫描的页数。**pgscand/s**，每秒直接扫描的页数。**pgsteal/s**，每秒从缓存(分页缓存和交换缓存)中回收的页数，以满足内存需求。**%vmeff**，这是一个页面回收效率的度量（pgsteal / pgscan）。如果它接近100%，那么几乎所有从非活动列表尾部下来的页面都会被捕获。如果它太低(例如，不足30%)，那么虚拟内存就会有一些困难。如果在时间间隔内没有扫描页面，则此字段将显示为零。 |
| **-C**                                                       | 读取文件的时候，显示备注信息                                 |
| **-d**                                                       | 显示块设备信息，有以下值可以显示：**tps**，指示每秒发送给设备的传输次数。多个逻辑请求可以组合成对设备的单个I/O请求。转移是不确定的大小。**rd_sec/s**，从设备读取的扇区数。扇区的大小为512字节。**wr_sec/s**，写入设备的扇区数。扇区的大小为512字节。**avgrq-sz**，向设备发出的请求的平均大小(按扇区)。**avgqu-sz**，向设备发出的请求的平均队列长度。**await**，向要服务的设备发出I/O请求的平均时间(毫秒)。这包括请求在队列中花费的时间和服务它们的时间。**svctm**，向设备发出的I/O请求的平均服务时间(毫秒)。**%util**，向设备发出I/O请求的CPU时间百分比(设备的带宽利用率)。当此值接近100%时，设备饱和发生。 |
| **-e [hh:mm:ss]**                                            | 设置报告的结束时间                                           |
| **-f**                                                       | 从文件获取信息                                               |
| **-h**                                                       | 显示简短的帮助信息                                           |
| **-i**                                                       | 在秒内选择数据记录，以尽可能接近由Interval参数指定的数字。   |
| **-I { int [,...] \| SUM \| ALL \| XALL }**                  | 报告给定中断的统计信息。**int**是中断号。在命令行中指定多个INT参数将查看多个独立的中断。**SUM**关键字指示将显示每秒接收的中断总数。**ALL**关键字表示将报告来自前16个中断的统计信息，而**XALL**关键字表示将报告来自所有中断的统计信息，包括潜在的APIC中断源。注意，中断统计数据依赖于要收集的南共体选项“-S INT”。 |
| **-j { ID \| LABEL \| PATH \| UUID \| ... }**                | 显示持久设备名称。结合选项-d使用此选项。选项ID、LABEL等。指定持久性名称的类型。这些选项不受限制，唯一的先决条件是“/dev/disk”中存在具有所需持久名称的目录。如果没有为设备找到持久名称，则设备名称将被很好地打印出来(请参阅下面的选项-p)。 |
| **--legacy**                                                 | 启用读取旧的“/var/log/sa/sadd”数据文件                       |
| **-m**                                                       | 报告电源管理信息                                             |
| **-n**                                                       | 报告网络信息，可能的关键字有**DEV，EDEV，NFS，NFSD，SOCK，IP，EIP，ICMP，EICMP，TCP，ETCP，UDP，SOCK6，IP6，EIP6，ICMP6，EICMP6，UDP6**。 |
|                                                              | 使用**DEV**关键字，将报告来自网络设备的统计信息。显示下列值：**IFACE**，报告统计信息的网络接口的名称。**rxpck/s**，每秒接收的数据包总数。**txpck/s**，每秒发送的数据包总数。**rxkB/s**，每秒接收的千字节总数**txkB/s**，每秒发送的千字节总数**rxcmp/s**，每秒收到的压缩数据包数量(用于跳频等)**txcmp/s**，每秒传输的压缩数据包数。**rxmcst/s**，每秒接收的多播数据包数。 |
|                                                              | 使用**EDEV**关键字，将报告来自网络设备的故障(错误)统计信息。显示下列值：**IFACE**，报告统计信息的网络接口的名称。**rxerr/s**，每秒接收的坏数据包总数。**txerr/s**，发送数据包时每秒发生的错误总数。**coll/s**，传输数据包时每秒发生的碰撞次数。**rxdrop/s**，由于Linux缓冲区中缺少空间，接收时每秒丢弃的数据包数量。**txdrop/s**，由于Linux缓冲区中缺少空间，发送时每秒丢弃的数据包数量。**txcarr/s**，在传输数据包时每秒发生的carrier错误。**rxfram/s**，每秒在接收到的数据包上发生的帧对齐错误数。**rxfifo/s**，每秒发生在接收数据包上的FIFO溢出错误数**txfifo/s**，每秒发生在传输数据包上的FIFO溢出错误数。 |
|                                                              | 使用**NFS**关键字，将报告有关NFS客户端活动的统计信息。显示下列值：**call/s**，每秒发出的RPC请求数。**retrans/s**，每秒RPC请求的数量，需要重新传输的请求(例如，由于服务器超时)。**read/s**，每秒进行的“read”RPC调用数。**write/s**，每秒进行的“write”RPC调用数。**access/s**，每秒进行的“access”RPC调用数。**getatt/s**，每秒进行的“getattr”RPC调用数。 |
|                                                              | 使用**NFSD**关键字，将报告有关NFS服务器活动的统计信息。显示下列值：**scall/s**，每秒收到的RPC请求数。**badcall/s**，每秒收到的错误rpc请求数，这些请求的处理会产生错误。**packet/s**，每秒接收的网络数据包数。**udp/s**，每秒接收的udp数据包数。**tcp/s**，每秒接收的tcp数据包数。**hit/s**，每秒应答缓存命中次数。**miss/s**，每秒未命中应答缓存的次数。**sread/s**，每秒接收的“read”RPC调用数。**swrite/s**，每秒接收的“write”RPC调用数。**saccess/s**，每秒接收的“access”RPC调用数。**sgetatt/s**，每秒接收的“getattr”RPC调用数。 |
|                                                              | 使用**Sock**关键字，将报告正在使用的套接字的统计信息(IPv 4)。显示下列值：**totsck**，系统使用的套接字总数**tcpsck**，当前使用的TCP套接字数目**udpsck**，当前使用的UDP套接字数目**rawsck**，当前使用的RAW套接字数目**ip-frag**，目前正在使用的IP碎片数目**tcp-tw**，时间等待状态下TCP套接字的数目。 |
|                                                              | 使用**IP**关键字，报告有关IPv 4网络流量的统计信息。请注意，IPv 4统计信息依赖于要收集的南共体选项“-S SNMP”。显示以下值(方括号内有正式SNMP名称)：**irec/s**，每秒从接口接收的输入数据报总数，包括错误接收的数据报[ipInReceives]。**fwddgm/s**，每秒输入数据报的数量，该实体不是该实体的最终IP目的地，因此试图找到将其转发到该最终目的地的路由[ipForwDatagram]。**idel/s**，每秒成功传递给IP用户协议(包括ICMP)的输入数据报总数[ipInDelivers]。**orq/s**，本地IP用户协议(包括ICMP)每秒在请求传输时向IP提供的IP数据报总数[ipOutRequest]。请注意，此计数器不包括以fwddgm/s计算的任何数据报。**asmrq/s**，每秒收到的需要在该实体重新组装的IP片段数[ipReasmReqds]。**asmok/s**，每秒成功重新组装的IP数据报的数量[ipReasmOKs]。**fragok/s**，每秒在此实体中被成功分段的IP数据报的数量[ipFragOKs]。**fragcrt/s**，由于该实体[ipFragCreates]的碎片而每秒生成的IP数据报碎片的数量。 |
|                                                              | 使用**EIP**关键字，将报告有关IPv 4网络错误的统计信息。请注意，IPv 4统计信息依赖于要收集的南共体选项“-S SNMP”。显示以下值(方括号内有正式SNMP名称)：**ihdrerr/s**，由于IP报头中的错误而每秒丢弃的输入数据报的数量，包括错误校验和、版本号错配、其他格式错误、超时时间、在处理IP选项时发现的错误等。[ipinHdrError]**iadrerr/s**，每秒丢弃的输入数据报的数量，因为它们的IP报头的目标字段中的IP地址不是要在此实体接收的有效地址。此计数包括无效地址(例如，0.0.0.0)和不受支持的类的地址(例如，类E)。对于非IP路由器，因此不转发数据报的实体，此计数器包括丢弃的数据报，因为目标地址不是本地地址[ipInAddrError]。**iukwnpr/s**，由于未知或不受支持的协议而成功接收到但每秒丢弃的本地寻址数据报的数目[ipInUnKnownProtos]。**idisc/s**，每秒输入IP数据报的数量，没有遇到任何问题来阻止其继续处理，但这些数据报被丢弃(例如，由于缺乏缓冲区空间)[ipInDis批]。请注意，此计数器不包括等待重新组装时丢弃的任何数据报。**odisc/s**，每秒输出IP数据报的数量，没有遇到任何问题来阻止它们传输到目的地，但这些数据报被丢弃(例如，由于缺乏缓冲区空间)[ipOutDisks]。请注意，如果任何此类数据包符合此(任意)丢弃标准，则此计数器将包括在fwddgm/s中计数的数据报。**onort/s**，每秒丢弃的IP数据报的数量，因为找不到将它们传输到目的地[ipOutNoRoutes]的路由。请注意，此计数器包括在fwddgm/s中计数的符合“无路由”标准的任何数据包。请注意，这包括主机无法路由的任何数据报，因为其所有默认路由器都已关闭。**asmf/s**，IP重新组装算法每秒检测到的故障数(无论出于什么原因：超时、错误等)[ipReasmFails]。**fragf/s**，每秒丢弃的IP数据报的数量，因为它们需要在该实体中被碎片化，但不能这样做。 |
| |使用**ICMP**关键字，报告关于ICMPv 4网络流量的统计信息。请注意，ICMPv 4的统计数据依赖于要收集的南共体选项“-S SNMP”。显示以下值(方括号内有正式SNMP名称)：**imsg/s**，实体每秒收到的ICMP消息总数[icmpInMsgs]。**omsg/s**，该实体试图每秒发送的ICMP消息总数[icmpOutMsgs]。**iech/s**，每秒接收的ICMP Echo(请求)消息的数量[icmpInEchos]。**iechr/s**，每秒收到的ICMP回波回复消息的数量[icmpInEchoRep]。**oech/s**，每秒发送的ICMP回声(请求)消息数量[icmpOutEchos]。**oechr/s**，每秒发送的ICMP回送回复消息的数量[icmpOutEchoRep]。**itm/s**，每秒收到的ICMP时间戳(请求)消息数目[icmpInTimestamps]。**itmr/s**，每秒收到的ICMP时间戳回复消息的数量[icmpInTimestampRep]。**otm/s**，每秒发送的ICMP时间戳(请求)消息数量[icmpOut Timestamps]**otmr/s**，每秒发送的ICMP时间戳回复消息的数量[icmpOutTimestampRep]。**iadrmk/s**，每秒收到的ICMP地址掩码请求消息的数量[icmpInAddrMask]。**iadrmkr/s**，每秒收到的ICMP地址掩码应答消息的数量[icmpInAddrMaskRep]**oadrmk/s**，每秒发送的ICMP地址掩码请求消息的数量[icmpOutAddrMask]**oadrmkr/s**，每秒发送的ICMP地址掩码应答消息的数量[icmpOutAddrMaskRep]。 |  
| |使用**EICMP**关键字，将报告有关ICMPv 4错误消息的统计信息。请注意，ICMPv 4的统计数据依赖于要收集的南共体选项“-S SNMP”。显示以下值(方括号内有正式SNMP名称)：**ierr/s**，实体每秒收到但被确定为具有ICMP特定错误的ICMP消息数(坏ICMP校验和、坏长度等)[icmpinError]**oerr/s**，该实体由于在ICMP中发现的问题而没有发送的每秒ICMP消息的数量，例如缺少缓冲区[icmpOutError]。**idstunr/s**，每秒接收到的ICMP目标不可达消息数目[icmpInDestUnreachs]**odstunr/s**，每秒发送的ICMP目标不可达消息数目[icmpOutDestUnreachs]**itmex/s**，ICMP时间超过每秒收到的消息的次数[icmpInTimeExcds]**otmex/s**，ICMP时间超过每秒发送的消息[icmpOutTimeExcds]。**iparmpb/s**，每秒收到的ICMP参数问题消息数量[icmpInParmProbs]**oparmpb/s**，每秒发送的ICMP参数问题消息的数量[icmpOutParmProbs]。**isrcq/s**，每秒收到的ICMP源Quench消息的数量[icmpInSrcQuengs]。**osrcq/s**，每秒发送的ICMP源Quench消息的数量[icmpOutSrcQuenberg]**iredir/s**，每秒接收到的ICMP重定向消息的数量[icmpInRedirects]。**oredir/s**，每秒发送的ICMP重定向消息的数量[icmpOutRedirections]。 | 
| |使用**TCP**关键字，将报告有关TCPv 4网络流量的统计信息。请注意，TCPv 4统计信息依赖于要收集的南共体选项“-S SNMP”。显示以下值(方括号内有正式SNMP名称)：**active/s**，tcp连接每秒从关闭状态直接转换到SYN发送状态的次数[tcpActiveOpens]**passive/s**，tcp连接从每秒侦听状态直接转换到SYN-RCVD状态的次数[tcpPassiveOpens]**iseg/s**，每秒接收的段总数，包括错误接收的段数[tcpInSegs]。此计数包括在当前建立的连接上接收的段。**oseg/s**，每秒发送的段数，包括当前连接上的段数，但不包括仅包含重传的octets[tcpOutSegs]的段数。 |  
|| 使用**ETCP**关键字，将报告有关TCPv 4网络错误的统计信息。请注意，TCPv 4统计信息依赖于要收集的南共体选项“-S SNMP”。显示以下值(方括号内有正式SNMP名称)：atmptf/s，每秒TCP连接的次数已从SYN发送状态或SYNRCVD状态直接转换到关闭状态，再加上每秒TCP连接的次数已从SYN-RCVD状态直接转换到侦听状态[tcpAttemtFails]。**estres/s****，**每秒有多少次TCP连接已经从已建立的状态或关闭等待状态[tcpEstabResets]直接转换到关闭状态。**retrans/s**，每秒重传的段总数，即包含一个或多个先前传输的octets[tcpRetransSegs]的TCP段数。**isegerr/s**，每秒接收的错误段总数(例如，错误的TCP校验和)[tcpInErrs]**orsts/s**，每秒发送的包含RST标志[tcpOutRars]的TCP段数。 | 
| |使用**UDP**关键字，报告有关UDPv 4网络流量的统计信息。注意，UDPv 4统计信息依赖于要收集的南共体选项“-S SNMP”。显示以下值(方括号内有正式SNMP名称)：**idgm/s**，每秒发送给UDP用户的UDP数据报总数[udpInDatagram]**odgm/s**，该实体每秒发送的UDP数据报总数[udpOutDatagram]**noport/s**，在目标端口[udpNoport]上没有应用程序的每秒接收的UDP数据报总数。**idgmerr/s**，每秒接收到的UDP数据报数量，由于目的地端口缺少应用程序[udpInError]而无法传递。 | 
| |使用**SOCK6**关键字，将报告正在使用的套接字的统计信息(IPv 6)。请注意，IPv 6统计数据依赖于要收集的南共体选项“-S IPv 6”。显示下列值：**tcp6sck**，目前正在使用的TCPv6套接字的数量。**udp6sck**，目前正在使用的UDPv6套接字的数量**raw6sck**，目前正在使用RAWv6套接字的数量**ip6-frag**，目前正在使用ipv6碎片的数量 |  
| |使用**IP6**关键字，报告有关IPv 6网络流量的统计信息。请注意，IPv 6统计数据依赖于要收集的南共体选项“-S IPv 6”。显示以下值(方括号内有正式SNMP名称)：**irec6/s**，每秒从接口接收的输入数据报总数，包括错误接收的数据报[ipv6IfStatsInReceives]。**fwddgm6/s**，该实体接收并转发到其最终目的地的每秒输出数据报数[ipv6IfStatsOutForwDatagram]。**idel6/s**，每秒成功传递到IPv 6用户协议(包括ICMP)的数据报总数[ipv6IfStatsInDelivers]。**orq6/s**，本地IPv 6用户协议(包括ICMP)每秒在传输请求中向IPv 6提供的IPv 6数据报总数[ipv6IfStatsOutRequest]。**asmrq6/s**，每秒接收到的需要在此接口重新组装的IPv 6片段数量[ipv6IfStatsReasmReqds]。**asmok6/s**，每秒成功重新组装的IPv 6数据报数目[ipv6IfStatsReasmOKs]。**imcpck6/s**，接口每秒接收的多播数据包数量[ipv6IfStatsInMcastPkts]。**omcpck6/s**，通过接口[ipv6IfStatsOutMcastPkts]每秒发送的多播数据包数。**fragok6/s**，每秒在此输出接口上成功分段的IPv 6数据报的数量[ipv6IfStatsOutFragOKs]**fragcr6/s**，由于在此输出接口[ipv6IfStatsOutFragCreates]分段而每秒生成的输出数据报片段的数量。 |  
| |使用**EIP6**关键字，报告有关IPv 6网络错误的统计信息。请注意，IPv 6统计数据依赖于要收集的南共体选项“-S IPv 6”。显示以下值(方括号之间的形式SNMP名称)**ihdrer6/s**，由于IPv 6标头中的错误而每秒丢弃的输入数据报的数量，包括版本号错配、其他格式错误、跳数超出、在处理IPv 6选项时发现的错误等。[ipv6fStatsInHdrError]。**iadrer6/s**，每秒丢弃的输入数据报数量，因为它们的IPv 6标头的目标字段中的IPv 6地址不是要在此实体接收的有效地址。此计数包括无效地址(例如：0)和不支持的地址(例如，带有未分配前缀的地址)。对于非IPv 6路由器，因此不转发数据报的实体，此计数器包括丢弃的数据报，因为目标地址不是本地地址[ipv6IfStatsInAddrError]。**iukwnp6/s**，由于未知或不受支持的协议而成功接收但每秒丢弃的本地寻址数据报的数目[ipv6IfStatsIn未知nProtos]。**i2big6/s**，由于其大小超过传出接口的链接MTU而无法每秒转发的输入数据报的数量[ipv6IfStatsInTooBigError]。**idisc6/s**，每秒输入IPv 6数据报的数量，这些数据报没有遇到任何问题来阻止它们继续处理，但这些数据报被丢弃(例如，由于缺乏缓冲区空间)[ ipv6IfStatsInDiscards]。**inort6/s**，每秒丢弃的输入数据报的数量，因为找不到将它们传输到其目的地[ipv6IfStatsInNoRoutes]的路由(Ipv6IfStatsInNoRoutes)。**onort6/s**，每秒丢弃的本地生成的IP数据报的数量，因为找不到将它们传输到目的地的路由[unknown formal SNMP name]。**asmf6/s**，IPv 6重新组装算法每秒检测到的故障数(无论出于什么原因：超时、错误等)。[ipv6fStatsReasmFails]。**fragf6/s**，每秒丢弃的IPv 6数据报的数量，因为它们需要在这个输出接口上被碎片化，但不能是[ipv6IfStatsOutFragFails]。**itrpck6/s**，由于数据报帧没有携带足够的数据而每秒丢弃的输入数据报数[ipv6IfStatsInTruncatedPkts] | 
| |使用**ICMP6**关键字，报告了有关ICMPv 6网络流量的统计信息。请注意，ICMPv 6的统计数据取决于要收集的南共体选项“-S IPv 6”。显示以下值(方括号内有正式SNMP名称)：**imsg6/s**，接口每秒接收的ICMP消息总数，其中包括ierr6/s计算的所有消息[ipv6IfIcmpInMsgs]。**omsg6/s**，此接口每秒试图发送的ICMP消息总数[ipv6IfIcmpOutMsgs]**iech6/s**，接口每秒接收的ICMP Echo(请求)消息数量[ipv6IfIcmpInEchos]**iechr6/s**，接口每秒接收的ICMP回波回复消息的数量[ipv6IfIcmpInEchoReplies]**oechr6/s**，接口每秒发送的ICMP Echo回复消息的数量[ipv6IfIcmpOutEchoReplies]。**igmbq6/s**，接口每秒接收到的ICMPv 6组成员查询消息数目[ipv6IfIcmpInGroupMembQueries]**igmbr6/s**，接口每秒接收到的ICMPv 6组成员资格响应消息的数量[ipv6IfIcmpInGroupMembResponse]。**ogmbr6/s**，每秒发送的ICMPv 6组成员资格响应消息数目[ipv6IfIcmpOutGroupMembResponse]**igmbrd6/s**，接口每秒接收到的ICMPv 6组成员减少消息的数量[ipv6IfIcmpInGroupMembReductions]。**ogmbrd6/s**，每秒发送的ICMPv 6组成员数目减少消息[ipv6IfIcmpOutGroupMembReductions]**irtsol6/s**，ICMP路由器每秒请求接口接收的消息的数量[ipv6IfIcmpInRouterSolrice]。**ortsol6/s**，每秒由接口发送的ICMP路由器请求消息的数量[ipv6IfIcmpOutRouterSolter]。**irtad6/s**，接口每秒接收到的ICMP路由器广告消息数量[ipv6IfIcmpInRouterAdvertisements]。**inbsol6/s**，每秒由接口接收的ICMP邻居请求消息的数量[ipv6IfIcmpInNeighborSolrice]。**onbsol6/s**，接口每秒发送的ICMP邻居请求消息的数量[ipv6IfIcmpOutNeighSolborSoleline]。**inbad6/s**，接口每秒接收到的ICMP邻居广告消息的数量[ipv6IfIcmpInNeighborAdvertisements]。**onbad6/s**，接口每秒发送的ICMP邻居广告消息数量[ipv6IfIcmpOutNeighborAdvertisements]。 |
| |使用**EICMP6**关键字，报告有关ICMPv 6错误消息的统计信息。请注意，ICMPv 6的统计数据取决于要收集的南共体选项“-S IPv 6”。显示以下值(方括号内有正式SNMP名称)：**ierr6/s**，接口每秒收到但被确定为具有ICMP特定错误的ICMP消息数(坏ICMP校验和、坏长度等)[ipv6IcmpInError]**idtunr6/s**，接口每秒接收到的ICMP目标不可达消息的数量[ipv6IfIcmpInDestUnreachs]。**odtunr6/s**，接口每秒发送的ICMP目标不可达消息的数量[ipv6IfIcmpOutDestUnreachs]。**itmex6/s**，ICMP时间超过接口每秒接收的消息的次数[ipv6IfIcmpInTimeExcds]。**otmex6/s**，ICMP时间超过接口每秒发送的消息的次数[ipv6IfIcmpOutTimeExcds]。**iprmpb6/s**，接口每秒接收到的ICMP参数问题消息的数量[ipv6IfIcmpInParmProblems]。**oprmpb6/s**，接口每秒发送的ICMP参数问题消息的数量[ipv6IfIcmpOutParmProblems]。**iredir6/s**，每秒由接口接收的重定向消息的数量[ipv6IfIcmpInRedirections]。**oredir6/s**，接口第二次发送的重定向消息数量[ipv6IfIcmpOutRedirections]。**ipck2b6/s**，接口每秒接收到的ICMP数据包的数量[ipv6IfIcmpInPktTooBigs]。**opck2b6/s**，接口每秒发送的ICMP数据包的数量[ipv6IfIcmpOutPktTooBigs]。 |  
| |使用**UDP6**关键字，报告有关UDPv 6网络流量的统计信息。请注意，UDPv 6的统计数据取决于要收集的南共体选项“-S IPv 6”。显示以下值(方括号之间的形式SNMP名称)：**idgm6/s**，每秒传递给UDP用户的UDP数据报总数[udpInDatagram]。**odgm6/s**，该实体每秒发送的UDP数据报总数[udpOutDatagram]。**noport6/s**，在目标端口上没有应用程序的每秒接收的UDP数据报总数[udpNoport]。**idgmer6/s**，每秒接收到的UDP数据报数量，由于目的地端口缺少应用程序而无法传递[udpInError]。 | 
| **-o**                                                       | 保存内容                                                     |
| **-P**                                                       | 报告cpu使用情况                                              |
| **-p**                                                       | 漂亮的打印设备名称。结合选项-d使用此选项。默认情况下，名称被打印为dev m-n，其中m和n是设备的主要和次要设备号。 |
| **-q**                                                       | 报告队列长度和负载平均值：**runq-sz**，运行队列长度(等待运行时的任务数)**plist-sz**，任务列表中的任务数**ldavg-1**，最后一分钟的系统负载平均值。负载平均值计算为可运行或正在运行的任务的平均数量(R状态)，以及在指定间隔内处于不间断睡眠状态(D状态)的任务数。**ldavg-5**，在过去5分钟系统平均负荷。**ldavg-15**，在过去15分钟系统平均负荷。 |
| **-r**                                                       | 报告内存使用情况：**kbmemfree**，可用内存的数量(千字节)。**kbmemused**，使用内存的数量(以千字节为单位)。这没有考虑到内核本身使用的内存。**%memused**，使用内存的百分比。**kbbuffers**，内核用作缓冲区的内存数量(以千字节为单位)。**kbcached**，内核缓存数据的内存量(以千字节为单位)**kbcommit**，当前工作负载所需的以千字节为单位的内存量。这是对需要多少内存/交换以保证内存永不耗尽的估计。**%commit**，当前工作负载所需内存占内存总量(RAM交换)的百分比。这个数字可能大于100%，因为内核通常会过多提交内存。 |
| **-R**                                                       | 报告内存统计。显示下列值**frmpg/s**，系统每秒释放的内存页数。负值表示系统分配的若干页。注意，根据机器架构，页面的大小为4kB或8kB。**bufpg/s**，系统每秒用作缓冲区的附加内存页数。负值意味着系统用作缓冲区的页面减少。**campg/s**，系统每秒缓存的其他内存页数。负值意味着缓存中的页面减少。 |
| **-s [hh:mm:ss]**                                            | 设置数据起始时间                                             |
| **-S**                                                       | 报告交换空间利用率统计数据：**kbswpfree**，自由交换空间的数量(以千字节为单位)**kbswpused**，使用的交换空间数量(以千字节为单位)**%swpused**，Percentage of used swap space.**kbswpcad**，缓存交换内存的数量(以千字节为单位)。这是一旦被交换掉的内存，就会被交换回来，但仍然在交换区(如果需要内存，就不需要再交换了，因为它已经在交换区了)。这节省了I/O)。**%swpcad**，缓存交换内存相对于使用交换空间数量的百分比 |
| **-t**                                                       | 从每日数据文件读取数据时，指示sar应在数据文件创建者的原始区域设置时间内显示时间戳。如果没有此选项，sar命令将在用户的区域设置时间中显示时间戳。 |
| **-u  [ ALL ]**                                              | 报告CPU利用率。ALL关键字指示应该显示所有CPU字段。报告可以显示以下字段：**%user**，在用户级别(应用程序)执行时出现的CPU利用率百分比。请注意，此字段包括运行虚拟处理器所花费的时间。**%usr**，在用户级别(应用程序)执行时出现的CPU利用率百分比。请注意，此字段不包括运行虚拟处理器所花费的时间。**%nice**，在具有良好优先级的用户级别执行时出现的cpu利用率百分比**%system**，在系统级(内核)执行时出现的CPU利用率百分比。请注意，此字段包括用于服务硬件和软件中断的时间。**%sys**，在系统级(内核)执行时出现的CPU利用率百分比。请注意，此字段不包括用于服务硬件或软件中断的时间。**%iowait**，CPU或CPU空闲的时间百分比，在此期间，系统有未执行的磁盘I/O请求。**%steal**，在虚拟机管理程序为另一个虚拟处理器服务时，虚拟CPU或CPU在非自愿等待中花费的时间百分比**%irq**，CPU或CPU用于服务硬件中断的时间百分比。**%soft**，CPU或CPU用于服务软件中断的时间百分比。**%guest**，CPU或CPU用于运行虚拟处理器的时间百分比**%idle**，CPU或CPU空闲且系统没有未执行磁盘I/O请求的时间百分比。 |
| **-v**                                                       | 报告inode、file和其他内核表的状态。显示下列值：**dentunusd**，目录缓存中未使用的缓存条目数。**file-nr**，系统使用的文件句柄数。**inode-nr**，系统使用的inode处理程序的数量。**pty-nr**，系统使用的伪终端数量。 |
| **-V**                                                       | 打印命令版本信息，并且退出                                   |
| **-w**                                                       | 报告任务创建和切换情况                                       |
| **-W**                                                       | 报告交换空间情况：**pswpin/s**，系统每秒输入的交换页总数**pswpout/s**，系统每秒生成的交换页总数 |
| **-y**                                                       | 报告tty设备情况，显示以下值：**rcvin/s**，当前串行线路每秒接收中断的次数。在TTY列中给出了序列号。**xmtin/s**，当前串行线路每秒发送中断的次数。**framerr/s**，当前串行线路每秒帧错误数。**prtyerr/s**，当前串行线路每秒奇偶校验错误数。。**brk/s**，当前串行线路每秒中断次数。**ovrun/s**，当前串行线路每秒溢出错误数 |

 

## 文件

- /var/log/sa/sadd，指示每日数据文件，其中“dd”参数是表示月份中的某一天的数字。
- /proc，包含具有系统统计信息的各种文件。
## 举例



``` bash
sar -u 2 5  # 每2秒报告CPU利用率。显示5行。
sar -I 14 -o int14.file 2 10 # 每2秒报告IRQ 14的统计数据。显示10行。数据存储在一个名为“int14.file”的文件中。
sar -r -n DEV -f /var/log/sa/sa16 # 显示存储在每日数据文件“sa16”中的内存和网络统计数据
sar –A  # 显示当前每日数据文件中保存的所有统计信息。
```

显示cpu使用情况
``` bash
[root@localhost ntop-4.0.1]$ sar –P ALL          # 显示所有cpu使用情况
Linux 2.6.32-431.el6.i686 (localhost.localdomain)    2018年10月10日   _i686_ (1 CPU)
09时00分01秒     CPU     %user     %nice   %system   %iowait    %steal     %idle
09时10分01秒     all      0.16      0.00      0.07      0.02      0.00     99.75
09时10分01秒       0      0.16      0.00      0.07      0.02      0.00     99.75
 
09时10分01秒     CPU     %user     %nice   %system   %iowait    %steal     %idle
09时20分01秒     all      0.13      0.00      0.09      0.03      0.00     99.75
09时20分01秒       0      0.13      0.00   
…
```

显示网络使用情况

``` bash
[root@localhost ntop-4.0.1]$ sar -n SOCK -s 15:00:00 -e 16:20:00    # 显示网路中socket使用状态，设置的显示的起始和结束时间
Linux 2.6.32-431.el6.i686 (localhost.localdomain)    2018年08月10日   _i686_ (1 CPU) 

15时00分01秒    totsck    tcpsck    udpsck    rawsck   ip-frag    tcp-tw
15时10分01秒       707         5         6         0         0         0
15时20分01秒       723         5         6         0         0         0
平均时间:       715         5         6         0         0         0 

15时24分21秒       LINUX RESTART 

15时30分01秒    totsck    tcpsck    udpsck    rawsck   ip-frag    tcp-tw
15时40分01秒       702         5         6         0         0         0
15时50分01秒       698         5         6         0         0         0
16时00分01秒       698         5         6         0         0         0
16时10分01秒       717         5         6         0         0         0
平均时间:       704         5         6         0         0         0 

15时00分01秒    totsck    tcpsck    udpsck    rawsck   ip-frag    tcp-tw
15时10分01秒       797        19        11         0         0         0
15时20分01秒       801        19        11         0         0         0
15时30分01秒       797        19        11         0         0         0
15时40分01秒       775        16        11         0         0         0
15时50分02秒       775        16        11         0         0         0
16时00分01秒       775        16        11         0         0         0
16时10分01秒       775        16        11         0         0         0
平均时间:       785        17        11         0         0         0

[root@localhost ntop-4.0.1]$
```
