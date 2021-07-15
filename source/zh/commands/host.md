# host - 常用的分析域名查询工具

host命令 是常用的分析域名查询工具，可以用来测试域名系统工作是否正常。

host是一个常用的DNS查询工具，经常用来查询域名、检查域名解析是否正确。

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
host  [选项]  name  [server]
```

## 选项

``` bash
-a         # 查询所有的信息
-c         # 设置查询类型
-C         # 查询完整的SOA记录
-d, -v     # 显示详细过程
-l         # 列表模式
-t         # 选择查询类型：CNAME NS SOA SIG KEY AXFR
-w         # 永久等待
-W         # 设置等待超时
```
## 举例
查询域名
``` bash
[sogrey@bogon ~]$ host www.baidu.com
www.baidu.com is an alias for www.a.shifen.com.
www.a.shifen.com has address 14.215.177.38
www.a.shifen.com has address 14.215.177.39
www.a.shifen.com is an alias for www.wshifen.com.
www.a.shifen.com is an alias for www.wshifen.com.
[sogrey@bogon ~]$ 
```
查询所有信息
``` bash
[sogrey@bogon ~]$  host -a www.baidu.com
Trying "www.baidu.com"
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 11677
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.baidu.com.			IN	ANY

;; ANSWER SECTION:
www.baidu.com.		0	IN	A	14.215.177.38

Received 47 bytes from 192.168.0.1#53 in 12 ms
[sogrey@bogon ~]$ 
```


