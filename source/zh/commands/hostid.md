# hostid - 显示当前主机的十六进制数字标识

打印出主机的id标识，将会输出一个十六进制的数字。

该命令是GNU coreutils包中的命令，相关的帮助信息请查看man -s 1 hostid，info coreutils 'hostid invocation'。


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
hostid  [OPTION]
```

## 选项

``` bash
--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例

``` bash
[sogrey@bogon ~]$ hostid
000a0f02
[sogrey@bogon ~]$ 
```

