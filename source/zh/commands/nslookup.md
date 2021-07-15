# nslookup - 查询域名DNS信息的工具
nslookup是一个查询DNS域名的工具，它有交互和非交互两种工作模式。

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
nslookup  [-option]  [name | -] [server]
```

## 选项

``` bash
host                 # 查询host的信息
server domain        # 改变服务器
exit                 # 退出
set keyword=value    # 设置指定属性
                     # - all，打印所有的属性
                     # - domain=name 设置查询的名字
                     # - port=value 改变服务器端口
                     # - type=value 改变查询的类型
                     # - timeout=number 设置等待超时
                     # - class={IN | CH | HS | ANY}
```
## 举例
非交互模式查询
``` bash
[sogrey@bogon ~]$ nslookup www.baidu.com
Server:		192.168.0.1
Address:	192.168.0.1#53

Name:	www.baidu.com
Address: 14.215.177.38

[sogrey@bogon ~]$ 
```
交互模式查询
``` bash
[sogrey@bogon ~]$ nslookup # 交互模式
> www.baidu.com   # 输入查询的域名
Server:		192.168.0.1
Address:	192.168.0.1#53

Name:	www.baidu.com
Address: 14.215.177.38
> set all  # 打印当前所有的配置信息
Default server: 192.168.0.1
Address: 192.168.0.1#53
Default server: 8.8.8.8
Address: 8.8.8.8#53

Set options:
  novc			nodebug		nod2
  search		recurse
  timeout = 0		retry = 3	port = 53
  querytype = A       	class = IN
  srchlist = 
> 
```