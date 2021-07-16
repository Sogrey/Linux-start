# mail - 一个邮件的管理程序

mail是一个邮件的管理程序，可以用来发送或者接收邮件。

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
mail  [选项]  addr
```

## 选项

``` bash
-a file     # 将给定的文件发送出去
-b          # 指定邮件盲抄送地址
-c          # 指定抄送地址
-H          # 显示所有的邮件头并且推出
-i          # 忽略控制台的终端信号
-r          # 设置发送者地址
-s          # 指定邮件主题
-u          # 阅读指定用户的邮件列表
-v          # 显示详细信息
-V          # 显示版本信息，并退出
```
## 举例
阅读用户david邮件
``` bash
[root@localhost ~]$ mail -u david     #指定用户，首先得到邮件列表
Heirloom Mail version 12.4 7/29/08.  Type ? for help.
"/var/mail/david": 10 messages 3 new
    1 root                  Thu Aug 16 17:07  21/692   "test"
    2 root                  Thu Aug 16 17:08  20/631   "test"
    3 root                  Thu Aug 16 17:10  20/602   "test"
    4 root                  Fri Aug 17 08:15  20/570   "test3"
    5 root                  Fri Aug 17 09:46  25/668   "test04"
    6 root                  Tue Aug 21 09:14  20/609   "test04"
    7 root                  Tue Aug 21 09:15  20/666   "test05"
>N  8 wejie                 Fri Oct  5 21:32  13/403  
 N  9 wejie                 Fri Oct  5 21:33  13/400  
 N 10 wejie                 Fri Oct  5 21:37  13/406  

& 10           #此处输入邮件编号，可以得到具体邮件内容
Message 10:
From weijie@david.cn  Fri Oct  5 21:37:11 2018
Return-Path: <weijie@david.cn>
X-Original-To: david
Delivered-To: david@david.cn
Date: Fri,  5 Oct 2018 21:37:07 +0800 (CST)
From: weijie@david.cn (wejie)
To: undisclosed-recipients:;
Status: RO


hehe
```
发送邮件
``` bash
[root@localhost ~]$ mail -r david weijie        #发送邮件给weijie，发信人david
Subject: test
123
.
EOT
You have new mail in /var/spool/mail/root
[root@localhost ~]$ tail /var/spool/mail/weijie    #查看weijie邮箱，收到david邮件
To: weijie@david.cn
Subject: test
User-Agent: Heirloom mailx 12.4 7/29/08
MIME-Version: 1.0
Content-Type: text/plain; charset=us-ascii
Content-Transfer-Encoding: 7bit
Message-Id: <20181005141158.B5D4914321B@mailsrv.david.cn>
 
123
```


