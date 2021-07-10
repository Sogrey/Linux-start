# hash - 用来显示和清除指定运行时系统查询的hash表


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
hash  [-lr]  [-p filename]  [-dt]  [name]
```

## 选项

``` bash
-p    #将具有完整路径的指令加入到hash表
-r    #清除所有的hash表
-d    #在hash表中删除某记录
-t    #显示hash表中的完整记录
-l    #显示hash表中的指令
```
## 举例

显示hash表中的命令
``` bash
[root@localhost ~]$ hash –l        #列出hash表中的命令
builtin hash -p /bin/grep grep
```
增加命令
``` bash
[root@localhost ~]$ hash -p /usr/bin/tail tail   #将完整路径的命令加入
[root@localhost ~]$ hash –l                      #列出hash表中命令，已经成功添加
builtin hash -p /bin/grep grep
builtin hash -p /usr/bin/tail tail
```
 



