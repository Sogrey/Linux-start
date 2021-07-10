# jobs - 显示作业的状态

## 主要用途
- 显示作业的状态。
- 列出活动的作业。
- 列出停止的作业。

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
jobs [-lnprs] [jobspec ...]
jobs -x command [args]
```

## 选项

``` bash
-l    # 在作业信息中额外的列出PID。
-n    # 只列出最近一次通知以来状态变更的作业。
-p    # 只列出PID。
-r    # 只输出处于运行状态的作业。
-s    # 只输出处于停止状态的作业。
```
## 返回值
返回状态为成功除非给出了非法选项、执行出现错误。

如果使用jobs -x command [args]形式执行，那么返回值为command的退出状态。
## 举例

``` bash
[user2@pc] ssh 192.168.1.4
pc@192.168.1.4's password:
# 此时按下ctrl+z使得交互停止。
[1]+  Stopped                 ssh 192.168.1.4

[user2@pc] sleep 60 &
[2] 13338

[user2@pc] jobs
[1]-  Stopped                 ssh 192.168.1.4
[2]   Running                 sleep 60 &

[user2@pc] jobs -l
[1]- 12927 Stopped                 ssh 192.168.1.4
[2]  13338 Running                 sleep 60 &

[user2@pc] jobs -p
12927
13338

[user2@pc] jobs -s
[1]-  Stopped                 ssh 192.168.1.4

[user2@pc] jobs -r
[2]   Running                 sleep 60 &

[user2@pc] kill -9 12927
[2]   Done                    sleep 60

[user2@pc] jobs -n -l
[1]+ 12927 Killed             ssh 192.168.1.4

[user2@pc] jobs -n -l
```



