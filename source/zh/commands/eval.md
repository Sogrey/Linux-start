# eval - eval会调用shell，将参数作为指令来自行

这个指令经常在shell脚本文件中用到。args被读取并连接到一个命令中。然后，shell读取并执行此命令，并将其退出状态作为val的值返回。如果没有args，或者只有空参数，val将返回0。

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
eval  [arg ...]
```

## 选项
无
## 举例

执行指令
``` bash
[root@localhost ~]$ cat wj.txt     #直接执行
1   zhangsan
2   lisi
3   wangwu
4   zhangliu
[root@localhost ~]$ eval cat wj.txt    #通过eval执行，结果一样
1   zhangsan
2   lisi
3   wangwu
4   zhangliu
```

