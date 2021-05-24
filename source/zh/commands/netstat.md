# netstat - 查看Linux中网络系统状态信息
netstat命令 用来打印Linux中网络系统的状态信息，可让你得知整个Linux系统的网络情况。

netstat指令可以显示当前的网络连接、路由表、接口统计信息、伪装连接和多播成员资格等信息。

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
netstat  [address_family_options]  [--tcp|-t]  [--udp|-u]  [--raw|-w]  [--listening|-l]  [--all|-a]  [--numeric|-n]  [--numeric-hosts]  [--numeric-ports]  [--numeric-ports]  [--symbolic|-N]  [--extend|-e[--extend|-e]]  [--timers|-o]  [--program|-p]   [--verbose|-v]  [--continuous|-c]   [delay]

netstat  {--route|-r}  [address_family_options]  [--extend|-e[--extend|-e]]  [--verbose|-v]  [--numeric|-n]  [--numeric-hosts]  [--numeric-ports]  [--numeric-ports]  [--continuous|-c] [delay]

netstat  {--interfaces|-I|-i}  [iface]  [--all|-a]  [--extend|-e]  [--verbose|-v]  [--program|-p]  [--numeric|-n]  [--numeric-hosts]  [--numeric-ports]  [--numeric-ports]  [--continuous|-c]  [delay]

netstat  {--groups|-g}  [--numeric|-n]  [--numeric-hosts]  [--numeric-ports]  [--numeric-ports]   [--continuous|-c]   [delay]

netstat  {--masquerade|-M}  [--extend|-e]  [--numeric|-n]  [--numeric-hosts]  [--numeric-ports]  [--numeric-ports]  [--continuous|-c] [delay]

netstat  {--statistics|-s}  [--tcp|-t]  [--udp|-u]  [--raw|-w]  [delay]

netstat  {--version|-V}

netstat {--help|-h}
```
``` bash
address_family_options:

[--protocol={inet,inet6,unix,ipx,ax25,netrom,ddp,  ...  }]  [--unix|-x]  [--inet|--ip]  [--ax25]  [--ipx]  [--netrom]  [--ddp]
```

## 选项

``` bash
-v,  --verbose

显示执行过程

-n,  --numeric

直接显示数字ip

--numeric-hosts

显示主机的数字地址，不影响端口和用户名

--numeric-ports

显示端口，不影响主机和用户名

--numeric-users

显示用户id，不影响主机和端口

-A,  --protocol

指定网络类型

-c,  --continuous

持续显示

-e,  --extend

显示其他附加信息

-o,  --timers

显示计时器

-p,  --program

显示正在使用的socket程序pid和名字

-l,  --listen

只显示监听的socket信息

-a,  -all

显示所有连接中的socket信息

-F

显示FIB

-C

显示路由的缓存

-Z,  --context

如果打开了SELinux，那么就打印SELinux的上下文

-T,  --notrim

停止修剪长地址

 

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 说明
netstat打印有关Linux网络子系统的信息。打印的信息类型由第一个参数控制

| 参数                                       | 说明                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| （none）                                   | 默认情况下，netstat显示打开的套接字列表。如果不指定任何地址族，则将打印所有已配置地址家族的活动套接字。 |
| **-r \| --route**                          | 打印内核路由表                                               |
| **-g \| --groups**                         | 显示IPv4和IPv6的多播组成员信息                               |
| **-i\| --interfaces**=iface **, -I**=iface | 显示所有网络接口的表，或指定的ifaces。                       |
| **-M \| --masquerade**                     | 显示假连接列表。                                             |
| **-s \| --statistics**                     | 显示每个协议的汇总统计信息。                                 |

 ## 输出

| Active Internet connections（TCP, UDP, raw） | 说明                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| **Proto**                                    | socket使用的协议，tcp, udp, raw。                            |
| **Recv-Q**                                   | 连接到此套接字的用户程序未复制的字节数。                     |
| **Send-Q**                                   | 远程主机未确认的字节数。                                     |
| **Local Address**                            | 套接字的本地端的地址和端口号。除非指定了“--numeric (-n)“选项，否则套接字地址将解析为其规范主机名(FQDN)，端口号将被转换为相应的服务名称。 |
| **Foreign Address**                          | 套接字的远程端的地址和端口号。类似于“本地地址”。             |
| **State**                                    | socket的状态。由于在原始模式中没有状态，通常在UDP中也没有使用状态，因此这一列可以保留为空白。通常，这可以是几个值之一：ESTABLISHED，套接字有一个已建立的连接。SYN_SENT，套接字正在积极尝试建立连接。SYN_RECV，已从网络接收到连接请求。FIN_WAIT1，套接字关闭，连接正在关闭。FIN_WAIT2，连接被关闭，套接字正在等待来自远程端的关闭。TIME_WAIT，套接字在关闭后等待处理仍在网络中的数据包。CLOSED，没有使用套接字。CLOSE_WAIT，远程终端已关闭，等待套接字关闭。LAST_ACK，远程终端已关闭，套接字已关闭。等待确认LISTEN，套接字正在监听传入的连接。除非您指定“--listening”或“--all(-a)”选项，否则输出中不包含此类套接字。CLOSING，两个套接字都已关闭，但我们仍然没有发送所有数据。UNKNOWN，套接字的状态未知。 |
| **User**                                     |                                                              |
| **PID/Program name**                         |                                                              |
| **Timer**                                    |                                                              |

