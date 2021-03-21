# useradd - 创建的新的系统用户

useradd命令 用于Linux中创建的新的系统用户。useradd可用来建立用户帐号。帐号建好之后，再用passwd设定帐号的密码．而可用userdel删除帐号。使用useradd指令所建立的帐号，实际上是保存在/etc/passwd文本文件中。

在Slackware中，adduser指令是个script程序，利用交谈的方式取得输入的用户帐号资料，然后再交由真正建立帐号的useradd命令建立新用户，如此可方便管理员建立用户帐号。在Red Hat Linux中， adduser命令 则是useradd命令的符号连接，两者实际上是同一个指令。

创建新的系统用户，useradd指令只能以管理员的身份运行，创建的用户都在“/etc/passwd”文件中。当不加-D参数,useradd指令使用命令列来指定新帐号的设定值and使用系统上的预设值.新使用者帐号将产生一些系统档案，使用者目录建立，拷备起始档案等，这些均可以利用命令列选项指定。此版本为RedHat Linux提供，可帮每个新加入的使用者建立个别的group,毋须添加-n选项。

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
useradd  [-D]  [选项]  [参数]

useradd  [-c comment]  [-d home_dir]  [-e expire_date]  [-f inactive_time]  [-g initial_group]  [-G group[,...]]  [-m [-k skeleton_dir] | -M]  [-s shell]  [-u uid [ -o]]  [-n]  [-r]  login

useradd  -D  [-g default_group]  [-b default_home]  [-f default_inactive]  [-e default_expire_date]  [-s default_shell]
```

## 选项

``` bash
--help                           # 显示帮助文档
--version                        # 显示命令版本信息

# 使用-D选项

-b dir

指定用户的基目录，默认是home

-e date

使用者账号有效日期

-f days

指定密码过期后多少天关闭账号

-g group

指定账户的组，这个组必须存在

-s shell

指定账户使用的shell

# 不使用-D选项

 

-c comment

备注信息

-d home

账户每次登陆使用的目录

-e date

账号终止日期，MM/DD/YY

-f days

账号过期后多久停用

-g group

指定账户的组，这个组必须存在

-G group

指定用户的附加组

-m

使用者目录如果不存在，自动创建

-n

取消自动创建于账号同名的组

-p password

设置账户的密码

-r

创建系统账号

-s

指定账户登录后使用的shell

-u uid

指定用户ID
```
## 相关文件
- `/etc/passwd`使用者帐号资讯。
- `/etc/shadow`使用者帐号资讯加密。
- `/etc/group`群组资讯。
- `/etc/default/useradd`定义资讯。
- `/etc/login.defs`系统广义设定。
- `/etc/skel`内含定义档的目录。
## 举例
新建用户加入组：
``` bash
useradd –g sales jack –G company,employees    //-g：加入主要组、-G：加入次要组
```
建立一个新用户账户，并设置ID：
``` bash
useradd caojh -u 544
```
需要说明的是，设定ID值时尽量要大于500，以免冲突。因为Linux安装后会建立一些特殊用户，一般0到499之间的值留给bin、mail这样的系统账号。



创建用户
``` bash
[sogrey@bogon ~]$ sudo useradd -p 123456 userTmp #创建用户userTmp，密码123456
[sudo] sogrey 的密码：
[sogrey@bogon ~]$ tail -n 2 /etc/passwd #查看是否创建成功
vboxadd:x:989:1::/var/run/vboxadd:/bin/false
userTmp:x:1001:1001::/home/userTmp:/bin/bash
[sogrey@bogon ~]$ ls /home/ #查看在home下创建家目录
lost+found  sogrey  userTmp
[sogrey@bogon ~]$ 
```
设定用户的家目录、uid、备注
``` bash
[sogrey@bogon ~]$ sudo useradd -d /home/other -u 600 -c "test user" user02 #创建用户
[sogrey@bogon ~]$ tail -n 2 /etc/passwd #查看用户信息
userTmp:x:1001:1001::/home/userTmp:/bin/bash
user02:x:600:1002:test user:/home/other:/bin/bash
[sogrey@bogon ~]$ ls /home/ #家目录other
lost+found  other  sogrey  userTmp
[sogrey@bogon ~]$ 
```