# lpstat - 显示CUPS中打印机的状态信息

lpstat命令 用于显示CUPS中打印机的状态信息。

lpstat指令用来显示当前任务、打印机的状态。如果没有参数，那么就显示打印队列。

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
lpstat  [OPTION]
```

## 选项

``` bash
-E                     # 使用加密模式
-H                     # 显示远程打印机的名字和端口
-R                     # 显示任务的顺序
-U                     # 设置别名
-W                     # 设置要显示哪个任务
-a                     # 显示允许打印的打印机队列
-c                     # 显示打印机类
-d                     # 显示默认打印机
-h server[:port]       # 指定备用服务器
-l                     # 显示打印机、类或作业的长列表。
-o                     # 显示指定打印机的队列
-p                     # 显示指定打印机，无论打印机是否激活
-r                     # 显示CUPS是否在运行
-s                     # 显示状态总和
-t                     # 显示所有的状态。等价于"-r", "-d", "-c","-v", "-a", "-p","-o"一起使用
-u [user(s)]           # 显示由指定用户排队的打印作业列表。如果未指定用户，则列出当前用户排队的作业。
-v [printer(s)]        # 显示打印机及其连接的设备。如果没有指定打印机，则列出所有打印机。
```
## 举例
查看CUPS是否运行
``` bash
[root@localhost /]$ lpstat -r
调度程序正在运行
You have new mail in /var/spool/mail/root
[root@localhost /]$  
```

