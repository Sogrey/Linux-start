# lpc - 命令行方式打印机控制程序

lpc命令 式命令行方式打印机控制程序，有5个内置命令。

lpc指令用来控制打印机，它提供了一个命令行，用户可以输出命令来控制打印机。如果命令行上没有指定命令，lpc将从标准输入中显示提示符并接受命令。

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
lpc  [ command  [ parameter(s) ] ]
```

## 选项

``` bash
exit, quit    # 退出打印机命令行
?, help       # 显示帮助
status        # 显示打印机状态
```
## 举例
进入lpc命令行
``` bash

[root@localhost /]$ lpc        #进入命令行
lpc&gt; help                   #显示帮助
命令可能是缩写。命令是：
exit    help    quit    status  ?
lpc&gt; ?                       #显示帮助
命令可能是缩写。命令是：
exit    help    quit    status  ?
lpc&gt; status                  #显示打印机状态
printer01:
    打印机在设备 &apos;ipp&apos; 上，速度 -1
    队列已停用
    打印已启用
    1 个条目
    监控程序已存在
lpc&gt; exit                   #退出
You have new mail in /var/spool/mail/root
[root@localhost /]$
```

