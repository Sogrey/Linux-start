# dig - 域名查询工具

dig命令 是常用的域名查询工具，可以用来测试域名系统工作是否正常。

dig是一个DNS查询工具，多数管理员会使用dig命令来解决DNS的问题。

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
dig  [选项]
```

## 选项

``` bash
@server     # 指定服务器地址
-b host     # 指定通过哪个主机查询
-f file     # 从指定文件来查询
-p port     # 指定使用的端口
-t type     # 指定要查询的DNS类型，例如A\MX\PRT
-x ip       # 指定DNS你想查询，输入ip得到域名
-4          # 使用ipv4
-6          # 使用ipv6
```
## 举例


``` bash
[sogrey@bogon ~]$ dig

; <<>> DiG 9.9.4-RedHat-9.9.4-61.1.h4.eulerosv2r7 <<>>
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 43944
;; flags: qr rd ra; QUERY: 1, ANSWER: 13, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;.				IN	NS

;; ANSWER SECTION:
.			98105	IN	NS	f.root-servers.net.
.			98105	IN	NS	b.root-servers.net.
.			98105	IN	NS	g.root-servers.net.
.			98105	IN	NS	j.root-servers.net.
.			98105	IN	NS	d.root-servers.net.
.			98105	IN	NS	e.root-servers.net.
.			98105	IN	NS	m.root-servers.net.
.			98105	IN	NS	k.root-servers.net.
.			98105	IN	NS	a.root-servers.net.
.			98105	IN	NS	l.root-servers.net.
.			98105	IN	NS	i.root-servers.net.
.			98105	IN	NS	h.root-servers.net.
.			98105	IN	NS	c.root-servers.net.

;; Query time: 18 msec
;; SERVER: 192.168.0.1#53(192.168.0.1)
;; WHEN: 五 7月 16 00:34:56 CST 2021
;; MSG SIZE  rcvd: 228

[sogrey@bogon ~]$ 
```

查询域名信息

``` bash
[sogrey@bogon ~]$ dig www.baidu.com

; <<>> DiG 9.9.4-RedHat-9.9.4-61.1.h4.eulerosv2r7 <<>> www.baidu.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 3867
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;www.baidu.com.			IN	A

;; ANSWER SECTION:
www.baidu.com.		942	IN	CNAME	www.a.shifen.com.
www.a.shifen.com.	15	IN	CNAME	www.wshifen.com.
www.wshifen.com.	44	IN	A	103.235.46.39

;; Query time: 66 msec
;; SERVER: 192.168.0.1#53(192.168.0.1)
;; WHEN: 五 7月 16 00:35:32 CST 2021
;; MSG SIZE  rcvd: 111

[sogrey@bogon ~]$ 
```
反向查询
``` bash
[sogrey@bogon ~]$ dig -t a -x 103.235.46.39

; <<>> DiG 9.9.4-RedHat-9.9.4-61.1.h4.eulerosv2r7 <<>> -t a -x 103.235.46.39
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 15873
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;39.46.235.103.in-addr.arpa.	IN	A

;; AUTHORITY SECTION:
103.in-addr.arpa.	1799	IN	SOA	ns.apnic.net. read-txt-record-of-zone-first-dns-admin.apnic.net. 57693 7200 1800 604800 3600

;; Query time: 269 msec
;; SERVER: 192.168.0.1#53(192.168.0.1)
;; WHEN: 五 7月 16 00:36:45 CST 2021
;; MSG SIZE  rcvd: 143

[sogrey@bogon ~]$ 
```
