# w - 显示目前登入系统的用户信息

w命令 用于显示已经登陆系统的用户列表，并显示用户正在执行的指令。执行这个命令可得知目前登入系统的用户有那些人，以及他们正在执行的程序。单独执行w命令会显示所有的用户，您也可指定用户名称，仅显示某位用户的相关信息。

显示哪些用户登录，并且显示用户在干什么。报头按此顺序显示当前时间、系统运行时间、当前登录用户数以及过去1、5和15分钟的系统平均负载。接着为每个用户显示以下条目：登录名、TTY名称、远程主机、登录时间、空闲时间、JCPU、PCPU和当前进程的命令行。JCPU时间是附加到TTY的所有进程使用的时间。它不包括过去的后台作业，但也包括当前正在运行的后台作业。PCPU时间是当前进程使用的时间，在“what”字段中命名。

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
w  [OPTION]  [user]
```

## 选项

``` bash
-h, --no-header        # 不显示标题栏
-u, --no-current       # 忽略执行程序的名称和cpu时间
-s, --short            # 使用短格式，不显示登录时间、JCPU 和PCPU time
-f, --from             # 显示用户从哪里登录
-o, --old-style        # 老式输出
-i, --ip-addr          # 显示IP地址而不是主机名（如果可能）

    --help             # 显示此帮助并退出
-V, --version          # 显示版本信息。
```
## 相关文件
- /var/run/utmp，正在登陆的用户信息。
- /proc  process information，进程信息。
## 举例
显示登录的用户信息
``` bash
[sogrey@bogon ~]$ w
 23:19:05 up 2 min,  2 users,  load average: 2.21, 1.16, 0.46
USER     TTY        LOGIN@   IDLE   JCPU   PCPU WHAT
sogrey   :0        23:17   ?xdm?  30.90s  0.22s /usr/libexec/gnome-session-bina
sogrey   pts/0     23:19    1.00s  0.06s  0.02s w
[sogrey@bogon ~]$ 
```
