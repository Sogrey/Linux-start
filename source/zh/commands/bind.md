# bind - 显示或设置键盘按键与其相关的功能

dirs命令用于显示当前shell堆栈记录的目录。使用pushd可以向堆栈中增加记录，popd可以删除记录

## 主要用途
- 显示目录堆栈。
- 清空目录堆栈。

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
dirs  [+n]  [-n]  [-cplv]
```

## 选项

``` bash
+n      # 显示从左起的第n个目录，从0开始计数
-n      # 显示从右起的第n个目录，从0开始计数
-c      # 删除所有记录
-l      # 以完整的格式显示
-p      # 以每行一个记录的方式显示
-v      # 以每行一个记录的方式显示，并加上序号
```
## 举例

显示当前所有记录
``` bash
[root@localhost ~]$ dirs -l –v         #显示所有记录，每行一个，并且加序号
 0  /root
[root@localhost ~]$
```
增加记录并显示
``` bash
[root@localhost ~]$ pushd /doc       #增加记录
/doc ~
[root@localhost ~]$ dirs -l –v       #查看记录，已经成功添加
 0  /doc
 1  /root
[root@localhost ~]$
```

## 注意
- `bash`的目录堆栈命令包括`dirs popd pushd`。
- 当前目录始终是目录堆栈的顶部。
- 该命令是`bash`内建命令，相关的帮助信息请查看`help`命令。