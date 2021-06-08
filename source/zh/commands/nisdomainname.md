# nisdomainname - 显示主机NIS的域名

ypdomainname命令 显示主机的NIS的域名。

nisdomainname指令显示由函数“getdomainname”返回的主机域名，使用这个指令也可以设置一个主机NIS/YP域名。


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
nisdomainname  [-v]
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
[root@localhost ~]$ nisdomainname         #显示域名
www.david.com
[root@localhost ~]$ nisdomainname www.weijie.com   #设置域名
[root@localhost ~]$ nisdomainname                  #显示域名
www.weijie.com
```
