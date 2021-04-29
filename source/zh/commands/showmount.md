# showmount - 显示NFS服务器加载的信息

showmount命令 查询“mountd”守护进程，以显示NFS服务器加载的信息。

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
showmount  [OPTION] [参数]
```

## 选项

``` bash
-d          # 仅显示已被NFS客户端加载的目录；
-e          # 显示NFS服务器上所有的共享目录。
```
NFS服务器：指定NFS服务器的ip地址或者主机名。

