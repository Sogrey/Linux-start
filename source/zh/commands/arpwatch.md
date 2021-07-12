# arpwatch - 监听网络上ARP的记录

arpwatch命令 用来监听网络上arp的记录。

arpwatch指令可以监听网络设备和ip地址的对应关系，将发现的信息发送到系统日志“/var/log/message”。

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
arpwatch  [选项]
```

## 选项

``` bash
-d                  # 打开调试模式，调试信息发送到终端
-f file             # 设置arp记录的存储文件，默认arp.dat。开始使用这个指令之前，必须创建一个空arp.dat
-i interface        # 指定网络接口
-n                  # 说明本地网络
-N                  # -N标志禁止报告
-r                  # 从指定的文件中读取arp记录
-e                  # 指定发送mail的目标用户，默认是root
-s                  # 指定发送mail的源用户，默认root
```
## 报告信息

| 信息                         | 说明                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| **new activity**             | 这对ethernet/ip地址对第一次被使用了六个月或更长时间。        |
| **new station**              | 此ip地址以前从未使用过此以太网地址。                         |
| **flip flop**                | 以太网地址已从最近看到的地址改为第二最近看到的地址。(如果旧的或新的以太网地址是DECnet地址，并且不到24小时，则报告的电子邮件版本将被取消。) |
| **changed ethernet address** | 主机切换到新的以太网地址。                                   |

 

## 系统日志信息

| 信息                            | 说明                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| **ethernet broadcast**          | 主机的mac以太网地址是广播地址。                              |
| **ip broadcast**                | 主机的IP地址是广播地址。                                     |
| **bogon**                       | 源ip地址不是本地子网的本地地址。                             |
| **ethernet broadcast**          | 源mac或arp以太网地址均为1或全部为零。                        |
| **ethernet mismatch**           | 源Mac以太网地址与ARP数据包中的地址不匹配。                   |
| **reused old ethernet address** | 以太网地址已从最近看到的地址更改为第三(或更大)最近看得最少的地址。(这类似于触发器。) |
| **suppressed DECnet flip flop** | 由于两个地址之一是DECnet地址，“flip flop”报告被禁止。        |

 

## 举例
监听arp信息
``` bash
[root@localhost ~]$ arpwatch -i eth0               # 监听网卡eht0 
[root@localhost ~]$ tail -n 3 /var/log/messages    # 查看最近的日志信息
Sep 30 08:29:59 localhost arpwatch: listening on eth0
Sep 30 08:30:01 localhost arpwatch: new station 192.168.1.1 c8:41:29:f4:4a:20
Sep 30 08:30:12 localhost arpwatch: new station 192.168.1.9 8:0:27:14:33:57
You have new mail in /var/spool/mail/root
```
