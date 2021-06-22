# shutdown - 用来执行系统关机的命令

shutdown命令 用来系统关机命令。shutdown指令可以关闭所有程序，并依用户的需要，进行重新开机或关机的动作。

shutdown指令以安全的方式来关闭系统，所有已经登录的用户都会被告知系统将要关闭。并且在最后五分钟内，新的登录将被阻止。过了指定的time后，关机会向init(8)守护进程发送一个请求，以便将系统降至适当的运行级别。这是通过发出runlevel(7)事件来执行的，该事件包括RUNLEVEL环境变量中的新运行级以及PREVLEVEL变量中的前一个运行级(从环境或/var/run/utmp获得)。可以设置一个额外的INIT_HART变量，它将包含使用halt指令关机的HAL值，或者使用power off指令关机的POWEROFF值。
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
shutdown  [选项]  [时间]  [警告信息]
```

## 选项

``` bash
-c                       # 取消正在执行的关机，这个选项没有时间参数
-h                       # 关闭计算机，等于halt或者power off
-P                       # 等价power off
-H                       # 等价halt
-k                       # 只是发出警告信息，注销登录，并没有 关机
-r                       # 重启，等于reboot
时间                     # now代表立刻关机； +m代表m分钟后关闭； 23：00代表在晚上11点关机
```
## 说明
如果设置为首选从/var/run/utmp读取RUNLEVEL，关机将从此环境变量读取当前运行级。“/var/run/utmp”文件，读取当前运行级的位置，该文件还将使用新的运行级别进行更新。“/var/log/wtmp”文件，新运行级记录将追加到此文件中。Upstart init(8)守护进程不跟踪运行级别本身，而是完全由其用户空间工具实现。

## 举例
5分钟后关闭机器，并发出警告“I am downing”
``` bash
[sogrey@bogon /]$ shutdown -h +5 I am downing   # 当前操作有root用户发出，5分钟后关机，并且有提示信息
Broadcast message from root@192.168.0.113
    (/dev/pts/1) at 10:40 ...
The system is going down for halt in 5 minutes!  # 5分钟
I am downing                                     # 自定义的提示信息
```
取消关机
``` bash
[sogrey@bogon /]$ shutdown –c               # 需要打开另一个终端，输入取消命令
[sogrey@bogon /]$ shutdown -h +5 I am downing # 在之前的关机命令窗口，最后可以看到取消的信息
…
The system is going down for halt in 4 minutes!
I am downing
shutdown: Shutdown cancelled       
[sogrey@bogon /]$
```
