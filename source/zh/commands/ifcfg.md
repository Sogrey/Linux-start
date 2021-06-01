# ifcfg - 配置Linux中的网络接口参数

ifcfg命令 是一个Bash脚本程序，用来设置Linux中的网络接口参数。

ifcfg是一个简单的脚本替换iconfig命令，它可以设置网络接口的ip地址。

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
ifcfg  [device]  [cmd]  [address]
```

device就是网卡设备，它可能有别名。cmd可以是add、delete、stop。address就是ip地址。
## 选项

无

## 举例
添加ip地址
``` bash
[root@localhost ~]$ ifcfg eth0 add 192.168.0.250/24     #添加地址250
Forwarding is ON or its state is unknown (4). OK, No RDISC.
[root@localhost ~]$ ifconfig                           #查看网络信息
eth0      Link encap:Ethernet  HWaddr 08:00:27:14:33:57 
          inet addr:192.168.0.250  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe14:3357/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:107276 errors:0 dropped:0 overruns:0 frame:0
          TX packets:72250 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:83580745 (79.7 MiB)  TX bytes:5842176 (5.5 MiB)
```
删除ip地址
``` bash
[root@localhost ~]$ ifcfg eth0 delete 192.168.0.250/24      #删除网卡地址
Forwarding is ON or its state is unknown (4). OK, No RDISC.
[root@localhost ~]$ ifconfig                                #查看网卡信息，ip地址已经删除
eth0      Link encap:Ethernet  HWaddr 08:00:27:14:33:57 
          inet6 addr: fe80::a00:27ff:fe14:3357/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:107276 errors:0 dropped:0 overruns:0 frame:0
          TX packets:72251 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:83580745 (79.7 MiB)  TX bytes:5842218 (5.5 MiB)
```