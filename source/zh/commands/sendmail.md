# sendmail - 一个发送邮件的代理程序

sendmail是postfix中的一个发送邮件的代理程序，它负责发送邮件到远程服务器，并且可以接收邮件。sendmail在发送邮件的时候，默认从标砖输入读取内容，以“.”为结束。

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
sendmail  [option ...]  [recipient ...]
```

## 选项

``` bash
-bd         # 进入deamon模式
-bi         # 初始化别名数据库
-bm         # 从标准输入读取邮件
-bp         # 列出邮件列表
-bs         # 独立的smtp模式，从标准输入读取，输出到标准输出
-C          # main.cf的位置
-F          # 指定发送者的全名
-f          # 指定发送者
-i          # 忽略只有单独点的行
-q          # 以给定的时间间隔处理队列中的邮件
```
## 举例
给某人发送邮件
``` bash

[root@localhost ~]$ sendmail david      #发送邮件给david，默认的发送者是root
123.
.
[root@localhost ~]$ tail /var/spool/mail/david  #查看david邮箱，收到邮件
Delivered-To: david@david.cn
Received: by mailsrv.david.cn (Postfix, from userid 0)
                 id 5B3A7143211; Fri,  5 Oct 2018 21:33:34 +0800 (CST)
Message-Id: <20181005133334.5B3A7143211@mailsrv.david.cn>
Date: Fri,  5 Oct 2018 21:33:29 +0800 (CST)
From: root@david.cn (wejie)
To: undisclosed-recipients:; 

123.
```
指定发送者
``` bash
[root@localhost ~]$ sendmail -f weijie david     #weijie发送邮件给david
hehe
.
You have new mail in /var/spool/mail/root
[root@localhost ~]$ tail /var/spool/mail/david     #查看david邮箱，发送者是魏杰 

Delivered-To: david@david.cn
Received: by mailsrv.david.cn (Postfix, from userid 0)
                 id 3544314308F; Fri,  5 Oct 2018 21:37:11 +0800 (CST)
Message-Id: <20181005133711.3544314308F@mailsrv.david.cn>
Date: Fri,  5 Oct 2018 21:37:07 +0800 (CST)
From: weijie@david.cn (wejie)
To: undisclosed-recipients:; 

hehe
```
查看表中有哪些字段
``` bash

[root@localhost ~]$ mysqlshow -u root -p test wj     #显示数据库test中的表wj的信息
Enter password:
Database: test  Table: wj
+-------+---------+-------------------+------+-----+---------+-------+---------------------------------+---------+
| Field | Type    | Collation         | Null | Key | Default | Extra | Privileges                      | Comment |
+-------+---------+-------------------+------+-----+---------+-------+---------------------------------+---------+
| id    | int(11) |                   | NO   |     |         |       | select,insert,update,references |         |
| name  | text    | latin1_swedish_ci | NO   |     |         |       | select,insert,update,references |         |
+-------+---------+-------------------+------+-----+---------+-------+---------------------------------+---------+
```

