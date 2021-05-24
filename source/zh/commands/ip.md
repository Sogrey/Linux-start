# ip - 网络配置工具

ip指令可以显示或操作路由、网路设备，设置路由策略和通道。

ip命令 用来显示或操纵Linux主机的路由、网络设备、策略路由和隧道，是Linux下较新的功能强大的网络配置工具。

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
ip  [选项]  OBJECT  COMMAND  [help]
```

OBJECT对象可以是：link，网络设备；addr，设备的协议地址；route，路由表；rule，策略；neigh，arp缓存；tunnel，ip通道；maddr，多播地址；mroute，多播路由

COMMAND是操作命令，不同的对象有不同的命令配置。

link对象支持的命令：set、show。

addr对象支持的命令：add、del、flush、show。

route对象支持的命令：list、flush、get、add、del、change、append、replace、monitor。

rule对象支持的命令：list、add、del、flush。

neigh对象支持的命令：add、del、change、replace、show、flush。

tunnel对象支持的命令：add、change、del、show。

maddr支持的命令：add、del。

mroute支持的命令：show

## 选项

``` bash
-s, -stats, -statistics       # 显示详细的信息
-f, -family                   # 指定协议类型
-4                            # 等同-family inet
-6                            # 等同-family inet6
-0                            # 等同-family link
-o, -oneline                  # 每条记录输出一行
-r, -resove                   # 使用系统名字解析DNS 

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## ip link---网络设备配置

链路是一种网络设备，相应的命令显示和改变设备的状态。

1）**ip link set**，改变设备属性

**dev** NAME (default)，NAME指定要操作的网络设备。配置SR-IOV虚拟功能(VF)设备时，此关键字应指定关联的物理功能(PF)设备。

**up**，**down**，改变设备的状态，开或者关。

**arp on**，**arp off**，更改设备的NOARP标志。

**multicast on**，**multicast off**，更改设备的MULTICAST标志。

**dynamic on**，**dynamic off**，更改设备的DYNAMIC标志。

**name** NAME，更改设备的名字，如果设备正在运行或者已经有一个配置好的地址，那么操作无效。

**txqueuelen** NUMBER，**txqlen** NUMBER，更改设备发送队列的长度。

**mtu** NUMBER，更改设备MTU。

**address** LLADDRESS，更改接口的站点地址

**broadcast** LLADDRESS，**brd** LLADDRESS，**peer** LLADDRESS，当接口为POINTOPOINT时，更改链路层广播地址或对等地址。

**netns** PID，将设备移动到与进程PID关联的网络命名空间

**alias** NAME，给设备一个符号名以便于参考

**vf** NUM，指定要配置的虚拟功能设备。必须使用dev参数指定关联的pf设备。

警告：如果请求更改多个参数，则在任何更改失败后立即中止IP。这是IP能够将系统移动到不可预测状态的唯一情况。解决方案是避免使用一个ip链路集调用来更改多个参数。

2）**ip link show**，显示设备属性

**dev** NAME (default)，NAME指定要显示的网络设备。如果省略此参数，则列出所有设备。

**up**，只显示运行的设备。

 ## ip address---协议地址管理

该地址是附加到网络设备上的协议(IP或IPv 6)地址。每个设备必须至少有一个地址才能使用相应的协议。可以将几个不同的地址附加到一个设备上。这些地址不受歧视，因此别名一词不太适合它们，我们在本文件中也没有使用它。**ip addr**命令显示地址及其属性，添加新地址并删除旧地址。

1）**ip address add**，增加新的协议地址

**dev** NAME，要向其添加地址的设备的名称。

**local** ADDRESS (default)，接口的地址。地址的格式取决于协议。它是一个用于IP的虚线四边形和一系列十六进制半字，用冒号分隔用于IPv 6。地址后面可以是斜杠和十进制数，它们编码网络前缀长度。

**peer** ADDRESS，点对点接口的远程端点的地址。同样，地址后面可以是斜杠和十进制数，编码网络前缀长度。如果指定了对等地址，则本地地址不能具有前缀长度。网络前缀与对等端相关联，而不是与本地地址相关联。

**broadcast** ADDRESS，接口的广播地址。可以使用特殊符号“和”-“代替广播地址。在这种情况下，通过设置/重置接口前缀的主机位来导出广播地址。

**label** NAME，每个地址都可以用标签字符串标记。为了保持与Linux2.0网络别名的兼容性，此字符串必须与设备名称重合，或者必须以设备名后跟冒号作为前缀。

**scope** SCOPE_VALUE，地址有效的区域的范围。可用的作用域列在文件“/etc/iproute2/rt_scopes“中。预定义的范围值是：

Ⅰ）**global**，地址全局有效。