| Active UNIX domain Sockets                   | 说明                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| **Proto**                                    | 套接字使用的协议(通常是Unix)。                               |
| **RefCnt**                                   | 参考计数(即通过这个套接字附加的进程)。                       |
| **Flags**                                    | 所显示的标志是SO_ACCEPTON (显示为ACC)、SO_WAITDATA(W)或SO_NOSPACE(N)。如果未连接套接字的相应进程正在等待连接请求，则在未连接套接字上使用SO_ACCECPTON。其他的标志不正常。 |
| **Type**                                     | 可能的几种值：SOCK_DGRAM，套接字以数据报(无连接)模式使用。SOCK_STREAM，这是一个流(连接)套接字。SOCK_RAW，套接字用作原始套接字。SOCK_RDM，这个服务提供可靠传递的消息。SOCK_SEQPACKET，这是一个顺序的数据包套接字。SOCK_PACKET，原始接口访问套接字。UNKNOWN，不知道的状态 |
| **State**                                    | FREE，套接字还没有分配LISTENING，套接字正在监听请求。CONNECTING，套接字正在尝试连接。CONNECTED，套接字已经连接。         DISCONNECTING，套接字断开连接。(empty)，套接字没有连接到其他地方。UNKNOWN，未知的状态 |
| **PID/Program name**                         | 打开套接字的进程ID(PID)和进程名。更多信息可在上面写的活动互联网连接部分获得。 |
| **Path**                                     | 这是连接到套接字上的相应进程的路径名。                       |

 ## 相关文件

- /etc/services，服务翻译文件
- /proc，proc文件系统的挂载点，它允许访问内核状态。
- /proc/net/dev，设备信息。
- /proc/net/raw，raw套接字信息。
- /proc/net/tcp，tcp套接字信息。
- /proc/net/udp，udp套接字信息。
- /proc/net/igmp，IGMP多播信息。
- /proc/net/unix，Unix域名套接字信息。
- /proc/net/ipx，IPX套接字信息。
- /proc/net/ax25，AX25套接字信息。
- /proc/net/appletalk，DDP (appletalk) 套接字信息。
- /proc/net/nr，NET/ROM套接字信息
- /proc/net/route，IP路由信息。
- /proc/net/ax25_route，AX25路由信息。
- /proc/net/ipx_route，IPX路由信息。
- /proc/net/nr_nodes，NET/ROM 节点列表。
- /proc/net/nr_neigh，NET/ROM邻居。
- /proc/net/ip_masquerade，伪装连接。
- /proc/net/snmp，静态。

## 举例

显示指定类型的网络信息
``` bash
[root@localhost ~]$ netstat -A inet    #指定网络类型inet
Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address               Foreign Address             State     
udp        0      0 192.168.0.113:33423         192.168.0.1:domain          ESTABLISHED
udp        0      0 192.168.0.113:40242         192.168.1.1:domain          ESTABLISHED
udp        0      0 192.168.0.113:50786         192.168.0.1:domain          ESTABLISHED
```
显示路由表
``` bash
[root@localhost ~]$ netstat –r     #显示路由表
Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
255.255.255.255 -               255.255.255.255 !H        - -          - -
192.168.1.0     *               255.255.255.0   U         0 0          0 eth0
224.0.0.0       -               255.255.255.0   !         - -          - -
default         192.168.1.1     0.0.0.0         UG        0 0          0 eth0
```
显示网卡状态
``` bash
[root@localhost ~]$ netstat –i  #显示网卡状态
Kernel Interface table
Iface       MTU Met    RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg
eth0       1500   0   121817      0      0      0    79998      0      0      0 BMRU
lo        16436   0     8374      0      0      0     8374      0      0      0 LRU
```
 