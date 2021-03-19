# groupdel - 用于删除指定的工作组

groupdel命令 用于删除指定的工作组，本命令要修改的系统文件包括/ect/group和/ect/gshadow。若该群组中仍包括某些用户，则必须先删除这些用户后，方能删除群组。

删除组，如果租内有用户，那么必须先删除用户。

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
groupdel  group
```

## 选项

``` bash
--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon ~]$ tail -n 2 /etc/group # 查看组信息 存在groupTest组
sogrey:123456:1000:sogrey
groupTest:x:1996:
[sogrey@bogon ~]$ sudo groupdel groupTest # 删除组
[sogrey@bogon ~]$ tail -n 2 /etc/group # 查看组信息，已经删除
vboxsf:!:983:
sogrey:123456:1000:sogrey
[sogrey@bogon ~]$ 
```