Ⅱ）**site**，(仅IPv 6)该地址为站点本地地址，即该地址在此站点内有效。

Ⅲ）**link**，该地址是本地链接，即它仅在此设备上有效。

Ⅳ）**host**，该地址仅在此主机内有效。

2）**ip address delete**，删除协议地址

**Arguments**: 与“**ip addr add**“的参数一致。设备名称是必需的参数。其余的都是可选的。如果没有提供参数，则删除第一个地址。

3）**ip address show**，显示协议地址

**dev** NAME (default)，设备名字

**scope** SCOPE_VAL，仅列出具有此作用域的地址。

**to** PREFIX，仅列出匹配PREFIX的地址。

**label** PATTERN，只列出与模式匹配的标签的地址。

**dynamic**，permanent，仅IPv 6)仅列出由于无状态地址配置而安装的地址，或只列出永久(非动态)地址。

**tentative**，(仅IPv 6)仅列出未通过重复地址检测的地址。

**deprecated**，(仅IPv 6)仅列出废弃地址

**primary**，**secondary**，只列出主(或辅助)地址。

4）**ip address flush**，刷新协议地址

此命令刷新由某些条件选择的协议地址。此命令具有与Show相同的参数。不同之处在于，当不给出参数时，它不会运行。警告：这个命令(以及下面描述的其他刷新命令)非常危险。如果你犯了一个错误，它不会原谅它，而是会残酷地清除所有的地址。

使用**-** **statistics**选项，命令变得详细。它打印出已删除地址的数量和为刷新地址列表而进行的轮次数。如果提供了两次此选项，则“**ip addr flush**“也会以上一小节描述的格式转储所有已删除的地址。

##  ip addrlabel---协议地址标签管理

IPv 6地址标签用于RFC 3484中描述的地址选择。优先级由用户空间管理，只有标签存储在内核中。

1）**ip addrlabel add**，增加地址标签

**prefix** PREFIX，**dev** DEV，输出接口。

**label** NUMBER，prefix的标签，0xffffffff保留。

2）**ip addrlabel del**，删除地址标签

该命令删除内核中的一个地址标签条目。参数：与“**ip addrlabel add“**的参数一致，但不需要标签。

3）**ip addrlabel list**，列出地址标签

显示地址标签的内容。

4）**ip addrlabel flush**，刷新地址标签

刷新地址标签的内容，并且不保存默认设置。

## ip neighbour---邻居/ARP表管理

邻居对象为共享相同链路的主机建立协议地址和链路层地址之间的绑定。邻接条目被组织成表。IPv 4邻居表的另一个名称是ARP表。相应的命令显示邻居绑定及其属性，添加新的邻居项并删除旧条目。

1）**ip neighbour add**，增加邻居表

2）**ip neighbour change**，改变已经存在的邻居表

3）**ip neighbour replace**，增加一个表或者修改已经存在的表

这些命令创建新的邻居记录或更新现有记录。上面的三个命令使用方法如下:

**to** ADDRESS (default)，邻居的协议地址。它要么是IPv4，要么是IPv6地址。

**dev** NAME，连接到邻居的接口。

**lladdr** LLADDRESS，邻居的链路层地址，可以是null。

**nud** NUD_STATE，邻居的状态，可以是下面的值：

Ⅰ）**permanent**，邻居项永远有效，只能内管理员删除。

Ⅱ）**noarp**，邻居项有效。将不会尝试验证此条目，但可以在其生存期届满时删除该条目。

Ⅲ）**reachable**，邻居项在可达超时过期之前是有效的。

Ⅳ）**stale**，邻居的进入是有效的，但却是可疑的。如果邻居状态有效且此命令未更改地址，则此选项不会更改邻居状态。

4）**ip neighbour delete**，删除邻居表

此命令使邻居项无效。这些参数与“**ip neigh add**“相同，只是将忽略**lladdr**和**nud**。警告：试图删除或手动更改内核创建的noarp条目可能会导致不可预测的行为。特别是，即使在NOARP接口上，如果地址是多播或广播的，内核也可以尝试解析此地址。

5）**ip neighbour show**，显示邻居表

**to** ADDRESS (default)，选择要列出的邻居的前缀

**dev** NAME，只列出与此设备相连的邻居

**unused**，只列出当前未使用的邻居

**nud** NUD_STATE，只列出此状态中的相邻项。NUD_STATE接受下面列出的值或特殊值**all**，这意味着所有状态。此选项可能发生不止一次。如果没有此选项，则IP列出除None和noarp以外的所有条目。

6）**ip neighbour flush**，刷新邻居表

此命令刷新相邻表，根据某些条件选择要刷新的条目。此命令具有与**show**相同的参数。不同之处在于，当不给出参数时，它不会运行，而要刷新的默认邻居状态不包括**permanent**和**noarp**。

