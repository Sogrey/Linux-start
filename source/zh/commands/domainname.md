# domainname - 显示和设置系统的NIS域名

domainname命令 用于显示和设置系统的NIS域名。

domainname指令显示由函数“getdomainname”返回的主机域名，使用这个指令也可以设置一个主机域名。

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
domainname  [-v]  [-F filename]  [name]
```

## 选项

``` bash
-v                               # 显示详细执行过程
-F, --file filename              # 从指定文件读取主机域名

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例
显示主机域名
``` bash

[root@localhost ~]$ domainname -v
getdomainname()='(none)'
(none)
[root@localhost ~]$ domainname www.sogrey.top
You have new mail in /var/spool/mail/root
[root@localhost ~]$ domainname
www.sogrey.top
```
