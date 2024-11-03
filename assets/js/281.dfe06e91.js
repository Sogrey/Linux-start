(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{599:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"traceroute-显示数据包到主机间的路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#traceroute-显示数据包到主机间的路径"}},[t._v("#")]),t._v(" traceroute - 显示数据包到主机间的路径")]),t._v(" "),s("p",[t._v("traceroute命令 用于追踪数据包在网络上的传输时的全部路径，它默认发送的数据包大小是40字节。")]),t._v(" "),s("p",[t._v("通过traceroute我们可以知道信息从你的计算机到互联网另一端的主机是走的什么路径。当然每次数据包由某一同样的出发点（source）到达某一同样的目的地(destination)走的路径可能会不一样，但基本上来说大部分时候所走的路由是相同的。")]),t._v(" "),s("p",[t._v("traceroute通过发送小的数据包到目的设备直到其返回，来测量其需要多长时间。一条路径上的每个设备traceroute要测3次。输出结果中包括每次测试的时间(ms)和设备的名称（如有的话）及其ip地址。")]),t._v(" "),s("p",[t._v("traceroute指令输出到目标主机的路由包。Traceroute跟踪从IP网络到给定主机的路由数据包。它利用IP协议的生存时间(TTL)字段，并试图在通往主机的路径上从每个网关激发ICMP TIME_SUBERS响应。")]),t._v(" "),s("p",[t._v("traceroute6等价于“traceroute -6”")]),t._v(" "),s("p",[t._v("唯一需要的参数是目标主机的名称或IP地址。探测数据包的总大小(IPv 4默认为60字节，IPv 6为80字节)是一个可选参数。在某些情况下，可以忽略指定的大小或将其增加到最小值。")]),t._v(" "),s("p",[t._v("该程序试图跟踪IP数据包将遵循的路由到某些Internet主机，方法是使用一个小的ttl(生命时间)启动探测包，然后从网关侦听ICMP“时间超过”的答复。我们以1开头，然后增加1，直到我们得到一个ICMP“端口不可达”(或TCP重置)，这意味着我们到达了“主机”，或者达到了最大值(默认为30跳)。在每个ttl设置处发送三个探针(默认情况下)，并打印一行，显示每个探针的ttl、网关地址和往返时间。在请求时，可以在地址之后添加其他信息。如果探测答案来自不同的网关，则将打印每个响应系统的地址。如果在5.0秒(默认)内没有响应，则会为该探针打印一个“*”(星号)。")]),t._v(" "),s("p",[t._v("追踪结束后，可以打印一些附加注释：！h、！n或！P(主机、网络或协议不可达)、！s(源路由失败)、！F(所需碎片化)、！X(管理上禁止通信)、！v(主机优先级冲突)、！C(有效的优先截止)，或！"),s("num",[t._v("(ICMP不可达代码"),s("num",[t._v(")。如果几乎所有的探测器都导致某种无法到达的情况，Traceroute就会放弃并退出。")])],1)],1),t._v(" "),s("p",[t._v("我们不希望目标主机处理UDP探测包，因此目标端口被设置为一个不太可能的值(您可以使用-p标志更改它)。ICMP或TCP跟踪不存在这样的问题(对于TCP，我们使用半开放技术，这样可以防止目标主机上的应用程序看到我们的探测)。")]),t._v(" "),s("p",[t._v("在现代网络环境下，由于防火墙的广泛应用，传统的traceroute方法并不总是适用的。这样的防火墙过滤“不太可能”的UDP端口，甚至ICMP回音。为了解决这个问题，还实现了一些额外的跟踪方法")]),t._v(" "),s("h2",{attrs:{id:"适用范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[t._v("#")]),t._v(" 适用范围")]),t._v(" "),s("div",{staticClass:"svg redhat"},[t._v("RedHat")]),t._v(" "),s("div",{staticClass:"svg rhel"},[t._v("RHEL")]),t._v(" "),s("div",{staticClass:"svg ubuntu"},[t._v("Ubuntu")]),t._v(" "),s("div",{staticClass:"svg centos"},[t._v("CentOS")]),t._v(" "),s("div",{staticClass:"svg debian"},[t._v("Debian")]),t._v(" "),s("div",{staticClass:"svg deepin"},[t._v("Deepin")]),t._v(" "),s("div",{staticClass:"svg suse"},[t._v("SUSE")]),t._v(" "),s("div",{staticClass:"svg opensuse"},[t._v("openSUSE")]),t._v(" "),s("div",{staticClass:"svg fedora"},[t._v("Fedora")]),t._v(" "),s("div",{staticClass:"svg linuxmint"},[t._v("Linux Mint")]),t._v(" "),s("div",{staticClass:"svg alpinelinux"},[t._v("Alpine Linux")]),t._v(" "),s("div",{staticClass:"svg archlinux"},[t._v("Arch Linux")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("traceroute")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-46dFITUnreAV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-f first_ttl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-g gate,…"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-i device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-m max_ttl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-p port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-s src_addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-q nqueries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-N squeries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-t tos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-l flow_label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-w waittime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-z sendwait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-UL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-P proto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--sport"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-M method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-O mod_options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--mtu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--back"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v("  \n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("packet_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("-4, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-6")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显式强制IPv4或IPv6跟踪。默认情况下，程序将尝试解析给定的名称，并自动选择适当的协议。如果解析主机名同时返回ipv4和ipv6地址，traceroute将使用ipv4。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-I")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用ICMP进行路由探测")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-T")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用TCP协议的SYN进行路由探测")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是能socket调试功能")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" first_ttl "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定第一个数据包的TTL，默认是1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-F")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不使用碎片")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" gateway   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 告诉Traceroute将IP源路由选项添加到传出数据包，该数据包通知网络通过指定网关路由数据包(大多数路由器出于安全原因禁用了源路由)。通常，允许多个网关(逗号分隔)。对于IPv 6，num，addr，addr.允许使用，其中num是路由标头类型(默认为类型2)。注意，0类型的路由头现在已不再推荐使用(Rfc 5095)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" interface "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定网络接口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" max_ttl   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定最大ttl，默认30")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-N")]),t._v(" squeries  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定同时发送的探测数据包的数量。同时发送几个探针可以大大加快示踪速度。默认值为16。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用ip地址，不使用hostname")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" port      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定UDP端口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" tos       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对于IPv 4，设置服务类型(TOS)和优先级值。有用的值是16(低延迟)和8(高吞吐量)。注意，为了使用一些TOS优先级值，您必须是超级用户。对于IPv 6，设置流量控制值。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-w")]),t._v(" waittime  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定等待应答的时间，默认5s")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-q")]),t._v(" nqueries  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置每个跳的探测数据包数。默认为3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略正常的路由表")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定发送数据包的ip地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-z")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 探测之间的最小时间间隔(默认为0)。如果值大于10，则它指定一个以毫秒为单位的数字，否则为秒数(浮点值也允许)。当某些路由器对icmp消息使用速率限制时非常有用。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示ICMP扩展(Rfc 4884)。一般形式是类/类型：后面是十六进制转储。MPLS(Rfc 4950)以一种形式显示出来“MPLS:L=label,E=exp_use,S=stack_bottom,T=TTL”")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在路由注册表中执行路径查找，并在相应地址之后直接打印结果。")]),t._v("\n")])])]),s("h3",{attrs:{id:"高级选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级选项"}},[t._v("#")]),t._v(" 高级选项")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--sport")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("port    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择要使用的源端口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-M")]),t._v(" method       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对traceroute操作使用指定的方法。默认的传统UDP方法有名称Default，ICMP(-I)和TCP(-T)分别有ICMP和TCP。特定于方法的选项可以通过-O传递。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" option       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定一些特定于方法的选项。几个选项用逗号分隔(或在cmdline上使用多个-O)。每种方法都可能有自己的特定选项，或者许多方法根本没有它们")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-U")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用UDP对特定的目标端口进行跟踪(而不是增加每个探针的端口)。默认端口为53(DNS)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-UL")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用UDPLITE追踪")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" protocol     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用指定协议的原始数据包进行跟踪。默认协议为253(Rfc 3692)。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--mtu")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 沿着被追踪的路径发现MTU")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--back")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印后跳数时，它似乎与前进方向不同。在假定远程跳发送初始ttl设置为64、128或255(这似乎是一种常见的做法)的情况下，猜测了这个数字。它以“-NUM”的形式打印为否定值。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示帮助文档")]),t._v("\n-V, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示命令版本信息")]),t._v("\n")])])]),s("h2",{attrs:{id:"可用的方法method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可用的方法method"}},[t._v("#")]),t._v(" 可用的方法method")]),t._v(" "),s("p",[t._v("通常，特定的traceroute方法可能必须由-M名称来选择，但是大多数方法都有它们简单的命令行开关(如果存在，您可以在方法名称之后看到它们)。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("default          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 传统的、古老的追踪方法。默认使用。")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 探测包是具有所谓“不可能”目标端口的UDP数据报。第一个探针的“不可能”端口是33434，然后每个下一个探针的端口增加一个。由于预期端口未使用，目标主机通常返回“ICMP不可访问端口”作为最终响应。(但是，没有人知道当某些应用程序侦听这样的端口时会发生什么)。")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个方法普通用户就可以使用。")]),t._v("\nicmp       "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-I")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目前最常用的方法是使用ICMP回波数据包作为探针。如果您可以ping(8)目标主机，则icmp跟踪也适用。")]),t._v("\ntcp        "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-T")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 众所周知的现代方法，旨在绕过防火墙。使用常量目标端口(默认为80，http)。                 果网络路径中存在一些过滤器，那么很可能任何“不太可能”的UDP端口(对于默认方法而言)或甚至ICMP回波(对于ICMP)都会被过滤，并且整个跟踪只会在这样的防火墙上停止。要绕过网络过滤器，我们必须只使用允许的协议/端口组合。如果我们追踪一些，比如说，邮件服务器，那么更有可能“-T –p 25”可以到达它，即使-我不能。")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这种方法使用了众所周知的“半开放技术”，它可以防止目标主机上的应用程序看到我们的探测。通常，发送TCP syn。对于未被监听的端口，我们接收TCP重置，一切都完成了。对于活动侦听端口，我们接收TCP syn ack，但通过TCP重置(而不是预期的TCP ack)应答，这样即使应用程序从未注意到，远程TCP会话也会被删除。")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个方法有以下的一些选项，默认的是syn、sysctl")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# syn,ack,fin,rst,psh,urg,ece,cwr，在任意组合中为探测包设置指定的tcp标志。")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# flags=num，将TCP标头中的标志字段设置为num。")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ecn，发送带有TCP标志ECA和CWR的syn数据包(用于显式拥塞通知，rfc 3168)")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sack,timestamps,window_scaling，在传出探测包中使用相应的tcp标头选项。")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sysctl，对上面的TCP头选项和ecn使用当前sysctl(“/proc/sys/net/*”)设置。默认情况下始终设置，如果没有其他指定的话")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#mss=num，对maxseg tcp报头选项使用num值(当syn)")]),t._v("\ntcpconn              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TCP方法的初始实现，简单使用CONNECT(2)调用，完成TCP会话的完全打开")]),t._v("\nudp       "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-U")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用带有常量目标端口的UDP数据报(默认为53，DNS)。也打算绕过防火墙。")]),t._v("\n                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意，与TCP方法不同的是，目标主机上的相应应用程序总是接收我们的探测(带有随机数据)，而且大多数都很容易被它们混淆。但是，大多数情况下，它不会响应我们的数据包，因此我们永远不会看到跟踪中的最后一跳。(幸运的是，似乎至少DNS服务器会以愤怒的方式回复)。此方法不需要特权。")]),t._v("\n\nudplite   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-UL")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对探针使用udplite数据报(具有固定的目标端口，默认为53)，此方法不需要特权。选项：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("coverage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("num，设置udplite范围num。\n\nraw       "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" proto    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发送协议原始数据包。选项：protocol=proto，使用IP协议Proto(默认253)")]),t._v("\n")])])]),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("为了加速工作，通常同时发送几个探测器。另一方面，它制造了一个“包裹风暴”，特别是在回复方向。路由器可以节流ICMP响应的速率，有些应答可能会丢失。为了避免这种情况，减少同步探测的数量，甚至将其设置为1(类似于最初的traceroute实现)，即-N1。")]),t._v(" "),s("p",[t._v("最终(目标)主机可以丢弃一些同时进行的探测，甚至可能只回答最新的探测。它可以导致额外的“看上去像过期”啤酒花接近最后一跳。我们使用智能算法来自动检测这种情况，但如果在您的情况下它无法帮助，只需使用-N1。")]),t._v(" "),s("p",[t._v("为了获得更好的稳定性，您可以通过-z选项来减缓程序的工作速度，例如，在探测之间使用“-z 0.5”进行半秒暂停。")]),t._v(" "),s("p",[t._v("如果有些跳对每种方法都没有任何报告，那么获得某些信息的最后机会是使用“ping -R”命令(ipv4，并且仅对最近的8跳)。")]),t._v(" "),s("h2",{attrs:{id:"举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),s("p",[t._v("追踪到baidu的路由信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" www.baidu.com "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ping目标，得到ip地址")]),t._v("\nPING www.a.shifen.com "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".100.91"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("84")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" bytes of data. \n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("traceroute")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" www.baidu.com        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#追踪路由")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("traceroute")]),t._v(" to www.baidu.com "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".100.92"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" hops max, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" byte packets\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.1  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.124")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.936")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.882")]),t._v(" ms\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.46")]),t._v(".80.1  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.917")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.238")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.233")]),t._v(" ms\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("183.203")]),t._v(".226.201  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.855")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.788")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.802")]),t._v(" ms\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("221.180")]),t._v(".30.197  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.792")]),t._v(" ms "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("221.180")]),t._v(".30.45  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.776")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.762")]),t._v(" ms\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("221.183")]),t._v(".47.225  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13.526")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13.363")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13.259")]),t._v(" ms\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("221.183")]),t._v(".37.249  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26.798")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.556")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26.832")]),t._v(" ms\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("  * * *\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".98.101  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.569")]),t._v(" ms  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.460")]),t._v(" ms "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".98.93  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24.463")]),t._v(" ms\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".98.93  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27.215")]),t._v(" ms "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".98.101  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.895")]),t._v(" ms "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".112.53  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26.946")]),t._v(" ms\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".108.5  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24.136")]),t._v(" ms "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".112.57  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.754")]),t._v(" ms "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".112.61  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.712")]),t._v(" ms\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);