## ip route—路由表管理

操纵内核路由表中的路由条目保存其他网络节点的路径信息。路由类型可以是：

Ⅰ）**unicast**，路由条目描述到路由前缀所涵盖的目的地的实际路径。

Ⅱ）**unreachable**，这些目的地是无法到达的。丢弃数据包，生成不可访问的ICMP消息主机。本地发件人得到一个EHOSTUNEACH错误。

Ⅲ）**blackhole**，这些目的地是无法到达的。数据包被静默丢弃。本地发送者得到一个EINVAL错误

Ⅳ）**prohibit**，这些目的地是无法到达的。丢弃数据包并生成ICMP消息通信，该ICMP消息通信在管理上被禁止。本地发件人得到一个EACCES错误。

Ⅴ）**local**，目的地分配给此主机。数据包被环回并在本地传送。

Ⅵ）**broadcast**，目的地是广播地址。数据包作为链路广播发送。

Ⅶ）**throw**，与策略规则一起使用的特殊控制路径。如果选择这样的路由，则将终止此表中的查找，假装没有找到路由。如果没有策略路由，则相当于路由表中没有路由。丢包并生成不可到达的ICMP消息网。本地发送者得到一个ENETUNEACH错误。

Ⅷ）**nat**，一条特殊的NAT路线。前缀覆盖的目的地被认为是虚拟地址(或外部地址)，需要在转发之前转换为真实地址(或内部地址)。选择要转换到的地址，并附带属性警告：Linux2.6中不再支持路由NAT。

Ⅸ）**via**，**anycast**，未实现目标是分配给此主机的任意广播地址。它们主要等同于本地地址，但有一个不同之处：当将这些地址用作任何数据包的源地址时，这些地址是无效的。

**multicast**，用于多播路由的一种特殊类型。它不存在于普通路由表中。

路由表：Linux-2.x可以将路由打包到从1到255范围内的数字标识的多个路由表中，或者根据文件/etc/iucte 2/rt_tables的名称，默认情况下，所有普通路由都插入主表(ID 254)，内核只在计算路由时使用此表。实际上，另一个表总是存在的，这是不可见的，但更重要的是。它是本地表(ID 255)。此表由本地地址和广播地址的路由组成。内核自动维护这个表，管理员通常不需要修改它，甚至不需要查看它。使用策略路由时，多个路由表进入游戏。

1）**ip route add**，增加路由

2）**ip route change**，修改路由

3）**ip route replace**，改变或者增加路由

**to** TYPE PREFIX (default)，路由的目标前缀。如果省略类型，则IP采用类型单播。以上列出了其他类型的值。前缀是一个IP或IPv 6地址，后面有斜杠和前缀长度。如果前缀的长度丢失，则IP将采用全长主机路由.还有一个特殊的前缀默认值-相当于“**IP 0/0“**或者”**to IPv6 ::/0“**。

**tos** TOS，**dsfield** TOS，服务类型(TOS)密钥。该密钥没有关联的掩码，最长的匹配被理解为：首先，比较路由和数据包的TOS。如果它们不相等，那么数据包仍然可以匹配为零TOS的路由。TOS要么是8位十六进制数字，要么是“**/etc/iproute2/rt_dsfield**“中的标识符。

**metric** NUMBER，**preference** NUMBER，路由的首选值。NUMBER是任意32位数。

**table** TABLEID，要添加此路由的表。TABLEID可能是文件**“/etc/iproute2/rt_tables“**中的一个数字或字符串。如果省略此参数，则IP假定主表，但本地路由、广播路由和NAT路由除外，默认情况下这些路由被放入本地表中。

**dev** NAME，输出设备名字。

**via** ADDRESS，下一个路由器的地址。实际上，这个字段的意义取决于路由类型。对于普通单播路由，它要么是真正的下一跳路由器，要么是安装在BSD兼容模式下的直接路由，它可以是接口的本地地址。对于NAT路由，它是已翻译的IP目的地块的第一个地址。

**src** ADDRESS，发送到路由前缀所涵盖的目的地时要首选的源地址。

**realm** REALMID，指定此路由的域。REALMID可能是文件“**/etc/iproute2/rt_realms**“中的一个数字或字符串。

**mtu** MTU，**mtu** **lock** MTU，沿着到达目的地的路径的MTU。如果未使用修饰符锁，则由于路径MTU发现，内核可能更新MTU。如果使用修饰符锁，则不会尝试路径MTU发现，所有数据包都将在IPv4情况下不使用DF位发送，或者在IPv6中碎片到MTU。

**window** NUMBER，TCP向这些目的地广告的最大窗口，以字节为单位。它限制了TCP对等点允许发送给我们的最大数据突发。

