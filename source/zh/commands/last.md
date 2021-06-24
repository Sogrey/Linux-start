# last - 列出目前与过去登入系统的用户相关信息
last命令 用于显示用户最近登录信息。单独执行last命令，它会读取/var/log/wtmp的文件，并把该给文件的内容记录的登入系统的用户名单全部显示出来。

显示以前登录过的用户信息，last指令会搜索/var/log/wtmp文件（或者是经过-f选项指定的文件），然后列出文件中所有的用户信息。如果执行last指令时提示“last /var/log/wtmp∶ NO such file or directory”,则需要使用指令touch /var/log/wtmp手工创建此文件

lastb指令用来显示登录失败的用户信息，其用法和last一样，对应的日志文件是/var/log/btmp

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
last  [-R]  [-num]  [ -n num ]  [-adFiowx]  [ -f file ]  [ -t YYYYMMDDHHMMSS ]  [name...]  [tty...]
lastb  [-R]  [-num]  [ -n num ] [ -f file ]  [-adFiowx]  [name...]  [tty...]
```

## 选项

``` bash
-f 文件名               # 指定登录的日志文件（默认是/var/log/wtmp）
-num                   # 指定last显示多少行信息
-n num                 # 和“-num”一样
-R                     # 不显示主机名字
-a                     # 在最后一列显示主机名
-d                     # 将非本地登录的用户ip转换成主机名
-F                     # 显示所有的登录和注销时间和日期
-o                     # 读取旧的日志文件
-w                     # 显示用户名和域名
-x                     # 显示系统关机信息和运行级别的变化信息
-t [YYYYMMDDHHMMSS]    # 显示指定时间的登录信息
[name]                 # 显示指定用户的登录信息
[tty]                  # 显示指定终端的登录信息，last tty1 = last 1
```
## 举例

显示最近登录的5条信息
``` bash
[sogrey@bogon ~]$ last -5
sogrey   pts/0        :0               Thu Jun 24 23:32   still logged in   
sogrey   :0           :0               Thu Jun 24 23:30   still logged in   
reboot   system boot  3.10.0-862.14.1. Thu Jun 24 23:29 - 23:33  (00:04)    
sogrey   pts/0        :0               Wed Jun 23 23:18 - 23:35  (00:16)    
sogrey   :0           :0               Wed Jun 23 23:12 - crash (1+00:16)   

wtmp begins Thu Dec 17 01:55:51 2020
[sogrey@bogon ~]$ 
```
显示用户weijie和root在8月9号的登录信息
``` bash
[sogrey@bogon ~]$ last -t 2021062500000 sogrey
sogrey   pts/0        :0               Thu Jun 24 23:32   still logged in   
sogrey   :0           :0               Thu Jun 24 23:30   still logged in   
sogrey   pts/0        :0               Wed Jun 23 23:18 - 23:35  (00:16)    
sogrey   :0           :0               Wed Jun 23 23:12 - crash (1+00:16)   
sogrey   pts/1        :0               Fri Jun 18 00:26 - 00:32  (00:05)    
sogrey   pts/0        :0               Fri Jun 18 00:21 - 00:31  (00:09)    
sogrey   :0           :0               Fri Jun 18 00:18 - crash (5+22:53)   
sogrey   pts/0        :0               Wed Jun 16 22:55 - 23:10  (00:14)    
sogrey   pts/0        :0               Wed Jun 16 22:48 - 22:54  (00:05) 
...    

wtmp begins Thu Dec 17 01:55:51 2020
[sogrey@bogon ~]$
```
显示终端tty1的登录信息
``` bash
[sogrey@bogon ~]$ last 1 # 等同于last tty1

wtmp begins Thu Dec 17 01:55:51 2020
[sogrey@bogon ~]$ last tty1

wtmp begins Thu Dec 17 01:55:51 2020
[sogrey@bogon ~]$ 
```