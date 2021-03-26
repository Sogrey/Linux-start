# finger - 用于查找并显示用户信息
finger命令 用于查找并显示用户信息。包括本地与远端主机的用户皆可，帐号名称没有大小写的差别。单独执行finger指令，它会显示本地主机现在所有的用户的登陆信息，包括帐号名称，真实姓名，登入终端机，闲置时间，登入时间以及地址和电话。

finger指令用来查找、显示指定用户的信息。查询远程主机信息是，可以用user@localhost来指定用户。

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
finger  [-lmsp]  user
```

## 选项

``` bash
-s                   # 显示用户的用户名、真实姓名、登录终端、闲置时间、登录时间、地址、电话
-l                   # 显示用户的用户名、真实姓名、用户家目录、登录后的shell、登录时间、电子邮件、计划文件
-p                   # 和-l一样，但是不显示“.plan“、“.project”、“.pgpkey”文件
-m                   # 不查找用户真实姓名
```
## 举例
查看用户root信息：
``` bash
[sogrey@bogon 文档]$ finger -l root
Login: root                   Name: root
Directory: /root                      Shell: /bin/bash
On since 五 9月  7 21:02 (CST) on tty1 from :0
    14 days 20 hours idle
On since 六 9月 22 07:36 (CST) on pts/0 from :0.0
   9 hours 5 minutes idle
On since 四 9月 13 08:55 (CST) on pts/1 from :0.0
New mail received 六 9月 22 18:00 2018 (CST)
     Unread since 二 8月 21 09:22 2018 (CST)
No Plan.
```

