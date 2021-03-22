# usermod - 用于修改用户的基本信息
usermod命令 用于修改用户的基本信息。usermod 命令不允许你改变正在线上的使用者帐号名称。当 usermod 命令用来改变user id，必须确认这名user没在电脑上执行任何程序。你需手动更改使用者的 crontab 档。也需手动更改使用者的 at 工作档。采用 NIS server 须在server上更动相关的NIS设定。

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
pwd  [OPTION]
```

## 选项

``` bash
-c comment                          # 修改备注信息
-d home_dir                         # 修改账户每次登陆使用的目录
-e expire_date                      # 修改账号终止日期，MM/DD/YY
-f inactive_days                    # 账号过期后多久停用
-g initial_group                    # 修改账户的组，这个组必须存在
-G group,[...]                      # 修改用户的附加组
-l login_name                       # 变更使用者login时的名称为login_name，其余不变。特别是，使用者目录名应该也会跟着更动成新的登入名。
-s shell                            # 修改账户登录后使用的shell
-u uid                              # 修改用户ID

--help                           # 显示帮助文档
--version                        # 显示命令版本信息
```
## 相关文件
- `/etc/passwd`使用者帐号资讯。
- `/etc/shadow`使用者帐号资讯加密。
- `/etc/group`群组资讯。

## 举例

将 newuser2 添加到组 staff 中：
``` bash
usermod -G staff newuser2
```
修改newuser的用户名为newuser1：
``` bash
usermod -l newuser1 newuser
```
锁定账号newuser1：
``` bash
usermod -L newuser1
```
解除对newuser1的锁定：
``` bash
usermod -U newuser1
```
增加用户到用户组中:
``` bash
apk add shadow # 安装 shadow 包, usermod 命令包含在 usermod 中
usermod -aG group user # 添加用户到用户组中
```
-a 参数表示附加，只和 -G 参数一同使用，表示将用户增加到组中。


修改用户uid:
``` bash
[sogrey@bogon ~]$ tail -n 2 /etc/passwd       #查看用户信息
webalizer:x:67:67:Webalizer:/var/www/usage:/sbin/nologin
user01:x:502:502::/home/user01:/bin/bash
[sogrey@bogon ~]$ usermod -u 503 user01       #修改uid为503
[sogrey@bogon ~]$ tail -n 2 /etc/passwd       #查看用户信息，uid已经改变
webalizer:x:67:67:Webalizer:/var/www/usage:/sbin/nologin
user01:x:503:502::/home/user01:/bin/bash
```
修改备注信息
``` bash
[sogrey@bogon ~]$ usermod -c "user01 test" user01   #修改备注信息为“user01 test”
[sogrey@bogon ~]$ tail -n 2 /etc/passwd   #查看用户信息
webalizer:x:67:67:Webalizer:/var/www/usage:/sbin/nologin
user01:x:503:502:user01 test:/home/user01:/bin/bash
```
修改用户家目录
``` bash
[sogrey@bogon ~]$ useradd sogrey
[sogrey@bogon ~]$ ls /home
sogrey
[sogrey@bogon ~]$ usermod -md /data/new_home sogrey
[sogrey@bogon ~]$ ls /home/
[sogrey@bogon ~]$ ls /data/
new_home
```
