# iptables - Linux上常用的防火墙软件

iptables命令 是Linux上常用的防火墙软件，是netfilter项目的一部分。可以直接配置，也可以通过许多前端和图形界面配置。

iptables指令用来设置Linux内核的ip过滤规则以及管理nat功能。iptables用于在Linux内核中设置、维护和检查IPv4数据包过滤规则表。可以定义几个不同的表。每个表包含许多内置链，也可能包含用户定义的链。每个链都是一个规则列表，可以匹配一组数据包。每条规则都指定如何处理匹配的数据包。这被称为“目标”，它可能是跳转到同一表中的用户定义链。

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
iptables  [-t table]  {-A|-D}  chain  rule-specification
iptables  [-t table]  -I  chain  [rulenum]  rule-specification
iptables  [-t table]  -R  chain  rulenum  rule-specification
iptables  [-t table]  -D  chain  rulenum
iptables  [-t table]  -S  [chain [rulenum]]
iptables  [-t table]  {-F|-L|-Z}  [chain [rulenum]]  [options...]
iptables  [-t table]  -N  chain
iptables  [-t table]  -X  [chain]
iptables  [-t table]  -P  chain  target
iptables  [-t table]  -E  old-chain-name  new-chain-name  rule-specification = [matches...] [target]
match = -m matchname [per-match-options]  target = -j targetname [per-target-options]
```
目前Linux内核支持3个相互独立的表：filter，过滤ip数据包；nat，配置nat功能；mangle，修改ip数据包。

filter是默认表，包含INPUT（发送给本机） 、OUTPUT（本机向外发送）、FORWARD（被路由出去）三个链。

nat表包含PREROUTING（修改刚收到的数据包） 、OUTPUT（在路由之前处理本机产生的数据包） 、POSTROUTING（修改将要发送的数据包）三个链。

mangle表包含PREROUTING（路由之前，修改收到的包） 、OUTPUT（路由之前，修改本机产生的包） 、INPUT（修改发送到本机的包） 、FORWARD （修改路由之后的包） 、POSTROUTING（修改将被本机发送的包）五个链。

Linux系统中的内置目标包括：ACCEPT（允许数据包通过） DROP（丢弃数据包） QUEUE（传递包到用户空间） RETURN（停止向后检测其他的规则，返回之前的条用规则处）

## 选项

### 基本参数
``` bash
-P	             # 设置默认策略:iptables -P INPUT (DROP
-F	             # 清空规则链
-L	             # 查看规则链
-A	             # 在规则链的末尾加入新规则
-I	             # num 在规则链的头部加入新规则
-D	             # num 删除某一条规则
-s	             # 匹配来源地址IP/MASK，加叹号"!"表示除这个IP外。
-d	             # 匹配目标地址
-i	             # 网卡名称 匹配从这块网卡流入的数据
-o	             # 网卡名称 匹配从这块网卡流出的数据
-p	             # 匹配协议,如tcp,udp,icmp
--dport num	     # 匹配目标端口号
--sport num	     # 匹配来源端口号
```
### 命令
``` bash
-t table                                         # 指定要管理的表
-A, --append chain rule-specification            # 追加记录
-D, --delete chain rule-specification            # 删除记录
-I, --insert chain [rulenum] rule-specification  # 插入记录
-R, --replace chain [rulenum] rule-specification # 替换记录
-L, --list [chain]                               # 列出记录
-S, --list-rules [chain]                         # 列出已选择链的所有规则。如果没有选择任何链，则所有链都打印
-F, --flush [chain]                              # 删除指定的记录
-Z, --zero [chain [rulenum]]                     # 将数据计数和字节计数清零
-N, --new-chain chain                            # 用户自定义新链
-X, --delete-chain [chain]                       # 删除用户自定义链
-P, --policy chain target                        # 为指定的链设置策略
-E, --rename-chain old new                       # 重命名链
-h                                               # 显示帮助信息
```
### 参数
``` bash
[!] –p, --protocol protocol               # 指定协议类型tcp、udp、icmp、all，协议前加！标识否定
[!] –s, --source address[/mask][,…        # 源地址
[!] –d, --destination address[/mask][,…   # 目标
-j, --jump                                # 指定跳转的目标
-g, --goto chain                          # 这指定应在用户指定的链中继续处理。与“--jump”选项不同，返回将不再在此链中继续处理，而是在通过“--jump”调用我们的链中继续处理。
[!] –i, --in-interface name               # 接收数据包的接口名称(仅用于输入、转发和PREROUTING链的数据包)。当“！”参数在接口名称之前使用，意义被倒置。如果接口名以“+”结尾，则以此名称开头的任何接口都将匹配。如果省略此选项，则任何接口名称都将匹配。
-o, --out-interface name                  # 指定数据包离开的网络接口
[!] –f, --fragment                        # 这意味着该规则仅指分段数据包的第二段和更多的片段。
-c, --set-counters packets bytes          # 这使管理员能够初始化规则的数据包和字节计数器(在插入、追加、替换操作期间)。
```
### 其他选项
``` bash
-v, --verbose                             # 冗长的输出，该选项使List命令显示接口名称、规则选项(如果有的话)和TOS掩码。还列出了数据包计数器和字节计数器
-n, --numeric                             # 数字输出IP地址和端口号将以数字格式打印。默认情况下，程序将尝试将它们显示为主机名、网络名称或服务(只要适用)。
-x, --exact                               # 扩大数字。显示数据包和字节计数器的确切值，而不是只显示K‘s(1000倍)M’s(1000 K倍数)或G‘s(1000 m倍数)中的四舍五入数。此选项仅与-L命令相关。
--line-numbers                            # 当列出规则时，将行号添加到每条规则的开头，对应于该规则在链中的位置。
--modprobe=command                        # 在向链中添加或插入规则时，使用命令加载任何必要的模块(目标、匹配扩展等)
```
## 举例



### 清空当前的所有规则和计数

```shell
iptables -F  # 清空所有的防火墙规则
iptables -X  # 删除用户自定义的空链
iptables -Z  # 清空计数
```

### 配置允许ssh端口连接

```shell
iptables -A INPUT -s 192.168.1.0/24 -p tcp --dport 22 -j ACCEPT
# 22为你的ssh端口， -s 192.168.1.0/24表示允许这个网段的机器来连接，其它网段的ip地址是登陆不了你的机器的。 -j ACCEPT表示接受这样的请求
```

### 允许本地回环地址可以正常使用

```shell
iptables -A INPUT -i lo -j ACCEPT
#本地圆环地址就是那个127.0.0.1，是本机上使用的,它进与出都设置为允许
iptables -A OUTPUT -o lo -j ACCEPT
```

### 设置默认的规则

```shell
iptables -P INPUT DROP # 配置默认的不让进
iptables -P FORWARD DROP # 默认的不允许转发
iptables -P OUTPUT ACCEPT # 默认的可以出去
```

### 配置白名单

```shell
iptables -A INPUT -p all -s 192.168.1.0/24 -j ACCEPT  # 允许机房内网机器可以访问
iptables -A INPUT -p all -s 192.168.140.0/24 -j ACCEPT  # 允许机房内网机器可以访问
iptables -A INPUT -p tcp -s 183.121.3.7 --dport 3380 -j ACCEPT # 允许183.121.3.7访问本机的3380端口
```

### 开启相应的服务端口

```shell
iptables -A INPUT -p tcp --dport 80 -j ACCEPT # 开启80端口，因为web对外都是这个端口
iptables -A INPUT -p icmp --icmp-type 8 -j ACCEPT # 允许被ping
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT # 已经建立的连接得让它进来
```

### 保存规则到配置文件中

```shell
cp /etc/sysconfig/iptables /etc/sysconfig/iptables.bak # 任何改动之前先备份，请保持这一优秀的习惯
iptables-save > /etc/sysconfig/iptables
cat /etc/sysconfig/iptables
```

### 列出已设置的规则

> iptables -L [-t 表名] [链名]

- 四个表名 `raw`，`nat`，`filter`，`mangle`
- 五个规则链名 `INPUT`、`OUTPUT`、`FORWARD`、`PREROUTING`、`POSTROUTING`
- filter表包含`INPUT`、`OUTPUT`、`FORWARD`三个规则链

```shell
iptables -L -t nat                  # 列出 nat 上面的所有规则
#            ^ -t 参数指定，必须是 raw， nat，filter，mangle 中的一个
iptables -L -t nat  --line-numbers  # 规则带编号
iptables -L INPUT

iptables -L -nv  # 查看，这个列表看起来更详细
```

### 清除已有规则

```shell
iptables -F INPUT  # 清空指定链 INPUT 上面的所有规则
iptables -X INPUT  # 删除指定的链，这个链必须没有被其它任何规则引用，而且这条上必须没有任何规则。
                   # 如果没有指定链名，则会删除该表中所有非内置的链。
iptables -Z INPUT  # 把指定链，或者表中的所有链上的所有计数器清零。
```

### 删除已添加的规则

```shell
# 添加一条规则
iptables -A INPUT -s 192.168.1.5 -j DROP
```

将所有iptables以序号标记显示，执行：

```shell
iptables -L -n --line-numbers
```

比如要删除INPUT里序号为8的规则，执行：

```shell
iptables -D INPUT 8
```

### 开放指定的端口

```shell
iptables -A INPUT -s 127.0.0.1 -d 127.0.0.1 -j ACCEPT               #允许本地回环接口(即运行本机访问本机)
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT    #允许已建立的或相关连的通行
iptables -A OUTPUT -j ACCEPT         #允许所有本机向外的访问
iptables -A INPUT -p tcp --dport 22 -j ACCEPT    #允许访问22端口
iptables -A INPUT -p tcp --dport 80 -j ACCEPT    #允许访问80端口
iptables -A INPUT -p tcp --dport 21 -j ACCEPT    #允许ftp服务的21端口
iptables -A INPUT -p tcp --dport 20 -j ACCEPT    #允许FTP服务的20端口
iptables -A INPUT -j reject       #禁止其他未允许的规则访问
iptables -A FORWARD -j REJECT     #禁止其他未允许的规则访问
```

### 屏蔽IP

```shell
iptables -A INPUT -p tcp -m tcp -s 192.168.0.8 -j DROP  # 屏蔽恶意主机（比如，192.168.0.8
iptables -I INPUT -s 123.45.6.7 -j DROP       #屏蔽单个IP的命令
iptables -I INPUT -s 123.0.0.0/8 -j DROP      #封整个段即从123.0.0.1到123.255.255.254的命令
iptables -I INPUT -s 124.45.0.0/16 -j DROP    #封IP段即从123.45.0.1到123.45.255.254的命令
iptables -I INPUT -s 123.45.6.0/24 -j DROP    #封IP段即从123.45.6.1到123.45.6.254的命令是
```

### 指定数据包出去的网络接口

只对 OUTPUT，FORWARD，POSTROUTING 三个链起作用。

```shell
iptables -A FORWARD -o eth0
```

### 查看已添加的规则

```shell
iptables -L -n -v
Chain INPUT (policy DROP 48106 packets, 2690K bytes)
 pkts bytes target     prot opt in     out     source               destination
 5075  589K ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0
 191K   90M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0           tcp dpt:22
1499K  133M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0           tcp dpt:80
4364K 6351M ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0           state RELATED,ESTABLISHED
 6256  327K ACCEPT     icmp --  *      *       0.0.0.0/0            0.0.0.0/0

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination

Chain OUTPUT (policy ACCEPT 3382K packets, 1819M bytes)
 pkts bytes target     prot opt in     out     source               destination
 5075  589K ACCEPT     all  --  *      lo      0.0.0.0/0            0.0.0.0/0
```

### 启动网络转发规则

公网`210.14.67.7`让内网`192.168.188.0/24`上网

```shell
iptables -t nat -A POSTROUTING -s 192.168.188.0/24 -j SNAT --to-source 210.14.67.127
```

### 端口映射

本机的 2222 端口映射到内网 虚拟机的22 端口

```shell
iptables -t nat -A PREROUTING -d 210.14.67.127 -p tcp --dport 2222  -j DNAT --to-dest 192.168.188.115:22
```

### 字符串匹配

比如，我们要过滤所有TCP连接中的字符串`test`，一旦出现它我们就终止这个连接，我们可以这么做：

```shell
iptables -A INPUT -p tcp -m string --algo kmp --string "test" -j REJECT --reject-with tcp-reset
iptables -L

# Chain INPUT (policy ACCEPT)
# target     prot opt source               destination
# REJECT     tcp  --  anywhere             anywhere            STRING match "test" ALGO name kmp TO 65535 reject-with tcp-reset
#
# Chain FORWARD (policy ACCEPT)
# target     prot opt source               destination
#
# Chain OUTPUT (policy ACCEPT)
# target     prot opt source               destination
```

### 阻止Windows蠕虫的攻击

```shell
iptables -I INPUT -j DROP -p tcp -s 0.0.0.0/0 -m string --algo kmp --string "cmd.exe"
```

### 防止SYN洪水攻击

```shell
iptables -A INPUT -p tcp --syn -m limit --limit 5/second -j ACCEPT
```

### 添加SECMARK记录

```shell
iptables -t mangle -A INPUT -p tcp --src 192.168.1.2 --dport 443 -j SECMARK --selctx system_u:object_r:myauth_packet_t
# 向从 192.168.1.2:443 以TCP方式发出到本机的包添加MAC安全上下文 system_u:object_r:myauth_packet_t
```



显示filter表的记录
``` bash
[root@localhost ~]$ iptables -t filter –L    #显示指定表的记录
Chain INPUT (policy ACCEPT)
target     prot opt source               destination        
ACCEPT     all  --  anywhere             anywhere            state RELATED,ESTABLISHED
ACCEPT     icmp --  anywhere             anywhere                  
…
Chain FORWARD (policy ACCEPT)
target     prot opt source               destination        
ACCEPT     all  --  anywhere             anywhere            state RELATED,ESTABLISHED
ACCEPT     icmp --  anywhere             anywhere           
…
Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```
禁止端口135的tcp数据包
``` bash
[root@localhost ~]$ iptables -t filter -A INPUT -p tcp --dport 135 -j DROP  #添加记录，忽略135端口的tcp数据包 

[root@localhost ~]$ iptables –L      #查看表，已经加入规则
Chain INPUT (policy ACCEPT)
target     prot opt source               destination        
ACCEPT     all  --  anywhere             anywhere            state RELATED,ESTABLISHED
DROP       tcp  --  anywhere             anywhere            tcp dpt:epmap
```
禁止目标地址访问本机
``` bash
[root@localhost ~]$ iptables -A INPUT -s 192.168.1.110 -j DROP   #禁止110地址访问本机
[root@localhost ~]$ iptables -L |grep DROP                       #查看filter表，已经添加记录
DROP       tcp  --  anywhere             anywhere            tcp dpt:epmap
DROP       all  --  192.168.1.110        anywhere   
```