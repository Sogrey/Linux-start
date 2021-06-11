# watch - 可以将命令的输出结果输出到标准输出设备，多用于周期性执行命令/定时执行命令

watch命令 以周期性的方式执行给定的指令，指令输出以全屏方式显示。watch是一个非常实用的命令，基本所有的Linux发行版都带有这个小工具，如同名字一样，watch可以帮你监测一个命令的运行结果，省得你一遍遍的手动运行。

watch指令可以间歇性的执行程序，将输出结果以全屏的方式显示，默认是2s执行一次。watch将一直运行，直到被中断。

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
watch  [-dhvt]  [-n <seconds>]  [--differences[=cumulative]]
       [--help]  [--interval=<seconds>]  [--no-title]
       [--version]  <command>
```

## 选项

``` bash
-d, --differences                # 高亮显示差异部分
--cumulative                     # 高亮显示“sticky”
-n                               # 指定时间间隔
-t, --no-title                   # 不显示日期时间以及间隔秒数 

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 举例
``` bash
watch -n 1 -d netstat -ant       # 命令：每隔一秒高亮显示网络链接数的变化情况
watch -n 1 -d 'pstree|grep http' # 每隔一秒高亮显示http链接数的变化情况。 后面接的命令若带有管道符，需要加''将命令区域归整。
watch 'netstat -an | grep:21 | \ grep<模拟攻击客户机的IP>| wc -l' # 实时查看模拟攻击客户机建立起来的连接数
watch -d 'ls -l|grep scf'       # 监测当前目录中 scf' 的文件的变化
watch -n 10 'cat /proc/loadavg' # 10秒一次输出系统的平均负载
watch uptime
watch -t uptime
watch -d -n 1 netstat -ntlp
watch -d 'ls -l | fgrep goface'     # 监测goface的文件
watch -t -differences=cumulative uptime
watch -n 60 from            # 监控mail
watch -n 1 "df -i;df"       # 监测磁盘inode和block数目变化情况


#查看邮件
watch -n 60 from

#查看目录内容的变化
watch -d ls –l

#如果您只对用户Joe拥有的文件感兴趣，可以使用
watch -d ’ls -l | fgrep joe’

#要想看到引号的效果，请试一试
watch echo $$
watch echo ’$$’
watch echo "’"’$$’"’"

#您可以监视管理员安装最新的内核。
watch uname -r
```
每3s执行一次ls指令
``` bash
[root@localhost ~]$ watch –n 3 ls #每3s执行一次ls
Every 3.0s: ls                           Sun Sep 23 09:04:40 2018

1
1.c~
anaconda-ks.cfg
icmp_echo_ignore_all~
icmp_echo_ignore_alv~
icmp_echo_ignore_alw~
icmp_echo_ignore_alx~
icmp_echo_ignore_aly~
icmp_echo_ignore_alz~
install.log
install.log.syslog
mail
nohup.out
公共的
模板
视频
图片
文档
下载
音乐
桌面
```
