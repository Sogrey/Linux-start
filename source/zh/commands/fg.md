# fg - 将后台作业移动到前台终端运行
fg指令用来将挂载的任务在前台运行。
## 主要用途
- 用于将后台作业（在后台运行的或者在后台挂起的作业）放到前台终端运行。
- 若后台任务中只有一个，则使用该命令时可以省略任务号。

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
fg  [jobs]
```

## 选项
无
## 举例
切换前台
``` bash
[root@localhost ~]$ jobs     #查看工作
[1]-  Stopped                 wc
[2]+  Stopped                 find / -name passwd
[root@localhost ~]$ fg 2     #将2号工作切换到前台
find / -name passwd
/etc/passwd
/etc/squid/passwd
/etc/pam.d/passwd
[root@localhost ~]$
```



