# unset - 删除指定的shell变量或函数

unset是和set相反的一个指令，用来删除shell变量或者函数。

# 主要用途
- 删除一到多个shell变量（不包括只读变量）。
- 删除一到多个shell函数。
- 删除一到多个具有引用属性的变量（如果-n选项存在）。

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
unset  [-fv]  [name ...]
```
对于每个名称，删除相应的变量或函数。如果没有提供任何选项，或者给出了“-v”选项，那么每个名称都引用一个shell变量。只读变量可能不会被取消设置。如果指定了“-f”，则每个名称都引用一个shell函数，并删除函数定义。从传递给后续命令的环境中删除每个未设置变量或函数。如果任何COMP_WORDBREAKS，RANDOM，SECONDS，LINENO，HISTCMD，FUNCNAME，GROUPS，DIRSTACK都未设置，则它们将失去它们的特殊属性，即使它们随后被重置。除非名称是只读的，否则退出状态为真。
## 选项

``` bash
-f       # 删除函数
-v       # 删除变量
```
## 举例
删除变量
``` bash
[root@localhost ~]$ set | grep USERS       #查看变量
_=USERS=weijie
[root@localhost ~]$ unset -v USERS         #删除变量
[root@localhost ~]$ set | grep USERS       #查看变量，已经删除
_=USERS
```



