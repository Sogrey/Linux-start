# traceroute - 显示数据包到主机间的路径

tracepath指令可以追踪数据到达目标主机的路由信息，同时还能够发现MTU值。它跟踪路径到目的地，沿着这条路径发现MTU。它使用UDP端口或一些随机端口。它类似于Traceroute，只是不需要超级用户特权，并且没有花哨的选项。tracepath 6很好地替代了tracerout 6和Linux错误队列应用程序的典型示例。tracepath的情况更糟，因为商用IP路由器在ICMP错误消息中没有返回足够的信息。很可能，当它们被更新的时候，它会改变

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
tracepath [ -n]  [ -l pktlen]  destination [ port]
```

## 选项

``` bash
-n        # 不查看主机名字
-l        # 设置初始化的数据包长度，默认65535
```
## 举例
``` bash
root@mops:~ # tracepath6 3ffe:2400:0:109::2
1?: [LOCALHOST]                              pmtu 1500
1:  dust.inr.ac.ru                   0.411ms
2:  dust.inr.ac.ru        asymm  1   0.390ms pmtu 1480
2:  3ffe:2400:0:109::2               463.514ms reached
Resume: pmtu 1480 hops 2 back 2
```
第一列显示探针的TTL，后面是冒号。通常TTL的值是从网络中得到的，但有时回复并不包含必要的信息，我们不得不猜测它。在这种情况下，数字后面跟着？。

第二列显示网络跳，对探测作出答复。如果探测未发送到网络，则为路由器地址或者 [localhost]地址。

行的其余部分显示了有关到达相关工作跳的路径的各种信息。作为规则，它包含RTT的值。此外，它可以显示路径MTU，当它改变。如果路径是不对称的，或者探测在到达指定跳之前完成，则显示前向和后向跳数之间的差异。这一信息不可靠。F.E.第三行显示1的不对称性，这是因为第一次TTL为2的探针在第一跳时由于路径MTU发现而被拒绝。

最后一行总结了到达目的地的所有路径的信息，显示了检测到的路径MTU、到达目的地的跳数以及我们对从目的地到我们的跳数的猜测，这在路径不对称时可能有所不同。


---

追踪到www.qq.com的路由
``` bash

[root@localhost ~]$ ping -c 2 www.qq.com           #ping目标地址，可以看到目标ip
PING www.qq.com (111.30.132.101) 56(84) bytes of data.
64 bytes from 111.30.132.101: icmp_seq=1 ttl=53 time=23.9 ms
64 bytes from 111.30.132.101: icmp_seq=2 ttl=53 time=33.0 ms 

[root@localhost ~]$ tracepath www.qq.com           #追踪路由
 1:  192.168.1.9 (192.168.1.9)                              0.067ms pmtu 1500
 1:  192.168.1.1 (192.168.1.1)                              3.569ms
 1:  192.168.1.1 (192.168.1.1)                              4.055ms
 2:  192.168.1.1 (192.168.1.1)                             17.651ms pmtu 1492
 2:  10.46.80.1 (10.46.80.1)                               13.434ms
 3:  183.203.226.201 (183.203.226.201)                      9.547ms
 4:  211.138.99.57 (211.138.99.57)                         70.194ms asymm  5
 5:  221.183.14.5 (221.183.14.5)                           17.023ms
 6:  221.176.19.237 (221.176.19.237)                      206.968ms
 7:  221.183.8.149 (221.183.8.149)                         29.488ms asymm  8
 8:  221.183.27.106 (221.183.27.106)                       57.434ms
 9:  111.30.145.34 (111.30.145.34)                         27.426ms
```