**rtt** TIME，最初的RTT(‘往返时间’)估计。如果没有指定后缀，则单元是直接传递给路由代码的原始值，以保持与以前版本的兼容性。否则，如果使用s、sec或secs后缀指定秒，使用ms、msec或msecs指定毫秒。

**rttvar** TIME (2.3.15+ only)，初始RTT方差估计。值与上述RTT指定的值相同。

**rto_min** TIME (2.6.23+ only)，与此目标通信时要使用的最小TCP重传超时。值与上述RTT指定的值相同。

**ssthresh** NUMBER (2.3.15+ only)，初始慢启动阈值的估计。

**cwnd** NUMBER (2.3.15+ only)，阻塞窗口的夹子。如果不使用锁标志，则忽略它

**initcwnd** NUMBER，TCP连接的MSS中的最大初始拥塞窗口(CWND)大小。

**initrwnd** NUMBER (2.6.33+ only)，连接到此目标的初始接收窗口大小。实际窗口大小是此值乘以连接的MSS。默认值为零，意味着使用慢速开始值。

**advmss** NUMBER (2.3.15+ only)，MSS(“最大段大小”)在建立TCP连接时向这些目的地做广告。如果未给出，Linux将使用从第一跳设备MTU中计算出来的默认值。(如果到达这些目的地的路径是不对称的，则这种猜测可能是错误的。)

**reordering** NUMBER (2.3.15+ only)，到达此目标的路径上的最大重排序。如果未给出，Linux将使用sysctl变量“**net/ipv4/tcp_reordering**“所选择的值。

**nexthop** NEXTHOP，多径路径的下一个。NEXTHOP是一个复杂的值，其语法类似于顶级参数列表：

Ⅰ）**via** ADDRESS，下一个路由器。

Ⅱ）**dev** NAME，输出设备

Ⅲ）**weight** NUMBER，是反映其相对带宽或质量的多径路由的此元素的权重。

**scope** SCOPE_VAL，路由前缀所涵盖的目的地的范围。SCOPE_VAL可以是文件“**/etc/iproute2/rt_scopes**“中的一个数字或字符串。如果省略此参数，则IP假定所有网关单播路由的作用域全局、直接单播和广播路由的范围链接以及本地路由的范围主机。

**protocol** RTPROTO，此路由的路由协议标识符。RTPROTO可以是文件“**/etc/iproute2/rt_protos**“中的一个数字或字符串。如果未给出路由协议ID，则IP假定协议启动(即假定路由是由不了解他们正在做的事情的人添加的)。一些协议值有固定的解释：

Ⅰ）**redirect**，该路由是由于icmp重定向而安装的。

Ⅱ）**kernel**，该路由是由内核在自动配置期间安装的。

Ⅲ）**boot**，该路由是在启动过程中安装的。如果路由守护进程启动，它将清除所有这些守护进程。

Ⅳ）**static**，管理员安装了该路由以覆盖动态路由。路由守护进程将尊重它们，甚至可能会向其对等方发布广告。

Ⅴ）**ra**，路由是由路由器发现协议安装的。

**onlink**，假装Nextthop直接连接到此链接，即使它不匹配任何接口前缀。

**equalize**，允许在多径路由上逐包随机化。如果没有这个修饰符，路由将被冻结到一个选定的下一个，这样负载拆分将只发生在每个流基上。只有当内核被修补时，均衡化才能工作。

4）**ip route delete**，删除路由

“**ip route del**“与”**ip route add**“具有相同的参数，但它们的语义略有不同。键值(to、tos、首选项和表)选择要删除的路由。如果存在可选属性，则IP验证它们是否与要删除的路由的属性一致。如果没有找到具有给定密钥和属性的路由，则”**ip route del**“将失败

5）**ip route show**，显示路由

**to** SELECTOR (default)，仅从给定的目的地范围中选择路由。SELECTOR由一个可选修饰符(**root**、**match**、**exact**)和一个前缀组成。root选择前缀不小于PREFIX的路由。例如，“**root 0/0** “选择整个路由表。match选择前缀长度不超过PREFIX的路由。例如，”**match  10.0/16**“选择10.0/16、10/8和0/0，但未选择10.1/16和10.0.0/24。exact(或仅仅前缀)选择具有此前缀的路由。如果这两个选项都没有出现，则IP假设为根0/0，即它列出了整个表。

**tos** TOS，只选择具有给定tos的路由。

**table** TABLEID，显示此表中的路线。默认设置是显示tablemain。TABLEID可以是实表的ID，也可以是特殊值之一：

Ⅰ）**all**，列出所有的表。

Ⅱ）**cache**，备份路由缓存。

**cloned**，**cached**，列出克隆的路由，即由于某些路由属性(F.E)而从其他路由动态分叉的路由。(MTU)已更新。实际上，它等同于“**table cache**“。

