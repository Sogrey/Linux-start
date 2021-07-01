# reject - 指示打印系统拒绝发往指定目标打印机的打印任务

reject命令 属于CUPS套件，用于指示打印系统拒绝发往指定目标打印机的打印任务。

reject指令用来设置拒绝向目标打印机发送打印任务。
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
reject  [ -E ]  [ -U username ]  [ -h hostname[:port] ]  [ -r reason ]  destination(s)
```

## 选项

``` bash
-E    # 强制加密
-U    # 连接打印机的时候，发送用户名
-h    # 选择目标打印机ip和端口
-r    # 设置拒绝的原因
```
## 举例
拒绝向目标打印机发送打印任务
``` bash
[root@localhost /]$ reject printer01          #拒绝发送打印请求
You have new mail in /var/spool/mail/root
[root@localhost /]$ lpr /weijie/5.c           #打印文件，可以看到结果失败了
lpr: Destination "printer01" is not accepting jobs.
```

