(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{557:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"route-显示并设置linux中静态路由表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route-显示并设置linux中静态路由表"}},[t._v("#")]),t._v(" route - 显示并设置Linux中静态路由表")]),t._v(" "),s("p",[t._v("route命令 用来显示并设置Linux内核中的网络路由表，route命令设置的路由主要是静态路由。要实现两个不同的子网之间的通信，需要一台连接两个网络的路由器，或者同时位于两个网络的网关来实现。")]),t._v(" "),s("p",[t._v("在Linux系统中设置路由通常是为了解决以下问题：该Linux系统在一个局域网中，局域网中有一个网关，能够让机器访问Internet，那么就需要将这台机器的ip地址设置为Linux机器的默认路由。要注意的是，直接在命令行下执行route命令来添加路由，不会永久保存，当网卡重启或者机器重启之后，该路由就失效了；可以在/etc/rc.local中添加route命令来保证该路由设置永久有效。")]),t._v(" "),s("p",[t._v("route指令用于显示或者修改IP路由表。它的主要用途是在使用ifconfig(8)程序配置接口后，通过接口设置到特定主机或网络的静态路由。当使用add或del选项时，路由将修改路由表。如果没有这些选项，路由将显示路由表的当前内容。")]),t._v(" "),s("h2",{attrs:{id:"适用范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[t._v("#")]),t._v(" 适用范围")]),t._v(" "),s("div",{staticClass:"svg redhat"},[t._v("RedHat")]),t._v(" "),s("div",{staticClass:"svg rhel"},[t._v("RHEL")]),t._v(" "),s("div",{staticClass:"svg ubuntu"},[t._v("Ubuntu")]),t._v(" "),s("div",{staticClass:"svg centos"},[t._v("CentOS")]),t._v(" "),s("div",{staticClass:"svg debian"},[t._v("Debian")]),t._v(" "),s("div",{staticClass:"svg deepin"},[t._v("Deepin")]),t._v(" "),s("div",{staticClass:"svg suse"},[t._v("SUSE")]),t._v(" "),s("div",{staticClass:"svg opensuse"},[t._v("openSUSE")]),t._v(" "),s("div",{staticClass:"svg fedora"},[t._v("Fedora")]),t._v(" "),s("div",{staticClass:"svg linuxmint"},[t._v("Linux Mint")]),t._v(" "),s("div",{staticClass:"svg alpinelinux"},[t._v("Alpine Linux")]),t._v(" "),s("div",{staticClass:"svg archlinux"},[t._v("Arch Linux")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("route  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-CFvnee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nroute  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-A family"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-net"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  target  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("netmask Nm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gw Gw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("metric N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mssM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("window W"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("irtt I"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("reject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dyn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("reinstate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" If"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nroute  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-A family"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  del  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-net"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  target  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gw  Gw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("netmask  Nm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("metric  N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" If"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nroute  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-V"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v(" family                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定使用的地址类型")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-F")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 操作内核FIB")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 管理内核路由缓存")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示详细过程")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以数字的方式显示路由表中的主机")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用netstat的输出格式显示路由表")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-net")]),t._v("                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定一个网络路由")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-host")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定一个主机路由")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v("                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增加一个路由")]),t._v("\ndel                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除一个路由")]),t._v("\ntarget                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定目标网络或者主机")]),t._v("\nnetmask mask             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加一个路由时，使用这个子网掩码")]),t._v("\ngw "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定数据包通过的网关IP地址")]),t._v("\nmetric                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定路由表的metric字段")]),t._v("\nwindow                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定路由表的TCP连接串口")]),t._v("\nirtt I                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将此路由上的TCP连接的初始往返时间(Irtt)设置为I毫秒(1-12000)。这通常只在AX.25网络上使用。如果省略，则使用rfc 1122默认的300 ms。")]),t._v("\nreject                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装阻塞路由，这将迫使路由查找失败。例如，这用于在使用默认路由之前屏蔽网络。这不是用来防火的")]),t._v("\nmod, dyn, reinstate      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装动态或修改的路由。这些标志用于诊断，通常仅由路由守护进程设置。")]),t._v("\ndev eth                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定路由的网络接口")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示帮助文档")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示命令版本信息")]),t._v("\n")])])]),s("h2",{attrs:{id:"输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[t._v("#")]),t._v(" 输出")]),t._v(" "),s("p",[t._v("内核路由表的输出组织在以下列中")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("输出列")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("Destination")])]),t._v(" "),s("td",[t._v("目标网络或目标主机。")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Gateway")])]),t._v(" "),s("td",[t._v("网关地址或“*”(如果没有设置)")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Genmask")])]),t._v(" "),s("td",[t._v("目标网络的网络掩码；主机目的地为‘255.255.255.255’，默认路由为‘0.0.0.0’。")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Flags")])]),t._v(" "),s("td",[t._v("可能的flag有"),s("strong",[t._v("U")]),t._v("，路由已经起来"),s("strong",[t._v("H")]),t._v("，目标是一个主机"),s("strong",[t._v("G")]),t._v("，使用网关"),s("strong",[t._v("R")]),t._v("，用于动态路由的恢复路由"),s("strong",[t._v("D")]),t._v("，由守护进程动态安装或重定向"),s("strong",[t._v("M")]),t._v("，从路由守护进程或重定向中修改"),s("strong",[t._v("A")]),t._v("，由addrconf安装"),s("strong",[t._v("C")]),t._v("，缓存项**!**，拒绝路由")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Metric")])]),t._v(" "),s("td",[t._v("与目标的距离(通常以啤酒花计)。它不是最近的内核使用的，而是路由守护进程所需要的。")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Ref")])]),t._v(" "),s("td",[t._v("引用此路由的次数。(不在Linux内核中使用。)")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Use")])]),t._v(" "),s("td",[t._v("查找路线的数量。根据-F和-C的使用情况，这将是路由缓存丢失(-F)或命中(-C)。")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Iface")])]),t._v(" "),s("td",[t._v("用于此路由的数据包将发送到该接口。")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("MSS")])]),t._v(" "),s("td",[t._v("此路由上TCP连接的默认最大分段大小")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Window")])]),t._v(" "),s("td",[t._v("此路由上TCP连接的默认窗口大小")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("irtt")])]),t._v(" "),s("td",[t._v("初始RTT(往返时间)。内核使用它来猜测最佳的TCP协议参数，而无需等待(可能是缓慢的)答案。")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("HH")])]),t._v(" "),s("td",[t._v("引用缓存路由的硬件头缓存的ARP条目和缓存路由的数量。如果缓存路由的接口不需要硬件地址(例如lo)，则为-1。")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Arp")])]),t._v(" "),s("td",[t._v("缓存路由的硬件地址是否最新。")])])])]),t._v(" "),s("h2",{attrs:{id:"举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("route "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-net")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.0 \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加正常的回送条目，使用net掩码255.0.0.0(A级Net，从目标地址确定)并与“lo”设备相关联(假设此设备使用ifconfig(8)正确设置)。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 10.x.x.x.通过“eth0”将路由添加到网络192.56.76.x。这里没有必要使用C类网络掩码修饰符，因为192.*是一个C类IP地址。这里可以省略“dev”这个词。")]),t._v("\n\nroute "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" default gw mango-gw\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加默认路由(如果没有其他路由匹配，则使用该路由)。使用此路径的所有数据包将通过“芒果-GW”传送。实际用于该路线的设备取决于我们如何到达“mango-gw”，“ mango-gw”的静态路径必须在此之前设置。")]),t._v("\n\nroute "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" ipx4 sl0\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过SIP接口将路由添加到“IPX 4”主机(假设“IPX 4”是SILIP主机)。")]),t._v("\n\nroute "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-net")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.57")]),t._v(".66.0 netmask "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0 gw ipx4\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此命令添加网络“192.57.66.x”，通过前一条路由传送到SILIP接口。")]),t._v("\n\nroute "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-net")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0 netmask "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240.0")]),t._v(".0.0 dev eth0\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 。这将所有D类(多播)IP路由设置为通过“eth0”。这是具有多播内核的正确的正常配置行。")]),t._v("\n\nroute "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-net")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.0 netmask "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(".0.0 reject\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这为专用网络“10.x.x.x.”安装了一个拒绝路由。")]),t._v("\n")])])]),s("p",[t._v("显示本机路由表")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ route\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.255 -               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.255 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("H    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      -        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0       -               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      -        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -\n")])])]),s("p",[t._v("以netstat格式显示")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ route "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("\nKernel IP routing table\nDestination     Gateway         Genmask         Flags   MSS Window  irtt Iface\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.255 -               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.255 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("H        - -          - -\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0       -               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("         - -          - -\n")])])]),s("p",[t._v("添加一个路由")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ route "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-net")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".0.0/24 dev eth0   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定网段使用设备eth0访问")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ route     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看路由表")]),t._v("\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.255 -               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.255 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("H    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      -        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".0.0      *               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0   U     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth0\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0       -               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      -        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".0.0      *               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".0.0     U     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth0\n")])])]),s("p",[t._v("删除一个路由")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ route del "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-net")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111.13")]),t._v(".0.0/24 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除指定地址id路由")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ route   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看路由")]),t._v("\nKernel IP routing table     \nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.255 -               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.255 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("H    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      -        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0       -               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      -        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".0.0      *               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".0.0     U     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth0\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);