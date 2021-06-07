# dnsdomainname - 定义DNS系统中FQDN名称的域名

dnsdomainname命令 用于定义DNS系统中FQDN名称中的域名。

dnsdomainname将打印FQDN(完全限定域名)的域部分。系统的完整FQDN以“hostname --fqdn”返回。

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
dnsdomainname  [-v] 
```

## 选项

``` bash
-v                               # 显示详细执行过程

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例
显示主机域名
``` bash
[root@localhost ~]$ dnsdomainname –v   #-v选项显示详细执行过程
gethostname()=`localhost.localdomain'
Resolving `localhost.localdomain' ...
Result: h_name=`localhost'
Result: h_aliases=`localhost.localdomain'
Result: h_aliases=`localhost4'
Result: h_aliases=`localhost4.localdomain4'
Result: h_aliases=`localhost.localdomain'
Result: h_aliases=`localhost6'
Result: h_aliases=`localhost6.localdomain6'
Result: h_addr_list=`127.0.0.1'
Result: h_addr_list=`127.0.0.1'
```
