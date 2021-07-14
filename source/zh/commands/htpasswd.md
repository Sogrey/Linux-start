# htpasswd - apache服务器创建密码认证文件

htpasswd命令 是Apache的Web服务器内置工具，用于创建和更新储存用户名、域和用户基本认证的密码文件。

htpasswd指令用来创建和更新用于基本认证的用户认证密码文件。htpasswd指令必须对密码文件有读写权限，否则会返回错误码。

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
htpasswd  [ -c ]  [ -m ]  [ -D ]  passwdfile username
htpasswd  -b  [ -c ]  [ -m | -d | -p | -s ] [ -D ]  passwdfile  username  password
htpasswd  -n  [ -m | -d | -s | -p ]  username
htpasswd  -nb  [ -m | -d | -s | -p ]  username  password
```

## 选项

``` bash
-b    # 使用批处理方式，直接从命令行获取密码，不提示用户输入
-c    # 创建密码文件，如果文件存在，那么内容被清空重写
-n    # 将结果送到标准输出
-m    # 使用MD5加密
-s    # 使用crypt()加密
-p    # 使用文本密码
-D    # 从认证文件中删除用户记录
```
## 举例

创建基本认证文件
``` bash
[root@localhost ~]$ htpasswd -cm htpfile1 sogrey     #创建认证文件，使用md5加密
New password:
Re-type new password:
Adding password for user sogrey
You have new mail in /var/spool/mail/root
[root@localhost ~]$ cat htpfile1                #显示认证文件
sogrey:$apr1$/RxQ5LT9$L1WJPkxknMizG5DwGVGv4.
```
创建基本认证文件，使用文本密码
``` bash
[root@localhost ~]$ htpasswd -cp htpfile2 sogrey   #创建认证文件，使用文本密码
Warning: storing passwords as plain text might just not work on this platform.
New password:
Re-type new password:
Adding password for user sogrey
[root@localhost ~]$ cat htpfile2                           //查看认证文件，可以看到密码
sogrey:123456
```