**from** SELECTOR，语法与**to**相同，但它绑定源地址范围而不是目的地。请注意，FROM选项仅适用于克隆路由。

**protocol** RTPROTO，仅列出此路由的协议。

**scope** SCOPE_VAL，仅列出具有此范围的路由

**type** TYPE，只列出此类型的路由。

**dev** NAME，只列出经过此设备的路由

**via** PREFIX，只列出通过前缀选择的下一个路由器的路由

**src** PREFIX，只列出由前缀选择的首选源地址的路由。

**realm** REALMID，**realms** FROMREALM/TOREALM，只列出这些领域的路由。

6）**ip route flush**，刷新路由表

此命令刷新由某些标准选择的路由，参数具有与“**ip route show**“的参数相同的语法和语义，但是路由表没有列出，而是被清除。唯一的区别是默认操作：显示转储所有IP主路由表，但刷新打印助手页。

使用“**-statistics**“选项，命令变得详细。它打印出已删除路由的数目和刷新路由表的轮数。如果该选项被给予两次，IP路由刷新也会以上一小节描述的格式转储所有已删除的路由。

7）**ip route get**，获取一个单独的路由

此命令获取一条到达目标的路由，并按照内核所看到的那样打印其内容。

**to** ADDRESS (default)，目标地址。

**from** ADDRESS，源地址。

**tos** TOS，**dsfield** TOS，服务类型。

**iif** NAME，预期将从该包到达的设备。

**oif** NAME，强制将此数据包路由的输出设备。

**connected**，如果没有提供源地址(选项从)，则重新查找从第一次查找中接收到的源设置为首选地址的路由。如果使用策略路由，则可能是不同的路由。

请注意，此操作不等同于“**ip route show**“。**show**显示现有路线。如果必要的话，**get**解决它们并创建新的克隆。



## ip rule---路由策略数据库管理

rule规则在路由策略数据库中控制路由选择算法。Internet中使用的经典路由算法只根据数据包的目的地地址(理论上，而不是实际中的TOS字段)进行路由决策。在某些情况下，我们希望通过不同的方式路由数据包，这不仅取决于目的地地址，还取决于其他数据包字段：源地址、IP协议、传输协议端口，甚至包有效负载。此任务称为“策略路由”。为了解决这一问题，传统的基于目标的路由表按照最长的匹配规则排序，被替换为“路由策略数据库”(RPDB)，该数据库通过执行一组规则来选择路由。

每个策略路由规则由一个选择器和一个动作谓词组成。RPDB按照增加优先级的顺序进行扫描。每个规则的选择器应用于{源地址、目标地址、传入接口、tos、fwmark}，如果选择器与数据包匹配，则执行操作。动作谓词可能会成功返回。在这种情况下，它将给出路由或故障指示，并终止RPDB查找。否则，RPDB程序将继续执行下一条规则。

语义上，自然动作是选择下一个和输出设备。在启动时，内核配置由三条规则组成的默认rpdb：

Ⅰ）Priority: 0。Selector：匹配任何内容，Action：查找本地路由表(ID 255)。本地表是包含本地地址和广播地址的高优先级控制路由的特殊路由表。

Ⅱ）Priority: 32766。Selector：匹配任何内容，Action：查找路由表主(ID 254)。主表是包含所有非策略路由的普通路由表.管理员可以删除和/或用其他规则重写此规则。

Ⅲ）Priority: 32767。Selector：匹配任何内容，Action：查找路由表默认值(ID 253)。默认表为空。如果没有先前的默认规则选择数据包，则保留用于某些后处理。这一规则也可以删除。

**RPDB**可能包含以下类型的规则：

Ⅰ）**unicast，该规则规定返回在规则引用的路由表中找到的路由。**

Ⅱ）**blackhole**，这条规则规定要悄悄丢弃数据包。

Ⅲ）**unreachable**，该规则规定生成“网络不可达”错误。

Ⅳ）**prohibit**，该规则规定产生“在行政上禁止通信”错误。

Ⅴ）**nat**，该规则规定将ip数据包的源地址转换为其他值。

1）**ip rule add**，增加规则。

2）**ip rule delete**，删除规则。

**type** TYPE (default)，这个规则的类型

**from** PREFIX，选择要匹配的源前缀

**to** PREFIX，选择要匹配的目标前缀

**iif** NAME，选择要匹配的传入设备。如果接口是回送的，则该规则只匹配来自此主机的数据包。这意味着您可以为转发包和本地数据包创建单独的路由表，从而完全隔离它们。

**tos** TOS，**dsfield** TOS，选择要匹配的TOS值。

**fwmark** MARK，选择要匹配的fwmark值。

