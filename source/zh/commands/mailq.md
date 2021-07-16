# mailq - 显示出待发送的邮件队列

mailq指令可以显示出待发送的邮件队列。

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
mailq
```

## 选项

无
## 举例
显示邮件队列
``` bash
[root@localhost ~]$ sendmail -f weijie wj78080458@163.com  #发送邮件
123
.
You have new mail in /var/spool/mail/root
[root@localhost ~]$ mailq                  #显示邮件队列
-Queue ID- --Size-- ----Arrival Time---- -Sender/Recipient-------
CFF2E14321A*     284 Fri Oct  5 21:55:21  weijie@david.cn
                                         wj78080458@163.com 

-- 0 Kbytes in 1 Request. 
```



