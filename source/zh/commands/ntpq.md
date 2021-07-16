# ntpq - 使用NTP模式6数据包与NTP服务器通信

ntpq指令使用NTP模式6数据包与NTP服务器通信,能够在允许的网络上查询的兼容的服务器。它以交互模式运行,或者通过命令行参数运行。

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
ntpq  [-46dinp]  [-c command]  [host]  [...]
```

## 选项

``` bash
-4      # 使用ipv4解析
-6      # 使用ipv6解析
-c      # 添加执行的命令到指定主机的命令列表
-d      # 打开调试模式
-i      # 使用交互模式
-n      # 以十进制格式显示主机地址
-p      # 显示服务器同级设备的列表
```
## 举例
查看服务器同级设备列表
``` bash
[root@localhost ~]$ ntpq –p         #查看同级服务器列表
     remote           refid      st t when poll reach   delay   offset  jitter
==============================================================================
 120.25.115.20   10.137.53.7      2 u    9   64    1  184.815  279.126   0.000
 203.107.6.88    10.137.55.181    2 u   12   64    1   71.254  230.184   0.000
[root@localhost ~]$ 
```