**priority** PREFERENCE，这条规则的优先级。每个规则都应该有一个显式设置的唯一优先级值。选项、偏好和顺序是优先级的同义词。

**table** TABLEID，如果规则选择器匹配，则查找路由表标识符。还可以使用查找而不是表。

**realms** FROM/TO，规则匹配和路由表查找成功时要选择的区域。只有当路由没有选择任何领域时，才使用要使用的领域。

**nat** ADDRESS，要翻译的IP地址块的基(用于源地址)。该地址可以是NAT地址块的开始(由NAT路由选择)，也可以是本地主机地址(甚至为零)。在最后一种情况下，路由器不会翻译数据包，而是将它们伪装成这个地址。使用map-to而不是nat意味着同样的事情。

3）**ip rule flush**，刷新规则，还转储所有已删除的规则。

没有参数。

4）**ip rule show**，显示规则

没有参数。

## ip maddress---多播地址管理

1）**ip maddress show**，显示多播地址

**dev** NAME (default)，设备名字

2）**ip maddress add**，增加多播地址

3）**ip maddress delete**，删除多播地址

这些命令附加/分离一个静态链路层多播地址，以便在接口上侦听。请注意，不可能静态地加入协议多播组。此命令仅管理链接层地址

**address** LLADDRESS (default)，链路层多播地址。

**dev** NAME，加入/删除多播地址的设备

## ip mroute---多播路由缓存管理



mroute对象是由用户级mrouting守护进程创建的多播路由缓存条目。由于组播路由引擎当前接口的局限性，无法对多播路由对象进行管理更改，因此只能显示对象

**ip mroute show**，列出mroute缓存项

**to** PREFIX (default)，选择要列出的目标多播地址的前缀。

**iif** NAME，接收多播数据包的接口。

**from** PREFIX，选择多播路由的IP源地址的前缀



## ip tunnel---通道配置

**tunnel**对象是隧道，它将数据包封装在IP包中，然后通过IP基础结构发送。加密(或外部)地址族由“-f“选项指定。默认的是ipv4。

1）ip tunnel add，增加一个新隧道

2）ip tunnel change，修改一个已经存在的隧道

3）ip tunnel delete，删除隧道

**name** NAME (default)，隧道设备名字。

**mode** MODE，设置隧道模式。可用的模式取决于封装地址系列。IPv 4封装可用的模式：ipip、SIT、isatap和grep；IPv6封装的模式：ip6ip6、ipip6和any。

**remote** ADDRESS，设置隧道的远程端点

**local** ADDRESS，设置隧道数据包的固定本地地址。它必须是此主机的另一个接口上的地址。

**ttl** N，在隧道化的数据包上设置固定的TTL N。N是介于1-255范围内的一个数字.0是一个特殊值，意味着数据包继承TTL值。IPv 4隧道的默认值是：Inherence。IPv6隧道的默认值是：64。

**tos** T，**dsfield** T，**tclass** T，在隧道数据包上设置固定的TOS(或IPv 6中的流量类)T。默认值是：inherit。

**dev** NAME，将隧道绑定到设备名称，以便隧道数据包只能通过此设备路由，并且在到达端点的路由发生更改时无法逃逸到另一个设备。

**nopmtudisc**，禁用此隧道上的路径MTU发现。默认情况下启用它。请注意，固定的ttl与此选项不兼容：使用固定的ttl进行隧道操作总是会使pmtu发现。

**key** K**，ikey** K**，okey** K，(只有GRE隧道)使用键控GRE与密钥K，K要么是一个数字或一个类似IP地址的虚线四边形。key参数设置在两个方向上使用的键。ikey和okey参数为输入和输出设置不同的键。

**csum, icsum, ocsum**，(只有GRE隧道)生成/要求隧道数据包的校验和。**ocsum**标志计算传出数据包的校验和。**icsum**标志要求所有输入数据包都具有正确的校验和。**csum**标志等效于组合**icsum ocsum**。

**seq, iseq, oseq**，(只有GRE隧道)序列化数据包。**oseq**标志允许对传出数据包进行排序。**iseq**标志要求对所有输入数据包进行序列化。seq标志等效于**iseq oseq**组合。这不是工作。不要用它

**dscp** **inherit**，(只有IPv 6隧道)在内部和外部报头之间继承DS字段

**encaplim** ELIM，设置固定的封装限制。缺省值为4

**flowlabel** FLOWLABEL，(只有IPv 6隧道)设置固定的流标签。

4）**ip tunnel prl**，潜在路由器列表(只有ISATAP)

**dev** NAME，

**prl-default** ADDR，

**prl-nodefault** ADDR，

**prl-delete** ADDR，

添加或删除addr作为潜在的路由器或默认路由器

5）**ip tunnel show**，列出隧道

