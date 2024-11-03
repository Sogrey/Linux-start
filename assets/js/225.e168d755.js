(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{545:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ping-测试主机之间网络的连通性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ping-测试主机之间网络的连通性"}},[s._v("#")]),s._v(" ping - 测试主机之间网络的连通性")]),s._v(" "),a("p",[s._v("ping命令 用来测试主机之间网络的连通性。执行ping指令会使用ICMP传输协议，发出要求回应的信息，若远端主机的网络功能没有问题，就会回应该信息，因而得知该主机运作正常。")]),s._v(" "),a("p",[s._v("ping指令可以发送ICMP请求到目标地址，如果网络功能正常，目标主机会给出回应信息。ping使用ICMP协议强制发送ECHO_REQUEST报文到目标主机，从主机或网关获取ICMP ECHO_RESPONSE。ECHO_REQUESTt数据报(‘pings’)有一个IP和ICMP报头，后面跟着一个timeval结构体，然后是用于填充数据包的任意数量的“pad”字节。")]),s._v(" "),a("h2",{attrs:{id:"适用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),a("div",{staticClass:"svg redhat"},[s._v("RedHat")]),s._v(" "),a("div",{staticClass:"svg rhel"},[s._v("RHEL")]),s._v(" "),a("div",{staticClass:"svg ubuntu"},[s._v("Ubuntu")]),s._v(" "),a("div",{staticClass:"svg centos"},[s._v("CentOS")]),s._v(" "),a("div",{staticClass:"svg debian"},[s._v("Debian")]),s._v(" "),a("div",{staticClass:"svg deepin"},[s._v("Deepin")]),s._v(" "),a("div",{staticClass:"svg suse"},[s._v("SUSE")]),s._v(" "),a("div",{staticClass:"svg opensuse"},[s._v("openSUSE")]),s._v(" "),a("div",{staticClass:"svg fedora"},[s._v("Fedora")]),s._v(" "),a("div",{staticClass:"svg linuxmint"},[s._v("Linux Mint")]),s._v(" "),a("div",{staticClass:"svg alpinelinux"},[s._v("Alpine Linux")]),s._v(" "),a("div",{staticClass:"svg archlinux"},[s._v("Arch Linux")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  destination\n")])])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可听的ping")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自适应平包间隔适应往返时间，因此有效地不超过一个(或多个，如果设置了预加载)未回答的探针在网络中存在。对于非超级用户，最小间隔为200毫秒。在RTT低的网络上，这种模式实质上等同于flood模式。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许ping广播地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-B")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不允许ping更改探针的源地址。当ping启动时，该地址绑定到选定的地址。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" count             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定ping的次数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在所使用的套接字上设置SO_DEBUG选项。实际上，linux内核不使用这个套接字选项。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" flow label        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在回送请求数据包上分配和设置20位flow label。(只有平6)。如果值为零，内核将分配随机flow label。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 极限检测，不等收到回复就发送下一个请求，只有超级管理员才可以使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" interval          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定发送的时间间隔")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v(" interface address "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将源地址设置为指定的接口地址。参数可以是数字IP地址或设备名称。当选择ipv 6链路本地地址时，此选项是必需的。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" preload           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果指定了预加载preload，ping将发送许多未等待回复的数据包。只有超级用户才能选择超过3的预加载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 抑制组播数据包的回送。此标志仅适用于ping目标为多播地址的情况")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用数字方式显示")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" pattern           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 您可以指定多达16个“PAD”字节来填充您发送的数据包。这对于诊断网络中与数据相关的问题很有用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Q")]),s._v(" tos               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在ICMP数据报中设置与服务相关的比特的质量。TOS可以是十进制数，也可以是十六进制数。传统上(RFC 1349)，它们被解释为：0表示保留(当前被重新定义为拥塞控制)，1-4表示服务类型，5-7表示优先级。服务类型的可能设置是：最低成本：0x02，可靠性：0x04，吞吐量：0x08，低延迟：0x10。不能同时设置多个TOS位。特殊优先级的可能设置范围从优先级(0x20)到净控制(0xe0)。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不显示执行过程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略正常的路由表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 记录路由")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" packetsize        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定数据包的大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v(" sndbuf            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置套接字发送缓冲区sndbuf。如果没有指定，则选择它来缓冲不超过一个数据包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ttl               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定数据包的生存期TTL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" timestamp option  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置特殊的ip时间戳选项。可以是tsonly (only timestamps), tsandaddr (timestamps and addresses) or  tsprespec  host1  [host2 [host3 [host4]]] (timestamp prespecified hops)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-M")]),s._v(" hint              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择路径MTU发现策略，可以是do（禁止碎片，即使是本地的）、want（当数据包大小较大时，在本地发现pmtu）、don’t（不设置DF标志）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-U")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印完整的user-to-user延迟")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" deadline          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在ping退出之前指定一个超时(以秒为单位)，而不管发送或接收了多少数据包。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-W")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等待响应的时间，以秒为单位。该选项只影响任何响应的超时，否则ping将等待两个RTT")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示详细执行过程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示版本")]),s._v("\n")])])]),a("h2",{attrs:{id:"icmp报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icmp报文"}},[s._v("#")]),s._v(" ICMP报文")]),s._v(" "),a("p",[s._v("没有选项的IP报头是20个字节。ICMP echo_Request数据包包含另外8字节的ICMP报头，后面跟着任意数量的数据。当给定一个数据包大小时，这表明了这个额外数据块的大小(缺省值为56)。因此，在ICMP ECHO_REPLY类型的IP数据包中接收的数据量总是比请求的数据空间(ICMP报头)多8个字节。")]),s._v(" "),a("p",[s._v("如果数据空间至少是结构体timeval的大小，Timeval ping使用这个空间的起始字节来包含它在计算往返时间时使用的时间戳。如果数据空间较短，则不提供往返时间。")]),s._v(" "),a("h2",{attrs:{id:"重复和损坏的数据包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重复和损坏的数据包"}},[s._v("#")]),s._v(" 重复和损坏的数据包")]),s._v(" "),a("p",[s._v("ping将报告重复和损坏的数据包。重复的数据包不应该发生，似乎是由不适当的链路级重传引起的.重复可能在许多情况下发生，很少(如果有的话)是一个好的迹象，尽管低水平的重复可能并不总是引起恐慌。损坏的数据包显然是引起警报的严重原因，并且经常表示ping数据包路径(网络中或主机中)的某个硬件出现故障。")]),s._v(" "),a("h2",{attrs:{id:"尝试不同的数据模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尝试不同的数据模式"}},[s._v("#")]),s._v(" 尝试不同的数据模式")]),s._v(" "),a("p",[s._v("(内部)网络层不应根据数据部分中包含的数据对分组进行不同的处理。不幸的是，依赖于数据的问题已经被人们知道潜入网络，并且在很长一段时间内没有被发现。在许多情况下，会出现问题的特定模式是没有足够的“转换”的东西，例如所有的1或所有的零，或者在边缘的一个模式，例如几乎所有的零。仅仅指定命令行上所有零的数据模式(例如)并不一定足够，因为感兴趣的模式是在数据链接级别上，而且您键入的内容与控制器发送的内容之间的关系可能很复杂。")]),s._v(" "),a("p",[s._v("这意味着，如果您有一个数据依赖的问题，您可能需要做大量的测试才能找到它。如果幸运的话，您可能会设法找到一个文件，该文件要么无法通过您的网络发送，要么需要比其他类似长度的文件更长的传输时间。然后，您可以检查这个文件是否有重复的模式，可以使用ping的-p选项进行测试。")]),s._v(" "),a("h2",{attrs:{id:"ttl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ttl"}},[s._v("#")]),s._v(" TTL")]),s._v(" "),a("p",[s._v("IP数据包的TTL值表示数据包在被丢弃之前可以通过的最大IP路由器数。在当前的实践中，您可以期望Internet中的每个路由器将TTL字段减少一个。TCP/IP规范规定，TCP数据包的TTL字段应该设置为60，但许多系统使用较小的值(4.3BSD使用30，4.2使用15)。该字段的最大可能值为255，大多数Unix系统将ICMP ECHO_REQUEST数据包的TTL字段设置为255。这就是为什么您会发现您可以“ping”一些主机，但不能通过telnet(1)或ftp(1)到达它们。")]),s._v(" "),a("p",[s._v("在正常操作中，ping从它接收的数据包打印ttl值。当远程系统收到ping数据包时，它可以在响应中使用ttl字段执行以下三项任务之一。")]),s._v(" "),a("ol",[a("li",[s._v("不改变它；这是Berkeley Unix系统在4.3BSDTahoe发布之前所做的事情。在这种情况下，接收到的数据包中的TTL值将为255减去往返路径中的路由器数量。")]),s._v(" "),a("li",[s._v("将其设置为255；这是目前BerkeleyUnix系统所做的。在这种情况下，接收到的数据包中的TTL值将为255减去从远程系统到ping主机的路径中的路由器数量。")]),s._v(" "),a("li",[s._v("将其设置为其他值。有些机器对ICMP数据包使用的值与它们对TCP数据包使用的值相同，例如30或60。其他人可能会使用完全狂野的价值观。")])]),s._v(" "),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("p",[s._v("ping广播地址")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.255\nDo you want to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" broadcast? Then "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.255   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只有使用-b选项才能ping广播地址")]),s._v("\nWARNING: pinging broadcast address\nPING "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.255 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.219")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.282")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.215")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.268")]),s._v(" ms\n^C\n--- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.255 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" packets transmitted, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" received, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% packet loss, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" 3684ms\nrtt min/avg/max/mdev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.215")]),s._v("/0.246/0.282/0.029 ms\n")])])]),a("p",[s._v("测试目标地址是否畅通")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定发送数据包的次数")]),s._v("\nPING "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.427")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.196")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.220")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.329")]),s._v(" ms \n\n--- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" packets transmitted, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" received, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% packet loss, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" 3002ms\nrtt min/avg/max/mdev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.196")]),s._v("/0.293/0.427/0.092 ms\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);