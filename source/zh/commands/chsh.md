# chsh - 用来更换登录系统时使用的shell
chsh命令 用来更换登录系统时使用的shell。若不指定任何参数与用户名称，则chsh会以应答的方式进行设置。

改变用户登录时使用的shell，默认使用bash。如果命令行上没有给出shell，chsh将提示输入一个shell。chsh将接受系统上任何可执行文件的完整路径名。但是，如果shell未在“/etc/shell”文件中列出，则将发出警告。另一方面，也可以将其配置为只接受此文件中列出的shell，除非您是root用户。

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
chsh  [选项]  user
```

## 选项

``` bash
-s, --shell                       # 改变登录后使用的shell环境
-l, --list-shells                 # 显示系统当前可以用的shell

-u, --help                        # 显示帮助文档
-v, --version                     # 显示命令版本信息
```
## 举例
查看可用的shell
``` bash
[sogrey@bogon 文档]$ chsh -l david   #显示当可用shell
/bin/sh
/bin/bash
/sbin/nologin
/bin/dash
/bin/tcsh
/bin/csh
```

改变用户shell
``` bash
[sogrey@bogon 文档]$ chsh -s /bin/sh david  #改变登录shell
Changing shell for david.
Shell changed.
[sogrey@bogon 文档]$ su david               #切换用户，shell已经改
sh-4.1$
```

把我的shell改成zsh
``` bash
[sogrey@bogon 文档]$ chsh -s /bin/zsh
Changing shell for rocrocket.
Password:
Shell changed.
[sogrey@bogon 文档]$
```

使用chsh加选项-s就可以修改登录的shell了！你会发现你现在执行echo $SHELL后仍然输出为/bin/bash，这是因为你需要重启你的shell才完全投入到zsh怀抱中去。chsh -s其实修改的就是/etc/passwd文件里和你的用户名相对应的那一行。

把shell修改回/bin/bash
``` bash
[sogrey@bogon 文档]$ chsh -s /bin/bash
Changing shell for rocrocket.
Password:
Shell changed.
```