没有参数

## ip monitor and rtmon---状态监控



IP实用程序可以连续地监视设备、地址和路由的状态。此选项的格式略有不同。也就是说，监视器command是命令行中的第一个命令，然后对象列表如下：

**ip  monitor  [ all,** LISTofOBJECTS **]**

OBJECT-LIST是我们要监视的对象类型的列表。它可能包含链接、地址和路由。如果没有提供文件参数，则IP将打开RTNETLINK，侦听该参数，并以前面部分描述的格式转储状态更改。

如果给定文件名，则不会侦听RTNETLINK，而是打开包含以二进制格式保存的RTNETLINK消息的文件，并将其转储。可以使用rtmon实用程序生成这样的历史文件。此实用程序具有类似于IP监视器的命令行语法。理想情况下，应该在发出第一个网络配置命令之前启动rtmon。例如，如果你在一个启动脚本中插入：

**rtmon file /var/log/rtmon.log**

稍后您将能够查看完整的历史记录。当然，可以随时启动rtmon。它在历史记录的前面加上在启动时转储的状态快照。



## ip xfrm---设置xfrm

xfrm是一个IP框架，它可以转换数据报的格式，即用某种算法对数据包进行加密。xfrm策略和xfrm状态通过模板tmpl_list相关联。该框架被用作IPsec协议的一部分。

1）**ip xfrm state add**，增加新的状态

2）**ip xfrm state update**，更新已经存在的状态

3）**ip xfrm state allocspi**，分配SPI数值

MODE，设置为默认传输，但可以设置为**tunnel**，**ro**或者**beet**。

FLAG-LIST，包含一个或多个标志。

FLAG，可以设置为**noecn**、**decap-dscp**、**wildrecv**

ENCAP，封装设置为封装类型ENCAP-TYPE、源端口SPORT、目标端口DPORT和OADDR。

ENCAP-TYPE，可以是**espinudp**或者**espinudp-nonike。**

ALGO-LIST，包含一个或多个算法Algo，该算法依赖于Algo_type设置的算法类型。它可以使用这些算法**enc**、**auth**、**comp**。

4）**ip xfrm policy add**，增加新策略

5）**ip xfrm policy update**，更新已经存在的策略

6）**ip xfrm policy delete**，删除存在的策略

7）**ip xfrm policy get**，过去存在的策略

8）**ip xfrm policy deleteall**，删除所有的xfrm策略

9）**ip xfrm policy list**，打印策略列表

10）**ip xfrm policy flush**，舒心策略

**dir** DIR，目录可以是**inp**、**out**、**fwd**

SELECTOR，选择将设置策略的地址。选择器由源地址和目标地址定义。

UPSPEC，由源端口**sport**、目的端口**dport**、**type**和**code**定义。

**dev** DEV，指定网络设备。

**index** INDEX，索引策略的数量。

**ptype** PTYPE，默认是**main**，可以切换为**sub**。

**action** ACTION，默认是**allow**，可以切换为**block**。

**priority** PRIORITY，级别是一个数字，默认0。

LIMIT-LIST，限制以秒、字节或数据包数量为单位设置。

TMPL-LIST，模板列表基于**ID**、**mode**、**reqid**、**level。**

ID，由源地址、目标地址、proto和spi的值指定。

XFRM_PROTO，值可以是**esp**、**ah**、**comp**、**route2**、**hao。**

MODE，默认**transport**,，还可以是**tunnel**，**beet。**

LEVEL，默认**required**，还可以是**use。**

UPSPEC，由**sport**、**dport**、**type**、**code**指定。

11）**ip xfrm monitor**，用于列出所有对象或定义的对象组。

**xfrm monitor**可以监视所有对象或其中定义的组的策略。

 

## ip token

IPv 6令牌化接口标识支持用于向节点分配众所周知的主机部分地址，同时仍然从路由器广告获得全局网络前缀。令牌标识符的主要目标是服务器平台，其中的地址通常是手动配置的，而不是使用DHCPv 6或SLAAC。通过使用令牌化标识符，主机仍然可以使用SLAAC确定其网络前缀，但如果其网络前缀更改，则更容易自动重新编号[1]。

1）**ip token set**，设置接口令牌

TOKEN，接口标识符令牌地址

**dev** DEV，网络接口

2）**ip token get**，从内核获取接口令牌

显示特定网络设备的令牌化接口标识符。参数：与“**ip token set”**的参数一致，但必须省略该令牌。

3）**ip token list**，列出所有接口令牌

列出内核中网络接口的所有令牌化接口标识符

## 举例

``` bash
ip link show                     # 显示网络接口信息
ip link set eth0 up             # 开启网卡
ip link set eth0 down            # 关闭网卡
ip link set eth0 promisc on      # 开启网卡的混合模式
ip link set eth0 promisc offi    # 关闭网卡的混个模式
ip link set eth0 txqueuelen 1200 # 设置网卡队列长度
ip link set eth0 mtu 1400        # 设置网卡最大传输单元
ip addr show     # 显示网卡IP信息
ip addr add 192.168.0.1/24 dev eth0 # 设置eth0网卡IP地址192.168.0.1
ip addr del 192.168.0.1/24 dev eth0 # 删除eth0网卡IP地址

ip route show # 显示系统路由
ip route add default via 192.168.1.254   # 设置系统默认路由
ip route list                 # 查看路由信息
ip route add 192.168.4.0/24  via  192.168.0.254 dev eth0 # 设置192.168.4.0网段的网关为192.168.0.254,数据走eth0接口
ip route add default via  192.168.0.254  dev eth0        # 设置默认网关为192.168.0.254
ip route del 192.168.4.0/24   # 删除192.168.4.0网段的网关
ip route del default          # 删除默认路由
ip route delete 192.168.1.0/24 dev eth0 # 删除路由
```
用ip命令显示网络设备的运行状态
``` bash
[root@localhost ~]$ ip link list
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 qdisc noqueue
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast qlen 1000
    link/ether 00:16:3e:00:1e:51 brd ff:ff:ff:ff:ff:ff
3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast qlen 1000
    link/ether 00:16:3e:00:1e:52 brd ff:ff:ff:ff:ff:ff
```
显示更加详细的设备信息
``` bash
[root@localhost ~]$ ip -s link list
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 qdisc noqueue
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    RX: bytes  packets  errors  dropped overrun mcast   
    5082831    56145    0       0       0       0      
    TX: bytes  packets  errors  dropped carrier collsns
    5082831    56145    0       0       0       0      
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast qlen 1000
    link/ether 00:16:3e:00:1e:51 brd ff:ff:ff:ff:ff:ff
    RX: bytes  packets  errors  dropped overrun mcast   
    3641655380 62027099 0       0       0       0      
    TX: bytes  packets  errors  dropped carrier collsns
    6155236    89160    0       0       0       0      
3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast qlen 1000
    link/ether 00:16:3e:00:1e:52 brd ff:ff:ff:ff:ff:ff
    RX: bytes  packets  errors  dropped overrun mcast   
    2562136822 488237847 0       0       0       0      
    TX: bytes  packets  errors  dropped carrier collsns
    3486617396 9691081  0       0       0       0    
```
显示核心路由表
``` bash
[root@localhost ~]$ ip route list 
112.124.12.0/22 dev eth1  proto kernel  scope link  src 112.124.15.130
10.160.0.0/20 dev eth0  proto kernel  scope link  src 10.160.7.81
192.168.0.0/16 via 10.160.15.247 dev eth0
172.16.0.0/12 via 10.160.15.247 dev eth0
10.0.0.0/8 via 10.160.15.247 dev eth0
default via 112.124.15.247 dev eth1
```
显示邻居表
``` bash
[root@localhost ~]$ ip neigh list
112.124.15.247 dev eth1 lladdr 00:00:0c:9f:f3:88 REACHABLE
10.160.15.247 dev eth0 lladdr 00:00:0c:9f:f2:c0 STALE
```
获取主机所有网络接口
``` bash
ip link, grep -E '^[0-9]', awk -F: '{print $2}'
```

显示设备的各种协议地址

``` bash
[root@localhost ~]$ ip addr show    #显示设备支持的协议的地址
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 qdisc noqueue state UNKNOWN
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 08:00:27:14:33:57 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.9/24 brd 192.168.1.255 scope global eth0
    inet6 fe80::a00:27ff:fe14:3357/64 scope link
       valid_lft forever preferred_lft forever
```

为目标设备添加地址

``` bash
[root@localhost ~]$ ip addr help    #查看帮助文档
Usage: ip addr {add|change|replace} IFADDR dev STRING [ LIFETIME ]
                                                      [ CONFFLAG-LIST]
       ip addr del IFADDR dev STRING
       ip addr {show|flush} [ dev STRING ] [ scope SCOPE-ID ]
                            [ to PREFIX ] [ FLAG-LIST ] [ label PATTERN ]
 

[root@localhost ~]$ ip addr add 192.168.1.110 dev eth0      #给eth0添加新的ip 

[root@localhost ~]$ ip addr show dev eth0    #查看eth0的地址信息，多了一个ip
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 08:00:27:14:33:57 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.9/24 brd 192.168.1.255 scope global eth0
    inet 192.168.1.110/32 scope global eth0
    inet6 fe80::a00:27ff:fe14:3357/64 scope link
       valid_lft forever preferred_lft forever
```
